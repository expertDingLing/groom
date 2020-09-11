const _ = require('lodash');
const config = require('../../config')

const baseController = {
	name: "BaseController",

	extend: function (child) {
		return _.extend({}, this, child);
	},

	run: function (req, res, next) {
	},

	isLogin: function (req) {
		if( typeof req.session.login != "undefined"){
            return req.session.login;
        }else{
            return false;
        }
	},

	makeID: function (prefix = "", length = 10) {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return (prefix + text);
	},

	isEmail: function (email) {
		let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailRegex.test(email);
	},

	isURL: function (str) {
		let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return regexp.test(str);
	},

	checkSpecialStr: function (str) {
		let strFormat = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		return strFormat.test(str);
	},

	validatePassord: function (password) {
		/*
		/^
		(?=.*\d)          // should contain at least one digit
		(?=.*[a-z])       // should contain at least one lower case
		(?=.*[A-Z])       // should contain at least one upper case
		[a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
		$/
		*/
		return password.match(/^(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
	},

	getRandomColor: function () {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	},

	getTs: function () {
		return Math.round((new Date()).getTime() / 1000);
	},

	getCurDate: function () {
		let severDt = new Date();
		let localDt = new Date(severDt.getTime() + config.tz);
		return new Date(localDt.toDateString());
	},

	getClientIp: function (req, res) {
		let ip_address = req.connection.remoteAddress;
		if (req.headers['x-forwarded-for'] != undefined) {
			ip_address = req.headers['x-forwarded-for'] ||
				req.connection.remoteAddress ||
				req.socket.remoteAddress ||
				req.connection.socket.remoteAddress;
		}
		ip_address = ip_address.split(',')[0];
		if (ip_address.substr(0, 1) == ':') ip_address = ip_address.substr(7);
		return ip_address;
	},

};

module.exports = baseController;