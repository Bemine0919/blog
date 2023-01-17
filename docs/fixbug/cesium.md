# cesium地图

## 自定义div展示在地图上，并随着地图拖动、缩放跟随移动
```js
viewer.scene.postRender.addEventListener(() => {
  //获取dom
  let dom = document.querySelector('#dom')
  // 后端返回的经纬度通过高程接口返回的坐标
  let useful = {x: 'xxx', y:'xxx', z:'xxx'}
  let position = Cesium.Cartesian3.fromDegrees(
    parseFloat(useful.x),
    parseFloat(useful.y),
    parseFloat(useful.z)
  )
  //已知坐标的情况下，将坐标转为在web页面上的坐标
  let windowPosition = new Cesium.Cartesian2();
  // 对windowPosition做了一个计算
  Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    viewer.scene,
    position, 
    windowPosition
  );
  dom.style.left = windowPosition.x  "px";
  dom.style.top = windowPosition.y + "px";
})
```