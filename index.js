$(document).ready(function () {
    var dwidth = jQuery(window).width();
    var offset = 12;
    jQuery(window).bind('resize', function (e) {
        var wwidth = jQuery(window).height();
        vh = $(window).height() / 100;
        vw = $(window).width() / 100;
        stickyTop = $('#intro').offset().top - 3;
        stickyTop1 = $('.Mobile:eq(1)').offset().top - offset * vh;
        stickyTop2 = $('.Mobile:eq(2)').offset().top - offset * vh;
        stickyTop3 = $('.Mobile:eq(3)').offset().top - offset * vh;

        if (dwidth !== wwidth) {
            dwidth = jQuery(window).width();
            /*
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function () {
                this.location.reload(false);
            }, 800);*/
        }
    });

    var modal = document.getElementById('myModal');

    var img = document.getElementById('myImg');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    img.onclick = function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    var span = document.getElementsByClassName('close')[0];

    span.onclick = function () {
        modal.style.display = 'none';
    };

    $('.modal').click(function (event) {
        $('#myModal').hide();
    });

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

    var vh = $(window).height() / 100;
    var vw = $(window).width() / 100;
    var stickyTop = $('#intro').offset().top - 3;
    var stickyTop1 = $('#works').offset().top - offset * vh;
    var stickyTop2 = $('#texts').offset().top - offset * vh;
    var stickyTop3 = $('#cc').offset().top - offset * vh;

    $(window).scroll(scrollTopCheck);

    function scrollTopCheck() {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
            //Intro
            $('.works-but').show();
            $('.works-but').addClass('sticky');
            $('.Mobile-show:eq(0)').show();
            $('.Mobile-show:eq(1)').hide();
            $('.Mobile-show:eq(0)').addClass('sticky-T1');
            $('.Mobile-show:eq(1)').removeClass('sticky-TT');
        } else {
            $('.works-but').removeClass('sticky').hide();
            $('.Mobile-show:eq(1)').removeClass('sticky-T1');
            $('.Mobile-show:eq(0)').hide();
        }

        if (stickyTop1 < windowTop) {
            //works
            $('.text-but').addClass('sticky').show();
            $('.Mobile-show:eq(1)').show();
            $('.Mobile-show:eq(2)').hide();
            $('.Mobile-show:eq(1)').addClass('sticky-T');
            $('.Mobile-show:eq(0)').removeClass('sticky-T1');
            $('.Mobile-show:eq(0)').addClass('sticky-TT');
        } else {
            $('.text-but').removeClass('sticky').hide();
            $('.Mobile-show:eq(1)').removeClass('sticky-T');
            $('.Mobile-show:eq(0)').removeClass('sticky-TT');
        }

        if (stickyTop2 < windowTop) {
            //text
            $('.cc-but').addClass('sticky').show();
            $('.Mobile-show:eq(2)').show();
            $('.Mobile-show:eq(1)').show();
            $('.Mobile-show:eq(3)').hide();
            $('.Mobile-show:eq(2)').addClass('sticky-T');
            $('.Mobile-show:eq(1)').addClass('sticky-TT');
            $('.Mobile-show:eq(1)').removeClass('sticky-T');

            $('.Mobile-show:eq(0)').removeClass('sticky-T1');
        } else {
            $('.cc-but').removeClass('sticky').hide();
            $('.Mobile-show:eq(2)').removeClass('sticky-T');
            $('.Mobile-show:eq(1)').removeClass('sticky-TT');
        }

        if (stickyTop3 < windowTop) {
            //catalogue
            $('.cc-but').hide();
            $('.text-but').hide();
            $('.works-but').hide();
            $('.Mobile-show:eq(3)').show();
            $('.Mobile-show:eq(2)').show();
            $('.Mobile-show:eq(3)').addClass('sticky-T');
            $('.Mobile-show:eq(2)').addClass('sticky-TT');
            $('.Mobile-show:eq(2)').removeClass('sticky-T');
        } else {
            $('.cc-but').show();
            $('.Mobile-show:eq(3)').removeClass('sticky-T');
            $('.Mobile-show:eq(2)').removeClass('sticky-TT');
        }
    }

    setTimeout(() => {
        vh = $(window).height() / 100;
        vw = $(window).width() / 100;
        stickyTop = $('#intro').offset().top - 3;
        stickyTop1 = $('#works').offset().top - offset * vh;
        stickyTop2 = $('#texts').offset().top - offset * vh;
        stickyTop3 = $('#cc').offset().top - offset * vh;
    }, 500);
});

function toggle(button) {
    // this works because the button is immediately after the "moreDetails" element it pertains to
    let Text = button.parentElement.querySelector('.moreDetails');

    // this would work if you move the button so it is not immediately after moreDetails, but still in the same parent div.
    //let Text = button.parentElement.querySelector(".moreDetails");

    if (Text.style.display == 'block') {
        Text.style.display = 'none';
        button.innerHTML = '> read more';
    } else {
        Text.style.display = 'block';
        button.innerHTML = '< see less';
    }

    /* if(Text.style.display == "none"){
        Text.style.display= "block";
		button.innerHTML = "< see less"
		
    }
    else {
        Text.style.display = "none";
		button.innerHTML= "> read more"
    }*/
}

const moreDetailses = document.querySelectorAll('.moreDetails');
for (let i = 0; i < moreDetailses.length; i++) {
    moreDetailses[i].style.display = 'none';
}
