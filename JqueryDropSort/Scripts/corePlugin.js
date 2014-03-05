(function ($) {
    $('head').append('<link href="Content/plugin/plugin-styles.css" rel="stylesheet" />');   
    $.fn.createVideoContainer = function (filmsnumber) {     
        // Events ***********************************************************
        $(this).on("LoadFilmFromWebAddress", function (event, param1, param2) {          
            var films = [{ Title: "123456789The beauty and the beast", Duration: "1:25:24", Filename: "small.mp4" },
                                      { Title: "The Small", Duration: "1:12:24", Filename: "big_buck_bunny.mp4" },
                                      { Title: "The Small", Duration: "1:25:24", Filename: "big_buck_bunny.mp4" },
                                      { Title: "The beauty and the beast", Duration: "1:12:24", Filename: "small.mp4" }];
            $(this).createVideoContainer.loadnewfiles(films);
        });
        // end events *******************************************************
        $.fn.createVideoContainer.loadnewfiles = function (filmstoload) {
            body.empty();          
            var ul = $("<ul id='sortable' style='padding-left:0px;'/>").appendTo(body);
            $('#sortable').sortable({ placeholder: "ui-state-highlight" }).disableSelection();
            var videoid = 'videocontainer';
            $.each(filmstoload, function (i) {
                var li = $("<li/>").appendTo(ul);
                $("<table><tr><td><div><video id='" + videoid + i + "' width='240' height='165' controls><source src='" + filmstoload[i].Filename + "' type='video/mp4'>Your browser does not support the video tag.</video></div></td><td><p>MOVE</p></td><td><table><tr><td>" + filmstoload[i].Title + "</td><td>" + filmstoload[i].Duration + "<td></tr><tr><td></td></tr><tr><td></td></tr></table><td></tr></table>").appendTo(li);
            });
            $("#sortable li").mouseenter(function () { $(this).find("p").css("display", "block"); });
            $("#sortable li").mouseleave(function () { $(this).find("p").css("display", "none"); });
        }
        var body = this;     
    var ul = $("<ul id='sortable' style='padding-left:0px;'/>").appendTo(this);
    $('#sortable').sortable({placeholder: "ui-state-highlight"}).disableSelection();
    var videoid = 'videocontainer';
$.each(filmsnumber, function (i)
{
    var li = $("<li/>").appendTo(ul);
    $("<table><tr><td><div><video id='" + videoid + i + "' width='240' height='165' controls><source src='" + filmsnumber[i].Filename + "' type='video/mp4'>Your browser does not support the video tag.</video></div></td><td><p>MOVE</p></td><td><table><tr><td>" + filmsnumber[i].Title + "</td><td>" + filmsnumber[i].Duration + "<td></tr><tr><td></td></tr><tr><td></td></tr></table><td></tr></table>").appendTo(li);
});
$("#sortable li").mouseenter(function () {$(this).find("p").css("display", "block");});
$("#sortable li").mouseleave(function () { $(this).find("p").css("display", "none"); });
return this;
};
}(jQuery));

