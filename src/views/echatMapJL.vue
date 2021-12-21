<template>
  <div>
    <div id="eChart" style="width: 100%; height: 600px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var chartDom = document.getElementById("eChart");
      var myChart = echarts.init(chartDom);
      var option;
      myChart.showLoading();
    //   $.get(ROOT_PATH + "/data/asset/geo/HK.json", function (geoJson) {
        this.$axios.get("/static/json/JL.json").then(res => {

        let geoJson = res.data;
        myChart.hideLoading();
        echarts.registerMap("HK", geoJson);
        myChart.setOption(
          (option = {
            title: {
              text: "Population Density of JL（2011）",
              subtext: "Data from Wikipedia",
              sublink:
                "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
            },
            tooltip: {
              trigger: "item",
              formatter: "{b}<br/>{c} (p / km2)",
            },
            toolbox: {
              show: true,
              orient: "vertical",
              left: "right",
              top: "center",
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {},
              },
            },
            visualMap: {
              min: 800,
              max: 50000,
              text: ["High", "Low"],
              realtime: false,
              calculable: true,
              inRange: {
                color: ["lightskyblue", "yellow", "orangered"],
              },
            },
            series: [
              {
                name: "香港18区人口密度",
                type: "map",
                map: "HK",
                label: {
                  show: true,
                },
                data: [
                  { name: "白城市", value: 20057.34 },
                  { name: "松原市", value: 15477.48 },
                  { name: "长春市", value: 31686.1 },
                  { name: "四平市", value: 6992.6 },
                  { name: "吉林市", value: 44045.49 },
                  { name: "辽源市", value: 40689.64 },
                  { name: "通化市", value: 37659.78 },
                  { name: "白山市", value: 45180.97 },
                  { name: "延边朝鲜族自治州", value: 55204.26 },
                ],
                // 自定义名称映射
                // nameMap: {
                //   "Central and Western": "中西区",
                //   Eastern: "东区",
                //   Islands: "离岛",
                //   "Kowloon City": "九龙城",
                //   "Kwai Tsing": "葵青",
                //   "Kwun Tong": "观塘",
                //   North: "北区",
                //   "Sai Kung": "西贡",
                //   "Sha Tin": "沙田",
                //   "Sham Shui Po": "深水埗",
                //   Southern: "南区",
                //   "Tai Po": "大埔",
                //   "Tsuen Wan": "荃湾",
                //   "Tuen Mun": "屯门",
                //   "Wan Chai": "湾仔",
                //   "Wong Tai Sin": "黄大仙",
                //   "Yau Tsim Mong": "油尖旺",
                //   "Yuen Long": "元朗",
                // },
              },
            ],
          })
        );
        })
    //   });

      option && myChart.setOption(option);
    },
  },
};
</script>
