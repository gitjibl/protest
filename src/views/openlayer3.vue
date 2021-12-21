<template>
  <div style="height: 100%; width: 100%">
    <div id="map" ref="map"></div>
     <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
  </div>
</template>
<script>
import "ol/ol.css";
import { Map, View, Overlay} from "ol";
import proj4 from 'proj4';
import { Projection } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import {OSM,TileArcGISRest,XYZ,WMTS} from "ol/source";
import mapConfig from '@/assets/js/mapConfig';



// import TileLayer from 'ol/layer/Tile';
import { get as getProjection } from 'ol/proj';
// import WMTS from 'ol/source/WMTS';
// import { get as getProjection } from 'ol/proj';
import { getWidth, getTopLeft } from 'ol/extent';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
export default {
  data() {
    return {
      map: null,
      Layer_2:null
    };
  },
  mounted() {
    var layers = [
       new TileLayer({
                  source: new XYZ({
                    url: 'http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=1cab703e4cce846ba8c4363be6f0ccd8'
                  }),
                  isGroup: true,
                  name: '天地图路网'
                }),
    ];
    this.map = new Map({
      target: this.$refs.map,
      layers: layers,
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        center: [85.408,41.479],
        // minZoom:5,
				// maxZoom: 15,
        zoom: 5,
      }),
    });
    let arr1=[
        {
            name:"这是marker-1",
            lnglat:[116.3, 39.9]
        },
         {
            name:"这是marker-2",
            lnglat:[117.3, 39.9]
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