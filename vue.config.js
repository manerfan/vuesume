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
                enable: false
            })
        ]
    },

    publicPath: '/'
};
