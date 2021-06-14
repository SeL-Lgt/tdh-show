<template>
  <div id="case">
    <el-card>
      <el-row class="title_top">
        <p>成功案例</p>
        <p>厚德自强 忠诚团结 科学进取 高效创新</p>
      </el-row>
      <Table
        table-height="50vh"
        :table-prop="tableProp"
        :table-data="tableData"
      />
      <el-row class="teamwork">
        <el-row class="bottom_title">合作伙伴</el-row>
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
import Table from "@/components/table/index";
import Case from "@/json/case.json";
import { brand, partner } from "@/image/home/homeImage";

export default {
  name: "Case",
  components: {
    Table,
  },
  data() {
    return {
      tableProp: [
        {
          prop: "time",
          label: "合作执行日期",
        },
        {
          prop: "name",
          label: "项目名称及使用地点",
        },
        {
          prop: "money",
          label: "合作金额",
        },
        {
          prop: "content",
          label: "工作内容",
        },
        {
          prop: "brand",
          label: "设备品牌",
        },
      ],
      tableData: Case,
      brand: brand,
      partner: partner,
    };
  },
};
</script>

<style lang="scss" scoped>
#case {
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

  .brand,
  .teamwork {
    margin-top: 5vh;
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
    color: #000;
    padding-bottom: 2vh;
  }
}
</style>
