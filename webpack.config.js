const config = {
    mode: 'production',
    entry: {
        index: ['./app/js/index.js', './app/js/mia/mia.js', './app/js/disaer/main.js', './app/js/capadocia/capadocia.js', './app/js/pizza/drinks.js', './app/js/pizza/salats.js', './app/js/pizza/sushi.js', './app/js/pizza/global.js', './app/js/pizza/buildContentPizza.js']
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader,css-loader'],
            }
        ]


    }
}
module.exports = config