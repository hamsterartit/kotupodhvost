/* global $ */
import "./hammer";
import "./jquery.images-compare.min";

$(document).ready(function () {
    /* Is in view */
    let watchedElements = [];
    let doc = document.documentElement;
    let currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    $(".in-view-watcher").each(function (i, v) {
        watchedElements.push($(v));
    });
    $.fn.extend({
        inViewWatcher: function () {
            watchedElements.push(this);
            return this;
        },
    });

    function checkWatchedElements() {
        currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        let clientHeight = $(window).height();
        let newWatchedElementsList = [];
        $.each(watchedElements, function (_, obj) {
            if (typeof obj === "undefined") {
                return;
            }
            let topOfElement = obj.offset().top;
            let bottomOfElement = obj.offset().top + obj.height();

            if (
                (topOfElement > currentYScroll && topOfElement < currentYScroll + clientHeight) ||
                (bottomOfElement > currentYScroll && bottomOfElement < currentYScroll + clientHeight)
            ) {
                obj.addClass("is-in-view");
                obj.trigger("in-view");
            } else {
                newWatchedElementsList.push(obj);
            }
        });
        watchedElements = newWatchedElementsList;
    }

    $(window).on("scroll", checkWatchedElements);
    $(window).on("load", checkWatchedElements);
    checkWatchedElements();

    /* Compare slider */
    $(".js-img-compare").imagesCompare();

    /* Mobile nav */
    $(".js-nav-btn").click(function () {
        $(this).toggleClass("active");
        $(".js-nav-body").toggleClass("active");
        $("body").toggleClass("locked");
    });

    /* Tabs */
    $('.js-tab-btn').click(function (e) {
        e.preventDefault();
        const $btn = $(e.currentTarget);
        $('.js-tab-btn').removeClass('active');
        $('.js-tab-content').removeClass('active');
        const $contentId = $btn.attr('id');
        $btn.addClass('active');
        $("[data-content-tab='" + $contentId + "']").addClass('active');
    });

    /* Slider */
    new Swiper(".js-slider", {
        spaceBetween: 16,
        slidesPerView: "auto",
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            960: {
                spaceBetween: 24,
            },
        },
    });

    /* Map */
    const place = [53.235687, 50.181100];
    ymaps.ready(function () {
        const map = new ymaps.Map(
            "map",
            {
                center: [53.235059, 50.181564],
                zoom: 15,
                controls: [],
            },
            {
                suppressMapOpenBlock: true,
            }
        );

        map.controls.remove("routeButtonControl");
        map.controls.remove("zoomControl");
        map.controls.remove("geolocationControl");
        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("rulerControl");
        map.behaviors.disable(["scrollZoom"]);


        let marker = new ymaps.Placemark(
            place,
            {hintContent: ""},
            {
                iconLayout: "default#image",
                iconImageHref: "img/pin.png",
                iconImageSize: [72, 72],
                iconShape: {
                    type: "Rectangle",
                    coordinates: [[-25, -25], [25, 25]],
                },
            }
        );


        map.geoObjects.add(marker);
    });
});