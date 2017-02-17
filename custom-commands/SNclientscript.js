exports.command = function (command) {
    this.executeAsync(function (data, done) {
        eval('window.document.getElementById("gsft_main").contentWindow.' + command);
        console.log(command);
        done(true);
    }, [''], function (result) {
        console.log('in result callback, tried to run '+command);
    });
    return this;
};