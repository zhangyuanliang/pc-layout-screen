<template>
  <div>
    <div class="tableTitle">产品信息</div>
    <div class="table">
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">商品条码</div>
          <div class="itemContent">6909687000054</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">产品执行标准号</div>
          <div class="itemContent">GB/T 10781.2</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">产品名称</div>
          <div class="itemContent">茅台王子酒</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">生产工艺</div>
          <div class="itemContent">固态法</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">规格</div>
          <div class="itemContent">500ml</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">原料</div>
          <div class="itemContent">水、大米、高粱</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">贮存条件</div>
          <div class="itemContent">存放于阴凉干燥处</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">生产许可编号</div>
          <div class="itemContent">SC21515325</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">警示语</div>
          <div class="itemContent">未成年人不得饮用。过量饮酒，有害健康</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">特殊人群适应性</div>
          <div class="itemContent">孕妇请勿饮酒</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">香型</div>
          <div class="itemContent">酱香型</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">糖化发酵剂</div>
          <div class="itemContent">大曲酒</div>
        </div>
      </div>
      <div v-if="isProductInfo" class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">生产企业名称</div>
          <div class="itemContent">茅台酒业有限公司</div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">生产企业地址</div>
          <div class="itemContent">贵州省茅台镇</div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem" style="width:100%">
          <div class="itemTitle">产地</div>
          <div class="itemContent">贵州省茅台镇</div>
        </div>
      </div>
    </div>
    <div class="tableTitle" style="margin-top: 20px">追溯系统信息</div>
    <trace-info/>
    <div class="tableTitle" style="margin-top: 20px">审核反馈</div>
    <el-table v-if="!isApply" :data="auditBackInfo" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="status" label="审核状态"></el-table-column>
      <el-table-column prop="auditor" label="审核人"></el-table-column>
      <el-table-column prop="time" label="审核时间"></el-table-column>
      <el-table-column prop="content" label="审核反馈内容"></el-table-column>
    </el-table>
    <div v-else style="margin-top: 20px">
      <el-input type="textarea" :rows="2" placeholder="" v-model="textarea"> </el-input>
    </div>
  </div>
</template>

<script>
import TraceInfo from '../TraceInfo'
export default {
  props: {
    isProductInfo: {
      type: Boolean,
      default: false
    },
    isApply: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TraceInfo,
  },
  data() {
    return {
      applyInfo: [
        {
          id: 'f20fd0bef80148adbe119eba1e287a5b',
          name: '鑫创追溯系统',
          people: '接口自动',
          time: '2020-05-27 10:10:55'
        }
      ],
      auditBackInfo: [
        {
          status: '已通过',
          auditor: '系统',
          time: '2020-05-27 10:10:55',
          content: '同意'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
