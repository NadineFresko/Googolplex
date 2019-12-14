
(function() {

    var x = document.getElementById("postcode_finder_message"),
        geoBtn = document.getElementById("geoBtn");

    geoBtn.addEventListener("click", getLocation);

    function getLocation(event) {
        x.innerHTML = "We are currently trying to find you";
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var geocoder = new google.maps.Geocoder();
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var latlonstr = latlon.split(",", 2);
        var latlng = {lat: parseFloat(latlonstr[0]), lng: parseFloat(latlonstr[1])};
        var callapilocation = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latlon+"&sensor=true";
        if (geocoder) {
            geocoder.geocode({ "location": latlng }, function(results, status) {
                console.log(results);
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var val;
                        var comp = results[0].address_components;
                        for (val in comp) {
                            if(comp[val].types[0].indexOf("postal_code") > -1) {
                                var postcode = encodeURIComponent(comp[val].long_name);
                                window.location = "/node/3/?postcode=" + postcode;
                            }
                        }
                    } else {
                        window.alert("No results found");
                    }
                } else {
                    window.alert("Geocoder failed due to: " + status);
                }
            });
        }
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "You have not allowed us to use your location."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "We cannot find you - please enter your postcode."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get your location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }
})();