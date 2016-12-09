
jQuery(function(){
    $ = jQuery ;
    //main menu
    $("#club_banner_menu ul").singlePageNav({offset: $('#club_banner_menu').outerHeight()});
    //banner slide
    $('.banner').unslider({fluid: true});
    $(window).on("load scroll resize", function(){
        banner_height = ($(document).width()/1920) * 760;
        $('.banner').height(banner_height);
        $('.banner ul li').height(banner_height);
        if(banner_height > 250){
            caption_margin_top = (banner_height-100)/2;
            $('.banner .slide_caption:hidden').show();
            $('.banner .slide_caption').css({"margin-top":caption_margin_top});
        }else{
            $('.banner .slide_caption').hide();
        }
        $("#club_banner_slide > ul > li").css({"background-size":"cover"});
    });
    //about icon
    $(window).on("load scroll resize", function(){
        about_small_width = $(".about_icon").width();
        about_icon_padding_left = (about_small_width/100)*30;
        about_icon_width = (about_small_width/100)*40;
        about_icon_size = (about_icon_width/100)*50;
        about_icon_padding_top = (about_icon_width/100)*25;
        $(".about_icon .imgsmall").css({
                                    'margin-left': about_icon_padding_left,
                                    'width': about_icon_width,
                                    'height': about_icon_width,
                                                    });
        $("#club_about .about_icon .imgsmall i").css({
                                                    "font-size":about_icon_size,
                                                    "padding-top":about_icon_padding_top,
                                                                                  });
        $(".about_icon p").css({
                                'padding-left': "10%",
                                'padding-right': "10%",
                                            });
    });
    //about textimonial
    $.current_testimonial = $("div.testimonial_text").first() ;
    $("div.testimonial_text").hide();
    $.current_testimonial.show();
    $(window).on("load scroll resize", function(){
        testimonial_child_height = $(".testimonial_text").height();
        $("#testimonial_text_small").height(testimonial_child_height);
        $(".pre_next_small").height(testimonial_child_height);
    });
    $("#prev_testimonial").click(function(){
        $.current_testimonial.effect("fade",{},200,function(){
                $.current_testimonial_prev = ($.current_testimonial.index() == 0) ? $(".testimonial_text").last() : $.current_testimonial.prev() ;
                $.current_testimonial_prev.fadeIn();
                $.current_testimonial = $.current_testimonial_prev;
        });
        return false;
    });
    $("#next_testimonial").click(function(){
        $.current_testimonial.effect("fade",{},200,function(){
                $.current_testimonial_next = ($.current_testimonial.index() == $(".testimonial_text").last().index() ) ? $(".testimonial_text").first() : $.current_testimonial.next() ;
                $.current_testimonial_next.fadeIn();
                $.current_testimonial = $.current_testimonial_next;
        });
        return false;
    });

    //event
    $(".event_box_img").load(function(){
        img_height = $(this).height();
        $(this).parent(".event_box_small").height(img_height);
    });
    $(window).on("load resize", function(){
        img_height = $(".event_box_img").height();
        if($(window).width()>550){
            $(".event_box_small").height(img_height);
            $(".event_box_small").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this).children(".event_box_caption").css({"top": "-" + hide_paragraph_height + "px"});
            });
        }else{
            $(".event_box_small").height(img_height);
            $(".event_box_small").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this).height(total_height+img_height);
                $(this).children(".event_box_caption").css({"top": "0px"});
            });
        }
    });
    $(".event_box_small").hover(function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + paragraph_height + 10 ;
            $(this).children(".event_box_caption").stop().animate({"top": "-" + hide_paragraph_height + "px"});
        }
    },function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + 10 ;
            $(this).children(".event_box_caption").stop().animate({"top": "-" + hide_paragraph_height + "px"});
        }
    });

    //timeline
    $(window).on("load resize", function(){
        $.timeline_right_position_top = 0 ;
        $.timeline_old_right_position_top = 0 ;
        $.timeline_left_position_top = 0 ;
        $.timeline_old_left_position_top = 0 ;
        w_width = ($(window).width()>1600) ? 1600 : $(window).width() ;
        $.timeline_item_width = ( w_width - 50) / 2;
        $(".time_line_small").each(function(){
            
            $(this).children("a.left_timer").remove();
            $(this).children("a.right_timer").remove();
            $(this).removeClass("left_timeline");
            $(this).removeClass("right_timeline");
            if($(window).width()<970){
                $("#club_timeline .container-fluid").css({"position":"absolute"});
                positon_left = $("#club_timeline .container-fluid").position().left +100;
                
                $(this).css({   
                                    'left': 70,
                                    'top':$.timeline_right_position_top,
                                    'width': $(window).width() - positon_left
                                 });
                $(this).addClass("right_timeline");
                $.timeline_old_right_position_top = $.timeline_right_position_top;
                $.timeline_right_position_top = $.timeline_right_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend();
                $(this).children("a.right_timer").css({left:-86, width: 60 ,});
            }else if($.timeline_left_position_top == 0){
                $("#club_timeline .container-fluid").css({"position":"relative"});
                
                $(this).css({   
                                    'left':0,
                                    'top':0,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("left_timeline");
                $.timeline_old_left_position_top = $.timeline_left_position_top;
                $.timeline_left_position_top = $.timeline_left_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend();
                $(this).children("a.left_timer").css({left:$.timeline_item_width-50,});
            }else if( $.timeline_right_position_top < $.timeline_left_position_top ){
                $("#club_timeline .container-fluid").css({"position":"relative"});
                $.timeline_right_position_top = ($.timeline_old_left_position_top + 40) < $.timeline_right_position_top  ? $.timeline_right_position_top : $.timeline_right_position_top + 40;
                
                $(this).css({   
                                    'left': $.timeline_item_width + 79,
                                    'top':$.timeline_right_position_top,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("right_timeline");
                $.timeline_old_right_position_top = $.timeline_right_position_top;
                $.timeline_right_position_top = $.timeline_right_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend();
                $(this).children("a.right_timer").css({left:-99,});
            }else{
                $("#club_timeline .container-fluid").css({"position":"relative"});
                $.timeline_left_position_top = ($.timeline_old_right_position_top + 40) < $.timeline_left_position_top ? $.timeline_left_position_top : $.timeline_left_position_top + 40;
                
                $(this).css({
                                    'left':0,
                                    'top':$.timeline_left_position_top,
                                    'width': $.timeline_item_width - 50
                                 });
                $(this).addClass("left_timeline");
                $.timeline_old_left_position_top = $.timeline_left_position_top;
                $.timeline_left_position_top = $.timeline_left_position_top + $(this).outerHeight() + 40 ;
                $(this).prepend();
                $(this).children("a.left_timer").css({left:$.timeline_item_width-50,});
            }
            
            if($.timeline_left_position_top > $.timeline_right_position_top ){
                $("#club_timeline .container-fluid").height($.timeline_left_position_top-40);
                $("#club_timeline").height($.timeline_left_position_top+200);
            }else{
                $("#club_timeline .container-fluid").height($.timeline_right_position_top-40);
                $("#club_timeline").height($.timeline_right_position_top+200);
            }
            $(this).fadeIn();
        });
    });
    
   
   
   
    
    
    
});
