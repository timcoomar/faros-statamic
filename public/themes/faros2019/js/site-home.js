$(document).ready(function() {
  $(".fadeIn").addClass("hide"),
  $("#hamburger-container--main button").click(function() {
      $(this).toggleClass("is-active"),
      $(".site-menu--main").toggleClass("open")
  }),
  $("#hamburger-container--mobile button").click(function() {
      $(this).toggleClass("is-active"),
      $(".site-menu--mobile").toggleClass("open")
  }),
  $(".donation--time").hover(function() {
      $(this).hasClass("hovered") ? $(".donation--money").removeClass("hovered") : ($(this).addClass("hovered"),
      $(".donation--money").removeClass("hovered"),
      $(".give-img").attr("src", "/themes/faros2019/assets/give-time.jpg"))
  }),
  $(".donation--money").hover(function() {
      $(this).hasClass("hovered") ? $(".donation--time").removeClass("hovered") : ($(this).addClass("hovered"),
      $(".donation--time").removeClass("hovered"),
      $(".give-img").attr("src", "/themes/faros2019/assets/give-money.jpg"))
  }),
  $(".site-menu--main svg a").click(function() {
      return window.location = $(this).attr("href"),
      !1
  }),
  $(".home-section--main__a .content__title").each(function() {
      var e = $(this).html()
        , o = e.substr(0, e.indexOf(" "))
        , t = e.substr(e.indexOf(" "));
      $(this).html(t).prepend($("<div/>").html(o).addClass("break"))
  }),
  $('a[href*="#"]').not('[href="#"]').not('[href="/"]').click(function(e) {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var o = $(this.hash);
          o = o.length ? o : $("[name=" + this.hash.slice(1) + "]"),
          o.length && (e.preventDefault(),
          $("html, body").animate({
              scrollTop: o.offset().top
          }, 1e3, function() {
              var e = $(o);
              if (e.focus(),
              e.is(":focus"))
                  return !1;
              e.attr("tabindex", "-1"),
              e.focus()
          }))
      }
  })
}),
$(document).on("scroll", function() {
  for (var e = $(document).scrollTop(), o = e + $(window).height(), t = $(".fadeIn"), i = 0; i < t.length; i++) {
      var n = t[i];
      $(n).position().top < o ? $(n).addClass("visible") : $(n).removeClass("visible")
  }
}),
$(document).ready(function() {
  var e = $("#text")
    , o = $("#rect")
    , t = $("#rectSide");
  e.hide(),
  o.hide(),
  t.hide(),
  $(window).on("scroll", function() {
      var e = $(window).scrollTop() / ($("html").height() - $(window).height()) * 100;
      $("#farosDot").css("animation-delay", -e + "s")
  }),
  $.fn.isInViewport = function() {
      var e = $(this).offset().top
        , o = e + $(this).outerHeight()
        , t = $(window).scrollTop()
        , i = t + $(window).height();
      return o > t && e < i
  }
  ,
  $(window).on("resize scroll", function() {
      $(window).scrollTop() >= $(window).height() ? $(".hamburger").addClass("darken") : $(".hamburger").removeClass("darken"),
      $("#hook1About").isInViewport() ? (e.show().text("About Us"),
      o.show(),
      t.show()) : $("#hook2Approach").isInViewport() ? (e.show().text("Approach"),
      o.show(),
      t.show()) : $("#hook3Services").isInViewport() ? (e.show().text("Services"),
      o.show(),
      t.show()) : $("#hook4Contribute").isInViewport() ? (e.show().text("Contribute"),
      o.show(),
      t.show()) : (e.hide(),
      o.hide(),
      t.hide())
  }),
  $("#farosDotLink").hover(function() {
      $(".nav-main").css("z-index", "9999")
  }, function() {
      $(".nav-main").css("z-index", "0")
  })
});
