import $ from './lib/lib';

$('button').on('click', function () {
    $(this).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));

// console.log($(".some").closest('.findme'));

// console.log($('.more').eq(0).siblings());

$('.findme').fadeOut(1800);