<template>
  <div id="adviserList">
    <div class="card">
      <h2 class="mb10">村居法律顾问信息查看</h2>
      <Form ref="formQuery" :model="formQuery" :rules="ruleQuery" inline :label-width="100">
          <FormItem label="服务社区（村）" prop="communityName">
              <Row>
                  <Col span="24">
                      <Input type="text" v-model="formQuery.communityName" placeholder="请输入服务社区（村）">
                      </Input>
                  </Col>
              </Row>
          </FormItem>
          <FormItem class="pull-right mb0">
              <Button type="primary" @click="search" class="mr10">查询</Button>
              <Button type="ghost" @click="$refs['formQuery'].resetFields();search()">重置</Button>
          </FormItem>
      </Form>
    </div>
    <div class="card overflow">
      <div class="pull-right mb10">
        <Button :type="formQuery.orderType == '01' ? 'info' : 'primary'" size="large" @click="formQuery.orderType='01';formQuery.orderMethod=(formQuery.orderMethod == '1' ? '0' :'1');loadData();">
          <span class="sorter">
            <Icon type="arrow-up-b" :class="formQuery.orderType == '01' && formQuery.orderMethod == '1' ? 'active' : ''"></Icon>
            <Icon type="arrow-down-b" :class="formQuery.orderType == '01' && formQuery.orderMethod == '0' ? 'active' : ''"></Icon>
          </span>
          按评价排序
        </Button>
        <Button :type="formQuery.orderType == '02' ? 'info' : 'primary'" size="large" @click="formQuery.orderType='02';formQuery.orderMethod=(formQuery.orderMethod == '1' ? '0' :'1');loadData();">
          <span class="sorter">
            <Icon type="arrow-up-b" :class="formQuery.orderType == '02' && formQuery.orderMethod == '1' ? 'active' : ''"></Icon>
            <Icon type="arrow-down-b" :class="formQuery.orderType == '02' && formQuery.orderMethod == '0' ? 'active' : ''"></Icon>
          </span>
         按发布行程次数排序</Button>
        <Button :type="formQuery.orderType == '03' ? 'info' : 'primary'" size="large" @click="formQuery.orderType='03';formQuery.orderMethod=(formQuery.orderMethod == '1' ? '0' :'1');loadData();">
          <span class="sorter">
            <Icon type="arrow-up-b" :class="formQuery.orderType == '03' && formQuery.orderMethod == '1' ? 'active' : ''"></Icon>
            <Icon type="arrow-down-b" :class="formQuery.orderType == '03' && formQuery.orderMethod == '0' ? 'active' : ''"></Icon>
          </span>
         按上门服务次数排序</Button>
      </div>
      <Table border :columns="columns" :data="dataList" class="clear-both"></Table>
      <Page class="pull-right mt10" :total="page.total" @on-change="loadData($event)" show-total show-elevator :page-size="page.pageNum"></Page>
    </div>
    <!-- <Modal
        width="560"
        v-model="modal1"
        :closable="false"
        title="调整"
        @on-cancel="cancel()" 
        class-name="vertical-center-modal">
        <Form ref="formEdit" :model="formEdit" :label-width="100" :rules="ruleEdit">
          <FormItem label="律师头像" prop="lawHead">
              <div class="detail-head">
                <img v-if="formEdit.lawHead" :src="hostFront + formEdit.lawHead" alt="">
                <Icon type="person" v-if="!formEdit.lawHead"></Icon>
              </div>
          </FormItem>
          <FormItem label="律师名称" prop="lawName">
              <span v-if="formEdit.lawName">{{formEdit.lawName}}</span>
              <span v-if="!formEdit.lawName" class="subtitle">暂无</span>
          </FormItem>
          <FormItem label="联系电话" prop="lawMobileno">
              <span v-if="formEdit.lawMobileno">{{formEdit.lawMobileno}}</span>
              <span v-if="!formEdit.lawMobileno" class="subtitle">暂无</span>
          </FormItem>
          <FormItem label="所在单位" prop="lawCompany">
              <span v-if="formEdit.lawCompany">{{formEdit.lawCompany}}</span>
              <span v-if="!formEdit.lawCompany" class="subtitle">暂无</span>
          </FormItem>
          <FormItem label="律师邮件" prop="lawEmail">
              <span v-if="formEdit.lawEmail">{{formEdit.lawEmail}}</span>
              <span v-if="!formEdit.lawEmail" class="subtitle">暂无</span>
          </FormItem>
          <FormItem label="村居服务社区" prop="communityId">
              <Cascader :data="data4" :load-data="loadCommunityData" v-model="formEdit.communityId"></Cascader>
          </FormItem>
      </Form>
      <div slot="footer">
          <Button type="ghost" @click="cancel">取消</Button>
          <Button type="primary" @click="ok()">调整</Button>
      </div>
    </Modal> -->
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'adviserList',
  data () {
    return {
      hostFront: CONFIG.hostFront,
      // data4: [],
      formQuery: {
        communityName: '',
        orderType: '01',
        orderMethod: '0' // 0 正序，1 倒序
      },
      ruleQuery: {
      },
      // formEdit: {
      //   communityId: []
      // },
      // ruleEdit: {
      // },
      // modal1: false,
      loadingStatus: false,
      columns: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '村居法律顾问姓名',
          key: 'lawName'
        },
        {
          title: '村居法律顾问性别',
          key: 'lawSex',
          render: (h, params) => {
            return h('div', (params.row.lawSex === '0' ? '男' : '女'))
          }
        },
        {
          title: '联系电话',
          key: 'lawMobileno'
        },
        {
          title: '所在单位',
          key: 'lawCompany'
        },
        {
          title: '服务社区（村）',
          key: 'communityName'
        },
        {
          title: '发布行程次数',
          key: 'tripNums'
        },
        {
          title: '签上门服务次数',
          key: 'signNums'
          // sortable: true
        },
        {
          title: '综合评价',
          key: 'lawScore',
          width: 210,
          render: (h, params) => {
            return h('Rate', {
              props: {
                'value': parseInt(params.row.lawScore),
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
                    this.$router.push({path: '/adviserDetail/' + params.row.lawId})
                  }
                }
              }, '查看详情')
              // h('Button', {
              //   props: {
              //     type: 'error',
              //     size: 'small'
              //   },
              //   on: {
              //     click: () => {
              //       this.render(params.index)
              //     }
              //   }
              // }, '调整')
            ])
          }
        }
      ],
      dataList: [],
      page: {
        total: 0,
        pageNum: 10, // 每页几条
        pageNo: 1 // 页码
      }
    }
  },
  methods: {
    // loadCommunityData (item, callback, queryType) {
    //   console.log('load', item)
    //   if (!item) {
    //     item = {
    //       loading: true,
    //       value: '01'
    //     }
    //   }
    //   item.loading = true
    //   this.$http.post(CONFIG.communityList.url, {
    //     head: CONFIG.communityList.head,
    //     body: {
    //       queryType: queryType || item.queryType,
    //       value: item.value
    //     }
    //   }, {
    //     headers: {
    //       tranCode: CONFIG.communityList.head.tranCode
    //     }
    //   }).then(res => {
    //     res = res.data
    //     const head = res.head
    //     const body = res.body
    //     if (head.errorCode === CONFIG.SUCCESS_CODE) {
    //       if (queryType) {
    //         this.data4 = body.children
    //         for (let i = 0; i < this.data4.length; i++) {
    //           this.data4[i].loading = false
    //           this.data4[i].children = []
    //         }
    //       } else {
    //         item.children = body.children
    //         for (let i = 0; i < item.children.length; i++) {
    //           // console.log(item.children[i])
    //           if (item.children[i].queryType === '03') {
    //             item.children[i].loading = false
    //             item.children[i].children = []
    //           }
    //         }
    //         item.loading = false
    //         callback && callback()
    //       }
    //     } else {
    //       this.$Message.error('查询失败!' + head.errorMsg ? head.errorMsg : '')
    //     }
    //   }, res => {
    //     this.$Message.error('查询失败!')
    //   })
    // },
    search () {
      this.$refs['formQuery'].validate((valid) => {
        if (valid) {
          this.loadData()
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    // ok () {
    //   this.$refs['formEdit'].validate((valid) => {
    //     if (valid) {
    //       console.log(this.formEdit.communityId)
    //       if (this.formEdit.communityId.length !== 3) {
    //         this.$Message.error('服务社区请选到最后一级社区!')
    //       } else {
    //         let paramItem = {
    //           'lawId': this.formEdit.lawId,
    //           'communityId': this.formEdit.communityId[2]
    //         }
    //         this.$http.post(CONFIG.updateLaw.url, {
    //           head: CONFIG.updateLaw.head,
    //           body: paramItem
    //         }, {
    //           headers: {
    //             tranCode: CONFIG.updateLaw.head.tranCode
    //           }
    //         }).then(res => {
    //           res = res.data
    //           if (res.statusCode === CONFIG.STATUS_SUCCESS) {
    //             this.$Message.success('调整成功!')
    //             this.$refs['formEdit'].resetFields()
    //             this.modal1 = false
    //             this.loadData()
    //           } else {
    //             this.$Message.error('调整失败!' + res.descMsg ? res.descMsg : '')
    //           }
    //         }, res => {
    //           this.$Message.error('调整失败!')
    //         })
    //       }
    //     } else {
    //       this.$Message.error('表单验证失败!')
    //     }
    //   })
    // },
    // cancel () {
    //   this.modal1 = false
    //   this.$refs['formEdit'].resetFields()
    // },
    // render (index) {
    //   if (index >= 0) {
    //     Object.assign(this.formEdit, this.dataList[index])
    //   }
    //   this.modal1 = true
    // },
    loadData (pageNo) {
      if (pageNo) {
        this.page.pageNo = pageNo
      }
      this.$http.post(CONFIG.lawyerList.url, {
        head: CONFIG.lawyerList.head,
        body: {
          pageNum: this.page.pageNum,
          pageNo: this.page.pageNo,
          communityName: this.formQuery.communityName,
          orderType: this.formQuery.orderType,
          orderMethod: this.formQuery.orderMethod,
          audStt: '*'
        }
      }, {
        headers: {
          tranCode: CONFIG.lawyerList.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.dataList = body.lawInfos
          if (body.total) {
            this.page.total = parseInt(body.total)
          }
        } else {
          this.$Message.error('查询失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('查询失败!')
      })
    }
  },
  created: function () {
    this.loadData()
    // this.loadCommunityData(null, null, '01')
  }
}
</script>
