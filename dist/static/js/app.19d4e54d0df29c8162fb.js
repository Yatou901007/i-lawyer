webpackJsonp([1],{"+Rs0":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"adviserDetail"}},[e("Breadcrumb",{staticClass:"mt20 ml20"},[e("BreadcrumbItem",[e("router-link",{attrs:{to:"/adviserList"}},[t._v("\n          村居法律顾问列表\n        ")])],1),t._v(" "),e("BreadcrumbItem",[t._v("村居法律顾问")])],1),t._v(" "),e("div",{staticClass:"card"},[e("h2",{staticClass:"card-title"},[t._v("基本信息")]),t._v(" "),e("div",{staticClass:"overflow"},[e("div",{staticClass:"detail-head"},[t.dataDetail.lawHead?e("img",{attrs:{src:t.hostFront+t.dataDetail.lawHead,alt:""}}):t._e(),t._v(" "),t.dataDetail.lawHead?t._e():e("Icon",{attrs:{type:"person"}})],1),t._v(" "),e("div",{staticClass:"detail-head-right"},[e("Row",[e("Col",{attrs:{span:"8"}},[t._v("\n                村居法律顾问姓名：\n                "),t.dataDetail.lawName?e("span",[t._v(t._s(t.dataDetail.lawName))]):t._e(),t._v(" "),t.dataDetail.lawName?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                联系电话：\n                "),t.dataDetail.lawMobileno?e("span",[t._v(t._s(t.dataDetail.lawMobileno))]):t._e(),t._v(" "),t.dataDetail.lawMobileno?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                所在单位：\n                "),t.dataDetail.lawCompany?e("span",[t._v(t._s(t.dataDetail.lawCompany))]):t._e(),t._v(" "),t.dataDetail.lawCompany?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"8"}},[t._v("\n                电子邮箱：\n                "),t.dataDetail.lawEmail?e("span",[t._v(t._s(t.dataDetail.lawEmail))]):t._e(),t._v(" "),t.dataDetail.lawEmail?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                发布行程次数：\n                "),t.dataDetail.tripNums?e("span",[t._v(t._s(t.dataDetail.tripNums))]):t._e(),t._v(" "),t.dataDetail.tripNums?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"8"}},[t._v("\n                签到次数：\n                "),t.dataDetail.signNums?e("span",[t._v(t._s(t.dataDetail.signNums))]):t._e(),t._v(" "),t.dataDetail.signNums?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                评价情况：\n                "),t.dataDetail.lawScore?e("span",[e("Rate",{attrs:{value:parseInt(t.dataDetail.lawScore),disabled:"","show-text":""}})],1):t._e(),t._v(" "),t.dataDetail.lawScore?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                排名：\n                "),t.dataDetail.lawRank?e("span",[t._v(t._s(t.dataDetail.lawRank))]):t._e(),t._v(" "),t.dataDetail.lawRank?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1)],1)]),t._v(" "),e("div",{staticClass:"detail-content"},[e("Row",[e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法治讲座")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.fzjzNum||0)),e("span",[t._v("人次")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法律咨询")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.flzxNum||0)),e("span",[t._v("次")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("调解纠纷")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.tjjfNum||0)),e("span",[t._v("次")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("培训骨干")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.pxggNum||0)),e("span",[t._v("人")])])])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("发放资料")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.ffzlNum||0)),e("span",[t._v("份")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法律援助")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.flyzNum||0)),e("span",[t._v("次")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("代写文书")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.dxwsNum||0)),e("span",[t._v("份")])])])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("完善村居制度")]),t._v(" "),e("h2",[t._v(t._s(t.dataDetail.cmzdNum||0)),e("span",[t._v("个")])])])])],1)],1)]),t._v(" "),e("div",{staticClass:"card overflow"},[e("h2",{staticClass:"card-title"},[t._v("\n      服务社区（村）详情\n      "),0==t.edit?e("Button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:function(a){t.edit=!0}}},[e("Icon",{attrs:{type:"edit"}}),t._v(" 编辑")],1):t._e(),t._v(" "),1==t.edit?e("div",{staticClass:"pull-right"},[e("Button",{staticClass:"pull-right mr10",attrs:{type:"primary"},on:{click:function(a){t.add()}}},[e("Icon",{attrs:{type:"plus"}}),t._v(" 新增")],1)],1):t._e()],1),t._v(" "),e("Table",{staticClass:"clear-both",attrs:{border:"",columns:1==t.edit?t.communityColumnsEdit:t.communityColumns,data:t.dataDetail.communityListInfos}}),t._v(" "),1==t.edit?e("div",{staticClass:"text-center mt10"},[e("Button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:function(a){t.updateEdit()}}},[t._v("修改")]),t._v(" "),e("Button",{attrs:{type:"default"},on:{click:function(a){t.edit=!1}}},[t._v("取消")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"card overflow"},[e("h2",{staticClass:"card-title"},[t._v("行程记录")]),t._v(" "),e("Table",{staticClass:"clear-both",attrs:{border:"",columns:t.columns,data:t.dataList}}),t._v(" "),e("Page",{staticClass:"pull-right mt10",attrs:{total:t.page.total,"show-total":"","show-elevator":"","page-size":t.page.pageNum},on:{"on-change":function(a){t.loadTrip(a)}}})],1),t._v(" "),e("div",{staticClass:"text-center mt10 mb30"},[e("router-link",{attrs:{to:"/adviserList"}},[e("Button",{staticClass:"width100",attrs:{type:"primary",size:"large"}},[t._v("返回")])],1)],1),t._v(" "),e("Modal",{attrs:{width:"560",closable:!1,title:"新增","class-name":"vertical-center-modal"},on:{"on-cancel":function(a){t.cancel()}},model:{value:t.modal1,callback:function(a){t.modal1=a},expression:"modal1"}},[e("Form",{ref:"formEdit",attrs:{model:t.formEdit,"label-width":100,rules:t.ruleEdit}},[e("FormItem",{attrs:{label:"村居服务社区",prop:"communityId"}},[e("Cascader",{attrs:{data:t.data4,"load-data":t.loadCommunityData},on:{"on-change":t.communityChange},model:{value:t.formEdit.communityId,callback:function(a){t.formEdit.communityId=a},expression:"formEdit.communityId"}})],1)],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"ghost"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:function(a){t.ok()}}},[t._v("新增")])],1)],1)],1)},s=[],o={render:r,staticRenderFns:s};a.a=o},"6A+a":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"card"},[e("h2",{staticClass:"mb10"},[t._v("登录")]),t._v(" "),e("Form",{ref:"formQuery",attrs:{model:t.formQuery,rules:t.ruleQuery,inline:"","label-width":100}},[e("FormItem",{attrs:{label:"操作员ID",prop:"operId"}},[e("Row",[e("Col",{attrs:{span:"24"}},[e("Input",{attrs:{type:"text",placeholder:"请输入操作员ID"},model:{value:t.formQuery.operId,callback:function(a){t.formQuery.operId=a},expression:"formQuery.operId"}})],1)],1)],1),t._v(" "),e("FormItem",{staticClass:"pull-right mb0"},[e("Button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:t.ok}},[t._v("登录")]),t._v(" "),e("Button",{attrs:{type:"ghost"},on:{click:function(a){t.$refs.formQuery.resetFields(),t.ok()}}},[t._v("重置")])],1)],1)],1)])},s=[],o={render:r,staticRenderFns:s};a.a=o},"9R7e":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("t-header"),t._v(" "),e("div",{staticClass:"content"},[e("router-view")],1)],1)},s=[],o={render:r,staticRenderFns:s};a.a=o},"9hen":function(t,a,e){"use strict";var r=e("C1Rq"),s=e("+Rs0"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},AcGY:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"layout v-header"},[e("Menu",{attrs:{mode:"horizontal",theme:t.theme1}},[e("div",{staticClass:"layout-logo"},[t._v("艾特律师管理系统")]),t._v(" "),e("div",{staticClass:"layout-button"},[e("Button",{attrs:{type:"ghost"},on:{click:function(a){t.logout()}}},[t._v("注销")])],1),t._v(" "),e("div",{staticClass:"layout-nav"},[e("router-link",{staticClass:"navbar-brand",class:{"v-active":"adviserDetail"==t.$route.name||"tripDetail"==t.$route.name},attrs:{to:"/adviserList"}},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"navicon-round"}}),t._v("村居法律顾问信息查看\n\t\t\t    ")],1)],1),t._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:"/adviserVerify"}},[e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"eye"}}),t._v("村居法律顾问信息审核\n\t\t\t    ")],1)],1),t._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:"/userList"}},[e("MenuItem",{attrs:{name:"3"}},[e("Icon",{attrs:{type:"person-stalker"}}),t._v("用户信息查看\n\t\t\t    ")],1)],1)],1)])],1)},s=[],o={render:r,staticRenderFns:s};a.a=o},C1Rq:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"adviserDetail",data:function(){var t=this;return{hostFront:r.a.hostFront,data4:[],formEdit:{communityId:[],communityName:[]},ruleEdit:{communityId:[{required:!0,validator:function(t,a,e){3!==a.length?e(new Error):e()},message:"服务社区请选到最后一级",trigger:"change"}]},modal1:!1,isMuti:!1,checkedList:[],lawId:"",dataDetail:"",columns:[{title:"行程名称",key:"tripName"},{title:"行程日期",key:"tripDate"},{title:"行程时间",key:"tripTime"},{title:"签到日期",key:"signDate"},{title:"签到时间",key:"signTime"},{title:"行程评分",key:"tripScore",width:210,render:function(t,a){return t("Rate",{props:{value:parseInt(a.row.tripScore),count:5,disabled:!0,"show-text":!0}})}},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){console.log(e.row.lawId,t.$router),t.$router.push({path:"/tripDetail/"+t.lawId+"/"+e.row.tripNo,replace:!0})}}},"查看")])}}],dataList:[],page:{total:0,pageNum:10,pageNo:1},communityColumns:[{title:"区域名称",key:"areaName"},{title:"街名称",key:"streetName"},{title:"社区名称",key:"communityName"}],communityColumnsEdit:[{title:"区域名称",key:"areaName"},{title:"街名称",key:"streetName"},{title:"社区名称",key:"communityName"},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.remove(e.index)}}},"删除")])}}],edit:!1}},methods:{loadData:function(){var t=this;this.$http.post(r.a.lawyerDetail.url,{head:r.a.lawyerDetail.head,body:{lawId:this.lawId}},{headers:{tranCode:r.a.lawyerDetail.head.tranCode}}).then(function(a){a=a.data;var e=a.head,s=a.body;e.errorCode===r.a.SUCCESS_CODE?t.dataDetail=s:t.$Message.error(e.errorMsg)},function(a){t.$Message.error("律师详情查询失败!")})},loadTrip:function(t){var a=this;t&&(this.page.pageNo=t),this.$http.post(r.a.tripList.url,{head:r.a.tripList.head,body:{pageNum:this.page.pageNum,pageNo:this.page.pageNo,IdType:0,ID:this.lawId}},{headers:{tranCode:r.a.tripList.head.tranCode}}).then(function(t){t=t.data;var e=t.head,s=t.body;e.errorCode===r.a.SUCCESS_CODE?(a.dataList=s.lawTripInfos,s.total&&(a.page.total=parseInt(s.total))):a.$Message.error(e.errorMsg)},function(t){a.$Message.error("行程查询失败!")})},loadCommunityData:function(t,a,e){var s=this;t||(t={loading:!0,value:"01"}),t.loading=!0,this.$http.post(r.a.communityList.url,{head:r.a.communityList.head,body:{queryType:e||t.queryType,value:t.value}},{headers:{tranCode:r.a.communityList.head.tranCode}}).then(function(o){o=o.data;var i=o.head,n=o.body;if(i.errorCode===r.a.SUCCESS_CODE)if(e){s.data4=n.children;for(var l=0;l<s.data4.length;l++)s.data4[l].loading=!1,s.data4[l].children=[]}else{t.children=n.children;for(var d=0;d<t.children.length;d++)"03"===t.children[d].queryType&&(t.children[d].loading=!1,t.children[d].children=[]);t.loading=!1,a&&a()}else s.$Message.error(i.errorMsg)},function(t){s.$Message.error("查询失败!")})},communityChange:function(t,a){if(t){var e=a.map(function(t){return t.label});this.formEdit.communityName=e}},ok:function(){var t=this;this.$refs.formEdit.validate(function(a){a?(t.dataDetail.communityListInfos.push({areaId:t.formEdit.communityId[0],areaName:t.formEdit.communityName[0],streetId:t.formEdit.communityId[1],streetName:t.formEdit.communityName[1],communityId:t.formEdit.communityId[2],communityName:t.formEdit.communityName[2]}),t.modal1=!1):t.$Message.error("表单验证失败!")})},updateEdit:function(){for(var t=this,a=[],e=0;e<this.dataDetail.communityListInfos.length;e++){var s={communityId:this.dataDetail.communityListInfos[e].communityId,communityName:this.dataDetail.communityListInfos[e].communityName};a.push(s)}var o={isComEdit:0,lawId:this.lawId,communityIds:a};this.$http.post(r.a.updateLaw.url,{head:r.a.updateLaw.head,body:o},{headers:{tranCode:r.a.updateLaw.head.tranCode}}).then(function(a){a=a.data,a.statusCode===r.a.STATUS_SUCCESS?(t.$Message.success("修改成功!"),t.edit=!1,t.loadData()):t.$Message.error(a.descMsg)},function(a){t.$Message.error("修改失败!")})},remove:function(t){t&&this.dataDetail.communityListInfos.splice(t,1),console.log(t,this.checkedList)},cancel:function(){this.modal1=!1,this.$refs.formEdit.resetFields()},add:function(){this.render(-1)},render:function(t){this.modal1=!0}},created:function(){this.lawId=this.$route.params.lawId,console.log(this.lawId),this.loadData(),this.loadTrip(),this.loadCommunityData(null,null,"01")}}},CyCq:function(t,a,e){"use strict";function r(){return(new Date).getFullYear()+""+((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1)+((new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate())}function s(){return(new Date).getHours()+""+((new Date).getMinutes()+1<10?"0"+((new Date).getMinutes()+1):(new Date).getMinutes()+1)+((new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds())}e.d(a,"a",function(){return n});var o="http://47.94.196.243:53100",i=o+"/atLawyer/manager",n={hostFront:"http://47.94.196.243:53100/atLawyer",SUCCESS_CODE:"GRN00000",logout:{url:o+"/atLawyer/logout",head:{tranCode:"MGN0111",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},lawyerList:{url:i,head:{tranCode:"MGN0210",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},lawyerDetail:{url:i,head:{tranCode:"MGN0211",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},tripList:{url:i,head:{tranCode:"MGN0410",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},tripDetail:{url:i,head:{tranCode:"MGN0411",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},updateLaw:{url:i,head:{tranCode:"MGN0220",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},verifyLaw:{url:i,head:{tranCode:"MGN0230",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},communityList:{url:i,head:{tranCode:"MGN0910",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}},userList:{url:i,head:{tranCode:"MGN0510",busDate:r(),busTime:s(),operId:"1",operName:"zhangsan"}}}},DICR:function(t,a,e){"use strict";var r=e("kEoC");a.a={name:"app",components:{THeader:r.a},mounted:function(){console.log(this.$route.name)}}},J3xx:function(t,a,e){"use strict";var r=e("QHjC"),s=e("byRa"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},LfkF:function(t,a){},M93x:function(t,a,e){"use strict";var r=e("DICR"),s=e("9R7e"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},MnLS:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("2HEv"),s=e("M93x"),o=e("YaEn"),i=e("KXgF"),n=e.n(i),l=e("LfkF"),d=(e.n(l),e("mtWM")),u=e.n(d),c=e("MnLS");e.n(c);r.default.use(n.a),r.default.prototype.$http=u.a,r.default.config.productionTip=!1,new r.default({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},PdOw:function(t,a,e){"use strict";var r=e("adS1"),s=e("vUz7"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},QHjC:function(t,a,e){"use strict";var r=e("aA9S"),s=e.n(r),o=e("CyCq");a.a={name:"adviserList",data:function(){var t=this;return{formQuery:{communityName:"",orderType:"01",orderMethod:"0"},ruleQuery:{},formEdit:{verifyStt:"0"},ruleEdit:{},modal1:!1,loadingStatus:!1,columns:[{title:"村居法律顾问姓名",key:"lawName"},{title:"村居法律顾问性别",key:"lawSex",render:function(t,a){return t("div","0"===a.row.lawSex?"男":"女")}},{title:"联系电话",key:"lawMobileno"},{title:"所在单位",key:"lawCompany"},{title:"服务社区（村）",key:"communityId"},{title:"注册日期",key:"tripNums"},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.render(e.index)}}},"审核")])}}],dataList:[],page:{total:0,pageNum:10,pageNo:1}}},methods:{search:function(){var t=this;this.$refs.formQuery.validate(function(a){a?t.loadData():t.$Message.error("表单验证失败!")})},ok:function(){var t=this;this.$refs.formEdit.validate(function(a){if(a){var e={lawId:t.formEdit.lawId,verifyStt:t.formEdit.verifyStt};t.$http.post(o.a.verifyLaw.url,{head:o.a.verifyLaw.head,body:e},{headers:{tranCode:o.a.verifyLaw.head.tranCode}}).then(function(a){a=a.data,a.statusCode===o.a.STATUS_SUCCESS?(t.$Message.success("审核成功!"),t.$refs.formEdit.resetFields(),t.modal1=!1,t.loadData()):t.$Message.error(a.descMsg)},function(a){t.$Message.error("审核失败!")})}else t.$Message.error("表单验证失败!")})},cancel:function(){this.modal1=!1,this.$refs.formEdit.resetFields()},render:function(t){t>=0&&(s()(this.formEdit,this.dataList[t]),this.formEdit.verifyStt="0"),this.modal1=!0},loadData:function(t){var a=this;t&&(this.page.pageNo=t),this.$http.post(o.a.lawyerList.url,{head:o.a.lawyerList.head,body:{pageNum:this.page.pageNum,pageNo:this.page.pageNo,communityName:this.formQuery.communityName,orderType:this.formQuery.orderType,orderMethod:this.formQuery.orderMethod,audStt:1}},{headers:{tranCode:o.a.lawyerList.head.tranCode}}).then(function(t){t=t.data;var e=t.head,r=t.body;e.errorCode===o.a.SUCCESS_CODE?(a.dataList=r.lawInfos,r.total&&(a.page.total=parseInt(r.total))):a.$Message.error(e.errorMsg)},function(t){a.$Message.error("查询失败!")})}},created:function(){this.loadData()}}},YaEn:function(t,a,e){"use strict";var r=e("2HEv"),s=e("41Db"),o=e("xJsL"),i=e("PdOw"),n=e("9hen"),l=e("rB8r"),d=e("J3xx"),u=e("smCU");r.default.use(s.a),a.a=new s.a({linkActiveClass:"v-active",routes:[{path:"/",redirect:"/adviserList"},{path:"/login",name:"login",component:o.a},{path:"/adviserList",name:"1",component:i.a},{path:"/adviserDetail/:lawId",name:"adviserDetail",component:n.a},{path:"/tripDetail/:lawId/:tripNo",name:"tripDetail",component:l.a},{path:"/adviserVerify",name:"2",component:d.a},{path:"/userList",name:"3",component:u.a}]})},adS1:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"adviserList",data:function(){var t=this;return{hostFront:r.a.hostFront,formQuery:{communityName:"",orderType:"01",orderMethod:"0"},ruleQuery:{},loadingStatus:!1,columns:[{title:"村居法律顾问姓名",key:"lawName"},{title:"村居法律顾问性别",key:"lawSex",render:function(t,a){return t("div","0"===a.row.lawSex?"男":"女")}},{title:"联系电话",key:"lawMobileno"},{title:"所在单位",key:"lawCompany"},{title:"服务社区（村）",key:"communityName"},{title:"发布行程次数",key:"tripNums"},{title:"签上门服务次数",key:"signNums"},{title:"综合评价",key:"lawScore",width:210,render:function(t,a){return t("Rate",{props:{value:parseInt(a.row.lawScore),count:5,disabled:!0,"show-text":!0}})}},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.$router.push({path:"/adviserDetail/"+e.row.lawId})}}},"查看详情")])}}],dataList:[],page:{total:0,pageNum:10,pageNo:1}}},methods:{search:function(){var t=this;this.$refs.formQuery.validate(function(a){a?t.loadData():t.$Message.error("表单验证失败!")})},loadData:function(t){var a=this;t&&(this.page.pageNo=t),this.$http.post(r.a.lawyerList.url,{head:r.a.lawyerList.head,body:{pageNum:this.page.pageNum,pageNo:this.page.pageNo,communityName:this.formQuery.communityName,orderType:this.formQuery.orderType,orderMethod:this.formQuery.orderMethod,audStt:"*"}},{headers:{tranCode:r.a.lawyerList.head.tranCode}}).then(function(t){t=t.data;var e=t.head,s=t.body;e.errorCode===r.a.SUCCESS_CODE?(a.dataList=s.lawInfos,s.total&&(a.page.total=parseInt(s.total))):a.$Message.error(e.errorMsg)},function(t){a.$Message.error("查询失败!")})}},created:function(){this.loadData()}}},byRa:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"adviserList"}},[e("div",{staticClass:"card"},[e("h2",{staticClass:"mb10"},[t._v("村居法律顾问信息审核")]),t._v(" "),e("Form",{ref:"formQuery",attrs:{model:t.formQuery,rules:t.ruleQuery,inline:"","label-width":100}},[e("FormItem",{attrs:{label:"服务社区（村）",prop:"communityName"}},[e("Row",[e("Col",{attrs:{span:"24"}},[e("Input",{attrs:{type:"text",placeholder:"请输入服务社区（村）"},model:{value:t.formQuery.communityName,callback:function(a){t.formQuery.communityName=a},expression:"formQuery.communityName"}})],1)],1)],1),t._v(" "),e("FormItem",{staticClass:"pull-right mb0"},[e("Button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("Button",{attrs:{type:"ghost"},on:{click:function(a){t.$refs.formQuery.resetFields(),t.search()}}},[t._v("重置")])],1)],1)],1),t._v(" "),e("div",{staticClass:"card overflow"},[e("div",{staticClass:"pull-right mb10"},[e("Button",{attrs:{type:"01"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="01",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"01"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"01"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n        按评价排序\n      ")]),t._v(" "),e("Button",{attrs:{type:"02"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="02",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"02"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"02"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n       按发布行程次数排序")]),t._v(" "),e("Button",{attrs:{type:"03"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="03",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"03"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"03"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n       按上门服务次数排序")])],1),t._v(" "),e("Table",{staticClass:"clear-both",attrs:{border:"",columns:t.columns,data:t.dataList}}),t._v(" "),e("Page",{staticClass:"pull-right mt10",attrs:{total:t.page.total,"show-total":"","show-elevator":"","page-size":t.page.pageNum},on:{"on-change":function(a){t.loadData(a)}}})],1),t._v(" "),e("Modal",{attrs:{width:"560",closable:!1,title:"审核","class-name":"vertical-center-modal"},on:{"on-cancel":function(a){t.cancel()}},model:{value:t.modal1,callback:function(a){t.modal1=a},expression:"modal1"}},[e("Form",{ref:"formEdit",attrs:{model:t.formEdit,"label-width":100,rules:t.ruleEdit}},[e("FormItem",{attrs:{label:"审核结果",prop:"verifyStt"}},[e("i-switch",{attrs:{size:"large","true-value":"0","false-value":"1"},model:{value:t.formEdit.verifyStt,callback:function(a){t.formEdit.verifyStt=a},expression:"formEdit.verifyStt"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("通过")]),t._v(" "),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("驳回")])])],1)],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"ghost"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:function(a){t.ok()}}},[t._v("确定")])],1)],1)],1)},s=[],o={render:r,staticRenderFns:s};a.a=o},d5iW:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"userList"}},[e("div",{staticClass:"card"},[e("h2",{staticClass:"mb10"},[t._v("用户信息查看")]),t._v(" "),e("Form",{ref:"formQuery",attrs:{model:t.formQuery,rules:t.ruleQuery,inline:"","label-width":100}},[e("FormItem",{attrs:{label:"时间从",prop:"startDate"}},[e("Row",[e("Col",{attrs:{span:"24"}},[e("DatePicker",{attrs:{type:"date",editable:!1,clearable:!1,placeholder:"选择日期",value:t.formQuery.startDate,format:"yyyy-MM-dd"},on:{"on-change":function(a){t.formQuery.startDate=a}}})],1)],1)],1),t._v(" "),e("FormItem",{attrs:{label:"到",prop:"endDate"}},[e("Row",[e("Col",{attrs:{span:"24"}},[e("DatePicker",{attrs:{type:"date",editable:!1,clearable:!1,placeholder:"选择日期",value:t.formQuery.endDate,format:"yyyy-MM-dd"},on:{"on-change":function(a){t.formQuery.endDate=a}}})],1)],1)],1),t._v(" "),e("FormItem",{staticClass:"pull-right mb0"},[e("Button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("Button",{attrs:{type:"ghost"},on:{click:function(a){t.$refs.formQuery.resetFields(),t.search()}}},[t._v("重置")])],1)],1)],1),t._v(" "),e("div",{staticClass:"card overflow"},[e("Table",{staticClass:"clear-both",attrs:{border:"",columns:t.columns,data:t.dataList}}),t._v(" "),e("Page",{staticClass:"pull-right mt10",attrs:{total:t.page.total,"show-total":"","show-elevator":"","page-size":t.page.pageNum},on:{"on-change":function(a){t.loadData(a)}}})],1)])},s=[],o={render:r,staticRenderFns:s};a.a=o},kCXm:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"tripDetail",data:function(){return{lawId:"",tripNo:"",dataDetail:""}},methods:{loadData:function(){var t=this;this.$http.post(r.a.tripDetail.url,{head:r.a.tripDetail.head,body:{tripNo:this.tripNo}},{headers:{tranCode:r.a.tripDetail.head.tranCode}}).then(function(a){a=a.data;var e=a.head,s=a.body;e.errorCode===r.a.SUCCESS_CODE?(t.dataDetail=s,t.dataDetail.detailNums&&(t.dataDetail.detailNums=t.dataDetail.detailNums.split("|"))):t.$Message.error(e.errorMsg)},function(a){t.$Message.error("行程详情查询失败!")})}},created:function(){this.lawId=this.$route.params.lawId,this.tripNo=this.$route.params.tripNo,this.loadData()}}},kEoC:function(t,a,e){"use strict";var r=e("ndMQ"),s=e("AcGY"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},loLg:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"userList",data:function(){var t=this;return{formQuery:{startDate:this.get3MonthBefor(),endDate:this.getNowDate()},ruleQuery:{startDate:[{required:!0,message:"开始日期不能为空",trigger:"blur"},{validator:function(a,e,r){t.formQuery.endDate&&new Date(t.formQuery.endDate).getTime()<new Date(e).getTime()?r(new Error):r()},message:"开始日期应小于结束日期",trigger:"change"}],endDate:[{required:!0,message:"结束日期不能为空",trigger:"blur"},{validator:function(a,e,r){t.formQuery.startDate&&new Date(e).getTime()<new Date(t.formQuery.startDate).getTime()?r(new Error):r()},message:"结束日期应大于开始日期",trigger:"change"}]},loadingStatus:!1,columns:[{title:"用户姓名",key:"userName"},{title:"联系电话",key:"userMobileno"},{title:"服务社区（村）",key:"companyName"},{title:"注册日期",key:"regDate"},{title:"历史报名次数",key:"signNum"}],dataList:[],page:{total:0,pageNum:10,pageNo:1}}},methods:{get3MonthBefor:function(){var t=void 0,a=void 0,e=void 0,r=void 0,s=new Date;switch(a=s.getFullYear(),e=s.getMonth()+1,r=s.getDate(),e){case 1:case 2:case 3:e+=9,a--;break;default:e-=3}return e=e<10?"0"+e:e,t=a+"-"+e+"-"+r,console.log(t),t},getNowDate:function(){return(new Date).getFullYear()+"-"+((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1)+"-"+((new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate())},search:function(){var t=this;this.$refs.formQuery.validate(function(a){a?t.loadData():t.$Message.error("表单验证失败!")})},loadData:function(t){var a=this;t&&(this.page.pageNo=t),this.$http.post(r.a.userList.url,{head:r.a.userList.head,body:{pageNum:this.page.pageNum,pageNo:this.page.pageNo,startDate:this.formQuery.startDate.replace(/-/g,""),endDate:this.formQuery.endDate.replace(/-/g,"")}},{headers:{tranCode:r.a.userList.head.tranCode}}).then(function(t){t=t.data;var e=t.head,s=t.body;e.errorCode===r.a.SUCCESS_CODE?(a.dataList=s.useInfos,s.total&&(a.page.total=parseInt(s.total))):a.$Message.error(e.errorMsg)},function(t){a.$Message.error("查询失败!")})}},created:function(){this.loadData()}}},nFce:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"tripDetail"}},[e("Breadcrumb",{staticClass:"mt20 ml20"},[e("BreadcrumbItem",[e("router-link",{attrs:{to:"/adviserList"}},[t._v("\n          村居法律顾问列表\n        ")])],1),t._v(" "),e("BreadcrumbItem",[e("router-link",{attrs:{to:"/adviserDetail/"+t.lawId}},[t._v("\n          村居法律顾问\n        ")])],1),t._v(" "),e("BreadcrumbItem",[t._v("行程详情")])],1),t._v(" "),e("div",{staticClass:"card"},[e("h2",{staticClass:"card-title"},[t._v("行程详情")]),t._v(" "),e("div",{staticClass:"overflow"},[e("div",{staticClass:"detail-head-right"},[e("Row",[e("Col",{attrs:{span:"8"}},[t._v("\n                行程主题：\n                "),t.dataDetail.tripName?e("span",[t._v(t._s(t.dataDetail.tripName))]):t._e(),t._v(" "),t.dataDetail.tripName?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                行程日期：\n                "),t.dataDetail.tripDate?e("span",[t._v(t._s(t.dataDetail.tripDate))]):t._e(),t._v(" "),t.dataDetail.tripDate?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                服务社区（村）：\n                "),t.dataDetail.tripDate?e("span",[t._v(t._s(t.dataDetail.tripDate))]):t._e(),t._v(" "),t.dataDetail.tripDate?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"8"}},[t._v("\n                上门服务签到时间：\n                "),t.dataDetail.communityId?e("span",[t._v(t._s(t.dataDetail.communityId))]):t._e(),t._v(" "),t.dataDetail.communityId?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v("\n                上门服务签到地点：\n                "),t.dataDetail.tripArea||t.dataDetail.tripDoor?e("span",[t._v(t._s(t.dataDetail.tripArea)+" "+t._s(t.dataDetail.tripDoor))]):t._e(),t._v(" "),t.dataDetail.tripArea||t.dataDetail.tripDoor?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1),t._v(" "),e("Row",{staticClass:"mb10"},[e("Col",{attrs:{span:"24"}},[t._v("\n                上门服务签到照片：\n                "),t.dataDetail.signPhoto?e("img",{staticClass:"trip-detail-img",attrs:{src:t.dataDetail.signPhoto,alt:""}}):t._e(),t._v(" "),t.dataDetail.signPhoto?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[t._v("\n                综合评分：\n                "),t.dataDetail.tripScore?e("span",[e("Rate",{attrs:{value:parseInt(t.dataDetail.tripScore),disabled:"","show-text":""}})],1):t._e(),t._v(" "),t.dataDetail.tripScore?t._e():e("span",{staticClass:"subtitle"},[t._v("暂无")])])],1)],1)]),t._v(" "),e("div",{staticClass:"detail-content"},[e("Row",[e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法治讲座")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[0]||0)),e("span",[t._v("人次")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法律咨询")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[1]||0)),e("span",[t._v("次")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("调解纠纷")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[2]||0)),e("span",[t._v("次")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("培训骨干")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[3]||0)),e("span",[t._v("人")])]):t._e()])])],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("发放资料")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[4]||0)),e("span",[t._v("份")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("法律援助")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[5]||0)),e("span",[t._v("次")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("代写文书")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[6]||0)),e("span",[t._v("份")])]):t._e()])]),t._v(" "),e("Col",{attrs:{span:"6"}},[e("div",{staticClass:"detail-time"},[e("h2",[t._v("完善村居制度")]),t._v(" "),t.dataDetail.detailNums?e("h2",[t._v(t._s(t.dataDetail.detailNums[7]||0)),e("span",[t._v("个")])]):t._e()])])],1)],1)]),t._v(" "),e("div",{staticClass:"text-center mt10 mb30"},[e("router-link",{attrs:{to:"/adviserDetail/"+t.lawId}},[e("Button",{staticClass:"width100",attrs:{type:"primary",size:"large"}},[t._v("返回")])],1)],1)],1)},s=[],o={render:r,staticRenderFns:s};a.a=o},ndMQ:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"THeader",data:function(){return{theme1:"dark"}},methods:{logout:function(){var t=this;this.$http.post(r.a.logout.url,{head:r.a.logout.head,body:{redirecturl:window.location.href}},{headers:{tranCode:r.a.logout.head.tranCode}}).then(function(a){a=a.data;var e=a.head,s=a.body;e.errorCode===r.a.SUCCESS_CODE?t.$Message.success({content:"注销成功!",duration:2,onClose:function(){window.location.href=s}}):t.$Message.error(e.errorMsg)},function(a){t.$Message.error("注销失败!")})}}}},rB8r:function(t,a,e){"use strict";var r=e("kCXm"),s=e("nFce"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},smCU:function(t,a,e){"use strict";var r=e("loLg"),s=e("d5iW"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},vUz7:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"adviserList"}},[e("div",{staticClass:"card"},[e("h2",{staticClass:"mb10"},[t._v("村居法律顾问信息查看")]),t._v(" "),e("Form",{ref:"formQuery",attrs:{model:t.formQuery,rules:t.ruleQuery,inline:"","label-width":100}},[e("FormItem",{attrs:{label:"服务社区（村）",prop:"communityName"}},[e("Row",[e("Col",{attrs:{span:"24"}},[e("Input",{attrs:{type:"text",placeholder:"请输入服务社区（村）"},model:{value:t.formQuery.communityName,callback:function(a){t.formQuery.communityName=a},expression:"formQuery.communityName"}})],1)],1)],1),t._v(" "),e("FormItem",{staticClass:"pull-right mb0"},[e("Button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("Button",{attrs:{type:"ghost"},on:{click:function(a){t.$refs.formQuery.resetFields(),t.search()}}},[t._v("重置")])],1)],1)],1),t._v(" "),e("div",{staticClass:"card overflow"},[e("div",{staticClass:"pull-right mb10"},[e("Button",{attrs:{type:"01"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="01",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"01"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"01"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n        按评价排序\n      ")]),t._v(" "),e("Button",{attrs:{type:"02"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="02",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"02"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"02"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n       按发布行程次数排序")]),t._v(" "),e("Button",{attrs:{type:"03"==t.formQuery.orderType?"info":"primary",size:"large"},on:{click:function(a){t.formQuery.orderType="03",t.formQuery.orderMethod="1"==t.formQuery.orderMethod?"0":"1",t.loadData()}}},[e("span",{staticClass:"sorter"},[e("Icon",{class:"03"==t.formQuery.orderType&&"1"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-up-b"}}),t._v(" "),e("Icon",{class:"03"==t.formQuery.orderType&&"0"==t.formQuery.orderMethod?"active":"",attrs:{type:"arrow-down-b"}})],1),t._v("\n       按上门服务次数排序")])],1),t._v(" "),e("Table",{staticClass:"clear-both",attrs:{border:"",columns:t.columns,data:t.dataList}}),t._v(" "),e("Page",{staticClass:"pull-right mt10",attrs:{total:t.page.total,"show-total":"","show-elevator":"","page-size":t.page.pageNum},on:{"on-change":function(a){t.loadData(a)}}})],1)])},s=[],o={render:r,staticRenderFns:s};a.a=o},xJsL:function(t,a,e){"use strict";var r=e("yMJX"),s=e("6A+a"),o=e("46Yf"),i=o(r.a,s.a,!1,null,null,null);a.a=i.exports},yMJX:function(t,a,e){"use strict";var r=e("CyCq");a.a={name:"login",data:function(){return{formQuery:{communityId:"",orderType:"01",orderMethod:"0"},ruleQuery:{}}},methods:{ok:function(){var t=this;this.$refs.formEdit.validate(function(a){if(a){var e={lawId:t.formEdit.lawId,communityId:t.formEdit.communityId};t.$http.post(r.a.updateLaw.url,{head:r.a.updateLaw.head,body:e},{headers:{tranCode:r.a.updateLaw.head.tranCode}}).then(function(a){a=a.data,a.statusCode===r.a.STATUS_SUCCESS?(t.$Message.success("审核成功!"),t.$refs.formEdit.resetFields(),t.modal1=!1,t.loadData()):t.$Message.error(a.descMsg)},function(a){t.$Message.error("审核失败!")})}else t.$Message.error("表单验证失败!")})}},created:function(){}}}},["NHnr"]);
//# sourceMappingURL=app.19d4e54d0df29c8162fb.js.map