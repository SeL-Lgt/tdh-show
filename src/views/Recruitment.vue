<template>
  <div id="recruitment">
    <el-card>
      <el-scrollbar style="height: 60vh">
        <el-row class="top">
          <p>招贤纳士</p>
          <p>厚德自强 忠诚团结 科学进取 高效创新</p>
        </el-row>
        <el-collapse class="collapse" accordion>
          <el-collapse-item
            v-for="(item, index) in jobs"
            :name="index"
            :key="index"
          >
            <template slot="title">
              <p class="title">{{ item.job }}</p>
              <template v-if="item.startTime">
                <p class="time">发布日期：{{ item.startTime }}</p>
              </template>
              <template v-if="item.startTime && item.endTime">
                <p class="time">截止日期：{{ item.endTime }}</p>
              </template>
            </template>
            <el-row class="content">
              <p class="title">岗位职责：</p>
              <p class="tip" v-for="(duty, dIndex) in item.duty" :key="dIndex">
                {{ dIndex + 1 }}.{{ duty.tip }}
              </p>
            </el-row>
            <el-row class="content">
              <p class="title">任职要求：</p>
              <p
                class="tip"
                v-for="(request, rIndex) in item.request"
                :key="rIndex"
              >
                {{ rIndex + 1 }}.{{ request.tip }}
              </p>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script>
import jobs from "@/json/jobs.json";

export default {
  name: "Recruitment",
  data() {
    return {
      jobs: jobs,
    };
  },
};
</script>

<style lang="scss" scoped>
#recruitment {
  background: #409eff;
  padding: 5vh 5vw;

  .top {
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

  .collapse {
    .title {
      font-size: 1.2rem;
    }

    .time {
      padding-left: 1vw;
    }

    .content {
      margin: 1vh 1vw;

      .tip {
        font-size: 1rem;
      }
    }
  }
}
</style>
