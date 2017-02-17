exports.command = function (typeOfRecord) {
    if(typeOfRecord == 'record producer'){
        this.click('#submit_button');
    }
    return this;
};