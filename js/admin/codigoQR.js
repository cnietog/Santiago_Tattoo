$(document).ready(function () {
    $("#generate").on("click", function () {
        var width = $("#width").val();
        var height = $("#height").val();
        var data = $("#data").val();

        var img = '<img style="margin: 0 auto" src="https://chart.googleapis.com/chart?chs='+width+'x'+height+'&cht=qr&chl='+data+'">';

        $("#result").html(img);

        var width = $("#width").val('');
        var height = $("#height").val('');
        var data = $("#data").val('');
    });
});