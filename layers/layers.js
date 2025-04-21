var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_shape_terreno_1 = new ol.format.GeoJSON();
var features_shape_terreno_1 = format_shape_terreno_1.readFeatures(json_shape_terreno_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shape_terreno_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shape_terreno_1.addFeatures(features_shape_terreno_1);
var lyr_shape_terreno_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shape_terreno_1, 
                style: style_shape_terreno_1,
                popuplayertitle: 'shape_terreno',
                interactive: false,
                title: '<img src="styles/legend/shape_terreno_1.png" /> shape_terreno'
            });
var format_rioblancopredial_2 = new ol.format.GeoJSON();
var features_rioblancopredial_2 = format_rioblancopredial_2.readFeatures(json_rioblancopredial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rioblancopredial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rioblancopredial_2.addFeatures(features_rioblancopredial_2);
var lyr_rioblancopredial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rioblancopredial_2, 
                style: style_rioblancopredial_2,
                popuplayertitle: 'rioblancopredial',
                interactive: true,
    title: 'rioblancopredial<br />\
    <img src="styles/legend/rioblancopredial_2_0.png" /> 0 - 3483000<br />\
    <img src="styles/legend/rioblancopredial_2_1.png" /> 3483000 - 9716000<br />\
    <img src="styles/legend/rioblancopredial_2_2.png" /> 9716000 - 22274000<br />\
    <img src="styles/legend/rioblancopredial_2_3.png" /> 22274000 - 41857000<br />\
    <img src="styles/legend/rioblancopredial_2_4.png" /> 41857000 - 76370000<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_shape_terreno_1.setVisible(true);lyr_rioblancopredial_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_shape_terreno_1,lyr_rioblancopredial_2];
lyr_shape_terreno_1.set('fieldAliases', {'codigo': 'codigo', 'vereda_cod': 'vereda_cod', 'codigo_ant': 'codigo_ant', 'codigo_nue': 'codigo_nue', 'c': 'c', 'NOMBRE': 'NOMBRE', 'ESTADO CIVIL': 'ESTADO CIVIL', 'COMUNA': 'COMUNA', 'DESTINO ECONOMICO': 'DESTINO ECONOMICO', 'AREA TERRENO': 'AREA TERRENO', 'AREA CONSTRUIDA': 'AREA CONSTRUIDA', 'AVALUO': 'AVALUO', });
lyr_rioblancopredial_2.set('fieldAliases', {'codigo_nue': 'codigo_nue', 'NOMBRE': 'NOMBRE', 'ESTADO CIV': 'ESTADO CIV', 'COMUNA': 'COMUNA', 'DESTINO EC': 'DESTINO EC', 'AREA TERRE': 'AREA TERRE', 'AREA CONST': 'AREA CONST', 'AVALUO': 'AVALUO', });
lyr_shape_terreno_1.set('fieldImages', {'codigo': 'TextEdit', 'vereda_cod': 'TextEdit', 'codigo_ant': 'TextEdit', 'codigo_nue': 'TextEdit', 'c': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIVIL': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO ECONOMICO': 'TextEdit', 'AREA TERRENO': 'Range', 'AREA CONSTRUIDA': 'Range', 'AVALUO': 'Range', });
lyr_rioblancopredial_2.set('fieldImages', {'codigo_nue': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIV': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO EC': 'TextEdit', 'AREA TERRE': 'TextEdit', 'AREA CONST': 'TextEdit', 'AVALUO': 'TextEdit', });
lyr_shape_terreno_1.set('fieldLabels', {'codigo': 'no label', 'vereda_cod': 'no label', 'codigo_ant': 'no label', 'codigo_nue': 'no label', 'c': 'no label', 'NOMBRE': 'no label', 'ESTADO CIVIL': 'no label', 'COMUNA': 'no label', 'DESTINO ECONOMICO': 'no label', 'AREA TERRENO': 'no label', 'AREA CONSTRUIDA': 'no label', 'AVALUO': 'no label', });
lyr_rioblancopredial_2.set('fieldLabels', {'codigo_nue': 'hidden field', 'NOMBRE': 'inline label - always visible', 'ESTADO CIV': 'hidden field', 'COMUNA': 'hidden field', 'DESTINO EC': 'inline label - visible with data', 'AREA TERRE': 'inline label - always visible', 'AREA CONST': 'hidden field', 'AVALUO': 'inline label - always visible', });
lyr_rioblancopredial_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});