"use strict";

// drawer
jQuery(function () {
    jQuery('.drawer-btn').on('click', function () {
        jQuery('.drawer').slideToggle(400);
        if (jQuery('.drawer-overlay').is(':visible')) {
            jQuery('.drawer-overlay').fadeOut(400);
        } else {
            jQuery('.drawer-overlay').fadeIn(400);
        }
        jQuery('body').toggleClass('fixed');
    });
    jQuery('.drawer li a').on('click', function () {
        jQuery('.drawer').slideToggle(0);
        jQuery('.drawer-overlay').fadeOut(0);
        jQuery('body').toggleClass('fixed');
    });

    jQuery('.drawer-overlay').on('click', function () {
        jQuery('.drawer').slideToggle(400);
        jQuery('.drawer-overlay').fadeOut(400);
        jQuery('body').toggleClass('fixed');
    });
});

// スムーススクロール
jQuery(function () {
    jQuery('a[href^="#"]').on('click', function() {
        // #js-headerがついた要素の高さを取得
        // let header = jQuery('#js-header').innerHeight();
        // 移動速度を指定（ミリ秒）
        let speed = 500;
        // hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = jQuery(target).offset().top; // - header;
        // ターゲットの位置までspeedの速度で移動
        jQuery("html").animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });
});