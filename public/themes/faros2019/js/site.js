$(document).ready(function() {
  $(".site-menu--main svg a").click(function() {
      return window.location = $(this).attr("href"),
      !1
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
})