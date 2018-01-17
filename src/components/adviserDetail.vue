<template>
  <div id="adviserDetail">
    <Breadcrumb class="mt20 ml20">
        <BreadcrumbItem>
          <router-link to="/adviserList">
            村居法律顾问列表
          </router-link>
        </BreadcrumbItem>
        <BreadcrumbItem>村居法律顾问</BreadcrumbItem>
    </Breadcrumb>
    <div class="card">
      <h2 class="card-title">基本信息</h2>
      <div class="overflow">
        <div class="detail-head">
          <img v-if="dataDetail.lawHead" :src="hostFront + dataDetail.lawHead" alt="">
          <Icon type="person" v-if="!dataDetail.lawHead"></Icon>
        </div>
        <div class="detail-head-right">
          <Row>
              <Col span="8">
                  村居法律顾问姓名：
                  <span v-if="dataDetail.lawName">{{dataDetail.lawName}}</span>
                  <span v-if="!dataDetail.lawName" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  联系电话：
                  <span v-if="dataDetail.lawMobileno">{{dataDetail.lawMobileno}}</span>
                  <span v-if="!dataDetail.lawMobileno" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  所在单位：
                  <span v-if="dataDetail.lawCompany">{{dataDetail.lawCompany}}</span>
                  <span v-if="!dataDetail.lawCompany" class="subtitle">暂无</span>
              </Col>
          </Row>
          <Row>
              <!-- <Col span="8">
                  服务社区（村）：
                  <span v-if="dataDetail.communityId">{{dataDetail.communityId}}</span>
                  <span v-if="!dataDetail.communityId" class="subtitle">暂无</span>
              </Col> -->
              <Col span="8">
                  电子邮箱：
                  <span v-if="dataDetail.lawEmail">{{dataDetail.lawEmail}}</span>
                  <span v-if="!dataDetail.lawEmail" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  发布行程次数：
                  <span v-if="dataDetail.tripNums">{{dataDetail.tripNums}}</span>
                  <span v-if="!dataDetail.tripNums" class="subtitle">暂无</span>
              </Col>
          </Row>
          <Row>
              <Col span="8">
                  签到次数：
                  <span v-if="dataDetail.signNums">{{dataDetail.signNums}}</span>
                  <span v-if="!dataDetail.signNums" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  评价情况：
                  <span v-if="dataDetail.lawScore">
                    <Rate :value="parseInt(dataDetail.lawScore)" disabled show-text></Rate>
                  </span>
                  <span v-if="!dataDetail.lawScore" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  排名：
                  <span v-if="dataDetail.lawRank">{{dataDetail.lawRank}}</span>
                  <span v-if="!dataDetail.lawRank" class="subtitle">暂无</span>
              </Col>
          </Row>
        </div>
      </div>
      <div class="detail-content">
        <Row>
            <Col span="6">
                <div class="detail-time">
                  <h2>法治讲座</h2>
                  <h2>{{dataDetail.fzjzNum || 0}}<span>人次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>法律咨询</h2>
                  <h2>{{dataDetail.flzxNum || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>调解纠纷</h2>
                  <h2>{{dataDetail.tjjfNum || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>培训骨干</h2>
                  <h2>{{dataDetail.pxggNum || 0}}<span>人</span></h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <div class="detail-time">
                  <h2>发放资料</h2>
                  <h2>{{dataDetail.ffzlNum || 0}}<span>份</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>法律援助</h2>
                  <h2>{{dataDetail.flyzNum || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>代写文书</h2>
                  <h2>{{dataDetail.dxwsNum || 0}}<span>份</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>完善村居制度</h2>
                  <h2>{{dataDetail.cmzdNum || 0}}<span>个</span></h2>
                </div>
            </Col>
        </Row>
      </div>
    </div>
    <div class="card overflow">
      <h2 class="card-title">
        服务社区（村）详情
        <Button type="primary" class="pull-right" @click="edit = true" v-if="edit == false"><Icon type="edit"></Icon> 编辑</Button>
        <div class="pull-right" v-if="edit == true">
          <!-- <Button type="error" size="small" class="pull-right" @click="remove()" :disabled="!isMuti"><Icon type="minus"></Icon> 批量删除</Button> -->
          <Button type="primary" class="pull-right mr10" @click="add()"><Icon type="plus"></Icon> 新增</Button>
        </div>
      </h2>
      <!--  ref="selection"@on-select="selectionChange" -->
      <Table border :columns="edit == true ? communityColumnsEdit : communityColumns"  :data="dataDetail.communityListInfos" class="clear-both"></Table>
      <div class="text-center mt10" v-if="edit == true">
        <Button type="primary" class="mr10" @click="updateEdit()">修改</Button>
        <Button type="default" @click="edit = false">取消</Button>
      </div>
    </div>
    <div class="card overflow">
      <h2 class="card-title">行程记录</h2>
      <Table border :columns="columns" :data="dataList" class="clear-both"></Table>
      <Page class="pull-right mt10" :total="page.total" @on-change="loadTrip($event)" show-total show-elevator :page-size="page.pageNum"></Page>
    </div>
    <div class="text-center mt10 mb30">
      <router-link to="/adviserList">
        <Button type="primary" size="large" class="width100">返回</Button>
      </router-link>
    </div>
    <Modal
        width="560"
        v-model="modal1"
        :closable="false"
        title="新增"
        @on-cancel="cancel()" 
        class-name="vertical-center-modal">
        <Form ref="formEdit" :model="formEdit" :label-width="100" :rules="ruleEdit">
          <FormItem label="村居服务社区" prop="communityId">
              <Cascader :data="data4" :load-data="loadCommunityData" v-model="formEdit.communityId" @on-change="communityChange"></Cascader>
          </FormItem>
      </Form>
      <div slot="footer">
          <Button type="ghost" @click="cancel">取消</Button>
          <Button type="primary" @click="ok()">新增</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'adviserDetail',
  data () {
    return {
      hostFront: CONFIG.hostFront,
      data4: [],
      formEdit: {
        communityId: [],
        communityName: []
      },
      ruleEdit: {
        communityId: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value.length !== 3) {
              callback(new Error())
            } else {
              callback()
            }
          },
          message: '服务社区请选到最后一级',
          trigger: 'change'
        }]
      },
      modal1: false,
      isMuti: false,
      checkedList: [],
      lawId: '',
      dataDetail: '',
      columns: [
        {
          title: '行程名称',
          key: 'tripName'
        },
        {
          title: '行程日期',
          key: 'tripDate'
        },
        {
          title: '行程时间',
          key: 'tripTime'
        },
        {
          title: '签到日期',
          key: 'signDate'
        },
        {
          title: '签到时间',
          key: 'signTime'
        },
        {
          title: '行程评分',
          key: 'tripScore',
          width: 210,
          render: (h, params) => {
            return h('Rate', {
              props: {
                'value': parseInt(params.row.tripScore),
                'count': 5,
                'disabled': true,
                'show-text': true
              }
            })
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row.lawId, this.$router)
                    this.$router.push({path: '/tripDetail/' + this.lawId + '/' + params.row.tripNo, replace: true})
                  }
                }
              }, '查看')
            ])
          }
        }
      ],
      dataList: [],
      page: {
        total: 0,
        pageNum: 10, // 每页几条
        pageNo: 1 // 页码
      },
      communityColumns: [
        {
          title: '区域名称',
          key: 'areaName'
        },
        {
          title: '街名称',
          key: 'streetName'
        },
        {
          title: '社区名称',
          key: 'communityName'
        }
      ],
      communityColumnsEdit: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '区域名称',
          key: 'areaName'
        },
        {
          title: '街名称',
          key: 'streetName'
        },
        {
          title: '社区名称',
          key: 'communityName'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              // h('Button', {
              //   props: {
              //     type: 'primary',
              //     size: 'small'
              //   },
              //   style: {
              //     marginRight: '5px'
              //   },
              //   on: {
              //     click: () => {
              //     }
              //   }
              // }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      edit: false
    }
  },
  methods: {
    loadData () {
      this.$http.post(CONFIG.lawyerDetail.url, {
        head: CONFIG.lawyerDetail.head,
        body: {
          lawId: this.lawId
        }
      }, {
        headers: {
          tranCode: CONFIG.lawyerDetail.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.dataDetail = body
        } else {
          this.$Message.error('律师详情查询失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('律师详情查询失败!')
      })
    },
    loadTrip (pageNo) {
      if (pageNo) {
        this.page.pageNo = pageNo
      }
      this.$http.post(CONFIG.tripList.url, {
        head: CONFIG.tripList.head,
        body: {
          pageNum: this.page.pageNum,
          pageNo: this.page.pageNo,
          IdType: 0, // 律师
          ID: this.lawId
        }
      }, {
        headers: {
          tranCode: CONFIG.tripList.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.dataList = body.lawTripInfos
          if (body.total) {
            this.page.total = parseInt(body.total)
          }
        } else {
          this.$Message.error('行程查询失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('行程查询失败!')
      })
    },
    loadCommunityData (item, callback, queryType) {
      if (!item) {
        item = {
          loading: true,
          value: '01'
        }
      }
      item.loading = true
      this.$http.post(CONFIG.communityList.url, {
        head: CONFIG.communityList.head,
        body: {
          queryType: queryType || item.queryType,
          value: item.value
        }
      }, {
        headers: {
          tranCode: CONFIG.communityList.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          if (queryType) {
            this.data4 = body.children
            for (let i = 0; i < this.data4.length; i++) {
              this.data4[i].loading = false
              this.data4[i].children = []
            }
          } else {
            item.children = body.children
            for (let i = 0; i < item.children.length; i++) {
              // console.log(item.children[i])
              if (item.children[i].queryType === '03') {
                item.children[i].loading = false
                item.children[i].children = []
              }
            }
            item.loading = false
            callback && callback()
          }
        } else {
          this.$Message.error('查询失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('查询失败!')
      })
    },
    communityChange (value, selectedData) {
      if (value) {
        const label = selectedData.map(o => o.label)
        this.formEdit.communityName = label
      }
    },
    ok () {
      this.$refs['formEdit'].validate((valid) => {
        if (valid) {
          // console.log(this.formEdit.communityId)
          this.dataDetail.communityListInfos.push({
            areaId: this.formEdit.communityId[0],
            areaName: this.formEdit.communityName[0],
            streetId: this.formEdit.communityId[1],
            streetName: this.formEdit.communityName[1],
            communityId: this.formEdit.communityId[2],
            communityName: this.formEdit.communityName[2]
          })
          this.modal1 = false
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    updateEdit () {
      // console.log(this.dataDetail.communityListInfos)
      let communityIds = []
      for (var i = 0; i < this.dataDetail.communityListInfos.length; i++) {
        let com = {
          communityId: this.dataDetail.communityListInfos[i].communityId,
          communityName: this.dataDetail.communityListInfos[i].communityName
        }
        communityIds.push(com)
      }

      let paramItem = {
        'isComEdit': 0,
        'lawId': this.lawId,
        'communityIds': communityIds
      }
      this.$http.post(CONFIG.updateLaw.url, {
        head: CONFIG.updateLaw.head,
        body: paramItem
      }, {
        headers: {
          tranCode: CONFIG.updateLaw.head.tranCode
        }
      }).then(res => {
        res = res.data
        if (res.statusCode === CONFIG.STATUS_SUCCESS) {
          this.$Message.success('修改成功!')
          this.edit = false
          this.loadData()
        } else {
          this.$Message.error('修改失败!' + res.descMsg ? res.descMsg : '')
        }
      }, res => {
        this.$Message.error('修改失败!')
      })
    },
    remove (index) {
      if (index) { // 单条删除
        this.dataDetail.communityListInfos.splice(index, 1)
      } else { // 多条删除

      }
      console.log(index, this.checkedList)
    },
    // selectionChange (value, index, row) {
    //   console.log(value, value.index, index, row)
    //   this.checkedList = value
    //   if (value.length > 0) {
    //     this.isMuti = true
    //   } else {
    //     this.isMuti = false
    //   }
    // },
    cancel () {
      this.modal1 = false
      this.$refs['formEdit'].resetFields()
    },
    add () {
      this.render(-1)
    },
    render (index) {
      // if (index >= 0) {
      //   Object.assign(this.formEdit, this.dataList[index])
      // }
      this.modal1 = true
    }
  },
  created: function () {
    this.lawId = this.$route.params.lawId
    console.log(this.lawId)
    this.loadData() // 详情
    this.loadTrip() // 行程
    this.loadCommunityData(null, null, '01') // 所有社区
  }
}
</script>
