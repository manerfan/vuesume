/**!
 * 上传webpack编译后的文件到阿里云OSS
 *
 * @author mfylee@163.com
 * @since 2017-08-23
 */

var fs = require('fs');
var path = require('path');
var url = require('url');

var OSS = require('ali-oss');

var u = require('underscore');

var ConfigFileLoader = require('config-file-loader');
/**
 * 读取全局配置
 * ~/.aliyun
 * @link https://github.com/reyesr/config-file-loader
 */
var aliyunConfig = new ConfigFileLoader.Loader().get('aliyun');

// 默认配置参数
var DEFAULT_OPTIONS = {
    retry: 3,
    filter: function (file) {
        return true;
    }
};
/**
 * @constructor
 */
function WebpackAliyunOssPlugin(options) {
    this.options = u.extend({}, DEFAULT_OPTIONS, options);

    var conf = aliyunConfig;

    this.client = new OSS({
        region: conf.region,
        accessKeyId: conf.ak,
        accessKeySecret: conf.sk,
        bucket: conf.bucket
    });
}

WebpackAliyunOssPlugin.prototype.apply = function (compiler) {
    var me = this;
    compiler.hooks.emit.tapAsync('WebpackAliyunOssPlugin', function (compilation, callback) {
        var publicPath = url.parse(aliyunConfig.publicPath);
        if (!publicPath.protocol || !publicPath.hostname) {
            return callback(new Error('Webpack配置文件中: "output.publicPath"必须设置为域名，例如： https://domain.com/path/'));
        }

        var files = u.filter(u.keys(compilation.assets), me.options.filter);

        if (files.length === 0) {
            return callback();
        }

        function upload(file, times) {
            var source = compilation.assets[file].source();
            var body = Buffer.isBuffer(source) ? source : new Buffer(source, 'utf8');
            return me.client.put(file, body, {
                timeout: 30 * 1000
            }).then(function () {
                console.log('[WebpackAliyunOssPlugin SUCCESS]：', file);
                var next = files.shift();
                if (next) {
                    return upload(next, me.options.retry);
                }
            }, function (e) {
                if (times === 0) {
                    throw new Error('[WebpackAliyunOssPlugin ERROR]: ', e);
                }
                else {
                    console.log('[WebpackAliyunOssPlugin retry]：', times, file);
                    return upload(file, --times);
                }
            });
        }
        upload(files.shift(), me.options.retry).then(function () {
            console.log('[WebpackAliyunOssPlugin FINISHED]', 'All Completed');
            callback();
        }).catch(function (e) {
            console.log('[WebpackAliyunOssPlugin FAILED]', e);
            return callback(e);
        });
    });
};

module.exports = WebpackAliyunOssPlugin;
