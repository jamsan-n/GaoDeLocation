var exec = require('cordova/exec');

var GaoDe = {
    getCurrentPosition:function (successFn,errorFn) {
		exec(successFn,errorFn,'GaoDeLocation','getCurrentPosition',[]);
	},
	startWatchPosition:function (successFn,errorFn) {
		exec(successFn,errorFn,'GaoDeLocation','startWatchPosition',[]);
	},
	stopWatchPosition:function (successFn,errorFn) {
		exec(successFn,errorFn,'GaoDeLocation','stopWatchPosition',[]);
	},
	config:function (successFn,errorFn, data){
		exec(successFn,errorFn,'GaoDeLocation','config',[data]);
	},
	call: function(func, data){
		if (typeof(data) == 'undefined')
			data = null;
		return new Promise((resolve, reject)=>{
			this[func](res => {
				resolve(res);
			}, err => {
				reject(err);
			}, data);
		});
	},
};

module.exports = GaoDe;
