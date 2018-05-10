  /* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';

/* =====================
  Map Setup
===================== */
var mapOpts = {
  center: [36.526, -115.294],
  zoom: 8
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}) .addTo(map);

//Add Data
var censusData = 'https://raw.githubusercontent.com/faycwalker/prisons2/master/NVDEMOSPCT'
var featureGroup;
var schoolStyle = {
  color: "#66ccbc"
}
function onEachFeature(feature, layer) {
  layer.on('click', function (e) {
  console.log(feature.properties);
  var resultText = "<strong><br>Census Tract:</strong> " + feature.properties['NAME']
  +  "<strong><br>Percent White </strong>" + feature.properties['PctWhite']+"%"
  +  "<strong><br>Percent Native Born </strong>" + feature.properties['PctAmerica']+"%"
  +  "<strong><br>Percent without Insurance </strong>" + feature.properties['PctNoInsur']+"%";
  $("#PctForResults").html(resultText).show()
});
}

function addTractLayer(styleKey) {
  $.ajax(censusData).done(function(data) {
      var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        style: styleDict[styleKey],
        onEachFeature: onEachFeature
      }
      ).addTo(map).bringToBack(map)
})
};

$("input[name='layer-select']").change( function() {
  console.log($(this).val());
  map.removeLayer(featureGroup);
  addTractLayer($(this).val());

})

$(document).ready(function() {
  addTractLayer("raceStyle");
  $("#PctForResults").hide()

function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        var schoolMarker = new L.circleMarker(latlng).setStyle(schoolStyle)
        schoolMarker.setRadius(feature.properties["PCTVAC"]/20)
        schoolMarker.on('click', function(e){
          map.setView([e.latlng.lat, e.latlng.lng], 10);
});
        return schoolMarker
      },
        onEachFeature: function(feature, layer) {
          var popupText = "<strong><br>School:</strong> " + feature.properties['SCHOOL']
          +  "<strong><br>Percent of Students Vaccinated: </strong>" + feature.properties['PCTVAC']+"%";
    layer.bindPopup(popupText);
          }
        });
    dataLayer.addTo(map);
};
$.getJSON("https://raw.githubusercontent.com/faycwalker/prisons2/master/Nevada%20School%20Vaccination", function(data) { addDataToMap(data, map);
});

function addDataToMap2(data, map) {
  var dataLayer2 = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {radius: 5, color: "#4286f4"});
    }
  });
dataLayer2.addTo(map).bringToFront(map)
};
$.getJSON("https://raw.githubusercontent.com/faycwalker/prisons2/master/Nevada%20VFC%20Providers", function(data) { addDataToMap2(data, map);
})
});
