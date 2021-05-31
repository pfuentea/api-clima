$(document).ready(function() {
    $('form').submit(function() {
        let ciudad=$('#ciudad').val();
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=10da9c234c9e9b10adf5abda17c8f5f8&units=metric`;
        $.get(url, function(res) {
            limpiar();
            console.log(res);
            let temp=res.main.temp;           
            let actual=res.weather[0].main;
            $('#city').append(res.name);
            $('#temperatura').append("Actual: "+actual+"( "+temp+" °C)");
            $('#fondo').addClass(actual);
            $('#coordenadas').append("Coords:"+res.coord.lat+","+res.coord.lon);
        }, 'json');
        return false;
    });
});

function limpiar(){
    $('#city').html("");
    $('#temperatura').html("");
    $('#coordenadas').html("");
    $('#fondo').attr("style","");
}
