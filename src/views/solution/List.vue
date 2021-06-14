<template>
  <el-card id="list">
    <template>
      <div class="title">{{ title }}</div>
      <el-scrollbar>
        <template v-for="(item, index) in list">
          <el-row
            class="content"
            type="flex"
            justify="space-between"
            align="middle"
            :key="index"
            @click.native="toDetail(item)"
          >
            <p class="item_title">{{ item.title }}</p>
            <i class="el-icon-arrow-right" />
          </el-row>
        </template>
      </el-scrollbar>
    </template>
  </el-card>
</template>

<script>
import { dataCenter, network, cloud } from "@/json/list";

export default {
  name: "list",
  data() {
    return {
      activeNames: "",
      list: "",
      name: "",
    };
  },
  computed: {
    title: function () {
      return this.$route.meta.title;
    },
    type: function () {
      let type = this.$route.meta.type;
      const _this = this;
      switch (type) {
        case "DataCenter": {
          _this.list = dataCenter;
          break;
        }
        case "Network": {
          _this.list = network;
          break;
        }
        case "Cloud": {
          _this.list = cloud;
          break;
        }
      }
      return type;
    },
  },
  watch: {
    type: {
      handler() {
        switch (this.type) {
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
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        query: { type: this.type, name: item.index },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#list {
  .title {
    text-align: center;
    font-size: 1.5rem;
  }
  ::v-deep .el-card__body {
    padding: 20px 0;
  }
  .el-scrollbar {
    height: 70vh;
    padding: 0 20px;
  }

  .content {
    border-bottom: 1px solid #ebeef5;
    padding: 2vh 0;
  }
  .detail {
    padding: 0 20px;
  }
}
</style>
