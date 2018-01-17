<template>
  <div id="login">
    <div class="card">
      <h2 class="mb10">登录</h2>
      <Form ref="formQuery" :model="formQuery" :rules="ruleQuery" inline :label-width="100">
          <FormItem label="操作员ID" prop="operId">
              <Row>
                  <Col span="24">
                      <Input type="text" v-model="formQuery.operId" placeholder="请输入操作员ID">
                      </Input>
                  </Col>
              </Row>
          </FormItem>
          <FormItem class="pull-right mb0">
              <Button type="primary" @click="ok" class="mr10">登录</Button>
              <Button type="ghost" @click="$refs['formQuery'].resetFields();ok()">重置</Button>
          </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'login',
  data () {
    return {
      formQuery: {
        communityId: '',
        orderType: '01',
        orderMethod: '0' // 0 正序，1 倒序
      },
      ruleQuery: {
      }
    }
  },
  methods: {
    ok () {
      this.$refs['formEdit'].validate((valid) => {
        if (valid) {
          let paramItem = {
            'lawId': this.formEdit.lawId,
            'communityId': this.formEdit.communityId
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
    }
  },
  created: function () {
  }
}
</script>
