<template>
  <div id="tripDetail">
    <Breadcrumb class="mt20 ml20">
        <BreadcrumbItem>
          <router-link to="/adviserList">
            村居法律顾问列表
          </router-link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <router-link :to="'/adviserDetail/' + lawId">
            村居法律顾问
          </router-link>
        </BreadcrumbItem>
        <BreadcrumbItem>行程详情</BreadcrumbItem>
    </Breadcrumb>
    <div class="card">
      <h2 class="card-title">行程详情</h2>
      <div class="overflow">
        <div class="detail-head-right">
          <Row>
              <Col span="8">
                  行程主题：
                  <span v-if="dataDetail.tripName">{{dataDetail.tripName}}</span>
                  <span v-if="!dataDetail.tripName" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  行程日期：
                  <span v-if="dataDetail.tripDate">{{dataDetail.tripDate}}</span>
                  <span v-if="!dataDetail.tripDate" class="subtitle">暂无</span>
              </Col>
              <!-- <Col span="8">
                  行程状态：
                  <span v-if="dataDetail.tripStt == '0'">已结束</span>
                  <span v-if="dataDetail.tripStt == '1'">进行中</span>
                  <span v-if="dataDetail.tripStt == '2'">未开始</span>
                  <span v-if="dataDetail.tripStt == '3'">行程取消</span>
                  <span v-if="!dataDetail.tripStt" class="subtitle">暂无</span>
              </Col> -->
              <Col span="8">
                  服务社区（村）：
                  <span v-if="dataDetail.tripDate">{{dataDetail.tripDate}}</span>
                  <span v-if="!dataDetail.tripDate" class="subtitle">暂无</span>
              </Col>
          </Row>
          <Row>
              <Col span="8">
                  上门服务签到时间：
                  <span v-if="dataDetail.communityId">{{dataDetail.communityId}}</span>
                  <span v-if="!dataDetail.communityId" class="subtitle">暂无</span>
              </Col>
              <Col span="8">
                  上门服务签到地点：
                  <span v-if="dataDetail.tripArea || dataDetail.tripDoor">{{dataDetail.tripArea}} {{dataDetail.tripDoor}}</span>
                  <span v-if="!dataDetail.tripArea && !dataDetail.tripDoor" class="subtitle">暂无</span>
              </Col>
          </Row>
          <Row class="mb10">
              <Col span="24">
                  上门服务签到照片：
                  <img v-if="dataDetail.signPhoto" class="trip-detail-img" :src="dataDetail.signPhoto" alt="">
                  <span v-if="!dataDetail.signPhoto" class="subtitle">暂无</span>
              </Col>
          </Row>
          <Row>
              <Col span="24">
                  综合评分：
                  <span v-if="dataDetail.tripScore">
                    <Rate :value="parseInt(dataDetail.tripScore)" disabled show-text></Rate>
                  </span>
                  <span v-if="!dataDetail.tripScore" class="subtitle">暂无</span>
              </Col>
          </Row>
        </div>
      </div>
      <div class="detail-content">
        <Row>
            <Col span="6">
                <div class="detail-time">
                  <h2>法治讲座</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[0] || 0}}<span>人次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>法律咨询</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[1] || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>调解纠纷</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[2] || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>培训骨干</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[3] || 0}}<span>人</span></h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <div class="detail-time">
                  <h2>发放资料</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[4] || 0}}<span>份</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>法律援助</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[5] || 0}}<span>次</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>代写文书</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[6] || 0}}<span>份</span></h2>
                </div>
            </Col>
            <Col span="6">
                <div class="detail-time">
                  <h2>完善村居制度</h2>
                  <h2 v-if="dataDetail.detailNums">{{dataDetail.detailNums[7] || 0}}<span>个</span></h2>
                </div>
            </Col>
        </Row>
      </div>
    </div>
    <div class="text-center mt10 mb30">
      <router-link :to="'/adviserDetail/' + lawId">
        <Button type="primary" size="large" class="width100">返回</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { CONFIG } from '../services/config'
export default {
  name: 'tripDetail',
  data () {
    return {
      lawId: '',
      tripNo: '',
      dataDetail: ''
    }
  },
  methods: {
    loadData () {
      this.$http.post(CONFIG.tripDetail.url, {
        head: CONFIG.tripDetail.head,
        body: {
          tripNo: this.tripNo
        }
      }, {
        headers: {
          tranCode: CONFIG.tripDetail.head.tranCode
        }
      }).then(res => {
        res = res.data
        const head = res.head
        const body = res.body
        if (head.errorCode === CONFIG.SUCCESS_CODE) {
          this.dataDetail = body
          if (this.dataDetail.detailNums) {
            this.dataDetail.detailNums = this.dataDetail.detailNums.split('|')
          }
        } else {
          this.$Message.error('行程详情查询失败!' + head.errorMsg ? head.errorMsg : '')
        }
      }, res => {
        this.$Message.error('行程详情查询失败!')
      })
    }
  },
  created: function () {
    this.lawId = this.$route.params.lawId
    this.tripNo = this.$route.params.tripNo
    // console.log(this.lawId, this.tripNo)
    this.loadData()
  }
}
</script>
