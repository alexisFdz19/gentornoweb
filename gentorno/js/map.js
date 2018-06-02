function initMap() {
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ],
  
  {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng = new google.maps.LatLng(20.6208655,-87.0784843);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Oficicina Grupo Entorno Inmobiliario"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', satellite);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 2 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng2 = new google.maps.LatLng(20.716091, -87.011477);
  var mapOptions2 = {
    zoom: 13,
    center: myLatlng2
  }
  var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);

  var iconBase = 'http://localhost:8080/gentornoweb/gentorno/img/logos/';

  var marker = new google.maps.Marker({
      position: myLatlng2,
      title:"Armonia Eco-Residencial",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map2);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 3 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng3 = new google.maps.LatLng(20.6782697,-87.0378611);
  var mapOptions3 = {
    zoom: 14,
    center: myLatlng3
  }
  var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions3);

  var marker = new google.maps.Marker({
      position: myLatlng3,
      title:"Residencial Selvamar",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map3);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');


/*==============================================
        =  Mapa 4 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng4 = new google.maps.LatLng(20.674783, -87.048186);
  var mapOptions4 = {
    zoom: 14,
    center: myLatlng4
  }
  var map4 = new google.maps.Map(document.getElementById("map4"), mapOptions4);

  var marker = new google.maps.Marker({
      position: myLatlng4,
      title:"Smyrna I",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map4);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 5 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng5 = new google.maps.LatLng(20.679179, -87.045139);
  var mapOptions5 = {
    zoom: 14,
    center: myLatlng5
  }
  var map5 = new google.maps.Map(document.getElementById("map5"), mapOptions5);

  var marker = new google.maps.Marker({
      position: myLatlng5,
      title:"Smyrna II Mza-12",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map5);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 6 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng6 = new google.maps.LatLng(20.679359, -87.045954);
  var mapOptions6 = {
    zoom: 14,
    center: myLatlng6
  }
  var map6 = new google.maps.Map(document.getElementById("map6"), mapOptions6);

  var marker = new google.maps.Marker({
      position: myLatlng6,
      title:"Smyrna II Mza-14",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map6);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 7 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng7 = new google.maps.LatLng(20.692768, -87.067669);
  var mapOptions7 = {
    zoom: 14,
    center: myLatlng7
  }
  var map7 = new google.maps.Map(document.getElementById("map7"), mapOptions7);

  var marker = new google.maps.Marker({
      position: myLatlng7,
      title:"Smyrna",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map7);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 8 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng8 = new google.maps.LatLng(20.483300, -87.263684);
  var mapOptions8 = {
    zoom: 14,
    center: myLatlng8
  }
  var map8 = new google.maps.Map(document.getElementById("map8"), mapOptions8);

  var marker = new google.maps.Marker({
      position: myLatlng8,
      title:"Xpu-Há Beach",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map8);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

/*==============================================
        =  Mapa 9 =
==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng9 = new google.maps.LatLng(20.427585, -87.299488);
  var mapOptions9 = {
    zoom: 15,
    center: myLatlng9
  }
  var map9 = new google.maps.Map(document.getElementById("map9"), mapOptions9);

  var marker = new google.maps.Marker({
      position: myLatlng9,
      title:"Costa 12 (Sirenis)",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map9);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  /*==============================================
        =  Mapa 10 =
  ==============================================*/

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng = new google.maps.LatLng(20.6208655,-87.0784843);
  var myLatlng2 = new google.maps.LatLng(19.955848, -87.465332);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var mapOptions2 = {
    zoom: 13,
    center: myLatlng2
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var map2 = new google.maps.Map(document.getElementById("map"), mapOptions2);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });

  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      title:"San Miguel Fracc. VII (1,2 y 3)",
      icon: iconBase + 'signodepesos.png'
  });

  // To add the marker to the map, call setMap();
  marker2.setMap(map2);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');


}