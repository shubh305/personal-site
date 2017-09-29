(function($) {
  "use_strict";
  $(window).on('load', function() {
    $('#page-loader').fadeOut('fast', function() {
      $(this).remove()
    });
    if (typeof Typist === "function") {
      new Typist(document.querySelector(".typelist-skill"), {
        letterInterval: 40,
        textInterval: 30
      })
    }
    $("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/shubham.305singh@gmail.com",
        method: "POST",
        data: $('#contactform').serialize(),
        dataType: "json"
    });
    return false;
      e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
});

  $('.submit-success').click(function() {
    $(this).hide();
  })
    $('.navigation-toggle').on('click', function() {
      $(this).toggleClass('nav__toggle');
      if ($('.sidenav').hasClass('open')) {
        $('.sidenav').css('right', '-280px');
        $('body, #nav > .container').removeClass('left-offset');
        $('.sidenav').removeClass('open')
      } else {
        $('.sidenav').css('right', '-1px');
        $('body, #nav > .container').addClass('left-offset');
        $('.sidenav').addClass('open')
      }
    });
    $("#nav .nav-link").on('click', function() {
      $('.navbar-collapse').removeClass("show")
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > (($('#skills').offset().top - 300) + ($('#skills').outerHeight()) - ($(window).height()))) {
        $(".progress-bar").each(function() {
          each_bar_width = $(this).attr('aria-valuenow');
          $(this).css({
            width: each_bar_width + "%"
          });
          $(this).html('<span class="progress-tooltip" style="left:' + each_bar_width + '%">' + each_bar_width + '%</span>')
        })
      }
    });
    var doc_height = $(document).height();
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > (doc_height - 1000)) {
        $('.scroll-top.active').removeClass('active');
        $('.scroll-top').addClass('active')
      } else {
        $('.scroll-top').removeClass('active')
      }
    });
    $('.scroll-top').on('click', function() {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return !1
    });
    $('.fun-fact-count').countTo();
    $(".equal-height").matchHeight();
    $('.page-scroll').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 70
      }, 1000, 'easeInOutExpo');
      event.preventDefault()
    });
    $('.portfolio-filter').on('click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $('.portfolio-filter > li.active').removeClass('active');
      $(this).addClass('active')
      $('.portfolio').isotope({
        filter: filterValue
      })
    });
    var $portfolio = $('.portfolio');
    $portfolio.imagesLoaded(function() {
      $portfolio.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      })
    });
    if ($(window).width() > 767) {
      var wow = new WOW({
        mobile: !1,
      });
      wow.init()
    }
  })
}(jQuery))
