const config = require('../config');

module.exports = function (response, template) {
    this.response = response;
    this.template = template;
};

module.exports.prototype = {
    extend: function (properties) {
        var Child = module.exports;
        Child.prototype = module.exports.prototype;
        for (var key in properties) {
            Child.prototype[key] = properties[key];
        }
        return Child;
    },
    render: async function (data) {
        if (this.response && this.template) {
            data.config = config;            
            this.response.render(this.template, data);
        }
    },
    checkLogin: function (session) {
        if ( typeof session.login != "undefined"){
            return session.login;
        } else{
            return false;
        }
    },
};
