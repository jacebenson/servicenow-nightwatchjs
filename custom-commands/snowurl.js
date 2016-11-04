exports.command = function (loc) {
    //takes a mandatory location
    //optional takes boolean, if true, loads in frame (navpage)
    //else loads directly
    this.url(function (result) {
        var newUrl = result.value.split('.service-now.com/')[0];
        if (arguments[1]) {
            newUrl += '.service-now.com/nav_to.do?uri=';
            newUrl += encodeURIComponent(loc);
        } else {
            newUrl += '.service-now.com/';
            newUrl += loc;
        }
        this.url(newUrl);
    });
    this.waitForElementPresent('body', 5000);
    return this;
};