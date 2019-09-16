const WebpackAliyunOssPlugin = require('./oss');

module.exports = {
    outputDir: 'docs',
    productionSourceMap: false,
    css: {
        sourceMap: true
    },
    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                publicPath: "http://vuesume.oss-cn-beijing.aliyuncs.com"
            })
        ]
    }
};
