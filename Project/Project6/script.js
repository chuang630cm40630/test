var setLat = 25.041608;
var setLng = 121.536302;

function setLocation(cityname) {
    if (cityname == 'Taipei') {
        setLat = 25.0375417;
        setLng = 121.562244;
    }
    if (cityname == 'Taichung') {
        setLat = 24.1618329;
        setLng = 120.6446744;
    }
    if (cityname == 'Takaw') {
        setLat = 22.6199395;
        setLng = 120.289255;
    }
    initMap(); //再載入Map一次
}




let map;

//開啟後只呼叫一次
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: setLat,
            lng: setLng
        },
        zoom: 16
    });
    let url = 'https://raw.githubusercontent.com/sandyuu/FileStorage/master/getmaskstock.json';
    let xhr = new XMLHttpRequest();
    //把資料拿出來用
    xhr.onload = function () {
        //字串變物件
        var data = JSON.parse(this.responseText)

        //alert(1230);
        //alert(data.features[0].geometry.coordinates[0]);


        // Create markers.
        for (var i = 0; i < data.features.length; i++) {
            var mylat = data.features[i].geometry.coordinates[1];
            var mylng = data.features[i].geometry.coordinates[0];
            var myposition = new google.maps.LatLng(mylat, mylng);

            var big = data.features[i].properties.masksLeft;
            var small = data.features[i].properties.childMasksLeft;
            var stock = big + small;

            if (stock != 0) {
                var iconpath = 'images/pharmacy.png'
            } else {
                var iconpath = 'images/empty.png'
            }


            var marker = new google.maps.Marker({
                position: myposition,
                icon: iconpath,
                map: map
            });
        };
    }

    xhr.open('GET', url);
    xhr.send();







    // Markers放圖釘
    var marker = new google.maps.Marker({
        position: {
            lat: 25.0414,
            lng: 121.5364
        },
        map: map,
        title: 'Hello World!'
    });
}