$(window).on('load', function () {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });
});

$(document).on('ready', function () {
    // initialization of header

    $('header').load(baseUserPathName + "/include/header.html");
    $('footer').load(baseUserPathName + "/include/footer.html");
    $.HSCore.components.HSHeader.init($('#header'));
    // initialization of animation
    $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function () {
            $(this).find('input[type="search"]').focus();
        }
    });

    // initialization of popups
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of countdowns
    var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
        yearsElSelector: '.js-cd-years',
        monthsElSelector: '.js-cd-months',
        daysElSelector: '.js-cd-days',
        hoursElSelector: '.js-cd-hours',
        minutesElSelector: '.js-cd-minutes',
        secondsElSelector: '.js-cd-seconds'
    });

    // initialization of malihu scrollbar
    $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

    // initialization of forms
    $.HSCore.components.HSFocusState.init();

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate', {
        rules: {
            confirmPassword: {
                equalTo: '#signupPassword'
            }
        }
    });

    // initialization of show animations
    $.HSCore.components.HSShowAnimation.init('.js-animation-link');

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');

    // initialization of hamburgers
    $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function () {
            $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function() {
            $('#headerSidebarList .collapse.show').collapse('hide');
        }
    });

    $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this).data('target');

        if($(this).attr('aria-expanded') === "true") {
            $(target).collapse('hide');
        } else {
            $(target).collapse('show');
        }
    });

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

    // initialization of select picker
    $.HSCore.components.HSSelectPicker.init('.js-select');
});
let userEmail = window.localStorage.getItem('pricechecker-user-name');
let compareTableResult = [];
function goFavouritePage(title,description,url, thumbnail,price) {
    if(userEmail == null){
        alert('You should login to this site for favouring!');
    }else {
        if(!title){
            title='title';
        }
        if(!description){
            description='description';
        }
        if(!price){
            price = '$100';
        }
        $.ajax(
            {
                async : false,
                method : "GET",
                url : baseServerPathNameForUser + '/authorized/add-fav-product.php?email=' + userEmail +'&title=' + title + '&description=' + description + '&url=' + url + '&thumbnail=' + thumbnail + '&price=' + price,
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                success: function (response) {
                    window.location.href = baseUserPathName + '/authorized/favourites.html';
                },
                fail: function (response) {
                    alert(response.toString());
                }
            }
        );
    }
}
function goComparePage(title){
    window.localStorage.setItem('pricechecker-search-string', title);
    window.location.href = baseUserPathName + '/compare.html';
}
function onClickedCart(title, description, url, thumbnail, price){
    if(userEmail == null){
        window.location.href = url;
    }else {
        if(!title){
            title='title';
        }
        if(!description){
            description='description';
        }
        if(!price){
            price = '$100';
        }
        $.ajax(
            {
                async : false,
                method : "GET",
                url : baseServerPathNameForUser + '/authorized/add-visited-product.php?email=' + userEmail +'&title=' + title + '&description=' + description + '&url=' + url + '&thumbnail=' + thumbnail + '&price=' + price,
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                success: function (response) {
                    window.location.href = url;
                },
                fail: function (response) {
                    window.console.log(response.toString());
                }
            }
        );
    }
}
function onClickedTrack(title, description, url, thumbnail, price){
    if(userEmail == null){
        alert('You should login to this site for tracking!');
    }else {
        if(!title){
            title='title';
        }
        if(!description){
            description='description';
        }
        if(!price){
            price = '$100';
        }
        $.ajax(
            {
                async : false,
                method : "GET",
                url : baseServerPathNameForUser + '/authorized/add-track-product.php?email=' + userEmail +'&title=' + title + '&description=' + description + '&url=' + url + '&thumbnail=' + thumbnail + '&price=' + price,
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                success: function (response) {
                    window.location.href = baseUserPathName + '/authorized/track-products.html';
                },
                fail: function (response) {
                    window.console.log(response.toString());
                }
            }
        );
    }
}
