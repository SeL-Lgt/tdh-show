<template>
  <el-card>
    <el-row class="top">
      <p class="title">
        {{ detail.title }}
      </p>
      <p class="time">
        {{ detail.date }}
      </p>
    </el-row>
    <el-row class="content">
      <el-scrollbar>
        <el-row
          class="message"
          v-for="(item, index) in detail.content"
          :key="index"
        >
          <div>{{ item.message }}</div>
        </el-row>
      </el-scrollbar>
    </el-row>
  </el-card>
</template>

<script>
import { cloud, dataCenter, network } from "@/json/list";

export default {
  data() {
    return {
      list: [],
      detail: "",
    };
  },
  mounted() {
    this.changType();
    this.changEven();
  },
  watch: {
    $route(to, from) {
      if (to != from) {
        this.changType();
        this.changEven();
      }
    },
  },
  methods: {
    changEven() {
      this.list.map((item) => {
        if (item.index === this.$route.query.name) {
          this.detail = item;
        }
      });
    },
    changType() {
      let type = this.$route.query.type;
      console.log(type);
      switch (type) {
        case "DataCenter": {
          this.list = dataCenter;
          break;
        }
        case "Network": {
          this.list = network;
          break;
        }
        case "Cloud": {
          this.list = cloud;
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  text-align: center;
  margin-bottom: 1vh;

  .title {
    font-size: 1.5rem;
  }
  .time {
    padding-top: 1vh;
    color: #909399;
  }
}
.content {
  .message {
    padding-bottom: 1.5vh;
    text-indent: 2rem;
    &:last-child {
      padding-bottom: 0;
    }
  }
}
.el-scrollbar{
  height: 70vh;
}
</style>
