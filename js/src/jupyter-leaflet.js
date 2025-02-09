// Layers
var layer = require('./layers/Layer.js');
var marker = require('./layers/Marker.js');
var icon = require('./layers/Icon.js');
var popup = require('./layers/Popup.js');
var rasterlayer = require('./layers/RasterLayer.js');
var tilelayer = require('./layers/TileLayer.js');
var localtilelayer = require('./layers/LocalTileLayer.js');
var wmslayer = require('./layers/WMSLayer.js');
var imageoverlay = require('./layers/ImageOverlay.js');
var videooverlay = require('./layers/VideoOverlay.js');
var velocity = require('./layers/Velocity.js');
var heatmap = require('./layers/Heatmap.js');
var vectorlayer = require('./layers/VectorLayer.js');
var path = require('./layers/Path.js');
var polyline = require('./layers/Polyline.js');
var polygon = require('./layers/Polygon.js');
var rectangle = require('./layers/Rectangle.js');
var circlemarker = require('./layers/CircleMarker.js');
var circle = require('./layers/Circle.js');
var markercluster = require('./layers/MarkerCluster.js');
var layergroup = require('./layers/LayerGroup.js');
var featuregroup = require('./layers/FeatureGroup.js');
var geojson = require('./layers/GeoJSON.js');

//Controls
var attributioncontrol = require('./controls/AttributionControl.js')
var control = require('./controls/Control.js');
var splitmapcontrol = require('./controls/SplitMapControl.js');
var layerscontrol = require('./controls/LayersControl.js');
var measurecontrol = require('./controls/MeasureControl.js');
var drawcontrol = require('./controls/DrawControl.js');
var fullscreencontrol = require('./controls/FullScreenControl.js');
var widgetcontrol = require('./controls/WidgetControl.js')
var zoomcontrol = require('./controls/ZoomControl.js')

//Map
var map = require('./Map.js');

// Load css
require('leaflet/dist/leaflet.css');
require('leaflet-draw/dist/leaflet.draw.css');
require('leaflet.markercluster/dist/MarkerCluster.css');
require('leaflet.markercluster/dist/MarkerCluster.Default.css');
require('leaflet-measure/dist/leaflet-measure.css');
require('leaflet-fullscreen/dist/leaflet.fullscreen.css');
require('./jupyter-leaflet.css');

// Forcibly load the marker icon images to be in the bundle.
require('leaflet/dist/images/marker-shadow.png');
require('leaflet/dist/images/marker-icon.png');
require('leaflet/dist/images/marker-icon-2x.png');

