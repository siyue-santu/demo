<template>
  <div class="org-tree">
    <el-tree
      class="filter-tree"
      :data="list"
      :props="defaultProps"
      :load="loadNode"
      @node-click="nodeClick"
      lazy
      ref="tree">
    </el-tree>
  </div>
</template>

<script setup>
  import orgApi from '../api/org'
  import { onMounted, reactive, ref } from 'vue'

  const defaultProps = {
		label: 'name',
		children: 'children'
  }
  const emit = defineEmits(['click'])
  const list = ref([])

  onMounted(() => {
    orgApi.query('1').then(res => {
      console.log(res)
      list.value = res
    })
  })

  function loadNode(node, resolve) {
    // 在此做是否请求的判断
    if (node.level > 2) {
      return resolve([])
    }
    orgApi.query(String(node.level + 1)).then(res => {
      setTimeout(() => {
        resolve(res)
      }, 500)
    })
  }

  function nodeClick(data, node) {
    emit('click', data, node)
  }
</script>

<style>
  .org-tree{
    flex:none;
    width:200px;
    max-height: 100%;
    display:flex;
    overflow:auto;
    padding: 10px;
    border: 1px solid #ddd;
    margin-right: 20px;
  }
</style>