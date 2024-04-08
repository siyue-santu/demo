<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="成员管理" name="1">
        <el-row style="margin-top: 1px;">
          <el-col :span="8" >
            <div>部门</div>
          </el-col>
          <el-col :span="16" >
            <div>{{ currRow }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <OrgTree @click="search"/>
          </el-col>
          <el-col :span="16">
            <UserTable ref="userTable" />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="团队管理" name="2">团队管理</el-tab-pane>
      <el-tab-pane label="职位维护" name="3">职位维护</el-tab-pane>
    </el-tabs>
  </div>
</template>



<script setup>
  import OrgTree from './OrgTree.vue'
  import UserTable from './UserTable.vue'
  import {ref} from 'vue'
  import {debounce} from '../utils'

  const activeName = ref('1')
  const keyword = ref('')
  const userTable = ref()
  const currRow = ref(null)

  const search = debounce(function(data){
    userTable.value.search(data.id)
    currRow.value = data.name
  },300)

</script>

<style >

.container_filter {
  width: 57px;
  height: 18px;
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  color: rgb(23, 43, 77);
  margin: 10px;
  line-height: 18px;
}
</style>