<template>
  <div>
    <h2>tree 数据转化</h2>
    <el-tree :data="treeData1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData1: [],
      defaultProps: {
        children: "children",
        label: "name"
      }
    };
  },
  mounted() {
    this.initTree1();
  },
  methods: {
    initTree1() {
      let datas = [
        {
          id: 1,
          pid: 0,
          name: "顶级"
        },
        {
          id: 2,
          pid: 1,
          name: "一级A",
          des:"ddddd"
        },
        {
          id: 3,
          pid: 1,
          name: "一级B"
        },
        {
          id: 4,
          pid: 1,
          name: "一级C"
        },
        {
          id: 5,
          pid: 3,
          name: "二级B"
        },
        {
          id: 6,
          pid: 4,
          name: "二级C"
        },
        {
          id: 7,
          pid: 5,
          name: "三级B"
        }
      ];
      let transfor = this.transformToTree(datas, 0);
      console.log(transfor, "transfor...");
      this.treeData1 = transfor;
    },
    transformToTree(datas, pcode) {
      let dataArray = [];
      datas.forEach(function(data) {
        let pid = data.pid;
        if (pid == pcode) {
          dataArray.push(data);
        }
      });
      let transforData = this.recursiveToTree(datas, dataArray);
      return transforData;
    },
    recursiveToTree(datas, dataArray) {
      for (let j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let Id = dataArrayIndex.id;
        for (let i = 0; i < datas.length; i++) {
          let data = datas[i];
          let pid = data.pid;
          if (pid == Id) {
            //判断是否为儿子节点
            childrenArray.push(data);
          }
        }
        dataArrayIndex.children = childrenArray;
        if (childrenArray.length > 0) {
          //有儿子节点则递归
          this.recursiveToTree(datas, childrenArray);
        }
      }
      return dataArray;
    },
    handleNodeClick(data,node,obj) {
      console.log(data,node,obj);
    }
  }
};
</script>
