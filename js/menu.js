$(document).ready(function(){
   
    $('#bar').click(function(){
        $('ul.menu').slideToggle();
    })
    
    $("#button").click(function(){
        $("#search").css("display","inline-block")
        $("#search").click(function(){
        var k=$("#kw").val()
        $(`figcaption:contains(${k})`).parent().css("outline","3px double red")
        
        setTimeout(function(){
            $("figure").css("outline","none")
        },5000)
        setTimeout(function(){
            $("#search").css("display","none")
        },100)
        
    }) 
    })  
    $(" figure").addClass("    c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right")
    $(" figure >figcaption").addClass("c4-layout-bottom-left")
    $("nav ul.menu a").click(function(){
        var h=$(this).attr("href")
        $("html, body").animate({
            scrollTop: $(h).prop("offsetTop")+"px"
        },1000)
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >=100)
            $("nav").css({
                "position":"fixed",
                "left":0,
                "right":0,
                "top":0,
                "z-index":9999,
                "opacity":0.7
            })
        else  
            $("nav").css({
                "position":"relative",
                "opacity":1
            })
        if ($(this).scrollTop() >=180)
        $("h2.subject2").addClass("animate__animated animate__backInRight")
        if ($(this).scrollTop() >=690)
        $("h2.subject3").addClass("animate__animated animate__backInRight")
    })
    $("#gototop").hide()
                $(window).scroll(function() {
                    if ($(this).scrollTop() >=100)
                    $("#gototop").show("slow")
                    else  $("#gototop").hide("slow")
                })
                $("#gototop").click(function(){
                    $("html,body").animate({
                        scrollTop : 0},1000)
                })
                $("#submit").click(function(){
       
                    if (confirm("Bạn đồng ý mua sản phẩm")==true)
                alert('Mua sản phẩm thành công! \nMọi thắc mắc xin liên hệ qua email: 2051052121thanh@ou.edu.vn \nHoặc qua SĐT:0855009679.');
                 });
                 $(".btn").on("click",function(){
                    $(".input").toggleClass("inclicked");
                    $(".btn").toggleClass("close");
                    
                  })

})
