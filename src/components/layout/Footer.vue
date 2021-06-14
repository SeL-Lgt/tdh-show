<template>
  <div id="footer">
    <el-row>
      <el-col :span="8" class="nav">
        <div>官网首页</div>
        <div>解决方案</div>
        <div>成功案例</div>
        <div>服务支持</div>
        <div>人才招聘</div>
        <div>关于我们</div>
      </el-col>

      <el-col :span="8">
        <div class="title">深圳公司</div>
        <div class="content">
          <div class="name">深圳市天地和网络有限公司</div>
          <div class="address">
            广东省深圳市福田区园岭街道八卦岭工业园511栋805
          </div>
          <div class="phone">电话：0755-82899455</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="title">北京公司</div>
        <div class="content">
          <div class="name">北京天地和诚科技发展有限公司</div>
          <div class="address">
            北京朝阳区驼房营南路8号新华科技大厦A座1012室
          </div>
          <div class="phone">电话：13126675546</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="record">
      <div class="foot-title">Copyright&nbsp;©<span>2021深圳市天地和网络有限公司</span></div>
      <a href="https://beian.miit.gov.cn" target="_blank">ICP备案号：粤ICP备2021048195号</a>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  height: 100%;
  color: #a6a9b5;
  background: #2d2e36;
  padding: 20px 5vw;

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 1vh;
  }

  .content {
    div {
      padding: 0.5vh;
    }
  }

  .record {
    text-align: center;
    font-size: 0.9rem;

    .foot-title {
      white-space: break-spaces;
      padding: 1vh 0;
      span{
        margin-left: 0.5vw;
      }
    }

    a {
      color: #a6a9b5;
      text-decoration: none;
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
      border-left: 2px solid #409eff;
      width: 45%;
      text-align: left;
      font-size: 1.2rem;
      margin-bottom: 2vh;
      padding-left: 0.5vw;

      &:hover {
        color: #e6e6e6;
      }
    }
  }
}
</style>
