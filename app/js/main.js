/* global $ */
import "./hammer";
import "./jquery.images-compare.min";
import IMask from 'imask';

import animate from './animate';

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
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
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

    /* Phone mask */
    $(".js-phone-field").each((i, el) => {
        new IMask(el, {
            mask: "+{7}-(000)-000-00-00",
        });
    });

    /* Form */
    $('.js-submit').click(function (e) {
        e.preventDefault();
        if($("#checkbox").is(':checked') && $(".js-phone-field").val().length) {
            $('.js-form-box').addClass("hidden");
            $('.js-form-message-box').removeClass("hidden");
        }
    });

    /* Scroll to */
    $("body").on("click", "[data-scroll]", (e) => {
        e.preventDefault();
        const $link = $(e.currentTarget);
        let index = $link.data("scrollIndex");
        if (index === undefined) {
            index = 0;
        }
        $(".js-nav-btn").removeClass("active");
        $(".js-nav-body").removeClass("active");
        $("body").removeClass("locked");
        const $el = $($link.data('scroll')).eq(index);
        $('html, body').animate(
            {
                scrollTop: $el.offset().top - ($(window).height() * 10) / 100,
            },
            {
                duration: animate.duration.effect,
            }
        );
    });

    /* Map */
    if ($(".map").length) {
        const place = [53.235687, 50.181100];
        ymaps.ready(function () {
            // Создание экземпляра карты и его привязка к созданному контейнеру.
            const map = new ymaps.Map('map', {
                    center: [53.235059, 50.181564],
                    zoom: 15,
                    controls: [],
                }, {
                    suppressMapOpenBlock: true,
                }),

                // Создание макета балуна на основе Twitter Bootstrap.
                MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="map-popover top">' +
                    '<div class="arrow"></div>' +
                    '<div class="map-popover__inner">' +
                    '<div>443011, г.Самара, ул.Советской Армии, д. 238А, к. 22</div>' +
                    '<div class="map-popover__links">' +
                    '<a href="tel:88004585855">8 800 458 58 55</a>' +
                    '<div class="map-popover__divider"></div>' +
                    '<a href="mailto:kotupodkhvost@mail.ru">kotupodkhvost@mail.ru</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>', {
                        build: function () {
                            this.constructor.superclass.build.call(this);

                            this._$element = $('.map-popover', this.getParentElement());

                            this.applyElementOffset();
                        },
                        clear: function () {
                            this.constructor.superclass.clear.call(this);
                        },
                        onSublayoutSizeChange: function () {
                            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                            if (!this._isElement(this._$element)) {
                                return;
                            }

                            this.applyElementOffset();

                            this.events.fire('shapechange');
                        },
                        applyElementOffset: function () {
                            this._$element.css({
                                left: -(this._$element[0].offsetWidth / 2),
                                top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                            });
                        },
                        getShape: function () {
                            if (!this._isElement(this._$element)) {
                                return MyBalloonLayout.superclass.getShape.call(this);
                            }

                            var position = this._$element.position();

                            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top], [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ]));
                        },
                        _isElement: function (element) {
                            return element && element[0] && element.find('.arrow')[0];
                        }
                    }),

                MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(),

                myPlacemark = window.myPlacemark = new ymaps.Placemark([53.235687, 50.181100], {
                    balloonHeader: 'Заголовок балуна',
                    balloonContent: 'Контент балуна',
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "img/pin.png",
                    iconImageSize: [72, 72],
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,
                });
            map.controls.remove("routeButtonControl");
            map.controls.remove("zoomControl");
            map.controls.remove("geolocationControl");
            map.controls.remove("searchControl");
            map.controls.remove("trafficControl");
            map.controls.remove("typeSelector");
            map.controls.remove("fullscreenControl");
            map.controls.remove("rulerControl");
            map.behaviors.disable(["scrollZoom"]);
            map.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();
        });
    }
});