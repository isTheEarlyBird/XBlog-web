module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? './': '/',
    
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    devServer: {
	
        open: false,
		port: 8080,
		https: false,

		proxy: {
			'api': {
				target: 'http://localhost:8081/',
				//ws: true,  //开启跨域
				changeOrigin: true,
				pathRewrite: {
					'^/api':''
				}
			}
		}
    }
}