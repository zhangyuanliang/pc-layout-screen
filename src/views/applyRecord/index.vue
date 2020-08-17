<template>
  <title-panel name="申请产品备案">
    <div class="tableTitle">产品信息</div>
    <div class="table">
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">商品条码</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">产品执行标准号</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">产品名称</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">生产工艺</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">规格</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">原料</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">贮存条件</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">生产许可编号</div>
          <div class="itemContent">
            <el-input size="mini" clearable />
          </div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">警示语</div>
          <div class="itemContent"><el-input size="mini" clearable /></div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">特殊人群适应性</div>
          <div class="itemContent"><el-input size="mini" clearable /></div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem">
          <div class="itemTitle">香型</div>
          <div class="itemContent"><el-input size="mini" clearable /></div>
        </div>
        <div class="tableItem">
          <div class="itemTitle">糖化发酵剂</div>
          <div class="itemContent"><el-input size="mini" clearable /></div>
        </div>
      </div>
      <div class="tableLine">
        <div class="tableItem" style="width:100%">
          <div class="itemTitle">产地</div>
          <div class="itemContent"><el-input size="mini" clearable /></div>
        </div>
      </div>
    </div>
    <div class="tableTitle" style="margin-top: 20px;display:flex;align-items:flex-end;"><span>追溯系统信息</span><span class="selectSystem">选择追溯系统</span></div>
    <trace-info />
    <div class="flexC" style="margin-top: 20px">
      <el-button size="mini" @click="goBack()" style="width:80px">返回</el-button>
      <el-button type="primary" size="mini">申请备案</el-button>
    </div>
  </title-panel>
</template>

<script>
import TitlePanel from '@/components/TitlePanel'
import TraceInfo from '@/components/TraceInfo'
export default {
  components: {
    TitlePanel,
    TraceInfo
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.selectSystem {
  color: #5a83fb;
  font-size: 12px;
  display: inline-block;
  margin-left: 18px;
  cursor: pointer;
}
</style>
