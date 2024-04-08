<template>
  <div>
    <div class="mb-20">
      <el-input
      placeholder="输入关键字进行过滤"
      @input="search"
      :expand-on-click-node="flase"
      v-model="keyword">
      </el-input>
    </div>
    <el-table
      :data="tableData"
      border
      height="500px"
      style="width: 100%">
        <el-table-column
            type="index"
            width="55">
        </el-table-column>
        <el-table-column
            prop="id"
            label="ID">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
    </el-table>
  </div>
</template>
<script setup >
  import userApi from '../api/user'
  import { debounce } from '../utils'
  import { ref } from 'vue'

  const tableData = ref([])
  const keyword = ref('')

  const search = debounce(function(orgId){
    userApi.query({
      name: keyword.value,
      orgId: orgId
    }).then((users) => {
      tableData.value = users
    })},300)
  search()

  defineExpose ({
    search
  })
</script>