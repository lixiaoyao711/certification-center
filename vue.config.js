module.exports = {
  // baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      // 重定义路径
      alias: {
        components: '@/components',
        common: 'components/common',
        assets: '@/assets',
        network: '@/network',
        views: '@/views'
      }
    }
  },
  devServer: {
    open: true
  }
};
