const data = require('./data');

var tools = {

    debug: true,

    log: function () {
        if (this.debug) {
            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
        }
    },

    init: function (debug) {

        this.debug = (debug) ? debug : false;

        this.setup();

        this.events();

    },

    selectors: {
        podCont: document.querySelector('.conversion-pods'),
        pods: document.querySelectorAll('.conversion_pod'),
        dropdown: document.querySelectorAll('.conversion_dropdown')
    },

    options: {
        activePod: null,
        activeRate: null,
        otherPod: null,
        otherRate: null,
        otherSelectValue: null
    },

    setup: function () {

    },

    events: function () {

        const dropdown = this.selectors.dropdown;

        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener('change', this.onSelectChange.bind(this), false);
        }

    },

    onSelectChange: function(e) {

        //this.activePod = e.currentTarget.parentNode.getAttribute("data-id");

        //this.log(this.activePod);

        this.updateConversionRate(e);

    },

    updateConversionRate: function(e) {

        this.activePod = e.currentTarget.parentNode;
        this.activeRate = this.activePod.querySelector('.conversion_rate');
        this.otherPod = this.selectors.podCont.querySelector('.conversion_pod:not([data-id="' + this.activePod.dataset.id + '"])');
        this.otherRate = this.otherPod.querySelector('.conversion_rate');
        this.otherSelectValue = this.otherPod.querySelector('.conversion_dropdown').value;

        this.log(this.otherSelectValue);

        this.log(this.otherPod, this.otherRate);

        let activeRateString = '1 ' + e.target.value + ' = ' + '1 ' + this.otherSelectValue;

        let otherRateString = '1 ' + this.otherSelectValue + ' = ' + '1 ' + e.target.value;

        this.activeRate.innerHTML = activeRateString;
        this.otherRate.innerHTML = otherRateString;


        //const rate = document.querySelectorAll('.conversion_rate');



    }

}

window.tools = tools;

document.addEventListener('DOMContentLoaded', function () {

    tools.init(true);

});