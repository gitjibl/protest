<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="block">
      <span class="demonstration">折叠展示Tag</span>
      <el-cascader @change="handlerChange" v-model="checkCascader" :options="options" :props="props" collapse-tags
        clearable></el-cascader>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        props: {
          multiple: true
        },
        checkCascader: [],
        options: [{
            value: "ZQ,DD,RR",
            label: "水文站",
            children: [{
                value: "基本站",
                label: "基本站",
                children: [{
                    value: 1,
                    label: "国家重要站"
                  },
                  {
                    value: 2,
                    label: "省级重要站"
                  },
                  {
                    value: 3,
                    label: "一般站"
                  }
                ]
              },
              {
                value: "专用站",
                label: "专用站",
                children: [{
                    value: 4,
                    label: "中小河流"
                  },
                  {
                    value: 5,
                    label: "山洪灾害"
                  },
                  {
                    value: 6,
                    label: "生态补偿"
                  },
                  {
                    value: 7,
                    label: "市州界"
                  },
                  {
                    value: 8,
                    label: "县界"
                  },
                  {
                    value: 9,
                    label: "其他"
                  },
                  {
                    value: 10,
                    label: "实验站"
                  },
                  {
                    value: 11,
                    label: "辅助站"
                  }
                ]
              }
            ]
          },
          {
            value: "PP",
            label: "雨量站",
            children: [{
                value: 12,
                label: "基本站"
              },
              {
                value: "专用站",
                label: "专用站",
                children: [{
                    value: 13,
                    label: "中小河流雨量站"
                  },
                  {
                    value: 14,
                    label: "洪水易发区雨量站"
                  },
                  {
                    value: 15,
                    label: "防汛指挥系统雨量站"
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    methods: {
      getCurrentUser() {
        this.$axios.get("http://192.168.0.7:9401/getUserInfo").then(res => {
          if (res.status === 200 && res.data != null) {
            console.log("getCurrentUsergetCurrentUser", res.data);
          }
        });
      },
      handlerChange(val) {
        console.log("=======================", val, this.checkCascader);
        let cascaderData = JSON.parse(JSON.stringify(this.checkCascader));
        let esttp = "";
        let esttpArr = [];
        cascaderData.forEach((item, index) => {
          esttpArr.push(item[item.length - 1]);
        })
        if (esttpArr.length != 0) {
          esttp = esttpArr.toString();
        }
        console.log("ooooooooo", esttp);
      }
    },
    created() {
      let jsessionid = this.$cookies.get("XSRF-TOKEN");
      console.log(jsessionid, "jsessionid");
      // this.getCurrentUser();
    }
  };
</script>