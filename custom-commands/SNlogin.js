exports.command = function (instance, username, password) {
    var url = 'https://' + instance + '.service-now.com/login.do';
    this.url(url);
    this.setValue('#user_name', username);
    this.setValue('#user_password', password);
    this.waitForElementPresent('#sysverb_login', 10000, false);
    this.click('#sysverb_login');
    this.waitForElementPresent('#gsft_main', 5000);
    return this;
};
