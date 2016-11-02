const webpack = require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const path = require("path");

const vendors_dir = path.join(__dirname, "/vendors");

var config = {
    entry:{
        bundle:[
            "webpack-hot-middleware/client",
            "webpack/hot/only-dev-server",
            "react-hot-loader/patch",
            "lodash",
            path.join(__dirname,'src/index.tsx')
        ],
        vendors: [
            "whatwg-fetch", "jquery", "jquery-valiation", "bootstrap",
            "react", "react-dom", "react-router", "redux", "redux-redux", "redux-thunk",
            "toastr"
        ] 
    },
    module:{
        loaders:[
            {
                test:/\.(ts|tsx)$/,
                loaders:['react-hot-loader/webpack','awesome-typescript']
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ],
        preLoaders:[{
            test:/\.js$/,
            loaders:['source-map']
        }]
    },
    output:{
        filename:'[name].js',
        path: path.join(__dirname,'dist'),
        publicPath:'http://localhost:3000/',
        chunckFilename:'[name].chunck.js'
    },
    noParse: [
        /[\/\\]node_modules.*/,
    ],
    resolve:{
        alias:{},
        extensions:['','.ts','.tsx','.js','.jsx']
    },
    addVendor: function(name, path) {
        this.resolve.alias[name] = path;
        this.noParse.push(new RegExp(path));
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html')
            
        })
    ],
    devtool:'source-map'
};

module.exports = config;

config.addVendor("jquery", vendors_dir + "/jquery/dist/jquery.js");
config.addVendor("jquery-valiation", vendors_dir + "/jquery-validation/dist/jquery.validate.js");
config.addVendor("bootstrap", vendors_dir + "/bootstrap/dist/js/bootstrap.js");
config.addVendor("react", vendors_dir + "/react/dist/react.js");
config.addVendor("react-dom", vendors_dir + "/react-dom/dist/react-dom.js");
config.addVendor("react-router", vendors_dir + "/react-router/umd/ReactRouter.js");
config.addVendor("redux", vendors_dir + "/redux/dist/redux.js");
config.addVendor("redux-redux", vendors_dir + "/react-redux/dist/react-redux.js");
config.addVendor("redux-thunk", vendors_dir + "/redux-thunk/dist/redux-thunk.js");
config.addVendor("toastr", vendors_dir + "/toastr/build/toastr.min.js");
config.addVendor("whatwg-fetch", vendors_dir + "/whatwg-fetch/fetch.js");
config.addVendor("es6-promise", vendors_dir + "/es6-promise/dist/es6-promise.js");