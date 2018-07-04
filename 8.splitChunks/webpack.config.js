const webpack = require('webpack');
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js',
    common: './common/test.js'
  },
  output: {
    filename: '[name].js'
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'common',
  //     // filename: "vendor.js"
  //     // (Give the chunk a different name)

  //     minChunks: Infinity,
  //     // (with more entries, this ensures that no other module
  //     //  goes into the vendor chunk)
  //   })
  // ]
  // optimization: {
  //   splitChunks: {
  //       cacheGroups: {
  //         commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
  //           test: /common\/|components\//,
  //           name: 'page/commons',
  //           priority: 10,
  //           enforce: true
  //         }
  //       }
  //   }
  // },
};
/**
 * splitChunksPlugin
 * {
    "chunks": "all", all, async, initial 三选一, 插件作用的chunks范围 一一对应 所有chunks 所需要的chunks  还是初始的chunks
    "minSize": 0,表示在压缩前的最小模块大小，默认为0
    "misChunks": 1, 表示被引用次数，默认为1
    "maxAsyncRequests": 1,最大的按需(异步)加载次数，默认为
    "maxInitialRequests": 1, 最大的初始化加载次数，默认为1；
    "name": undefined, 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
    "automaticNameDelimiter": "~",如果不指定name，自动生成name的分隔符（‘runtime~[name]’）
    "filename": undefined,
    "cacheGroups": {} 字面意思缓存组，主要配置在这里
}
    cacheGroups配置项：
      "priority": "缓存优先级权重",
      "name": "split 出来的 chunk 的名字",
      "chunks": "应该用范围",
      "enforce": "未知",
      "minSize": "最小尺寸",
      "minChunks": "最小chunks",
      "maxAsyncRequests": "",
      "maxInitialRequests": "",
      "filename": "最后output的文件名",
      "reuseExistingChunk": "未知"
 */
