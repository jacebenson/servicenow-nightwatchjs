exports.command = function(instance, username, password) {
    var url = 'https://' + instance + '.service-now.com/login.do';
    this.url(url);
    this.waitForElementPresent('#user_name', 5000, false);
    this.setValue('#user_name', username);
    this.setValue('#user_password', password);
    this.click('#sysverb_login');
    this.waitForElementPresent('#gsft_main', 5000);
    return this;
};