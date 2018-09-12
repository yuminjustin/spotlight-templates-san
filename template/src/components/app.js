var Test = require('./test');

module.exports = san.defineComponent({
    template: '<div> \{{Hello name}}! <br/> <img src="./static/image/sp_black.png" /> <br/>'
        + '<test/></div>',
    initData: function () {
        return {
            name: 'San'
        };
    },
    components: {
        'test': Test
    },
    messages: {
        isclick: function (arg) {
            var value = arg.value
            this.data.set('name', value);
        }
    }
});
