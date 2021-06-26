<template>
  <div id="about">
    <el-card>
      <el-row class="title_top">
        <p>关于我们</p>
        <p>厚德自强 忠诚团结 科学进取 高效创新</p>
      </el-row>
      <el-row class="message">
        <ul>
          <li>
            深圳市天地和网络有限公司成立于2005年，是一家主要以计算机网络产品销售、系统集成、综合布线、网络安全、系统维护、咨询于一体的IT销售服务性企业。
          </li>
          <li>
            公司主要涉及行业领域有酒店行业、医疗行业、政府部门、金融机构、教育机构、服务行业等。
          </li>
          <li>
            我们拥有一支力量雄厚、训练有素的销售队伍，在企业的经营过程中，公司凭借高技术人才、优质服务、丰富的经验和强大的市场能力，期盼与各行业有识之士建立紧密战略合作伙伴关系，天地和始终秉承以客户为中心的经营理念，加强管理，不断创新，完善全国服务体系，在提供更优良的服务的同时，将自身塑造成国内最大的产品销售服务商。
          </li>
          <li>
            “永续经营，共同成长”是天地和的基本信念，“服务企业，赢得尊重”是天地和的终极目标。
          </li>
        </ul>
      </el-row>
      <el-row class="message">
        <el-row class="el-title">企业文化</el-row>
        <el-row class="content">
          <span class="top">——顺应<span class="strong">天</span>时</span>
          <p class="info">
            深圳市天地和网络有限公司是一家IT服务提供商，主要是以系统集成、计算机网络产品销售为主的高新技术企业。我们拥有一支富有活力的优秀销售团队和极具战斗力的专业技术团队及一大批行业专家。我们秉承“IT服务创造价值”“细节成就未来”的经营理念，以“专注、一体化、合作”为业务发展策略，以“信息服务、网络服务、技术服务”为主要拓展方向。通过最优化的客户服务体系，提供全方位的技术服务。不断跟踪最新科技发展，整合信息资源，凝聚竞争优势，力争成为国内最优秀IT服务报供商。
          </p>
        </el-row>
        <el-row class="content">
          <span class="top">——把握<span class="strong">地</span>利</span>
          <p class="info">
            深圳市天地和网络有限公司业务主要涉及行业有酒店行业、医疗行业、政府部门、金融机构、教育机构、制造业等，经过我们不懈的努力天地和飞速发展，现旗下有北京天地和诚科技发展有限公司负责华北区和华西区业务，深圳市天地和网络有限公司负责华南区及华东区业务。天地和致力于为客户提供完整的解决方案，为不同客户的业务模型提供一流的定制服务。通过遍布全国的销售和技术服务体系，提供方便快捷、及时周到的服务支持。
          </p>
        </el-row>
        <el-row class="content">
          <span class="top">——维系人<span class="strong">和</span></span>
          <p class="info">
            团队合作是天地和制胜的法宝，团结奋进是天地和发展的动力。天地和清醒地意识到人力资本是发展的源动力，更是最宝贵的财富。只有通过各种资源的组合及与更多的企业开展合作，企业才能得以持续高效的发展。天地和十分重视与国内外优秀企业建立更加密切的战略合作关系，充分发挥天地和的集成能力，希望通过合作，实现优势互补，共筑竞争优势。
          </p>
        </el-row>
      </el-row>
      <el-row>
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
      <el-row class="teamwork">
        <el-row class="bottom_title">合作品牌</el-row>
        <el-row class="content">
          <el-col
            :span="5"
            v-for="(item, index) in partner"
            :key="index"
            :class="{ mb: index > 7 }"
          >
            <el-image fit="scale-down" style="height: 10vh" :src="item.url" />
          </el-col>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import fxgj from "@/image/honor/fxgj.jpg";
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
      brand: brand,
      partner: partner,
    };
  },
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
    font-size: 0.9rem;
    line-height: 1.8rem;
    text-indent: 2rem;

    ul {
      text-indent: 0;
      padding: 1vh 2rem 0;

      li {
        list-style: disc;
      }
    }

    .el-title {
      padding: 2vh 0 1vh;
      font-size: 1.3rem;
      font-weight: 550;
    }

    .content {
      text-indent: 0;

      .top {
        font-size: 1rem;
        font-weight: 550;
      }

      .info {
        font-size: 0.9rem;
        line-height: 1.8rem;
        text-indent: 2rem;
      }

      .strong {
        font-size: 1.2rem;
        font-weight: 600;
        color: #409eff;
      }
    }
  }

  .honor {
    padding: 0 5vw;
  }

  .brand,
  .teamwork {
    .content {
      padding: 0 5vw;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .mb {
      margin-bottom: 2vh;
      &:last-child {
        margin: 0;
      }
    }
  }

  .bottom_title {
    text-align: center;
    line-height: 1.8rem;
    font-size: 1.3rem;
    font-weight: 550;
    padding: 2vh 0;
  }

  ::v-deep .el-carousel {
    text-align: center;
  }
}
</style>
