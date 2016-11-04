module.exports = {
    '@tags': ['login'],
    'Login to instance': function (browser) {
        browser.login('dev17279', 'abel.tuter', 'abel');
    },
    'Goto Record Producer': function (browser) {
        browser.snowurl('com.glideapp.servicecatalog_cat_item_view.do?v=1&sysparm_id=17c590e9047531006802a6e8a2359514');
    },
    'Set title"': function (browser) {
        browser.waitForElementVisible('#order_now', 5000);
        browser.executeAsync(function (obj, callback) {
            var ret;
            console.log('in async fx');
            console.log('typeof g_form: ' + typeof g_form);
            if (typeof window.g_form === "object") {
                window.g_form.setValue('title', 'What?!');
                ret = true;
            } else {
                ret = false;
            }
            callback(ret);
        }, [''], function (result) {
            browser.pause(5000);
            console.log('in result callback');
            browser.executeAsync(function (obj, callback) {

                browser.waitForElementVisible('#order_now', 5000);
                //window.g_form.setValue('title', 'What?!');
                var title = window.g_form.getValue('title').toString();
                //alert(title);
                callback(title);
            }, [''], function (response) {
                browser.assert.ok(response && response.value, 'Script finished successfully');
                browser.assert.equal(response.value, 'What?!');
            });
        });
    },
    'Ending': function (browser) {
        //browser.end();
    }
};