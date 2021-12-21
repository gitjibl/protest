/**
 * 注：
 *  创建openlayer图层三步骤：
 *      1. 创建图层
 *      2. 创建图层源
 *      3. 创建源特征
 *  图层是图层，点是点，点是add到图层上面的。
 *
 */
 import { Vector as VectorSource } from "ol/source";
 import { Feature } from "ol";
 import { Point } from "ol/geom";
 import { Style, Icon } from "ol/style";
 import { Vector as VectorLayer } from "ol/layer";
export default {
    addMarker
}
/**
 * 地图打点
 * @param {数据列表} arrs lnglat//经纬度数组
 * @param {图标地址} icon 
 * @param {图标大小} size 
 */
function addMarker(arrs,icon,size) {
    if (!size) {
      size = 0.8
    }
    let features = []
    //创建图标特性
    arrs.forEach(item => {
      features.push(createFeature(item))
    })
    // 创建矢量容器
    var vectorSource = new VectorSource({
      features: features
    })
    //创建图标样式
    var iconStyle = new Style({
       image: new Icon({
           opacity: 0.75,
           src: icon,
           scale: size
       })
     })
     //创建矢量层
     var vectorLayer = new VectorLayer({
         source: vectorSource,
         style: iconStyle
     });
     return vectorLayer
}
function createFeature(item) {
    return new Feature({
        geometry: new Point(item.lnglat, "XY"),
        name: item.name,
    })
}