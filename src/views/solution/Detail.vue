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
        <canvas v-for="page in pdfPages" :id="'pdfCanvas' + page" />
      </el-scrollbar>
    </el-row>
  </el-card>
</template>

<script>
import { cloud, dataCenter, network } from "@/json/list";
const PDFJS = require("pdfjs-dist");
PDFJS.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js";
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
    getPdfUrl() {
      if (this.detail.file) {
        this.pdfSrc = require("@/assets/casePDF/" + this.detail.file.name);
        this.pdfScale = this.detail.file.pdfScale;
        this.loadFile(this.pdfSrc.default);
      }
    },
    loadFile(url) {
      let loadingTask = PDFJS.getDocument(url);
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
.el-scrollbar {
  height: 70vh;
}
</style>
