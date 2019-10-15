/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - Clean Vue.js Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const webpack = require("webpack");

module.exports = {
// The configure Web pack is the place in Vue CLI 3.0 to configure the parameters of the webpack plug-in. If you set it here, it will create or override the default configuration of the webpack.
// The meaning of webpack ProvidePlugin is to create a global variable that can be used within each module of webpack. The configuration meaning here is to create three variables'$','jQuery','window. jQuery'pointing to jQuery dependency and'Popper' pointing to popper. JS dependency.
publicPath : process.env.NODE_ENV === 'production'
      ? '/VueadminTemplate/'
      : '/',
lintOnSave: false,
configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
              })
        ]
      },
}
