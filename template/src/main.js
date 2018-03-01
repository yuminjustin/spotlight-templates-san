require("babel-polyfill");
require('@/assets/css/reset.css');
require('@/assets/css/page.css');
var App = require('C/app');

var $el = document.getElementById('app');

var Main = san.defineComponent({
    template: '<div><app /></div>',
    components: {
        'app': App
    }
});

var body = new Main();
body.attach($el);


/* webpack 热替换 */
// if (module.hot) {
//     module.hot.accept();
// }
