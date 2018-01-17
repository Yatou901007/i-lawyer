'use strict'

const resultData = {
	head: {
	  errorCode: 'GRN00000',
	  errorMsg: '错误信息描述',
	  tranDate: new Date().getFullYear() + '' + ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '' + (new Date().getDate() < 10 ? ('0' + new Date().getDate()) : new Date().getDate()),
	  tranTime: new Date().getFullYear() + '' + ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '' + (new Date().getDate() < 10 ? ('0' + new Date().getDate()) : new Date().getDate())
	},
	body: null //返回数据，可以是任意结构
}

module.exports = {
  resultData
}
