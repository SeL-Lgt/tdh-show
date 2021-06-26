<template>
  <el-card style="min-height: 80vh">
    <el-row class="top">
      <p class="title">
        {{ detail.title }}
      </p>
      <p class="time">
        {{ detail.date }}
      </p>
    </el-row>
    <el-row class="content">
      <el-row v-for="(item, index) in detail.content" :key="index">
        <template v-if="item.type === 'image'">
          <el-row class="image">
            <el-image :src="detailImg(item.message)" />
          </el-row>
        </template>
        <template v-if="item.type === 'link'">
          <el-row class="link">
            <a :href="item.message" target="_blank">原文:{{ item.message }}</a>
          </el-row>
        </template>
        <template v-if="item.type === 'message'">
          <div class="message">{{ item.message }}</div>
        </template>
        <template v-if="item.type === 'title'">
          <div class="title">{{ item.message }}</div>
        </template>
      </el-row>
      <template v-if="pdfPages">
        <el-row style="text-align: center">
          <canvas v-for="page in pdfPages" :id="'pdfCanvas' + page" />
        </el-row>
      </template>
    </el-row>
  </el-card>
</template>

<script>
import { cloud, dataCenter, network } from "@/json/list";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
const PDFJS = require("pdfjs-dist/legacy/build/pdf.js");
PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// const pdfjsWorker = require("pdfjs-dist/build/pdf.worker.js");

// PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js";
// PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.js";
// PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker");
export default {
  data() {
    return {
      list: [],
      detail: "",
      fileName: "",
      pdfPages: [], // 页数
      pdfWidth: "800px", // 宽度
      pdfSrc: "", // 地址
      pdfDoc: "", // 文档内容
      pdfScale: 1, // 放大倍数
      imgUrl: "", // 图片路径
    };
  },
  mounted() {
    this.changType();
    this.changEven();
    this.getPdfUrl();
  },
  watch: {
    $route(to, from) {
      if (to != from) {
        this.changType();
        this.changEven();
        this.getPdfUrl();
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
      switch (type) {
        case "DataCenter": {
          this.list = dataCenter;
          this.imgUrl = "dataCenter/img/";
          break;
        }
        case "Network": {
          this.list = network;
          this.imgUrl = "netWork/img/";
          break;
        }
        case "Cloud": {
          this.list = cloud;
          this.imgUrl = "cloud/img/";
          break;
        }
      }
    },
    async getPdfUrl() {
      if (this.detail.file.name) {
        // PDFJS.GlobalWorkerOptions.workerSrc =
        //   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.js";
        this.pdfScale = this.detail.file.pdfScale;
        this.loadFile();
      } else {
        this.pdfPages = [];
      }
    },
    loadFile() {
      this.pdfSrc = require("@/assets/casePDF/" + this.detail.file.name);
      let loadingTask = PDFJS.getDocument(this.pdfSrc.default);
      loadingTask.promise.then((pdf) => {
        this.pdfDoc = pdf;
        this.pdfPages = pdf.numPages;
        this.$nextTick(() => {
          this.renderPage(1);
        });
      });
    },
    renderPage(num) {
      const that = this;
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById("pdfCanvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1;
        let ratio = dpr / bsr;
        ctx.scale(dpr, dpr);
        this.draw(ctx);

        let viewport = page.getViewport({ scale: this.pdfScale });
        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;

        canvas.style.width = viewport.width + "px";

        that.pdfWidth = viewport.width + "px";

        canvas.style.height = viewport.height + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        // 将 PDF 页面渲染到 canvas 上下文中
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };
        page.render(renderContext);
        if (this.pdfPages > num) {
          this.renderPage(num + 1);
        }
      });
    },
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = "darkcyan";
      ctx.arc(50, 50, 50, 0, Math.PI * 2);
      ctx.fill();
    },
    detailImg(name) {
      return require("@/json/" + this.imgUrl + name);
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
  .el-row {
    padding-bottom: 1.5vh;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .message {
    text-indent: 2rem;
    line-height: 1.8rem;
  }
  .link {
    text-align: center;
    color: #909399;
    font-size: 0.8rem;
  }
  .image {
    text-align: center;
  }
  .title {
    font-size: 1rem;
    text-align: left;
    font-weight: 600;
  }
}

.el-scrollbar {
  height: 70vh;
}
</style>
