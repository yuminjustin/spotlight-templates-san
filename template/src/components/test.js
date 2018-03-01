module.exports = san.defineComponent({
    template: '<button on-click="clicks">Click</button>',
    clicks: function () {
        this.dispatch('isclick', "It's San");
    }
});
