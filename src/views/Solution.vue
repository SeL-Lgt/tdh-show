<template>
  <div id="solution">
    <el-container>
      <el-aside width="20vw">
        <el-scrollbar>
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleOpen"
            unique-opened
          >
            <template v-for="item in items">
              <!--第一层路由：是否有子目录-->
              <template v-if="item.subs">
                <el-submenu :index="item.index" :key="item.index">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                  </template>

                  <template v-for="subItem in item.subs">
                    <!--第二层目录：是否有子目录-->
                    <el-submenu
                      v-if="subItem.subs"
                      :index="subItem.index"
                      :key="item.index + '/' + subItem.index"
                    >
                      <template slot="title">{{ subItem.title }}</template>
                      <el-menu-item
                        v-for="(threeItem, i) in subItem.subs"
                        :key="i"
                        :index="
                          '/solution/' +
                          item.index +
                          '/' +
                          subItem.index +
                          '/' +
                          threeItem.index
                        "
                      >
                        {{ threeItem.title }}
                      </el-menu-item>
                    </el-submenu>

                    <el-menu-item
                      v-else
                      :index="subItem.index"
                      :key="subItem.index"
                      >{{ subItem.title }}
                    </el-menu-item>
                  </template>
                </el-submenu>
              </template>

              <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { dataCenter, network, cloud } from "@/json/list";

export default {
  name: "Solution",
  data() {
    return {
      items: [
        {
          index: "DataCenter",
          title: "数据中心",
          subs: dataCenter,
        },
        {
          index: "Network",
          title: "企业网络",
          subs: network,
        },
        {
          index: "Cloud",
          title: "云计算",
          subs: cloud,
        },
      ],
    };
  },
  methods: {
    handleOpen(key) {
      this.$router.push({
        name: key,
      });
    },
    handleSelect(index, indexPath) {
      this.$router.push({
        name: "Detail",
        query: { type: indexPath[0], name: indexPath[1] },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#solution {
  background: #409eff;
  padding: 5vh 5vw;

  .el-main {
    padding: 0 0 0 1vw;
  }
  .el-scrollbar {
    height: 70vh;
  }
}
</style>
