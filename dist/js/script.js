$(document).ready(function() {
    $('#click_menu_mobile').on('click', function() {
      $('nav').toggle();
    });
    $('#exit_menu_mobile').on('click', function() {
        $('nav').hide();
    });

    var header = $('header');
    var headerHeight = header.outerHeight() - 100;
    var menu = $('#menu');
    var menuHeight = menu.outerHeight();
    var menuTop = headerHeight - menuHeight;
    $(window).scroll(function() {
        if ($(this).scrollTop() > headerHeight) {
        header.addClass('sticky');
        menu.css('top', menuTop + 'px');
        } else {
        header.removeClass('sticky');
        menu.css('top', '');
        }
    });

    // Select the iframe and create a new Vimeo player instance
    const iframe = document.getElementById('video-player');
    const player = new Vimeo.Player(iframe);
    console.log(player);
  
    // Add an event listener to the iframe to play the video on click
    document.getElementById('play_pause').addEventListener('click', () => {
      player.play();
    });
});