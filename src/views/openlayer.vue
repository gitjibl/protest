<template>
  <div style="height: 100%; width: 100%">
    <h1>open layer</h1>
    <button @click="addMarker">addMarker</button>
    <button @click="removeMarker">removeMarker</button>
    <button @click="location">定位</button>
    <div id="map" ref="map"></div>
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
   <!-- <div id="marker" title="Marker" style="height:40px;width:27px;"></div> -->
  </div>
</template>
<script>
import "ol/ol.css";
import { Map, View, Overlay} from "ol";
import proj4 from 'proj4';
import { Projection } from "ol/proj";
import {Tile as TileLayer, Image as ImageLayer} from 'ol/layer'
import {OSM,TileArcGISRest,XYZ,WMTS,ImageArcGISRest} from "ol/source";
import mapConfig from '@/assets/js/mapConfig';
export default {
  data() {
    return {
      map: null,
      Layer_2:null
    };
  },
  mounted() {
    var layers = [
      //  new TileLayer({
      //     source: new OSM()
      // }),

      new TileLayer({
        // extent: [20,-50,150,100],
        // worldExtent:[150,-90,150,150],
        source: new TileArcGISRest({
          url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer",
          // url:"http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer"
        }),
      }),

      // new TileLayer({
      //       source: new TileArcGISRest({
      //         url:"http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer"
      //       }),
      // }),

      // new TileLayer({
      //       source: new TileArcGISRest({
      //         url:"http://192.168.0.177:6080/arcgis/rest/services/XjRiver1Map/MapServer"
      //       }),
      // }),
      // new TileLayer({
      //   source: new XYZ({
      //     url:"http://192.168.0.177:8604/{level}/{row}/{col}.png"
      //   }),
      // }),
      new TileLayer({
        source: new XYZ({
          url:"http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer/tile/{z}/{y}/{x}"
        }),
      }),
       new TileLayer({
        source: new XYZ({
          url:"http://192.168.0.177:6080/arcgis/rest/services/XjRiver1Map/MapServer/tile/{z}/{y}/{x}"
        }),
      }),

      // new TileLayer({
      //   // extent: [-13884991, 2870341, -7455066, 6338219],
      //   // extent: [-80,-90,80,90],
      //   source: new TileArcGISRest({
      //     url: "http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer",
      //     // url: "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer",
      //   }),
      // }),

        // new ImageLayer({
        //   source: new ImageArcGISRest({
        //     // url:"http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer"
        //     url:"http://192.168.0.177:6080/arcgis/rest/services/XjRiver1Map/MapServer"
        //   }),
        // }),

        // new ImageLayer({
        //   source: new WMTS({
        //     // url:"http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer"
        //     url:"http://192.168.0.177:6080/arcgis/rest/services/XjRiver1Map/MapServer"
        //   }),
        // }),
    ];
    //  var layers = [
    //       new TileLayer({
    //         source: new OSM(),
    //     }),
    //     new TileLayer({
    //       // extent: [-13884991, 2870341, -7455066, 6338219],
    //       source: new TileArcGISRest({
    //         url: "http://192.168.0.177:6080/arcgis/rest/services/XjXzqhMap/MapServer",
    //         // url: "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer",
    //       }),
    //     }),
    //  ]
    proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs");
    var projection4490 =new Projection({code:'EPSG:4490'})
    //下面这俩 extent 都必须有  
    projection4490.setExtent([-180,-90,180,90]);
    projection4490.setWorldExtent([-180,-90,180,90]);
    this.map = new Map({
      target: this.$refs.map,
      layers: layers,
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        // projection:'EPSG:3857',
        // projection:projection4490, //使用这个坐标系
        // center: [116.3, 39.9],
        // center: [-10997148, 4569099],
        center: [86.37,44.43],
        // minZoom:5,
				// maxZoom: 15,
        // zoom: 5,
        //  center: [150.4, 91],
         zoom: 8
      }),
    });
    // mapConfig.addMarker([[116.3, 39.9]],require('@/assets/img/marker_1.png'))
    let arr1=[
        {
            name:"这是marker-1",
            lnglat:[116.3, 39.9]
        },
         {
            name:"这是marker-2",
            lnglat:[117.3, 39.9]
        },{
          name:"乌鲁木齐市",
          lnglat:[86.37,44.43]
        }
    ]
    let Layer_1 = mapConfig.addMarker(arr1,require('@/assets/img/marker_1.png'));
    this.map.addLayer(Layer_1);
    var element = document.getElementById('popup');

    var popup = new Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -10]
    });
    this.map.addOverlay(popup);

    // display popup on click
     let that = this;
     var closer = document.getElementById('popup-closer');
     closer.onclick = function () {
        popup.setPosition(undefined);
    };
    this.map.on('click', function(evt) {
        var feature = that.map.forEachFeatureAtPixel(evt.pixel,
          function(feature) {
            return feature;
          });
        if (feature) {
            var coordinates = feature.getGeometry().getCoordinates();
            var content = document.getElementById('popup-content');
            content.innerHTML = '<p >You clicked here:</p><code class="popup_code">' + feature.get('name') + '</code>';
            popup.setPosition(coordinates);
        } else {
            popup.setPosition(undefined);
        }
      });
  },
  methods: {
    addMarker(){
        let arr2=[
            {
                name:"这是marker-111",
                lnglat:[116.5, 39.9]
            },
            {
                name:"这是marker-222",
                lnglat:[117.1, 39.9]
            }
        ];
      this.Layer_2 = mapConfig.addMarker(arr2,require('@/assets/img/marker_2.png'));
      this.map.addLayer(this.Layer_2);
    },
    removeMarker(){
        this.map.removeLayer(this.Layer_2);
    },
    location(){
        // let layer = mapConfig.addMarker([{name:"这是 闪烁marker",lnglat:[117.1, 40.9]}],require('@/assets/img/ZoomTo.gif'),0.3);
        // this.map.addLayer(layer);
        // this.map.getView().animate({center: [117.1, 40.9], zoom: 15,})
        this.setFlashPoint();
    },
    setFlashPoint(){

			//第二种样式
			var ele = document.createElement("div");
			ele.className = "css_animation";
			var point_overlay2 = new Overlay({
				element: ele,
        stopEvent:false,//地图的事件传播是否停止，默认是 true，即阻止传播
				positioning: 'center-center',
			});
			this.map.addOverlay(point_overlay2);
			point_overlay2.setPosition([117.3, 39.9]);
    //   $(ele).on("click",function(){//生效
    //     alert("点击地图覆盖物!");
    // });
      // var ele = document.createElement("div");
			// ele.className = "css_animation";
			// var point_overlay2 = new Overlay({
			// 	element: ele,
			// 	positioning: 'center-center',
			// });
			// this.map.addOverlay(point_overlay2);
      // point_overlay2.setPosition([117.4, 39.8]);
      // this.map.removeOverlay();
		},
  },
};
</script>
<style scoped>
#map {
  height: 80%;
  width: 100%;
}
.ol-popup {
    position: absolute;
    background-color: white;
    -webkit-filter: drop-shadow(0 0 0.15rem rgba(0,0,0,0.2));
    /*filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));*/
    filter: drop-shadow(0 0 0.15rem  #0aee6d);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 280px;
}
.ol-popup:after, .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.ol-popup:after {
    border-top-color: #ffffff;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
}
.ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
}
.ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
}
.ol-popup-closer:after {
    content: "✖";
}

</style>
<style>
/**橙色点扩散闪烁样式*/
.point_animation{
	/* background: #10c957; */
	width: 6px;
	height: 6px;
	/* border: 2px #10c957 solid; */
	border-radius: 50%;
	position: absolute;
}
.point_animation p, .point_animation span{
	position: absolute;
	width: 4px;
	height: 4px;
	animation: point_animation 1.5s  infinite;
	box-shadow: 0px 0px 1px #ff9900; 
	margin: 0px;
	border-radius: 50%;
}
.point_animation span{
	animation-delay: 0.8s;
}
@keyframes point_animation{
	10% {
		transform: scale(1);
	}
	100% {
		transform: scale(8);
	}
}
/**红色点扩散闪烁样式*/
.css_animation{
	height:50px; 
	width:50px;
	border-radius: 25px; 
	background: rgba(255, 0, 0, 0.9);
	transform: scale(0);
	animation: mypoint 3s;      
	animation-iteration-count: infinite;
}
@keyframes mypoint{
	to{
		transform: scale(1.5);
		background: rgba(0, 0, 0, 0);
	}
}
</style>