/**!
 * 上传webpack编译后的文件到阿里云OSS
 *
 * @author mfylee@163.com
 * @since 2017-08-23
 */

const OSS = require('ali-oss');
const u = require('underscore');

const ConfigFileLoader = require('config-file-loader');
/**
 * 读取全局配置
 * ~/.aliyun
 * @link https://github.com/reyesr/config-file-loader
 */
const aliyunConfig = new ConfigFileLoader.Loader().get('aliyun');

// 默认配置参数
const DEFAULT_OPTIONS = {
    enable: false,
    retry: 3,
    filter: function (file) {
        return true;
    }
};

function WebpackAliyunOssPlugin(options) {
    this.options = u.extend({}, DEFAULT_OPTIONS, options);

    if (!this.options.enable) {
        return;
    }

    const conf = aliyunConfig;

    this.client = new OSS({
        region: conf.region,
        accessKeyId: conf.ak,
        accessKeySecret: conf.sk,
        bucket: conf.bucket
    });
}

/**
 * 定义插件的动作
 * @param compiler
 */
WebpackAliyunOssPlugin.prototype.apply = function (compiler) {
    const _this = this;
    if (!_this.options.enable) {
        console.log('[WebpackAliyunOssPlugin SUCCESS]: skip');
        return;
    }

    /**
     * 文件编译hook
     */
    compiler.hooks.emit.tapAsync('WebpackAliyunOssPlugin', function (compilation, callback) {
        // 需要上传的文件列表
        const files = u.filter(u.keys(compilation.assets), _this.options.filter);

        if (files.length === 0) {
            return callback();
        }

        /**
         * 上传文件
         * @param file 文件（路径）
         * @param times 重试次数
         * @returns {Promise<OSS.PutObjectResult>}
         */
        function upload(file, times) {
            // 构造上传文件的buffer
            const source = compilation.assets[file].source();
            const body = Buffer.isBuffer(source) ? source : Buffer.from(source, 'utf8');

            // 上传
            return _this.client.put(file, body, {
                timeout: 30 * 1000
            }).then(function () {
                console.log('[WebpackAliyunOssPlugin SUCCESS]：', file);
                const next = files.shift();
                if (next) {
                    // 递归
                    return upload(next, _this.options.retry);
                }
            }, function (e) {
                if (times === 0) {
                    // 失败
                    throw new Error('[WebpackAliyunOssPlugin ERROR]: ', e);
                } else {
                    // 失败重试
                    console.warn('[WebpackAliyunOssPlugin retry]：', times, file);
                    return upload(file, --times);
                }
            });
        }

        // 上传
        upload(files.shift(), _this.options.retry).then(function () {
            console.log('[WebpackAliyunOssPlugin FINISHED]', 'All Completed');
            callback();
        }).catch(function (e) {
            console.error('[WebpackAliyunOssPlugin FAILED]', e);
            return callback(e);
        });
    });
};

module.exports = WebpackAliyunOssPlugin;
