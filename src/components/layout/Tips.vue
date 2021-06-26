<template>
  <div id="tips">
    <el-row>
      <el-popover
        placement="left"
        title="公司邮箱"
        width="4vw"
        trigger="click"
        content="wangyj@chinatdhc.com"
      >
        <el-button slot="reference">
          <i class="el-icon-info" />
        </el-button>
      </el-popover>
    </el-row>
    <el-row>
      <el-popover
        placement="left"
        title="联系电话"
        width="4vw"
        trigger="click"
        content="0755-82899455"
      >
        <el-button slot="reference">
          <i class="el-icon-phone-outline" />
        </el-button>
      </el-popover>
    </el-row>
    <el-row>
      <div @click="goTop">
        <i class="el-icon-caret-top" />
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Tips",
  data() {
    return {};
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#tips {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 4vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  background: linear-gradient(225deg, #f0f0f0, #ffffff);
  box-shadow: 5px 10px 13px #535353, 16px -16px 13px #0000;

  .el-button {
    background: transparent;
    border: 0;
    padding: 0;
  }
  .el-row {
    height: 100%;
    display: flex;
    align-items: center;

    i {
      font-size: 2rem;
    }

    i:hover {
      color: #409eff;
    }
  }
}
</style>
