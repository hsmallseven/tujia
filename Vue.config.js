module.exports={
    devServer:{
        proxy:{
            '/tj':{
                "target":"https://m.tujia.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/tj":"/"
                }
            }
        }
    }
}