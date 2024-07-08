$(window).on('load', function () {
    console.log('load');
    var sup1P = $('.sup1').offset().top + 8;
    $('.ref').offset({ top: sup1P });

    var sup2P = $('.sup2').offset().top + 8;
    $('.ref2').offset({ top: sup2P });

    var sup3P = $('.sup3').offset().top + 8;
    $('.ref3').offset({ top: sup3P });

    var sup4P = $('.sup4').offset().top + 8;
    $('.ref4').offset({ top: sup4P });

    var sup5P = $('.sup5').offset().top + 8;
    $('.ref5').offset({ top: sup5P });

    var sup6P = $('.sup6').offset().top + 8;
    $('.ref6').offset({ top: sup6P });

    var sup7P = $('.sup7').offset().top + 8;
    $('.ref7').offset({ top: sup7P });

    var sup8P = $('.sup8').offset().top + 8;
    $('.ref8').offset({ top: sup8P });

    var sup9P = $('.sup9').offset().top + 8;
    $('.ref9').offset({ top: sup9P });

    var sup10P = $('.sup10').offset().top + 8;
    $('.ref10').offset({ top: sup10P });

    var sup11P = $('.sup11').offset().top + 8;
    $('.ref11').offset({ top: sup11P });

    var sup12P = $('.sup12').offset().top + 8;
    $('.ref12').offset({ top: sup12P });

    var sup13P = $('.sup13').offset().top + 8;
    $('.ref13').offset({ top: sup13P });

    var vw = $(window).width() / 100;
    var stickyTop = $('#intro').offset().top - 3;
    var stickyTop1 = $('#works').offset().top - 3;
    var stickyTop2 = $('#texts').offset().top - 3;
    var stickyTop2b = $('#two-people').offset().top - 3;
    var stickyTop2c = $('#surprised-by-birds').offset().top - 3;
    var stickyTop3 = $('#credit').offset().top - 3;

    console.log(2 * vw);

    function scrollTopCheck() {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
            $('.titleBorder:eq(0)').addClass('sticky-T');
        } else {
            $('.titleBorder:eq(0)').removeClass('sticky-T');
            $('.titleBorder:eq(1)').removeClass('sticky-T');
        }

        if (stickyTop1 < windowTop) {
            $('.titleBorder:eq(1)').addClass('sticky-T');
            $('.titleBorder:eq(0)').removeClass('sticky-T');
        } else {
            $('.titleBorder:eq(1)').removeClass('sticky-T');
            $('.titleBorder:eq(2)').removeClass('sticky-T');
        }

        if (stickyTop2 < windowTop) {
            $('.titleBorder:eq(1)').removeClass('sticky-T');
            $('.titleBorder:eq(2)').addClass('sticky-T');
            $('.titleBorder-1:eq(0)').addClass('sticky-T');
            $('.titleBorder-1').show();
        } else {
            $('.titleBorder:eq(3)').removeClass('sticky-T');
            $('.titleBorder:eq(2)').removeClass('sticky-T');
            $('.titleBorder-1:eq(0)').removeClass('sticky-T');
            $('.titleBorder-1').hide();
        }

        if (stickyTop2b < windowTop) {
            $('.titleBorder-1:eq(0)').removeClass('sticky-T');
            $('.titleBorder-1:eq(1)').addClass('sticky-T');
        } else {
            $('.titleBorder-1:eq(1)').removeClass('sticky-T');
            $('.titleBorder-1:eq(2)').removeClass('sticky-T');
        }

        if (stickyTop2c < windowTop) {
            $('.titleBorder-1:eq(1)').removeClass('sticky-T');
            $('.titleBorder-1:eq(0)').removeClass('sticky-T');
            $('.titleBorder-1:eq(2)').addClass('sticky-T');
        } else {
            $('.titleBorder-1:eq(2)').removeClass('sticky-T');
        }

        if (stickyTop3 < windowTop) {
            $('.titleBorder:eq(3)').addClass('sticky-T');
            $('.titleBorder:eq(2)').removeClass('sticky-T');
            $('.titleBorder-1').hide();
        } else {
            $('.titleBorder:eq(3)').removeClass('sticky-T');
        }
    }

    var dwidth = jQuery(window).width();
    jQuery(window).bind('resize', resize);

    function resize() {
        var wwidth = jQuery(window).width();

        vw = $(window).width() / 100;
        stickyTop = $('#intro').offset().top - 3;
        stickyTop1 = $('#works').offset().top - 3;
        stickyTop2 = $('#texts').offset().top - 3;
        stickyTop2b = $('#two-people').offset().top - 3;
        stickyTop2c = $('#surprised-by-birds').offset().top - 3;
        stickyTop3 = $('#credit').offset().top - 3;

        if (dwidth !== wwidth) {
            dwidth = jQuery(window).width();
            /*
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function () {
                this.location.reload(false);
            }, 800);
*/
        }
    }

    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName('mySlides');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }
        x[myIndex - 1].style.display = 'block';
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    var myIndex1 = 0;
    carousel1();

    function carousel1() {
        var i;
        var x = document.getElementsByClassName('mySlides1');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        myIndex1++;
        if (myIndex1 > x.length) {
            myIndex1 = 1;
        }
        x[myIndex1 - 1].style.display = 'block';
        setTimeout(carousel1, 2000); // Change image every 2 seconds
    }

    setTimeout(() => {
        resize();
        scrollTopCheck();
        $(window).scroll(scrollTopCheck);
    }, 500);
});
