<template>
	<div class="layout v-header">
		<Menu mode="horizontal" :theme="theme1">
			<div class="layout-logo">艾特律师管理系统</div>
			<div class="layout-button">
				<Button type="ghost" @click="logout()">注销</Button>
			</div>
	        <div class="layout-nav">
		        <router-link to="/adviserList" class="navbar-brand" v-bind:class="{ 'v-active': $route.name == 'adviserDetail' || $route.name == 'tripDetail'}">
				    <MenuItem name="1">
				        <Icon type="navicon-round"></Icon>村居法律顾问信息查看
				    </MenuItem>
			    </router-link> 
			    
			    <router-link to="/adviserVerify" class="navbar-brand">
				    <MenuItem name="2">
				        <Icon type="eye"></Icon>村居法律顾问信息审核
				    </MenuItem>
			    </router-link> 
			    <router-link to="/userList" class="navbar-brand">
				    <MenuItem name="3">
				        <Icon type="person-stalker"></Icon></Icon>用户信息查看
				    </MenuItem>
			    </router-link> 
			</div>
		</Menu>
	</div>
</template>
<script>
import { CONFIG } from '../services/config'
export default {
  name: 'THeader',
  data () {
    return {
      theme1: 'dark'
    }
  },
  methods: {
    logout () {
      this.$http.post(CONFIG.logout.url, {
        head: CONFIG.logout.head,
        body: {
          redirecturl: window.location.href
        }
      }, {
        headers: {
          tranCode: CONFIG.logout.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.$Message.success({
            content: '注销成功!',
            duration: 2,
            onClose: () => {
              window.location.href = body
            }
          })
        } else {
          this.$Message.error('注销失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('注销失败!')
      })
    }
  }
}
</script>