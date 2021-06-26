<template>
  <div class="home">
    <el-row>
      <el-carousel height="500px" direction="vertical" :autoplay="false">
        <el-carousel-item
          :style="{
            background: `url(${home}) center 25%/100% 100% no-repeat`,
          }"
        >
          <div class="bigTitle">天时&nbsp;地利&nbsp;人和</div>
          <div class="bigInfo">——做有品质的ICT服务商</div>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row class="resolve">
      <div class="top">
        <p class="title">解决方案</p>
        <p class="info">致力于为客户提供优质解决方案</p>
      </div>
      <div class="content">
        <el-carousel type="card" height="35vh">
          <el-carousel-item v-for="(item, index) in Case" :key="index">
            <el-card
              class="card"
              style="height: 35vh; display: flex; align-items: center"
              @click.native="toDetail(item)"
            >
              <el-row class="layout">
                <el-col :span="12">
                  <el-image fit="fill" :src="item.img" />
                </el-col>
                <el-col :span="12">
                  <p class="title">{{ item.title }}</p>
                  <p class="type">{{ item.nType }}</p>
                  <p class="message">{{ item.message }}</p>
                </el-col>
              </el-row>
            </el-card>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>

    <el-row class="teamwork">
      <div class="top">
        <p class="title">合作伙伴</p>
        <p class="info">
          深圳市天地和网络有限公司已经与HUAWEI、Cisco、H3C、Uniview、IBM等国内外优秀企业结为重要的战略合作伙伴关系，双方优势互补，合作共赢，共同推动中国网络产业发展。
        </p>
      </div>
      <el-row class="content">
        <el-col :span="6" v-for="(item, index) in brand" :key="index">
          <el-image fit="scale-down" style="height: 10vh" :src="item.url" />
        </el-col>
      </el-row>
    </el-row>

    <el-row class="honor">
      <div class="top">
        <p class="title">公司资质</p>
      </div>
      <el-carousel :interval="2000" type="card" height="50vh">
        <el-carousel-item v-for="(item, index) in honor" :key="index">
          <el-image
            fit="scale-down"
            style="height: 50vh"
            :src="item.url"
            :preview-src-list="listUrl"
          />
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </div>
</template>

<script>
import cloud from "@/assets/icon-cloud.svg";
import home from "@/image/home.png";
import { brand, partner } from "@/image/home/homeImage";

import case1 from "@/image/home/case/首页方案1.png";
import case2 from "@/image/home/case/首页方案2.png";
import case3 from "@/image/home/case/首页方案3.png";
import case4 from "@/image/home/case/首页方案4.png";

import fxgj from "@/image/honor/fxgj.jpg";
import H3C from "@/image/honor/H3C.jpg";
import hw3z from "@/image/honor/hw3z.png";
import hzhb from "@/image/honor/hzhb.png";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      home,
      cloud,
      // img: [{ url: "" }],
      brand: brand,
      partner: partner,
      Case: [
        {
          type: "Network",
          index: "n1",
          nType: "企业网络",
          title: "星级酒店网络",
          img: case1,
          message:
            "信息化已成为酒店行业开展业务的重要手段，信息化建设水平甚至成为酒店的核心竞争力之一。随着移动终端的极大丰富和 BYOD 的普及，酒店网络基础架构的重心正在从有线向无线转移，无线网络已成为酒店网络基础架构中最重要的组成部分。 酒店网络基础架构解决方案应该是基于独立硬件产品组合而成的整网部署方案，在提供互联网接入、局域网有线、无线接入能力之 外，至少应具有易部署及管理、集成流控、集成无线控制器、基础的安全管理等特性。",
        },
        {
          type: "Cloud",
          index: "c2",
          nType: "无线方案",
          title: "连锁咖啡店无线网络",
          img: case2,
          message:
            "作为消费服务的一部分，咖啡厅需要为在店客户提供高速免费的无线接入，连锁咖啡门店分布广泛，数量庞大，需要快速部署上线。多家连锁同时做活动，需要 Wi-Fi制定 Portal 页面做精准广告营销。且需要高效率、低商务的运维方案。",
        },
        {
          type: "DataCenter",
          index: "d1",
          nType: "网络安全",
          title: "华为乾坤安全云服务",
          img: case3,
          message:
            "传统网络安全产品种类多，运维人员缺口大，专业性无法保证，导致安全产品防御能力不能100%发挥安全产品组合，组件良莠不齐；且驻场服务人员能力参差不齐，前后端联动效率低，难以达到安全实效。乾坤云将专业安全能力平台化，由技能储备强、实操经验足的专家运维，借助云端平台实现高效服务交付，助力客户高效快速完成安全部署与运维。",
        },
        {
          type: "Cloud",
          index: "c3",
          nType: "无线方案",
          title: "思科 Mobility Express 解决方案",
          img: case4,
          message:
            "无线网络已成为我们日常活动的一部分。事实上，它们构成了大多数组织（无论大型还是小型）的核心网络基础设施。为了帮助您快速构建、运行和扩展无线网络，并在不需要专门设备的情况下轻松管理，思科将 Mobility Express 解决方案捆绑到最先进的第二代 802.11ac 无线接入点。",
        },
      ],
      honor: [
        {
          url: fxgj,
        },
        {
          url: H3C,
        },
        {
          url: hw3z,
        },
        {
          url: hzhb,
        },
      ],
      listUrl: [fxgj, H3C, hw3z, hzhb],
    };
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        name: "Detail",
        query: { type: item.type, name: item.index },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/style/home.scss";
</style>
