module.exports = {
    entry: './javascript/app.js',
    output: {
        filename: './assets/javascript/app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
