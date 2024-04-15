$(document).ready(function () {
    $("#generate").trigger("click", function () { // activa el evento "click" automáticamente al cargar la página
        var width = 300;
        var height = 300;
        var data = "";

        $(".card-title").each(function() {
            data += $(this).text() + "; "; // obtenemos el contenido de cada span con la clase "txt__name__producto"
        });

        var img = '<img style="margin: 0 auto" src="https://chart.googleapis.com/chart?chs='+width+'x'+height+'&cht=qr&chl='+data+'">';

        $("#result").html(img);

        var width = $("#width").val('');
        var height = $("#height").val('');
        var data = $("#data").val('');
    });
});