$(document).ready(function () {
    function e(e, a) {
        var n = e.width(), t = a.width(), o = e.height(), s = a.height(), r = !1;
        if (o < s) {
            e.css({width: "auto", height: "100%"}), n = e.width(), t = a.width();
            var c = (n - t) / 2;
            e.css("margin-left", "-" + c + "px"), r = !0
        } else {
            var i = (s - o) / 2;
            e.css("margin-top", i + "px"), r = !0
        }
        r && (e.fadeIn(), r = !1)
    }

    function a() {
        var e = $("#search_input"), a = $(".search_result");
        e.focus(function () {
            $(".icon-search").css("color", "#3199DB"), a.show()
        }), e.keyup(n(this.autoComplete)), $(document).click(function (e) {
            "search_input" !== e.target.id && "search_result" !== e.target.className && "search_item" !== e.target.className && ($(".icon-search").css("color", "#CAD3DC"), a.hide())
        })
    }

    function n(e, a) {
        var n;
        return a = a || 120, function () {
            var t = this, o = arguments, s = function () {
                e.apply(t, o)
            };
            clearTimeout(n), n = setTimeout(s, a)
        }
    }

    function t(e) {
        e += "\n\n著作权归作者所有。\n商业转载请联系作者获得授权,非商业转载请注明出处。\n原文: " + location.href, $(".post-content").on("copy", function (a) {
            (window.clipboardData || a.originalEvent.clipboardData).setData("text/plain", e), a.preventDefault()
        })
    }

    if ($("#menu-toggle").on("click", function (e) {
            $(".g-nav").slideToggle(200), $(document).one("click", function () {
                $(".g-nav").slideUp(200)
            }), e.stopPropagation()
        }), $(".g-nav").on("click", function (e) {
            e.stopPropagation()
        }), $(window).width() > 695) {
        var o = $(".g-header"), s = o.outerHeight(), r = $(".g-logo"), c = $(".g-nav a"),
            i = $(".g-banner").attr("data-theme"), l = $(document).scrollTop();
        $(document).scroll(function () {
            var e = $(this).scrollTop();
            e > s ? (e > 3 * s && o.addClass("headerUp"), o.css({
                "background-color": "rgba(255, 255, 255, .98)",
                "box-shadow": "0 1px 12px rgba(0, 0, 0, .08)"
            }), r.css({
                background: "url(/assets/icons/logo_" + i + ".svg) no-repeat center",
                "background-size": "100% 100%"
            }), c.css("color", "#666"), $(".g-nav").addClass("nav-" + i)) : (o.removeClass("headerUp"), o.css({
                "background-color": "transparent",
                "box-shadow": "none"
            }), r.css({
                background: "url(/assets/icons/logo.svg) no-repeat center",
                "background-size": "100% 100%"
            }), c.css("color", "#fff"), $(".g-nav").removeClass("nav-" + i)), l > e ? o.addClass("headerDown") : o.removeClass("headerDown"), l = e
        })
    }
    $(".read-next-item section").each(function () {
        var e = $(this), a = e.height(), n = $(".read-next-item").height();
        e.css("margin-top", (n - a) / 2 + "px"), e.fadeIn()
    }), $(".read-next-item img").each(function () {
        e($(this), $(".read-next-item"))
    }), function () {
        for (var e = parseInt($("#total_pages").val()), a = parseInt($("#current_pages").val()), n = $("#base_url").val(), t = "", o = a - 3; o < a; o++) o > 0 && 1 !== o ? t += '<a href="' + n + "page" + o + '" class="page-link page-num">' + o + "</a>" : 1 === o && (t += '<a href="' + n + '" class="page-link page-num">' + o + "</a>");
        t += '<span class="page-link page-num active">' + a + "</span>";
        for (var s = a + 1; s <= a + 3; s++) s <= e && (t += '<a href="' + n + "page" + s + '" class="page-link page-num">' + s + "</a>");
        $("#page-link-container").html(t)
    }(), a.prototype.autoComplete = function () {
        var e = this.value.toLowerCase();
        e.length ? $(".icon-search").css("color", "#3199DB") : $(".icon-search").css("color", "#CAD3DC"), $.getJSON("../../search.json").done(function (a) {
            var n = "";
            for (var t in a) {
                var o = a[t], s = o.title, r = o.tags, c = (o.url, s + r);
                "" !== e && c.toLowerCase().indexOf(e) >= 0 && (n += '<a class="search_item" href="' + o.url + '">' + o.title + "</a>")
            }
            $(".search_result").html(n)
        })
    }, new a, "true" === $("#nm-switch").val() && function () {
        var e = $("body"), a = new Date, n = a.getHours();
        (n >= 0 && n <= 6 || 23 === n) && e.addClass("night-mode")
    }(), $(".post-content").on("mouseup", function (e) {
        var a = window.getSelection();
        a.toString().length >= 30 && t(a)
    })
});