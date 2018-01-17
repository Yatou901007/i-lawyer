<template>
  <div id="userList">
    <div class="card">
      <h2 class="mb10">用户信息查看</h2>
      <Form ref="formQuery" :model="formQuery" :rules="ruleQuery" inline :label-width="100">
          <FormItem label="时间从" prop="startDate">
              <Row>
                  <Col span="24">
                      <DatePicker type="date" :editable="false" :clearable="false" placeholder="选择日期" :value="formQuery.startDate" format="yyyy-MM-dd" @on-change="formQuery.startDate = $event"></DatePicker>
                  </Col>
              </Row>
          </FormItem>
          <FormItem label="到" prop="endDate">
              <Row>
                  <Col span="24">
                      <DatePicker type="date" :editable="false" :clearable="false" placeholder="选择日期" :value="formQuery.endDate" format="yyyy-MM-dd" @on-change="formQuery.endDate = $event"></DatePicker>
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
      <Table border :columns="columns" :data="dataList" class="clear-both"></Table>
      <Page class="pull-right mt10" :total="page.total" @on-change="loadData($event)" show-total show-elevator :page-size="page.pageNum"></Page>
    </div>
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'userList',
  data () {
    return {
      formQuery: {
        startDate: this.get3MonthBefor(),
        endDate: this.getNowDate()
      },
      ruleQuery: {
        startDate: [
          { required: true, message: '开始日期不能为空', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (this.formQuery.endDate && new Date(this.formQuery.endDate).getTime() < new Date(value).getTime()) {
                callback(new Error())
              } else {
                callback()
              }
            },
            message: '开始日期应小于结束日期',
            trigger: 'change'
          }
        ],
        endDate: [
          { required: true, message: '结束日期不能为空', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (this.formQuery.startDate && new Date(value).getTime() < new Date(this.formQuery.startDate).getTime()) {
                callback(new Error())
              } else {
                callback()
              }
            },
            message: '结束日期应大于开始日期',
            trigger: 'change'
          }
        ]
      },
      loadingStatus: false,
      columns: [
        {
          title: '用户姓名',
          key: 'userName'
        },
        {
          title: '联系电话',
          key: 'userMobileno'
        },
        {
          title: '服务社区（村）',
          key: 'companyName'
        },
        {
          title: '注册日期',
          key: 'regDate'
        },
        {
          title: '历史报名次数',
          key: 'signNum'
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
    get3MonthBefor () {
      let resultDate, year, month, date
      let currDate = new Date()
      year = currDate.getFullYear()
      month = currDate.getMonth() + 1
      date = currDate.getDate()
      // hms = currDate.getHours() + ':' + currDate.getMinutes() + ':' + (currDate.getSeconds() < 10 ? '0' + currDate.getSeconds() : currDate.getSeconds())
      switch (month) {
        case 1:
        case 2:
        case 3:
          month += 9
          year--
          break
        default:
          month -= 3
          break
      }
      month = (month < 10) ? ('0' + month) : month
      resultDate = year + '-' + month + '-' + date
      console.log(resultDate)
      return resultDate
    },
    getNowDate () {
      let date = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? ('0' + new Date().getDate()) : new Date().getDate())
      return date
    },
    search () {
      this.$refs['formQuery'].validate((valid) => {
        if (valid) {
          this.loadData()
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    loadData (pageNo) {
      if (pageNo) {
        this.page.pageNo = pageNo
      }
      this.$http.post(CONFIG.userList.url, {
        head: CONFIG.userList.head,
        body: {
          pageNum: this.page.pageNum,
          pageNo: this.page.pageNo,
          startDate: this.formQuery.startDate.replace(/-/g, ''),
          endDate: this.formQuery.endDate.replace(/-/g, '')
        }
      }, {
        headers: {
          tranCode: CONFIG.userList.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.dataList = body.useInfos
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
