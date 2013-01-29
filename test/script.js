window.onload = function() {
    var root;

    // Simple initialization with minimum parameters
    baron($('.test_simple'), {
        scroller: '.scroller',
        container: '.container',
        bar: '.scroller__bar',
        barOnClass: 'scroller__bar_state_on'
    });


    // barTopLimit
    baron($('.test_bartop'), {
        scroller: '.scroller',
        container: '.container',
        bar: '.scroller__bar',
        barOnClass: 'scroller__bar_state_on',
        barTop: 36
    });

    // Flexible height
    baron($('.test_flex'), {
        scroller: '.scroller',
        container: '.container',
        bar: '.scroller__bar',
        barOnClass: 'scroller__bar_state_on',
        viewMinH: 100
    });

    // No js .test__no-js

    // Maximum variables
    baron($('.test_advanced'), {
        scroller: '.scroller',
        container: '.container',
        bar: '.scroller__bar',
        barOnClass: '.scroller__bar_state_on',
        barTop: 40,
        selector: qwery, // Selector engine
        event: function(elem, event, func, off) { // Events manager
            if (off) {
                bean.off(elem, event, func);
            } else {
                bean.on(elem, event, func);
            }
        },
        dom: bonzo // DOM utility
    });
};