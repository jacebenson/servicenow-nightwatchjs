exports.command = function (field,val) {
    function setit(_field, _val, callback){
        var ret = false;
        if (typeof window.g_form === "object") {
            console.log('setting ' + _field + ' to ' + _val);
            window.g_form.setValue(_field.replace(',',''), _val);
            ret = true;
        }
        callback(ret);
    }
  var fieldtowait = 'body';
    this.executeAsync(setit, [field ,val], function (result) {
        //this.pause(5000);
        this.executeAsync(function (obj, callback) {
            var title = window.g_form.getValue('title').toString();
            callback(title);
        }, [''], function (response) {
        });
    });
};