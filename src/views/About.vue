<template>
  <div id="about">
    <el-card>
      <el-row class="title_top">
        <p>关于我们</p>
        <p>厚德自强 忠诚团结 科学进取 高效创新</p>
      </el-row>
      <el-row class="message">
        <el-col :span="10">
          <div class="title">天地和网络是谁?</div>
        </el-col>
        <el-col :span="14">
          <div class="info">
            深圳市天地和网络有限公司成立于2005年，是一家主要以计算机网络产品销售、系统集成、综合布线、网络安全、系统维护、咨询于一体的IT销售服务性企业。
            公司主要涉及行业领域有酒店行业、医疗行业、政府部门、金融机构、教育机构、服务行业等。
          </div>
        </el-col>
      </el-row>
      <el-row class="honor">
        <el-row class="bottom_title">公司资质</el-row>
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
      <el-row class="message">
        <el-col :span="10">
          <div class="title">天地和理念</div>
        </el-col>
        <el-col :span="14">
          <div class="info">
            我们拥有一支力量雄厚、训练有素的销售队伍，在企业的经营过程中，公司凭借高技术人才、优质服务、丰富的经验和强大的市场能力，期盼与各行业有识之士建立紧密战略合作伙伴关系，天地和始终秉承以客户为中心的经营理念，加强管理，不断创新，完善全国服务体系，在提供更优良的服务的同时，将自身塑造成国内最大的产品销售服务商。
            “永续经营，共同成长”是天地和的基本信念，“服务企业，赢得尊重”是天地和的终极目标。
          </div>
        </el-col>
      </el-row>
      <el-row class="teamwork">
        <el-row class="bottom_title">合作品牌</el-row>
        <el-row class="content">
          <el-col :span="5" v-for="(item, index) in partner" :key="index">
            <el-image fit="scale-down" style="height: 10vh" :src="item.url" />
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import fxgj from "@/image/honor/fxgj.png";
import H3C from "@/image/honor/H3C.jpg";
import hw3z from "@/image/honor/hw3z.png";
import hzhb from "@/image/honor/hzhb.png";
import { brand, partner } from "@/image/home/homeImage";

export default {
  name: "About",
  data() {
    return {
      honor: [
        {
          url: fxgj
        },
        {
          url: H3C
        },
        {
          url: hw3z
        },
        {
          url: hzhb
        }
      ],
      listUrl: [fxgj, H3C, hw3z, hzhb],
      brand: brand,
      partner: partner
    };
  }
};
</script>

<style lang="scss" scoped>
#about {
  background: #409eff;
  padding: 5vh 5vw;

  .title_top {
    display: flex;
    align-items: center;
    padding: 0 0 2vh;
    border-bottom: 1px solid #909399;

    p:first-child {
      font-size: 1.7rem;
      font-weight: 600;
    }

    p:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 550;
      padding: 1vh 0 1vh 1vw;
      margin-left: 1vw;
      border-left: 2px solid black;
    }
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vh 0;

    .title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 550;
    }

    .info {
      text-indent: 2em;
      font-size: 1.5rem;
    }
  }

  .honor {
    padding: 0 5vw;
  }

  .brand,
  .teamwork {
    padding: 0 5vw;

    .content {
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .bottom_title {
    text-align: center;
    font-size: 2rem;
    font-weight: 550;
    color: #909399;
    padding-bottom: 2vh;
  }
}
</style>
