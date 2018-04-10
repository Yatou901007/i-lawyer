<template>
  <div id="adviserList">
    <div class="card">
      <h2 class="mb10">村居法律顾问信息审核</h2>
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
    <Modal
        width="560"
        v-model="modal1"
        :closable="false"
        title="审核"
        @on-cancel="cancel()" 
        class-name="vertical-center-modal">
        <Form ref="formEdit" :model="formEdit" :label-width="100" :rules="ruleEdit">
          <FormItem label="审核结果" prop="verifyStt">
              <i-switch v-model="formEdit.verifyStt" size="large" true-value='0' false-value='1'>
                  <span slot="open">通过</span>
                  <span slot="close">驳回</span>
              </i-switch>
          </FormItem>
      </Form>
      <div slot="footer">
          <Button type="ghost" @click="cancel">取消</Button>
          <Button type="primary" @click="ok()">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'adviserList',
  data () {
    return {
      formQuery: {
        communityName: '',
        orderType: '01',
        orderMethod: '0' // 0 正序，1 倒序
      },
      ruleQuery: {
      },
      formEdit: {
        verifyStt: '0'
      },
      ruleEdit: {
      },
      modal1: false,
      loadingStatus: false,
      columns: [
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
        // {
        //   title: '服务社区（村）',
        //   key: 'communityId'
        // },
        {
          title: '注册日期',
          key: 'tripNums'
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
                on: {
                  click: () => {
                    this.$router.push({path: '/adviserDetail/' + params.row.lawId + '/1'})
                    // this.render(params.index)
                  }
                }
              }, '审核')
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
    search () {
      this.$refs['formQuery'].validate((valid) => {
        if (valid) {
          this.loadData()
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    ok () {
      this.$refs['formEdit'].validate((valid) => {
        if (valid) {
          let paramItem = {
            'lawId': this.formEdit.lawId,
            'verifyStt': this.formEdit.verifyStt
          }
          this.$http.post(CONFIG.verifyLaw.url, {
            head: CONFIG.verifyLaw.head,
            body: paramItem
          }, {
            headers: {
              tranCode: CONFIG.verifyLaw.head.tranCode
            }
          }).then(res => {
            res = res.data
            if (res.statusCode === CONFIG.STATUS_SUCCESS) {
              this.$Message.success('审核成功!')
              this.$refs['formEdit'].resetFields()
              this.modal1 = false
              this.loadData()
            } else {
              this.$Message.error('审核失败!' + res.descMsg ? res.descMsg : '')
            }
          }, res => {
            this.$Message.error('审核失败!')
          })
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    cancel () {
      this.modal1 = false
      this.$refs['formEdit'].resetFields()
    },
    render (index) {
      if (index >= 0) {
        Object.assign(this.formEdit, this.dataList[index])
        this.formEdit.verifyStt = '0'
      }
      this.modal1 = true
    },
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
          audStt: 1 // 未审核
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
  }
}
</script>
