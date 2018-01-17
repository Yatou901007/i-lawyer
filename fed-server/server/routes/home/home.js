"use strict";

const express = require("express");
const _ = require("lodash");
const router = express.Router();
const { resultData } = require("../../common/utils");

// router.post("/list", function(req, res) {
router.post("/manager", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {
      lawInfos: _.times(10, i => {
        return {
          lawId: i,
          lawName: 'zhangsan' + i,
          lawSex: i%2 == 0 ? '0' : '1',
          lawMobileno: '13200292010',
          lawCompany: '艾特事务所' + i,
          communityId: ['talkingdata', 'baidu'],
          // lawHead: 'http://upload.jianshu.io/users/upload_avatars/112263/b7a7467b2836?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
          lawEmail: '44567@qq.com',
          tripNums: '10' + i,
          signNums: '11' + i,
          lawScore: i%5 + 1
        };
      }),
      total: 10
    }
  });

  res.send(ret);
});

router.post("/detail", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {
      lawId: 1,
      lawName: 'zhangsan',
      lawSex: '0',
      lawMobileno: '13200292010',
      lawCompany: '艾特事务所',
      lawHead: 'http://upload.jianshu.io/users/upload_avatars/112263/b7a7467b2836?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      communityId: ['talkingdata', 'baidu'],
      lawEmail: '33@qq.com',
      lawRank: '第一名',
      tripNums: '10',
      signNums: '11',
      lawScore: 5,
      fzjzNum: 1,
      fzjzNums: 2,
      flzxNum: 3,
      tjjfNum: 4,
      pxggNum: 5,
      ffzlNum: 6,
      flyzNum: 7,
      dxwsNum: 8,
      cmzdNum: 9
    }
  });

  res.send(ret);
});

router.post("/trip", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {
      lawTripInfos: _.times(10, i => {
        return {
          tripNo: i,
          tripName: '行程' + i,
          tripDate: '2018-10-08',
          tripTime: '21:11:22',
          signDate: '2018-10-08',
          signTime: '21:11:22',
          tripScore: i%5 + 1
        };
      }),
      total: 10
    }
  });

  res.send(ret);
});

router.post("/tripDetail", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {
      tripName: 'zhangsan',
      tripBusType: '0',
      tripLongitude: '10',
      tripLatitude: '20',
      tripPro: '山东',
      tripCity: '烟台',
      tripDistrict: '芝罘区',
      tripArea: '白石村',
      tripDoor: '10号',
      tripDate: '2018-10-10',
      tripTime: '22:10:10',
      signDate: '2018-10-10',
      signTime: '22:10:10',
      tripStt: 3,
      lectureStt: 1,
      tripScore: 5,
      signPhoto: 'http://upload.jianshu.io/users/upload_avatars/112263/b7a7467b2836?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      detailNums: [1,2,3,4,5,6,7,8]
    }
  });

  res.send(ret);
});

router.post("/updateLaw", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {}
  });

  res.send(ret);
});

router.post("/communityList", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: {
      communityInfos: [
        {
            value: 'talkingdata',
            label: 'TalkingData',
            loading: false,
            children: [],
            queryType: '02'
        },
        {
            value: 'baidu',
            label: '百度',
            children: [],
            queryType: '02'
        },
        {
            value: 'sina',
            label: '新浪',
            queryType: '02'
        }
      ]
    }
  });

  res.send(ret);
});

// 注销
router.post("/logout", function(req, res) {
  res.type("json");
  let params = req.body, ret = {};

  Object.assign(ret, resultData, {
    body: 'http://www.baidu.com'
  });

  res.send(ret);
});


module.exports = router;
