const path = require('path');
module.exports ={
    mode:"production",
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname,"public"),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}