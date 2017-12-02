$(document).ready(function() {
    var visibleHeight = $(window).height();
    var visibleWidth = $(window).width();

    $(window).resize(function() {
        // location.reload();
    });

    /*var e = $(".fadeEffect").height(),
        i = $(".fadeEffect");
    $(document).scroll(function() {
        var n = $(document).scrollTop(),
            s = 1 - n / e;
        i.css("opacity", s);
    });*/

    /*var lastScrollPos = 0;

    function FadeInFadeOut() {
        $(window).scroll(function(event) {
            var st = $(this).scrollTop();
            if (lastScrollPos === 0) {
                counter = 1;
                $('#hero_carousel, .project_header, .studio_header, .project_detail_header').css({
                    opacity: counter,
                });
            }
            else if (lastScrollPos < st) {
                counter = counter - 0.001;
                $('#hero_carousel, .project_header, .studio_header, .project_detail_header').animate({
                    opacity: counter ,
                });
            } else {
                counter = counter + 0.001;
                $('#hero_carousel, .project_header, .studio_header, .project_detail_header').animate({
                    opacity: counter,
                });
            }
            lastScrollPos = st;
        });
    }*/

    adjust_height();
    adjust_width();

    function adjust_height() {
        $('#hero_carousel .carousel-inner .item, .project_header, .studio_header, .project_detail_header').css({
            'height': visibleHeight
        });

        if (visibleWidth <= 768) {
            $('.bg_header').css({
                height: visibleHeight,
            });
            var headImgsecH = visibleHeight - (visibleWidth * 0.12);

            $('.head_imgsec').css({
                height: headImgsecH,
            });
        } else {
            var bgHeaderH = visibleHeight - (visibleWidth * 0.04);
            $('.bg_header').css({
                height: bgHeaderH,
            });
            var headImgsecH = bgHeaderH - (visibleWidth * 0.08);
            $('.head_imgsec').css({
                height: headImgsecH,
            });
        }
    }

    function adjust_width() {
        if (visibleWidth > 2250) {
            var w = visibleWidth - 1800;
            var m = w / visibleWidth * 100;
            var wc = visibleWidth - (m * 2);
            wc = wc / 18;
            m = m / 2;
            $('#hero_carousel .menu_wrap, .project_detail_header .menu_wrap').css({
                'margin-left': m + '%'
            });
            $('.menu').css({
                'right': m + '%'
            });
            /*$('.carousel_linesec').css({
                'left': m + '%',
                'width': wc + '%'
            });*/
            /*$('#hero_carousel .carousel-caption').css({
                'left': m + '%',
                'right': m + '%'
            });*/
            /*$('#caurosal_slidersec').css({
                'padding-left': m - 2 + '%',
                'padding-right': m - 2 + '%'
            });*/
            $('#myVisor4').css({
                'margin-left': -m + '%',
                'margin-right': -m + '%'
            });
        }
    }

    // scroll body to 0px on click
    $('#top_to_bottom ').on('click', function() {
        var pnode = $(this).parents('header');
        var tnode = $(pnode).next('section');
        var pos = $(tnode).offset().top;
        $('body,html').animate({
            scrollTop: pos
        }, 1000);
        return false;
    });

    // scroll body to 0px on click
    $('#back-to-top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        scroll = 0;
        return false;
    });

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    // Read more
    $('.readmore_btn').on('click', function(e) {
        e.preventDefault();
        var value = $(this).html();
        var dataID = $(this).attr('data-id');
        if (value == 'Read More') {
            $('#' + dataID).slideDown(500);
            $(this).html('Read Less');
        } else {
            $('#' + dataID).slideToggle(500);
            $(this).html('Read More');
        }
    });

    $('.viewmore_btn').on('click', function(e) {
        e.preventDefault();
        var value = $(this).html();
        var dataID = $(this).attr('data-id');
        if (value == 'View More') {
            $('#' + dataID).slideDown(500);
            $(this).html('View Less');
        } else {
            $('#' + dataID).slideToggle(500);
            $(this).html('View More');
        }
    });

    $('#toggle').on('click', function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('inline-menu');
    });

    // For Image Gallery
    $('.fancybox').fancybox();
    $(".fancybox-manual-c").on('click', function(e) {
        e.preventDefault();
        var srcArr = [];
        var imgArr = $('.fancybox-manual-c').find('img');
        var firstImg = $(this).find('img').attr('src');
        srcArr.push(firstImg);
        for (var i = 0; i < imgArr.length; i++) {
            var temp = imgArr[i];
            var tempSrc = temp.getAttribute("src")
            if (tempSrc != firstImg) {
                srcArr.push({
                    href: temp.getAttribute("src")
                });
            }
        }
        console.log(srcArr);
        $.fancybox.open(srcArr, {
            helpers: {
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });
    });
});
