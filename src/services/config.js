// const host = 'http://localhost:18082'
const host = 'http://47.94.196.243:53100'
const hostFront = host + '/atLawyer'

function getDate () {
  return new Date().getFullYear() + '' + ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '' + (new Date().getDate() < 10 ? ('0' + new Date().getDate()) : new Date().getDate())
}
function getTime () {
  return new Date().getHours() + '' + ((new Date().getMinutes() + 1) < 10 ? ('0' + (new Date().getMinutes() + 1)) : (new Date().getMinutes() + 1)) + '' + (new Date().getSeconds() < 10 ? ('0' + new Date().getSeconds()) : new Date().getSeconds())
}
const URL = host + '/atLawyer/manager'

export const CONFIG = {
  hostFront: hostFront,
  SUCCESS_CODE: 'GRN00000',
  // 注销
  logout: {
    url: host + '/atLawyer/logout',
    // url: URL,
    head: {
      tranCode: 'MGN0111',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 律师列表
  lawyerList: {
    url: URL,
    head: {
      tranCode: 'MGN0210',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 律师详情
  lawyerDetail: {
    // url: host + '/atLawyer/detail',
    url: URL,
    head: {
      tranCode: 'MGN0211',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 行程列表
  tripList: {
    // url: host + '/atLawyer/trip',
    url: URL,
    head: {
      tranCode: 'MGN0410',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 行程详情
  tripDetail: {
    // url: host + '/atLawyer/tripDetail',
    url: URL,
    head: {
      tranCode: 'MGN0411',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 律师调整
  updateLaw: {
    // url: host + '/atLawyer/updateLaw',
    url: URL,
    head: {
      tranCode: 'MGN0220',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 律师审核
  verifyLaw: {
    // url: host + '/atLawyer/verifyLaw',
    url: URL,
    head: {
      tranCode: 'MGN0230',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 服务社区（村）
  communityList: {
    // url: host + '/atLawyer/communityList',
    url: URL,
    head: {
      tranCode: 'MGN0910',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  },
  // 用户列表
  userList: {
    url: URL,
    head: {
      tranCode: 'MGN0510',
      busDate: getDate(),
      busTime: getTime(),
      operId: '1',
      operName: 'zhangsan'
    }
  }

}
