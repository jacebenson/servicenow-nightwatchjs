module.exports = {
    '@tags': ['login'],
    'Login to instance': function (browser) {
        browser.SNlogin('dev68829', 'abel.tuter', 'abel');
    },
    'Goto Record Producer': function (browser) {
        browser.SNurl('com.glideapp.servicecatalog_cat_item_view.do?v=1&sysparm_id=6370e4a27f000001566a807122777e84');
    },
    'Set fields': function (browser) {
        browser.SNsetvalue('short_description,', 'Whasfdat!?');
        browser.SNsetvalue('description', 'great!!!');
    },
    'Submit': function (browser) {
        browser.SNsubmit('record producer');
    },
    'Ending': function (browser) {
        browser.end();
    }
};
