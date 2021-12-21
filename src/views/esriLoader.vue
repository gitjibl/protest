<template>
  <div>
    <h1>666</h1>
    <button @click="deleteLayer">删除图层</button>
    <div id="mapDiv"></div>
  </div>
</template>
<script>
import { loadModules } from "esri-loader";
export default {
  data() {
    return {
      // 地图类
      map: {},
      // 地图视图
      view: {},
      // esri返回值
      gisConstructor: {},
      // esri组件
      modules: [
        "esri/config",
        "esri/Map",
        "esri/WebMap",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/layers/TileLayer",
        "esri/views/MapView",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/Graphic",
        "esri/widgets/Zoom",
        "esri/geometry/Polygon",
        "esri/geometry/SpatialReference",
        "esri/layers/GraphicsLayer",
        "esri/layers/FeatureLayer",
        "esri/layers/VectorTileLayer",
        "esri/PopupTemplate",
        "esri/widgets/Popup",
        "esri/widgets/Sketch",
        "dojo/domReady!",
      ],
      graphicsLayers: {
        testGraphicsLayer: null,
      },
    };
  },
  mounted() {
    loadModules(this.modules, { css: true }).then(this.initMap);
  },
  methods: {
    initMap(args) {
      for (let k in args) {
        let name = this.modules[k].split("/").pop();
        name = name.replace(name[0], name[0].toUpperCase());
        this.gisConstructor[name] = args[k];
      }
      var TileLayer = new this.gisConstructor.TileLayer({
        url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer",
        id: "streets",
      });
      this.map = new this.gisConstructor.Map({
        // 底图的图层
        layers: [TileLayer],
      });
      this.view = new this.gisConstructor.MapView({
        map: this.map,
        container: "mapDiv",
        zoom: 12,
        center: [116.19432, 39.911222],
      });
      //在右上角添加缩放组件
      //   this.view.ui.add(new this.gisConstructor.Zoom({ view: this.view }), "top-right");
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 1,
        },
      };
      const point = {
        //Create a point
        type: "point",
        longitude: 116.3,
        latitude: 39.9,
      };
      const pointGraphic = new this.gisConstructor.Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        attributes: {
          name: "测试",
          des: "这是一个marker点",
        },
      });
      this.graphicsLayers.testGraphicsLayer =
        new this.gisConstructor.GraphicsLayer({ id: "layer_id" });
      //将图形添加到图层中
      this.graphicsLayers.testGraphicsLayer.add(pointGraphic);
      //将图层添加map中
      this.map.layers.add(this.graphicsLayers.testGraphicsLayer);
      let that = this;
      this.view.on("click", function (event) {
        that.view.hitTest(event.screenPoint).then((responses) => {
          if (responses.results.length > 0) {
            const data = responses.results[0].graphic.attributes;
            console.log("markerData", data);
          }
        });
      });
    },
    deleteLayer() {
      this.map.layers.remove(this.graphicsLayers.testGraphicsLayer);
      // this.graphicsLayers.testGraphicsLayer.clear();
    },
  },
};
</script>
<style>
#mapDiv {
  width: 100%;
  height: 700px;
}
</style>