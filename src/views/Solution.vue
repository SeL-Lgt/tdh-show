<template>
  <div id="solution" ref="container">
    <el-container>
      <el-aside width="20vw">
        <div ref="menuTop">
          <el-scrollbar :class="{ elTop: status }">
            <el-menu
              ref="menu"
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
        </div>
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
          index: "Network",
          title: "企业网络",
          subs: network,
        },
        {
          index: "DataCenter",
          title: "网络安全",
          subs: dataCenter,
        },
        {
          index: "Cloud",
          title: "无线方案",
          subs: cloud,
        },
      ],
      status: false,
      mTop: 0,
      top: 0,
    };
  },
  mounted() {
    this.menuOpen();
    window.addEventListener("scroll", this.handleScroll);
    this.mTop = this.$refs.menuTop.getBoundingClientRect().top;
    this.top = this.$refs.container.getBoundingClientRect().top;
  },
  watch: {
    $route(to, from) {
      if (
        to.path.split("/")[2] !== from.path.split("/")[2] &&
        to.path.split("/")[2] !== "detail"
      ) {
        this.menuOpen();
      }
    },
  },
  methods: {
    menuOpen() {
      let type = this.$route.meta.type;
      if (type === "Detail") {
        type = location.href.split("type=")[1].split("&")[0];
      }
      this.$refs.menu.open(type);
    },
    handleOpen(key) {
      this.$router.push({
        name: key,
      });
    },
    handleSelect(index, indexPath) {
      if (indexPath) {
        this.$router.push({
          name: "Detail",
          query: { type: indexPath[0], name: indexPath[1] },
        });
      }
    },

    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const top = (2 * this.top - this.mTop) / 2 + this.top;
      if (scrollTop > top) {
        this.status = true;
      } else {
        this.status = false;
      }
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
    width: 20vw;
  }

  .elTop {
    position: fixed;
    top: 2.5vh;
  }

  ::v-deep .el-menu-item {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: break-spaces;
  }
}
</style>