//Exports
module.exports = {
    // views
    LeafletLayerView : layer.LeafletLayerView,
    LeafletUILayerView : layer.LeafletUILayerView,
    LeafletIconView : icon.LeafletIconView,
    LeafletMarkerView : marker.LeafletMarkerView,
    LeafletPopupView : popup.LeafletPopupView,
    LeafletRasterLayerView : rasterlayer.LeafletRasterLayerView,
    LeafletTileLayerView : tilelayer.LeafletTileLayerView,
    LeafletLocalTileLayerView : localtilelayer.LeafletLocalTileLayerView,
    LeafletWMSLayerView : wmslayer.LeafletWMSLayerView,
    LeafletImageOverlayView : imageoverlay.LeafletImageOverlayView,
    LeafletVideoOverlayView : videooverlay.LeafletVideoOverlayView,
    LeafletVelocityView : velocity.LeafletVelocityView,
    LeafletHeatmapView : heatmap.LeafletHeatmapView,
    LeafletVectorLayerView : vectorlayer.LeafletVectorLayerView,
    LeafletPathView : path.LeafletPathView,
    LeafletPolylineView : polyline.LeafletPolylineView,
    LeafletPolygonView : polygon.LeafletPolygonView,
    LeafletRectangleView : rectangle.LeafletRectangleView,
    LeafletCircleMarkerView : circlemarker.LeafletCircleMarkerView,
    LeafletCircleView : circle.LeafletCircleView,
    LeafletMarkerClusterView : markercluster.LeafletMarkerClusterView,
    LeafletLayerGroupView : layergroup.LeafletLayerGroupView,
    LeafletFeatureGroupView : featuregroup.LeafletFeatureGroupView,
    LeafletGeoJSONView : geojson.LeafletGeoJSONView,
    LeafletAttributionControlView : attributioncontrol.LeafletAttributionControlView,
    LeafletControlView : control.LeafletControlView,
    LeafletLayersControlView : layerscontrol.LeafletLayersControlView,
    LeafletMeasureControlView : measurecontrol.LeafletMeasureControlView,
    LeafletDrawControlView : drawcontrol.LeafletDrawControlView,
    LeafletSplitMapControlView : splitmapcontrol.LeafletSplitMapControlView,
    LeafletFullScreenControlView : fullscreencontrol.LeafletFullScreenControlView,
    LeafletWidgetControlView : widgetcontrol.LeafletWidgetControlView,
    LeafletZoomControlView : zoomcontrol.LeafletZoomControlView,
    LeafletMapView : map.LeafletMapView,

    // models
    LeafletLayerModel : layer.LeafletLayerModel,
    LeafletUILayerModel : layer.LeafletUILayerModel,
    LeafletIconModel : icon.LeafletIconModel,
    LeafletMarkerModel :marker.LeafletMarkerModel,
    LeafletPopupModel : popup.LeafletPopupModel,
    LeafletRasterLayerModel : rasterlayer.LeafletRasterLayerModel,
    LeafletTileLayerModel : tilelayer.LeafletTileLayerModel,
    LeafletLocalTileLayerModel : localtilelayer.LeafletLocalTileLayerModel,
    LeafletWMSLayerModel : wmslayer.LeafletWMSLayerModel,
    LeafletImageOverlayModel : imageoverlay.LeafletImageOverlayModel,
    LeafletVideoOverlayModel : videooverlay.LeafletVideoOverlayModel,
    LeafletVelocityModel : velocity.LeafletVelocityModel,
    LeafletHeatmapModel : heatmap.LeafletHeatmapModel,
    LeafletVectorLayerModel : vectorlayer.LeafletVectorLayerModel,
    LeafletPathModel : path.LeafletPathModel,
    LeafletPolylineModel : polyline.LeafletPolylineModel,
    LeafletPolygonModel : polygon.LeafletPolygonModel,
    LeafletRectangleModel : rectangle.LeafletRectangleModel,
    LeafletCircleMarkerModel : circlemarker.LeafletCircleMarkerModel,
    LeafletCircleModel : circle.LeafletCircleModel,
    LeafletMarkerClusterModel : markercluster.LeafletMarkerClusterModel,
    LeafletLayerGroupModel : layergroup.LeafletLayerGroupModel,
    LeafletFeatureGroupModel : featuregroup.LeafletFeatureGroupModel,
    LeafletGeoJSONModel : geojson.LeafletGeoJSONModel,
    LeafletAttributionControlModel : attributioncontrol.LeafletAttributionControlModel,
    LeafletControlModel : control.LeafletControlModel,
    LeafletLayersControlModel : layerscontrol.LeafletLayersControlModel,
    LeafletMeasureControlModel : measurecontrol.LeafletMeasureControlModel,
    LeafletDrawControlModel : drawcontrol.LeafletDrawControlModel,
    LeafletSplitMapControlModel : splitmapcontrol.LeafletSplitMapControlModel,
    LeafletFullScreenControlModel : fullscreencontrol.LeafletFullScreenControlModel,
    LeafletWidgetControlModel : widgetcontrol.LeafletWidgetControlModel,
    LeafletZoomControlModel : zoomcontrol.LeafletZoomControlModel,
    LeafletMapModel : map.LeafletMapModel,
    LeafletMapStyleModel : map.LeafletMapStyleModel,
};
