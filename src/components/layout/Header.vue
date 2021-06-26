<template>
  <el-row id="header" class="header">
    <el-col :span="6">
      <el-image :src="logo" class="logo"></el-image>
    </el-col>
    <el-col :span="18" style="display: flex; justify-content: flex-end">
      <el-menu
        router
        unique-opened
        :default-active="$router.path"
        mode="horizontal"
      >
        <template v-for="item in items">
          <!--第一层路由：是否有子目录-->
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <!--                <i :class="item.icon"></i>-->
                <span slot="title">{{ item.title }}</span>
              </template>

              <template v-for="subItem in item.subs">
                <!--第二层目录：是否有子目录-->
                <el-submenu
                  v-if="subItem.subs"
                  :index="item.index + '/' + subItem.index"
                  :key="item.index + '/' + subItem.index"
                >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="
                      item.index + '/' + subItem.index + '/' + threeItem.index
                    "
                  >
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-submenu>

                <el-menu-item
                  v-else
                  :index="item.index + '/' + subItem.index"
                  :key="item.index + '/' + subItem.index"
                  >{{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>

          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <!--              <i :class="item.icon"></i>-->
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import Logo from "@/image/logo.png";

export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      logo: Logo,
      items: [
        {
          icon: "el-icon-s-home",
          index: "/",
          title: "首页",
        },
        {
          icon: "el-icon-s-order",
          index: "/solution",
          title: "解决方案",
          subs: [
            {
              index: "dataCenter",
              title: "网络安全",
            },
            {
              index: "network",
              title: "企业网络",
            },
            {
              index: "cloud",
              title: "无线方案",
            },
          ],
        },
        // {
        //   icon: "el-icon-s-order",
        //   index: "/case",
        //   title: "成功案例",
        // },
        // {
        //   icon: "el-icon-s-order",
        //   index: "/service",
        //   title: "服务支持",
        // },
        {
          icon: "el-icon-s-order",
          index: "/recruitment",
          title: "人才招聘",
        },
        {
          icon: "el-icon-s-order",
          index: "/about",
          title: "关于我们",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
  .logo {
    width: 15vw;
  }
  & ::v-deep .el-submenu__title {
    height: 10vh;
    line-height: 10vh;
    font-size: 1rem;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 0 #e6e6e6;

  & > .el-menu-item {
    height: 10vh;
    line-height: 10vh;
    font-size: 1rem;
  }
}
</style>
