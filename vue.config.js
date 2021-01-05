module.exports = {
    outputDir: 'static',    
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/sass/_variables.scss";`  //加载全局scss文件
            }
        }
    },
    productionSourceMap:false,
    runtimeCompiler: true, //开启运行时模版编译，否则不可使用动态模版
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:8085',
                // target: 'http://119.23.22.31:30962',
                // target: 'http://119.23.22.31:31588',
                autoRewrite: true,
                ws: false
            }
        },       
        port: 3000
    }
}