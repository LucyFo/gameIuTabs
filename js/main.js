$(document).ready(function () {
    $('#information').hover(function () {
        $('#information').css('border-bottom', '3px solid white')
    }, function () {
        $('#information').css('border', 'none');
    });
    $('#rating').hover(function () {
        $('#rating').css('border-bottom', '3px solid white')
    }, function () {
        $('#rating').css('border', 'none');
    });
    $('#buy').hover(function () {
        $('#buy').css('border-bottom', '3px solid white')
    }, function () {
        $('#buy').css('border', 'none');
    });
    $('#link-to-buy').click(function () {
        window.location.href = 'https://store.ubi.com/ru/far-cry--4/56c4947a88a7e300458b45e2.html';
    });
    $('.game-description').click(function (event) {
        var contentEl = event.target.nextElementSibling;
        if ($(contentEl).is(':hidden')) {
            $('.game-description').hide();
            $(contentEl).slideDown(700);
        } else {
            $(contentEl).slideUp(700);
        }
    });
});