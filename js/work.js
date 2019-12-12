$(function(){
    $("img.ChangePhoto").click(function(){
        var ImgSrc = $(this).attr("src");
        $("img#MainPhoto").attr({src:ImgSrc});
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("slow");
        return false;
    });
});
