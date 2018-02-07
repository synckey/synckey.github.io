!function (e, t) {
    "use strict";

    function n(e) {
        var t = e.length, n = ae.type(e);
        return !ae.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) {
        var t = xe[e] = {};
        return ae.each(e.match(ue) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ae.acceptData(e)) {
            var o, a, s = ae.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ae.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.pop() || ae.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ae.noop)), "object" != typeof n && "function" != typeof n || (i ? c[f] = ae.extend(c[f], n) : c[f].data = ae.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ae.camelCase(n)] = r), u ? null == (a = o[n]) && (a = o[ae.camelCase(n)]) : a = o, a
        }
    }

    function o(e, t, n) {
        if (ae.acceptData(e)) {
            var r, i, o, a = e.nodeType, u = a ? ae.cache : e, l = a ? e[ae.expando] : ae.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    ae.isArray(t) ? t = t.concat(ae.map(t, ae.camelCase)) : t in r ? t = [t] : (t = ae.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (!(n ? s : ae.isEmptyObject)(r)) return
                }
                (n || (delete u[l].data, s(u[l]))) && (a ? ae.cleanData([e], !0) : ae.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Te, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : we.test(r) ? ae.parseJSON(r) : r)
                } catch (e) {
                }
                ae.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ae.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (t = t || 0, ae.isFunction(t)) return ae.grep(e, function (e, r) {
            return !!t.call(e, r, e) === n
        });
        if (t.nodeType) return ae.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ae.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Re.test(t)) return ae.filter(t, r, !n);
            t = ae.filter(t, r)
        }
        return ae.grep(e, function (e) {
            return ae.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        var t = Ie.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ae._data(n, "globalEval", !t || ae._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ae.hasData(e)) {
            var n, r, i, o = ae._data(e), a = ae._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; r < i; r++) ae.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ae.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ae.support.noCloneEvent && t[ae.expando]) {
                r = ae._data(t);
                for (i in r.events) ae.removeEvent(t, i, r.handle);
                t.removeAttribute(ae.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ae.support.html5Clone && e.innerHTML && !ae.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ke.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(n || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ae.nodeName(i, n) ? a.push(i) : ae.merge(a, b(i, n));
        return n === t || n && ae.nodeName(e, n) ? ae.merge([e], a) : a
    }

    function x(e) {
        Ke.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = wt.length; i--;) if ((t = wt[i] + n) in e) return t;
        return r
    }

    function T(e, t) {
        return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
    }

    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; i < o; i++) n = e[i], n.style && (r[i] = ae._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && T(n) && (r[i] = ae._data(n, "olddisplay", S(n.nodeName)))) : r[i] || T(n) || ae._data(n, "olddisplay", ae.css(n, "display")));
        for (i = 0; i < o; i++) n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none"));
        return e
    }

    function C(e, t, n) {
        var r = ht.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ae.css(e, n + xt[o], !0, i)), r ? ("content" === n && (a -= ae.css(e, "padding" + xt[o], !0, i)), "margin" !== n && (a -= ae.css(e, "border" + xt[o] + "Width", !0, i))) : (a += ae.css(e, "padding" + xt[o], !0, i), "padding" !== n && (a += ae.css(e, "border" + xt[o] + "Width", !0, i)));
        return a
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = st(e),
            a = ae.support.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = at(e, t, o), (i < 0 || null == i) && (i = e.style[t]), gt.test(i)) return i;
            r = a && (ae.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e) {
        var t = V, n = yt[e];
        return n || (n = A(e, t), "none" !== n && n || (ut = (ut || ae("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), ut.detach()), yt[e] = n), n
    }

    function A(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body), r = ae.css(n[0], "display");
        return n.remove(), r
    }

    function j(e, t, n, r) {
        var i;
        if (ae.isArray(t)) ae.each(t, function (t, i) {
            n || Nt.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ae.type(t)) r(e, t); else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ue) || [];
            if (ae.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function L(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ae.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === Rt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function H(e, n) {
        var r, i, o = ae.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ae.extend(!0, e, i), e
    }

    function M(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (; "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in r) a = l[0]; else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        if (a) return a !== l[0] && l.unshift(a), r[a]
    }

    function q(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = u[++s];) if ("*" !== i) {
            if ("*" !== l && l !== i) {
                if (!(n = a[l + " " + i] || a["* " + i])) for (r in a) if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                    !0 === n ? n = a[r] : !0 !== a[r] && (i = o[0], u.splice(s--, 0, i));
                    break
                }
                if (!0 !== n) if (n && e.throws) t = n(t); else try {
                    t = n(t)
                } catch (e) {
                    return {state: "parsererror", error: n ? e : "No conversion from " + l + " to " + i}
                }
            }
            l = i
        }
        return {state: "success", data: t}
    }

    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function O() {
        return setTimeout(function () {
            Yt = t
        }), Yt = ae.now()
    }

    function B(e, t) {
        ae.each(t, function (t, n) {
            for (var r = (en[t] || []).concat(en["*"]), i = 0, o = r.length; i < o; i++) if (r[i].call(e, t, n)) return
        })
    }

    function P(e, t, n) {
        var r, i, o = 0, a = Zt.length, s = ae.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = Yt || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: ae.extend({}, t),
            opts: ae.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Yt || O(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = ae.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (R(c, l.opts.specialEasing); o < a; o++) if (r = Zt[o].call(l, e, c, l.opts)) return r;
        return B(l, c), ae.isFunction(l.opts.start) && l.opts.start.call(e, l), ae.fx.timer(ae.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ae.camelCase(n), i = t[r], o = e[n], ae.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ae.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && T(e);
        n.queue || (c = ae._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, p.always(function () {
            p.always(function () {
                c.unqueued--, ae.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ae.css(e, "display") && "none" === ae.css(e, "float") && (ae.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ae.support.shrinkWrapBlocks || p.done(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t) if (o = t[r], Gt.exec(o)) {
            if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) continue;
            g.push(r)
        }
        if (a = g.length) {
            s = ae._data(e, "fxshow") || ae._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? ae(e).show() : p.done(function () {
                ae(e).hide()
            }), p.done(function () {
                var t;
                ae._removeData(e, "fxshow");
                for (t in h) ae.style(e, t, h[t])
            });
            for (r = 0; r < a; r++) i = g[r], l = p.createTween(i, m ? s[i] : 0), h[i] = s[i] || ae.style(e, i), i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function I(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = xt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function z(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var X, U, V = e.document, Y = e.location, J = e.jQuery, G = e.$, Q = {}, K = [], Z = K.concat, ee = K.push,
        te = K.slice, ne = K.indexOf, re = Q.toString, ie = Q.hasOwnProperty, oe = "1.9.0".trim, ae = function (e, t) {
            return new ae.fn.init(e, t, X)
        }, se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ue = /\S+/g, le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ce = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pe = /^[\],:{}\s]*$/,
        de = /(?:^|:|,)(?:\s*\[)+/g, he = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ge = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, me = /^-ms-/, ye = /-([\da-z])/gi,
        ve = function (e, t) {
            return t.toUpperCase()
        }, be = function () {
            V.addEventListener ? (V.removeEventListener("DOMContentLoaded", be, !1), ae.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", be), ae.ready())
        };
    ae.fn = ae.prototype = {
        jquery: "1.9.0", constructor: ae, init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ae ? n[0] : n, ae.merge(this, ae.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), fe.test(i[1]) && ae.isPlainObject(n)) for (i in n) ae.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if ((o = V.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = V, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return te.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return ae.each(this, e, t)
        }, ready: function (e) {
            return ae.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(te.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(ae.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ee, sort: [].sort, splice: [].splice
    }, ae.fn.init.prototype = ae.fn, ae.extend = ae.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ae.isFunction(s) || (s = {}), l === u && (s = this, --u); u < l; u++) if (null != (e = arguments[u])) for (n in e) r = s[n], i = e[n], s !== i && (c && i && (ae.isPlainObject(i) || (o = ae.isArray(i))) ? (o ? (o = !1, a = r && ae.isArray(r) ? r : []) : a = r && ae.isPlainObject(r) ? r : {}, s[n] = ae.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    }, ae.extend({
        noConflict: function (t) {
            return e.$ === ae && (e.$ = G), t && e.jQuery === ae && (e.jQuery = J), ae
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ae.readyWait++ : ae.ready(!0)
        }, ready: function (e) {
            if (!0 === e ? !--ae.readyWait : !ae.isReady) {
                if (!V.body) return setTimeout(ae.ready);
                ae.isReady = !0, !0 !== e && --ae.readyWait > 0 || (U.resolveWith(V, [ae]), ae.fn.trigger && ae(V).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === ae.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === ae.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Q[re.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if (!e || "object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;
            try {
                if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            var n;
            for (n in e) ;
            return n === t || ie.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || V;
            var r = fe.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ae.buildFragment([e], t, i), i && ae(i).remove(), ae.merge([], r.childNodes))
        }, parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ae.trim(t)) && pe.test(t.replace(he, "@").replace(ge, "]").replace(de, "")) ? new Function("return " + t)() : void ae.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (e) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && ae.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(me, "ms-").replace(ye, ve)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i = 0, o = e.length, a = n(e);
            if (r) {
                if (a) for (; i < o && !1 !== t.apply(e[i], r); i++) ; else for (i in e) if (!1 === t.apply(e[i], r)) break
            } else if (a) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: oe && !oe.call("\ufeff ") ? function (e) {
            return null == e ? "" : oe.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(le, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ae.merge(r, "string" == typeof e ? [e] : e) : ee.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (ne) return ne.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; o < r; o++) e[i++] = n[o]; else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; o < a; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s) for (; o < a; o++) null != (i = t(e[o], o, r)) && (u[u.length] = i); else for (o in e) null != (i = t(e[o], o, r)) && (u[u.length] = i);
            return Z.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), ae.isFunction(e) ? (i = te.call(arguments, 2), o = function () {
                return e.apply(n || this, i.concat(te.call(arguments)))
            }, o.guid = e.guid = e.guid || ae.guid++, o) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === ae.type(r)) {
                o = !0;
                for (u in r) ae.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ae.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(ae(e), n)
                })), n)) for (; u < l; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }
    }), ae.ready.promise = function (t) {
        if (!U) if (U = ae.Deferred(), "complete" === V.readyState) setTimeout(ae.ready); else if (V.addEventListener) V.addEventListener("DOMContentLoaded", be, !1), e.addEventListener("load", ae.ready, !1); else {
            V.attachEvent("onreadystatechange", be), e.attachEvent("onload", ae.ready);
            var n = !1;
            try {
                n = null == e.frameElement && V.documentElement
            } catch (e) {
            }
            n && n.doScroll && function e() {
                if (!ae.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    ae.ready()
                }
            }()
        }
        return U.promise(t)
    }, ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }), X = ae(V);
    var xe = {};
    ae.Callbacks = function (e) {
        e = "string" == typeof e ? xe[e] || r(e) : ae.extend({}, e);
        var n, i, o, a, s, u, l = [], c = !e.once && [], f = function (t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && u < s; u++) if (!1 === l[u].apply(t[0], t[1]) && e.stopOnFalse) {
                n = !1;
                break
            }
            o = !1, l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    !function t(n) {
                        ae.each(n, function (n, r) {
                            var i = ae.type(r);
                            "function" === i ? e.unique && p.has(r) || l.push(r) : r && r.length && "string" !== i && t(r)
                        })
                    }(arguments), o ? s = l.length : n && (a = t, f(n))
                }
                return this
            }, remove: function () {
                return l && ae.each(arguments, function (e, t) {
                    for (var n; (n = ae.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (n <= s && s--, n <= u && u--)
                }), this
            }, has: function (e) {
                return ae.inArray(e, l) > -1
            }, empty: function () {
                return l = [], this
            }, disable: function () {
                return l = c = n = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = t, n || p.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, ae.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ae.Deferred(function (n) {
                            ae.each(t, function (t, o) {
                                var a = o[0], s = ae.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ae.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ae.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ae.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = te.call(arguments), a = o.length,
                s = 1 !== a || e && ae.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ae.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? te.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ae.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ae.support = function () {
        var t, n, r, i, o, a, s, u, l, c, f = V.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        i = V.createElement("select"), o = i.appendChild(V.createElement("option")), a = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: o.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete f.test
        } catch (e) {
            t.deleteExpando = !1
        }
        a = V.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), s = V.createDocumentFragment(), s.appendChild(a), t.appendChecked = a.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || !1 === f.attributes[u].expando;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ae(function () {
            var n, r, i,
                o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = V.getElementsByTagName("body")[0];
            a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(V.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), void 0 !== f.style.zoom && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, a.style.zoom = 1), a.removeChild(n), n = f = i = r = null)
        }), n = i = s = o = r = a = null, t
    }();
    var we = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Te = /([A-Z])/g;
    ae.extend({
        cache: {},
        expando: "jQuery" + ("1.9.0" + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return !!(e = e.nodeType ? ae.cache[e[ae.expando]] : e[ae.expando]) && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function (e, t) {
            return o(e, t, !1)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && ae.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), ae.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = ae.data(o), 1 === o.nodeType && !ae._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ae.camelCase(i.substring(5)), a(o, i, u[i]));
                    ae._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                ae.data(this, e)
            }) : ae.access(this, function (n) {
                if (n === t) return o ? a(o, e, ae.data(o, e)) : null;
                this.each(function () {
                    ae.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ae.removeData(this, e)
            })
        }
    }), ae.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ae._data(e, t), n && (!r || ae.isArray(n) ? r = ae._data(e, t, ae.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ae.queue(e, t), r = n.length, i = n.shift(), o = ae._queueHooks(e, t), a = function () {
                ae.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ae._data(e, n) || ae._data(e, n, {
                empty: ae.Callbacks("once memory").add(function () {
                    ae._removeData(e, t + "queue"), ae._removeData(e, n)
                })
            })
        }
    }), ae.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ae.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ae.queue(this, e, n);
                ae._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ae.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ae.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = ae.fx ? ae.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = ae.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) (r = ae._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Ne, Ce, ke = /[\t\r\n]/g, Ee = /\r/g, Se = /^(?:input|select|textarea|button|object)$/i, Ae = /^(?:a|area)$/i,
        je = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        De = /^(?:checked|selected)$/i, Le = ae.support.getSetAttribute, He = ae.support.input;
    ae.fn.extend({
        attr: function (e, t) {
            return ae.access(this, ae.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ae.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return ae.access(this, ae.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = ae.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ae.isFunction(e)) return this.each(function (t) {
                ae(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ke, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ae.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ae.isFunction(e)) return this.each(function (t) {
                ae(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ke, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ae.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return ae.isFunction(e) ? this.each(function (n) {
                ae(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var i, o = 0, a = ae(this), s = t, u = e.match(ue) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else "undefined" !== n && "boolean" !== n || (this.className && ae._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ae._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ke, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = ae.isFunction(e), this.each(function (r) {
                    var o, a = ae(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ae.isArray(o) && (o = ae.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (n = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return (n = ae.valHooks[o.type] || ae.valHooks[o.nodeName.toLowerCase()]) && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(Ee, "") : null == r ? "" : r)
            }
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (n = r[u], (n.selected || u === i) && (ae.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ae(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n = ae.makeArray(t);
                    return ae(e).find("option").each(function () {
                        this.selected = ae.inArray(ae(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? ae.prop(e, n, r) : (a = 1 !== s || !ae.isXMLDoc(e), a && (n = n.toLowerCase(), o = ae.attrHooks[n] || (je.test(n) ? Ce : Ne)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i : (void 0 !== e.getAttribute && (i = e.getAttribute(n)), null == i ? t : i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : void ae.removeAttr(e, n))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(ue);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ae.propFix[n] || n, je.test(n) ? !Le && De.test(n) ? e[ae.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ae.attr(e, n, ""), e.removeAttribute(Le ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ae.support.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ae.isXMLDoc(e), a && (n = ae.propFix[n] || n, o = ae.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Se.test(e.nodeName) || Ae.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), Ce = {
        get: function (e, n) {
            var r = ae.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? He && Le ? null != i : De.test(n) ? e[ae.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && !1 !== o.value ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            return !1 === t ? ae.removeAttr(e, n) : He && Le || !De.test(n) ? e.setAttribute(!Le && ae.propFix[n] || n, n) : e[ae.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, He && Le || (ae.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n)
            ;
            return ae.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        }, set: function (e, t, n) {
            if (!ae.nodeName(e, "input")) return Ne && Ne.set(e, t, n);
            e.defaultValue = t
        }
    }), Le || (Ne = ae.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        }, set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ae.attrHooks.contenteditable = {
        get: Ne.get, set: function (e, t, n) {
            Ne.set(e, "" !== t && t, n)
        }
    }, ae.each(["width", "height"], function (e, t) {
        ae.attrHooks[t] = ae.extend(ae.attrHooks[t], {
            set: function (e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        })
    })), ae.support.hrefNormalized || (ae.each(["href", "src", "width", "height"], function (e, n) {
        ae.attrHooks[n] = ae.extend(ae.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), ae.each(["href", "src"], function (e, t) {
        ae.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), ae.support.style || (ae.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ae.support.optSelected || (ae.propHooks.selected = ae.extend(ae.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), ae.support.enctype || (ae.propFix.enctype = "encoding"), ae.support.checkOn || ae.each(["radio", "checkbox"], function () {
        ae.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), ae.each(["radio", "checkbox"], function () {
        ae.valHooks[this] = ae.extend(ae.valHooks[this], {
            set: function (e, t) {
                if (ae.isArray(t)) return e.checked = ae.inArray(ae(e).val(), t) >= 0
            }
        })
    });
    var Me = /^(?:input|select|textarea)$/i, qe = /^key/, _e = /^(?:mouse|contextmenu)|click/,
        Fe = /^(?:focusinfocus|focusoutblur)$/, Oe = /^([^.]*)(?:\.(.+)|)$/;
    ae.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && ae._data(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = ae.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function (e) {
                    return void 0 === ae || e && ae.event.triggered === e.type ? t : ae.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = (n || "").match(ue) || [""], c = n.length; c--;) u = Oe.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), p = ae.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ae.event.special[h] || {}, f = ae.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ae.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, a), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && !1 !== p.setup.call(e, i, g, s) || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ae.event.global[h] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ae.hasData(e) && ae._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(ue) || [""], l = t.length; l--;) if (s = Oe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ae.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || ae.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) ae.event.remove(e, d + t[l], n, r, !0);
                ae.isEmptyObject(u) && (delete m.handle, ae._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V], h = n.type || n, g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(h + ae.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, n = n[ae.expando] ? n : new ae.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ae.makeArray(r, [n]), p = ae.event.special[h] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, r))) {
                if (!o && !p.noBubble && !ae.isWindow(i)) {
                    for (l = p.delegateType || h, Fe.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
                    u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? l : p.bindType || h, f = (ae._data(s, "events") || {})[n.type] && ae._data(s, "handle"), f && f.apply(s, r), (f = c && s[c]) && ae.acceptData(s) && f.apply && !1 === f.apply(s, r) && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(i.ownerDocument, r)) && ("click" !== h || !ae.nodeName(i, "a")) && ae.acceptData(i) && c && i[h] && !ae.isWindow(i)) {
                    u = i[c], u && (i[c] = null), ae.event.triggered = h;
                    try {
                        i[h]()
                    } catch (e) {
                    }
                    ae.event.triggered = t, u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ae.event.fix(e);
            var n, r, i, o, a, s = [], u = te.call(arguments), l = (ae._data(this, "events") || {})[e.type] || [],
                c = ae.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = ae.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(a.namespace) || (e.handleObj = a, e.data = a.data, (i = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (!0 !== l.disabled || "click" !== e.type) {
                for (i = [], r = 0; r < u; r++) a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? ae(o, this).index(l) >= 0 : ae.find(o, this, null, [l]).length), i[o] && i.push(a);
                i.length && s.push({elem: l, handlers: i})
            }
            return u < n.length && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[ae.expando]) return e;
            var t, n, r = e, i = ae.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new ae.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, click: {
                trigger: function () {
                    if (ae.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }
            }, focus: {
                trigger: function () {
                    if (this !== V.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === V.activeElement && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ae.extend(new ae.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? ae.event.trigger(i, null, t) : ae.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ae.removeEvent = V.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, ae.Event = function (e, t) {
        if (!(this instanceof ae.Event)) return new ae.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), this[ae.expando] = !0
    }, ae.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ae.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ae.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || ae.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ae.support.submitBubbles || (ae.event.special.submit = {
        setup: function () {
            if (ae.nodeName(this, "form")) return !1;
            ae.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = ae.nodeName(n, "input") || ae.nodeName(n, "button") ? n.form : t;
                r && !ae._data(r, "submitBubbles") && (ae.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ae._data(r, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ae.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (ae.nodeName(this, "form")) return !1;
            ae.event.remove(this, "._submit")
        }
    }), ae.support.changeBubbles || (ae.event.special.change = {
        setup: function () {
            if (Me.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ae.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ae.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ae.event.simulate("change", this, e, !0)
            })), !1;
            ae.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Me.test(t.nodeName) && !ae._data(t, "changeBubbles") && (ae.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ae.event.simulate("change", this.parentNode, e, !0)
                }), ae._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return ae.event.remove(this, "._change"), !Me.test(this.nodeName)
        }
    }), ae.support.focusinBubbles || ae.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            ae.event.simulate(t, e.target, ae.event.fix(e), !0)
        };
        ae.event.special[t] = {
            setup: function () {
                0 == n++ && V.addEventListener(e, r, !0)
            }, teardown: function () {
                0 == --n && V.removeEventListener(e, r, !0)
            }
        }
    }), ae.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = l; else if (!i) return this;
            return 1 === o && (a = i, i = function (e) {
                return ae().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ae.guid++)), this.each(function () {
                ae.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = l), this.each(function () {
                ae.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                ae.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ae.event.trigger(e, t, n, !0)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ae.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, qe.test(t) && (ae.event.fixHooks[t] = ae.event.keyHooks), _e.test(t) && (ae.event.fixHooks[t] = ae.event.mouseHooks)
    }), function (e, t) {
        function n(e) {
            return le.test(e + "")
        }

        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function i(e) {
            return e[O] = !0, e
        }

        function o(e) {
            var t = j.createElement("div");
            try {
                return e(t)
            } catch (e) {
                return !1
            } finally {
                t = null
            }
        }

        function a(e, t, n, r) {
            var i, o, a, s, u, f, p, d, h, g;
            if ((t ? t.ownerDocument || t : B) !== j && A(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!L && !r) {
                if (i = ce.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return V.apply(n, Y.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && P.getByClassName && t.getElementsByClassName) return V.apply(n, Y.call(t.getElementsByClassName(a), 0)), n
                }
                if (P.qsa && !H.test(e)) {
                    if (p = !0, d = O, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (f = l(e), (p = t.getAttribute("id")) ? d = p.replace(de, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = f.length; u--;) f[u] = d + c(f[u]);
                        h = ue.test(e) && t.parentNode || t, g = f.join(",")
                    }
                    if (g) try {
                        return V.apply(n, Y.call(h.querySelectorAll(g), 0)), n
                    } catch (e) {
                    } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace(te, "$1"), t, n, r)
        }

        function s(e, t) {
            for (var n = e && t && e.nextSibling; n; n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e, t) {
            var n, r, i, o, s, u, l, c = I[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                n && !(r = ne.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = re.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(te, " ")
                }), s = s.slice(n.length));
                for (o in T.filter) !(r = se[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? a.error(e) : I(e, u).slice(0)
        }

        function c(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir, i = n && "parentNode" === t.dir, o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = R + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[O] || (t[O] = {}), (u = l[r]) && u[0] === c) {
                    if (!0 === (s = u[1]) || s === w) return !0 === s
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || w, !0 === u[1]) return !0
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function d(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function h(e, t, n, r, o, a) {
            return r && !r[O] && (r = h(r)), o && !o[O] && (o = h(o, a)), i(function (i, a, s, u) {
                var l, c, f, p = [], h = [], g = a.length, m = i || y(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? m : d(m, p, e, s, u), b = n ? o || (i ? e : g || r) ? [] : a : v;
                if (n && n(v, b, s, u), r) for (l = d(b, h), r(l, [], s, u), c = l.length; c--;) (f = l[c]) && (b[h[c]] = !(v[h[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;) (f = b[c]) && l.push(v[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;) (f = b[c]) && (l = o ? J.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else b = d(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, u) : V.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = f(function (e) {
                return e === t
            }, a, !0), l = f(function (e) {
                return J.call(t, e) > -1
            }, a, !0), d = [function (e, n, r) {
                return !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; s < i; s++) if (n = T.relative[e[s].type]) d = [f(p(d), n)]; else {
                if (n = T.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                    for (r = ++s; r < i && !T.relative[e[r].type]; r++) ;
                    return h(s > 1 && p(d), s > 1 && c(e.slice(0, s - 1)).replace(te, "$1"), n, s < r && g(e.slice(s, r)), r < i && g(e = e.slice(r)), r < i && c(e))
                }
                d.push(n)
            }
            return p(d)
        }

        function m(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function (i, s, u, l, c) {
                var f, p, h, g = [], m = 0, y = "0", v = i && [], b = null != c, x = S,
                    N = i || o && T.find.TAG("*", c && s.parentNode || s), C = R += null == x ? 1 : Math.E;
                for (b && (S = s !== j && s, w = n); null != (f = N[y]); y++) {
                    if (o && f) {
                        for (p = 0; h = e[p]; p++) if (h(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && (R = C, w = ++n)
                    }
                    r && ((f = !h && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; h = t[p]; p++) h(v, g, s, u);
                    if (i) {
                        if (m > 0) for (; y--;) v[y] || g[y] || (g[y] = U.call(l));
                        g = d(g)
                    }
                    V.apply(l, g), b && !i && g.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && (R = C, S = x), v
            };
            return r ? i(s) : s
        }

        function y(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) a(e, t[r], n);
            return n
        }

        function v(e, t, n, r) {
            var i, o, a, s, u, f = l(e);
            if (!r && 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !L && T.relative[o[1].type]) {
                    if (!(t = T.find.ID(a.matches[0].replace(ge, me), t)[0])) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = se.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !T.relative[s = a.type]); i--) if ((u = T.find[s]) && (r = u(a.matches[0].replace(ge, me), ue.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), !(e = r.length && c(o))) return V.apply(n, Y.call(r, 0)), n;
                    break
                }
            }
            return k(e, f)(r, t, L, n, ue.test(e)), n
        }

        function b() {
        }

        var x, w, T, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O = "sizzle" + -new Date, B = e.document, P = {}, R = 0,
            W = 0, $ = r(), I = r(), z = r(), X = [], U = X.pop, V = X.push, Y = X.slice,
            J = X.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1
            }, G = "[\\x20\\t\\r\\n\\f]", Q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", K = Q.replace("w", "w#"),
            Z = "\\[" + G + "*(" + Q + ")" + G + "*(?:([*^$|!~]?=)" + G + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + K + ")|)|)" + G + "*\\]",
            ee = ":(" + Q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Z.replace(3, 8) + ")*)|.*)\\)|)",
            te = new RegExp("^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$", "g"),
            ne = new RegExp("^" + G + "*," + G + "*"), re = new RegExp("^" + G + "*([\\x20\\t\\r\\n\\f>+~])" + G + "*"),
            ie = new RegExp(ee), oe = new RegExp("^" + K + "$"), se = {
                ID: new RegExp("^#(" + Q + ")"),
                CLASS: new RegExp("^\\.(" + Q + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + Q + ")['\"]?\\]"),
                TAG: new RegExp("^(" + Q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + Z),
                PSEUDO: new RegExp("^" + ee),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + G + "*(even|odd|(([+-]|)(\\d*)n|)" + G + "*(?:([+-]|)" + G + "*(\\d+)|))" + G + "*\\)|)", "i"),
                needsContext: new RegExp("^" + G + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + G + "*((?:-\\d)?\\d*)" + G + "*\\)|)(?=[^-]|$)", "i")
            }, ue = /[\x20\t\r\n\f]*[+~]/, le = /\{\s*\[native code\]\s*\}/, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            fe = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, de = /'|\\/g,
            he = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, ge = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            me = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            Y.call(D.childNodes, 0)[0].nodeType
        } catch (e) {
            Y = function (e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        C = a.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = a.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : B;
            return t !== j && 9 === t.nodeType && t.documentElement ? (j = t, D = t.documentElement, L = C(t), P.tagNameNoComments = o(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), P.attributes = o(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), P.getByClassName = o(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
            }), P.getByName = o(function (e) {
                e.id = O + 0, e.innerHTML = "<a name='" + O + "'></a><div name='" + O + "'></div>", D.insertBefore(e, D.firstChild);
                var n = t.getElementsByName && t.getElementsByName(O).length === 2 + t.getElementsByName(O + 0).length;
                return P.getIdNotName = !t.getElementById(O), D.removeChild(e), n
            }), T.attrHandle = o(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, P.getIdNotName ? (T.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && !L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(ge, me);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (T.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && !L) {
                    var n = t.getElementById(e);
                    return n ? n.id === e || void 0 !== n.getAttributeNode && n.getAttributeNode("id").value === e ? [n] : void 0 : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(ge, me);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = P.tagNameNoComments ? function (e, t) {
                if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.NAME = P.getByName && function (e, t) {
                if (void 0 !== t.getElementsByName) return t.getElementsByName(name)
            }, T.find.CLASS = P.getByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && !L) return t.getElementsByClassName(e)
            }, M = [], H = [":focus"], (P.qsa = n(t.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + G + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || H.push(":checked")
            }), o(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && H.push("[*^$]=" + G + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (P.matchesSelector = n(q = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                P.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), M.push("!=", ee)
            }), H = new RegExp(H.join("|")), M = new RegExp(M.join("|")), _ = n(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, F = D.compareDocumentPosition ? function (e, n) {
                var r;
                return e === n ? (E = !0, 0) : (r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === t || _(B, e) ? -1 : n === t || _(B, n) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, o = e.parentNode, a = n.parentNode, u = [e], l = [n];
                if (e === n) return E = !0, 0;
                if (e.sourceIndex && n.sourceIndex) return (~n.sourceIndex || 1 << 31) - (_(B, e) && ~e.sourceIndex || 1 << 31);
                if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, n);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = n; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
            }, E = !1, [0, 0].sort(F), P.detectDuplicates = E, j) : j
        }, a.matches = function (e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== j && A(e), t = t.replace(he, "='$1']"), P.matchesSelector && !L && (!M || !M.test(t)) && !H.test(t)) try {
                var n = q.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return a(t, j, null, [e]).length > 0
        }, a.contains = function (e, t) {
            return (e.ownerDocument || e) !== j && A(e), _(e, t)
        }, a.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== j && A(e), L || (t = t.toLowerCase()), (n = T.attrHandle[t]) ? n(e) : L || P.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            if (E = !P.detectDuplicates, e.sort(F), E) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        }, N = a.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += N(t);
            return n
        }, T = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: se,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ge, me), e[3] = (e[4] || e[5] || "").replace(ge, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return se.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ie.test(n) && (t = l(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(ge, me).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + G + ")" + e + "(" + G + "|$)")) && $(e, function (e) {
                        return t.test(e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.substr(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[O] || (m[O] = {}), l = c[e] || [], d = l[0] === R && l[1], p = l[0] === R && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [R, d, p];
                                    break
                                }
                            } else if (v && (l = (t[O] || (t[O] = {}))[e]) && l[0] === R) p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[O] || (f[O] = {}))[e] = [R, p]), f !== t));) ;
                            return (p -= i) === r || p % r == 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[O] ? r(t) : r.length > 1 ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = J.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = k(e.replace(te, "$1"));
                    return r[O] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return a(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return oe.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(ge, me).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = L ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === D
                }, focus: function (e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return pe.test(e.nodeName)
                }, input: function (e) {
                    return fe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        };
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in{submit: !0, reset: !0}) T.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        k = a.compile = function (e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = l(e)), n = t.length; n--;) o = g(t[n]), o[O] ? r.push(o) : i.push(o);
                o = z(e, m(i, r))
            }
            return o
        }, T.pseudos.nth = T.pseudos.eq, T.filters = b.prototype = T.pseudos, T.setFilters = new b, A(), a.attr = ae.attr, ae.find = a, ae.expr = a.selectors, ae.expr[":"] = ae.expr.pseudos, ae.unique = a.uniqueSort, ae.text = a.getText, ae.isXMLDoc = a.isXML, ae.contains = a.contains
    }(e);
    var Be = /Until$/, Pe = /^(?:parents|prev(?:Until|All))/, Re = /^.[^:#\[\.,]*$/, We = ae.expr.match.needsContext,
        $e = {children: !0, contents: !0, next: !0, prev: !0};
    ae.fn.extend({
        find: function (e) {
            var t, n, r;
            if ("string" != typeof e) return r = this, this.pushStack(ae(e).filter(function () {
                for (t = 0; t < r.length; t++) if (ae.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; t < this.length; t++) ae.find(e, this[t], n);
            return n = this.pushStack(ae.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
        }, has: function (e) {
            var t, n = ae(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (ae.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(f(this, e, !1))
        }, filter: function (e) {
            return this.pushStack(f(this, e, !0))
        }, is: function (e) {
            return !!e && ("string" == typeof e ? We.test(e) ? ae(e, this.context).index(this[0]) >= 0 : ae.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = We.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : ae.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? ae.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ae.inArray(this[0], ae(e)) : ae.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? ae(e, t) : ae.makeArray(e && e.nodeType ? [e] : e),
                r = ae.merge(this.get(), n);
            return this.pushStack(ae.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ae.fn.andSelf = ae.fn.addBack, ae.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ae.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ae.dir(e, "parentNode", n)
        }, next: function (e) {
            return c(e, "nextSibling")
        }, prev: function (e) {
            return c(e, "previousSibling")
        }, nextAll: function (e) {
            return ae.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return ae.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ae.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ae.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return ae.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ae.sibling(e.firstChild)
        }, contents: function (e) {
            return ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ae.merge([], e.childNodes)
        }
    }, function (e, t) {
        ae.fn[e] = function (n, r) {
            var i = ae.map(this, t, n);
            return Be.test(e) || (r = n), r && "string" == typeof r && (i = ae.filter(r, i)), i = this.length > 1 && !$e[e] ? ae.unique(i) : i, this.length > 1 && Pe.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ae.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ae.find.matchesSelector(t[0], e) ? [t[0]] : [] : ae.find.matches(e, t)
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ae(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ze = / jQuery\d+="(?:null|\d+)"/g, Xe = new RegExp("<(?:" + Ie + ")[\\s/>]", "i"), Ue = /^\s+/,
        Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ye = /<([\w:]+)/,
        Je = /<tbody/i, Ge = /<|&#?\w+;/, Qe = /<(?:script|style|link)/i, Ke = /^(?:checkbox|radio)$/i,
        Ze = /checked\s*(?:[^=]|=\s*.checked.)/i, et = /^$|\/(?:java|ecma)script/i, tt = /^true\/(.*)/,
        nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ae.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, it = p(V), ot = it.appendChild(V.createElement("div"));
    rt.optgroup = rt.option, rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td, ae.fn.extend({
        text: function (e) {
            return ae.access(this, function (e) {
                return e === t ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (ae.isFunction(e)) return this.each(function (t) {
                ae(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ae(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return ae.isFunction(e) ? this.each(function (t) {
                ae(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ae(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ae.isFunction(e);
            return this.each(function (n) {
                ae(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) (!e || ae.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ae.cleanData(b(n)), n.parentNode && (t && ae.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ae.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ae.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ae.clone(this, e, t)
            })
        }, html: function (e) {
            return ae.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(ze, "") : t;
                if ("string" == typeof e && !Qe.test(e) && (ae.support.htmlSerialize || !Xe.test(e)) && (ae.support.leadingWhitespace || !Ue.test(e)) && !rt[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ve, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, 1 === n.nodeType && (ae.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            return ae.isFunction(e) || "string" == typeof e || (e = ae(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling, n = this.parentNode;
                (n && 1 === this.nodeType || 11 === this.nodeType) && (ae(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = Z.apply([], e);
            var i, o, a, s, u, l, c = 0, f = this.length, p = this, m = f - 1, y = e[0], v = ae.isFunction(y);
            if (v || !(f <= 1 || "string" != typeof y || ae.support.checkClone) && Ze.test(y)) return this.each(function (i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (f && (i = ae.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && ae.nodeName(o, "tr"), a = ae.map(b(i, "script"), h), s = a.length; c < f; c++) u = i, c !== m && (u = ae.clone(u, !0, !0), s && ae.merge(a, b(u, "script"))), r.call(n && ae.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c);
                if (s) for (l = a[a.length - 1].ownerDocument, ae.map(a, g), c = 0; c < s; c++) u = a[c], et.test(u.type || "") && !ae._data(u, "globalEval") && ae.contains(l, u) && (u.src ? ae.ajax({
                    url: u.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                }) : ae.globalEval((u.text || u.textContent || u.innerHTML || "").replace(nt, "")));
                i = o = null
            }
            return this
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ae.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ae(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ae(o[r])[t](n), ee.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ae.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = ae.contains(e.ownerDocument, e);
            if (ae.support.html5Clone || ae.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML, ot.removeChild(s = ot.firstChild)), !(ae.support.noCloneEvent && ae.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e))) for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) r[a] && v(o, r[a]);
            if (t) if (n) for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) y(o, r[a]); else y(e, s);
            return r = b(s, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = i = o = null, s
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; g < f; g++) if ((o = e[g]) || 0 === o) if ("object" === ae.type(o)) ae.merge(h, o.nodeType ? [o] : o); else if (Ge.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Ye.exec(o) || ["", ""])[1].toLowerCase(), u = rt[a] || rt._default, s.innerHTML = u[1] + o.replace(Ve, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                if (!ae.support.leadingWhitespace && Ue.test(o) && h.push(t.createTextNode(Ue.exec(o)[0])), !ae.support.tbody) for (o = "table" !== a || Je.test(o) ? "<table>" !== u[1] || Je.test(o) ? 0 : s : s.firstChild, c = o && o.childNodes.length; c--;) ae.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ae.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ae.support.appendChecked || ae.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === ae.inArray(o, r)) && (i = ae.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) for (c = 0; o = s[c++];) et.test(o.type || "") && n.push(o);
            return s = null, d
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ae.expando, u = ae.cache, l = ae.support.deleteExpando, c = ae.event.special; null != (i = e[a]); a++) if ((t || ae.acceptData(i)) && (r = i[s], n = r && u[r])) {
                if (n.events) for (o in n.events) c[o] ? ae.event.remove(i, o) : ae.removeEvent(i, o, n.handle);
                u[r] && (delete u[r], l ? delete i[s] : void 0 !== i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.push(r))
            }
        }
    });
    var at, st, ut, lt = /alpha\([^)]*\)/i, ct = /opacity\s*=\s*([^)]*)/, ft = /^(top|right|bottom|left)$/,
        pt = /^(none|table(?!-c[ea]).+)/, dt = /^margin/, ht = new RegExp("^(" + se + ")(.*)$", "i"),
        gt = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"), mt = new RegExp("^([+-])=(" + se + ")", "i"),
        yt = {BODY: "block"}, vt = {position: "absolute", visibility: "hidden", display: "block"},
        bt = {letterSpacing: 0, fontWeight: 400}, xt = ["Top", "Right", "Bottom", "Left"],
        wt = ["Webkit", "O", "Moz", "ms"];
    ae.fn.extend({
        css: function (e, n) {
            return ae.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ae.isArray(n)) {
                    for (i = st(e), o = n.length; s < o; s++) a[n[s]] = ae.css(e, n[s], !1, i);
                    return a
                }
                return r !== t ? ae.style(e, n, r) : ae.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : T(this)) ? ae(this).show() : ae(this).hide()
            })
        }
    }), ae.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = at(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: ae.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ae.camelCase(n), l = e.style;
                if (n = ae.cssProps[u] || (ae.cssProps[u] = w(l, u)), s = ae.cssHooks[n] || ae.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (!(a = typeof r, "string" === a && (o = mt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ae.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || ae.cssNumber[u] || (r += "px"), ae.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (e) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = ae.camelCase(n);
            return n = ae.cssProps[u] || (ae.cssProps[u] = w(e.style, u)), s = ae.cssHooks[n] || ae.cssHooks[u], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = at(e, n, i)), "normal" === o && n in bt && (o = bt[n]), r ? (a = parseFloat(o), !0 === r || ae.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (st = function (t) {
        return e.getComputedStyle(t, null)
    }, at = function (e, n, r) {
        var i, o, a, s = r || st(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || ae.contains(e.ownerDocument, e) || (u = ae.style(e, n)), gt.test(u) && dt.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : V.documentElement.currentStyle && (st = function (e) {
        return e.currentStyle
    }, at = function (e, n, r) {
        var i, o, a, s = r || st(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), gt.test(u) && !ft.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ae.each(["height", "width"], function (e, t) {
        ae.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return 0 === e.offsetWidth && pt.test(ae.css(e, "display")) ? ae.swap(e, vt, function () {
                    return E(e, t, r)
                }) : E(e, t, r)
            }, set: function (e, n, r) {
                var i = r && st(e);
                return C(e, n, r ? k(e, t, r, ae.support.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ae.support.opacity || (ae.cssHooks.opacity = {
        get: function (e, t) {
            return ct.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = ae.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ae.trim(o.replace(lt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = lt.test(o) ? o.replace(lt, i) : o + " " + i)
        }
    }), ae(function () {
        ae.support.reliableMarginRight || (ae.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return ae.swap(e, {display: "inline-block"}, at, [e, "marginRight"])
            }
        }), !ae.support.pixelPosition && ae.fn.position && ae.each(["top", "left"], function (e, t) {
            ae.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = at(e, t), gt.test(n) ? ae(e).position()[t] + "px" : n
                }
            }
        })
    }), ae.expr && ae.expr.filters && (ae.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !ae.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ae.css(e, "display"))
    }, ae.expr.filters.visible = function (e) {
        return !ae.expr.filters.hidden(e)
    }), ae.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ae.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + xt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, dt.test(e) || (ae.cssHooks[e + t].set = C)
    });
    var Tt = /%20/g, Nt = /\[\]$/, Ct = /\r?\n/g, kt = /^(?:submit|button|image|reset)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    ae.fn.extend({
        serialize: function () {
            return ae.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Et.test(this.nodeName) && !kt.test(e) && (this.checked || !Ke.test(e))
            }).map(function (e, t) {
                var n = ae(this).val();
                return null == n ? null : ae.isArray(n) ? ae.map(n, function (e) {
                    return {name: t.name, value: e.replace(Ct, "\r\n")}
                }) : {name: t.name, value: n.replace(Ct, "\r\n")}
            }).get()
        }
    }), ae.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(Tt, "+")
    };
    var St, At, jt = ae.now(), Dt = /\?/, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _t = /^(?:GET|HEAD)$/, Ft = /^\/\//,
        Ot = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bt = ae.fn.load, Pt = {}, Rt = {}, Wt = "*/".concat("*");
    try {
        At = Y.href
    } catch (e) {
        At = V.createElement("a"), At.href = "", At = At.href
    }
    St = Ot.exec(At.toLowerCase()) || [], ae.fn.load = function (e, n, r) {
        if ("string" != typeof e && Bt) return Bt.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ae.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && ae.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            a = arguments, s.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, a || [e.responseText, t, e])
        }), this
    }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ae.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ae.each(["get", "post"], function (e, n) {
        ae[n] = function (e, r, i, o) {
            return ae.isFunction(r) && (o = o || i, i = r, r = t), ae.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At,
            type: "GET",
            isLocal: qt.test(St[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, ae.ajaxSettings), t) : H(ae.ajaxSettings, e)
        },
        ajaxPrefilter: D(Pt),
        ajaxTransport: D(Rt),
        ajax: function (e, n) {
            function r(e, n, r, s) {
                var l, f, v, b, w, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", T.readyState = e > 0 ? 4 : 0, r && (b = M(p, T, r)), e >= 200 && e < 300 || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ae.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (ae.etag[o] = w)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, !e && N || (N = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]), T.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : v]), m.fireWith(d, [T, N]), c && (h.trigger("ajaxComplete", [T, p]), --ae.active || ae.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ae.ajaxSetup({}, n), d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ae(d) : ae.event, g = ae.Deferred(),
                m = ae.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s) for (s = {}; t = Mt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (x < 2) for (t in e) y[t] = [y[t], e[t]]; else T.always(e[T.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || At) + "").replace(Lt, "").replace(Ft, St[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ae.trim(p.dataType || "*").toLowerCase().match(ue) || [""], null == p.crossDomain && (l = Ot.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === St[1] && l[2] === St[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (St[3] || ("http:" === St[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ae.param(p.data, p.traditional)), L(Pt, p, n, T), 2 === x) return T;
            c = p.global, c && 0 == ae.active++ && ae.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_t.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Dt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Ht.test(o) ? o.replace(Ht, "$1_=" + jt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + jt++)), p.ifModified && (ae.lastModified[o] && T.setRequestHeader("If-Modified-Since", ae.lastModified[o]), ae.etag[o] && T.setRequestHeader("If-None-Match", ae.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || 2 === x)) return T.abort();
            w = "abort";
            for (f in{success: 1, error: 1, complete: 1}) T[f](p[f]);
            if (i = L(Rt, p, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, i.send(v, r)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function (e, n) {
            return ae.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return ae.get(e, t, n, "json")
        }
    }), ae.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return ae.globalEval(e), e
            }
        }
    }), ae.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ae.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = V.head || ae("head")[0] || V.documentElement;
            return {
                send: function (t, i) {
                    n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var $t = [], It = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = $t.pop() || ae.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), ae.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            u = !1 !== n.jsonp && (It.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(n.data) && "data");
        if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = ae.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(It, "$1" + o) : !1 !== n.jsonp && (n.url += (Dt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ae.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, $t.push(o)), s && ae.isFunction(a) && a(s[0]), s = a = t
        }), "script"
    });
    var zt, Xt, Ut = 0, Vt = e.ActiveXObject && function () {
        var e;
        for (e in zt) zt[e](t, !0)
    };
    ae.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && _() || F()
    } : _, Xt = ae.ajaxSettings.xhr(), ae.support.cors = !!Xt && "withCredentials" in Xt, (Xt = ae.support.ajax = !!Xt) && ae.ajaxTransport(function (n) {
        if (!n.crossDomain || ae.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (e) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ae.noop, Vt && delete zt[a]), i) 4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, p = u.responseXML, c = u.getAllResponseHeaders(), p && p.documentElement && (f.xml = p), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    l = u.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (e) {
                            i || o(-1, e)
                        }
                        f && o(s, l, f, c)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Ut, Vt && (zt || (zt = {}, ae(e).unload(Vt)), zt[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Yt, Jt, Gt = /^(?:toggle|show|hide)$/, Qt = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
        Kt = /queueHooks$/, Zt = [W], en = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t), o = Qt.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2], "px" !== (r = o[3] || (ae.cssNumber[e] ? "" : "px")) && s) {
                        s = ae.css(i.elem, e, !0) || n || 1;
                        do {
                            u = u || ".5", s /= u, ae.style(i.elem, e, s + r)
                        } while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    ae.Animation = ae.extend(P, {
        tweener: function (e, t) {
            ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], en[n] = en[n] || [], en[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Zt.unshift(e) : Zt.push(e)
        }
    }), ae.Tween = $, $.prototype = {
        constructor: $, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ae.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ae.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ae.cssProps[e.prop]] || ae.cssHooks[e.prop]) ? ae.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ae.each(["toggle", "show", "hide"], function (e, t) {
        var n = ae.fn[t];
        ae.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ae.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ae.isEmptyObject(e), o = ae.speed(t, n, r), a = function () {
                var t = P(this, ae.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }, (i || ae._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = ae.timers, a = ae._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Kt.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                !t && r || ae.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = ae._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ae.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ae.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ae.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ae.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ae.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ae.extend({}, e) : {
            complete: n || !n && t || ae.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ae.isFunction(t) && t
        };
        return r.duration = ae.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ae.fx.speeds ? ae.fx.speeds[r.duration] : ae.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ae.isFunction(r.old) && r.old.call(this), r.queue && ae.dequeue(this, r.queue)
        }, r
    }, ae.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ae.timers = [], ae.fx = $.prototype.init, ae.fx.tick = function () {
        var e, n = ae.timers, r = 0;
        for (Yt = ae.now(); r < n.length; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || ae.fx.stop(), Yt = t
    }, ae.fx.timer = function (e) {
        e() && ae.timers.push(e) && ae.fx.start()
    }, ae.fx.interval = 13, ae.fx.start = function () {
        Jt || (Jt = setInterval(ae.fx.tick, ae.fx.interval))
    }, ae.fx.stop = function () {
        clearInterval(Jt), Jt = null
    }, ae.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ae.fx.step = {}, ae.expr && ae.expr.filters && (ae.expr.filters.animated = function (e) {
        return ae.grep(ae.timers, function (t) {
            return e === t.elem
        }).length
    }), ae.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ae.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ae.contains(n, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ae.offset = {
        setOffset: function (e, t, n) {
            var r = ae.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ae(e), s = a.offset(), u = ae.css(e, "top"), l = ae.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ae.inArray("auto", [u, l]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, ae.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === ae.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (n = e.offset()), n.top += ae.css(e[0], "borderTopWidth", !0), n.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ae.css(r, "marginTop", !0),
                    left: t.left - n.left - ae.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || V.documentElement; e && !ae.nodeName(e, "html") && "static" === ae.css(e, "position");) e = e.offsetParent;
                return e || V.documentElement
            })
        }
    }), ae.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        ae.fn[e] = function (i) {
            return ae.access(this, function (e, i, o) {
                var a = z(e);
                if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
                a ? a.scrollTo(r ? ae(a).scrollLeft() : o, r ? o : ae(a).scrollTop()) : e[i] = o
            }, e, i, arguments.length, null)
        }
    }), ae.each({Height: "height", Width: "width"}, function (e, n) {
        ae.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            ae.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (!0 === i || !0 === o ? "margin" : "border");
                return ae.access(this, function (n, r, i) {
                    var o;
                    return ae.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ae.css(n, r, s) : ae.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = ae, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ae
    })
}(window);

function randompic() {
    function b() {
        this.src = "", this.alt = ""
    }

    var s = Math.random(), t = Math.round(11 * s) + 1;
    bbb = new Array;
    for (var e = 1; e <= 12; e++) bbb[e] = new b;
    bbb[1].src = "/images/404/01.jpg", bbb[1].alt = "", bbb[2].src = "/images/404/02.jpg", bbb[2].alt = "", bbb[3].src = "/images/404/03.jpg", bbb[3].alt = "", bbb[4].src = "/images/404/04.jpg", bbb[4].alt = "", bbb[5].src = "/images/404/05.jpg", bbb[5].alt = "", bbb[6].src = "/images/404/06.jpg", bbb[6].alt = "", bbb[7].src = "/images/404/07.jpg", bbb[7].alt = "", bbb[8].src = "/images/404/08.jpg", bbb[8].alt = "", bbb[9].src = "/images/404/09.jpg", bbb[9].alt = "", bbb[10].src = "/images/404/10.jpg", bbb[10].alt = "", bbb[11].src = "/images/404/11.jpg", bbb[11].alt = "", bbb[12].src = "/images/404/12.jpg", bbb[12].alt = "";
    var a = "";
    a = "<img src=" + bbb[t].src + " alt=" + bbb[t].alt + ">", document.getElementById("suzukiFuku").innerHTML = a
}

function showComments() {
    disqus.load(), setTimeout(function () {
        if (!disqus_done && 0 == disqus_lite_run_count) {
            $("#disqus_lite").html('<img src="/images/loading.png" class="comment_loading animated fadeInDown">');
            var b = document.createElement("script");
            b.type = "text/javascript", b.async = !0, b.src = "/js/comments-170803.js", b.onload = function () {
                disqusLite.load()
            }, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b), $("#disqus_thread").hide()
        }
    }, 2e3)
}

$(window).load(function () {
    var b = document.getElementById("post-body").scrollHeight + 300, s = 0;
    b < $(window).height() ? showComments() : $(window).scroll(function () {
        (s = $(window).scrollTop()) > b - $(window).height() && 0 == disqus_run_count && showComments()
    })
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, a = _self.Prism = {
            manual: _self.Prism && _self.Prism.manual, util: {
                encode: function (e) {
                    return e instanceof i ? new i(e.type, a.util.encode(e.content), e.alias) : "Array" === a.util.type(e) ? e.map(a.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                }, clone: function (e) {
                    switch (a.util.type(e)) {
                        case"Object":
                            var t = {};
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = a.util.clone(e[i]));
                            return t;
                        case"Array":
                            return e.map && e.map(function (e) {
                                return a.util.clone(e)
                            })
                    }
                    return e
                }
            }, languages: {
                extend: function (e, t) {
                    var i = a.util.clone(a.languages[e]);
                    for (var r in t) i[r] = t[r];
                    return i
                }, insertBefore: function (e, t, i, r) {
                    r = r || a.languages;
                    var s = r[e];
                    if (2 == arguments.length) {
                        i = arguments[1];
                        for (var n in i) i.hasOwnProperty(n) && (s[n] = i[n]);
                        return s
                    }
                    var o = {};
                    for (var l in s) if (s.hasOwnProperty(l)) {
                        if (l == t) for (var n in i) i.hasOwnProperty(n) && (o[n] = i[n]);
                        o[l] = s[l]
                    }
                    return a.languages.DFS(a.languages, function (t, a) {
                        a === r[e] && t != e && (this[t] = o)
                    }), r[e] = o
                }, DFS: function (e, t, i, r) {
                    r = r || {};
                    for (var s in e) e.hasOwnProperty(s) && (t.call(e, s, e[s], i || s), "Object" !== a.util.type(e[s]) || r[a.util.objId(e[s])] ? "Array" !== a.util.type(e[s]) || r[a.util.objId(e[s])] || (r[a.util.objId(e[s])] = !0, a.languages.DFS(e[s], t, s, r)) : (r[a.util.objId(e[s])] = !0, a.languages.DFS(e[s], t, null, r)))
                }
            }, plugins: {}, highlightAll: function (e, t) {
                var i = {
                    callback: t,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                a.hooks.run("before-highlightall", i);
                for (var r, s = i.elements || document.querySelectorAll(i.selector), n = 0; r = s[n++];) a.highlightElement(r, !0 === e, i.callback)
            }, highlightElement: function (t, i, r) {
                for (var s, n, o = t; o && !e.test(o.className);) o = o.parentNode;
                o && (s = (o.className.match(e) || [, ""])[1].toLowerCase(), n = a.languages[s]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s);
                var l = t.textContent, p = {element: t, language: s, grammar: n, code: l};
                if (a.hooks.run("before-sanity-check", p), !p.code || !p.grammar) return p.code && (a.hooks.run("before-highlight", p), p.element.textContent = p.code, a.hooks.run("after-highlight", p)), void a.hooks.run("complete", p);
                if (a.hooks.run("before-highlight", p), i && _self.Worker) {
                    var c = new Worker(a.filename);
                    c.onmessage = function (e) {
                        p.highlightedCode = e.data, a.hooks.run("before-insert", p), p.element.innerHTML = p.highlightedCode, r && r.call(p.element), a.hooks.run("after-highlight", p), a.hooks.run("complete", p)
                    }, c.postMessage(JSON.stringify({language: p.language, code: p.code, immediateClose: !0}))
                } else p.highlightedCode = a.highlight(p.code, p.grammar, p.language), a.hooks.run("before-insert", p), p.element.innerHTML = p.highlightedCode, r && r.call(t), a.hooks.run("after-highlight", p), a.hooks.run("complete", p)
            }, highlight: function (e, t, r) {
                var s = a.tokenize(e, t);
                return i.stringify(a.util.encode(s), r)
            }, matchGrammar: function (e, t, i, r, s, n, o) {
                var l = a.Token;
                for (var p in i) if (i.hasOwnProperty(p) && i[p]) {
                    if (p == o) return;
                    var c = i[p];
                    c = "Array" === a.util.type(c) ? c : [c];
                    for (var u = 0; u < c.length; ++u) {
                        var _ = c[u], g = _.inside, d = !!_.lookbehind, m = !!_.greedy, h = 0, f = _.alias;
                        if (m && !_.pattern.global) {
                            var b = _.pattern.toString().match(/[imuy]*$/)[0];
                            _.pattern = RegExp(_.pattern.source, b + "g")
                        }
                        _ = _.pattern || _;
                        for (var y = r, k = s; y < t.length; k += t[y].length, ++y) {
                            var v = t[y];
                            if (t.length > e.length) return;
                            if (!(v instanceof l)) {
                                _.lastIndex = 0;
                                var x = _.exec(v), w = 1;
                                if (!x && m && y != t.length - 1) {
                                    if (_.lastIndex = k, !(x = _.exec(e))) break;
                                    for (var P = x.index + (d ? x[1].length : 0), z = x.index + x[0].length, j = y, T = k, S = t.length; S > j && (z > T || !t[j].type && !t[j - 1].greedy); ++j) T += t[j].length, P >= T && (++y, k = T);
                                    if (t[y] instanceof l || t[j - 1].greedy) continue;
                                    w = j - y, v = e.slice(k, T), x.index -= k
                                }
                                if (x) {
                                    d && (h = x[1].length);
                                    var P = x.index + h, x = x[0].slice(h), z = P + x.length, $ = v.slice(0, P),
                                        E = v.slice(z), A = [y, w];
                                    $ && (++y, k += $.length, A.push($));
                                    var O = new l(p, g ? a.tokenize(x, g) : x, f, x, m);
                                    if (A.push(O), E && A.push(E), Array.prototype.splice.apply(t, A), 1 != w && a.matchGrammar(e, t, i, y, k, !0, p), n) break
                                } else if (n) break
                            }
                        }
                    }
                }
            }, tokenize: function (e, t) {
                var i = [e], r = t.rest;
                if (r) {
                    for (var s in r) t[s] = r[s];
                    delete t.rest
                }
                return a.matchGrammar(e, i, t, 0, 0, !1), i
            }, hooks: {
                all: {}, add: function (e, t) {
                    var i = a.hooks.all;
                    i[e] = i[e] || [], i[e].push(t)
                }, run: function (e, t) {
                    var i = a.hooks.all[e];
                    if (i && i.length) for (var r, s = 0; r = i[s++];) r(t)
                }
            }
        }, i = a.Token = function (e, t, a, i, r) {
            this.type = e, this.content = t, this.alias = a, this.length = 0 | (i || "").length, this.greedy = !!r
        };
        if (i.stringify = function (e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === a.util.type(e)) return e.map(function (a) {
                    return i.stringify(a, t, e)
                }).join("");
                var s = {
                    type: e.type,
                    content: i.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == s.type && (s.attributes.spellcheck = "true"), e.alias) {
                    var n = "Array" === a.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(s.classes, n)
                }
                a.hooks.run("wrap", s);
                var o = Object.keys(s.attributes).map(function (e) {
                    return e + '="' + (s.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + s.content + "</" + s.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
            var t = JSON.parse(e.data), i = t.language, r = t.code, s = t.immediateClose;
            _self.postMessage(a.highlight(r, a.languages[i], i)), s && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (a.filename = r.src, !document.addEventListener || a.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: {pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
    string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /(\.|\\)/}
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, function (e) {
    var t = {
        variable: [{
            pattern: /\$?\(\([\s\S]+?\)\)/,
            inside: {
                variable: [{pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {variable: /^\$\(|^`|\)$|`$/}
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: {pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: "important"},
        comment: {pattern: /(^|[^"{\\])#.*/, lookbehind: !0},
        string: [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, {pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g, greedy: !0, inside: t}],
        variable: t.variable,
        function: {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        boolean: {pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/, lookbehind: !0},
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var a = t.variable[1].inside;
    a.function = e.languages.bash.function, a.keyword = e.languages.bash.keyword, a.boolean = e.languages.bash.boolean, a.operator = e.languages.bash.operator, a.punctuation = e.languages.bash.punctuation
}(Prism), Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(\\?.)*?\1/m,
    command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s(--|-)\w+/m}},
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
}, Prism.languages.http = {
    "request-line": {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
        inside: {property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, "attr-name": /:\w+/}
    },
    "response-status": {
        pattern: /^HTTP\/1.[01] \d+.*/m,
        inside: {property: {pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0}}
    },
    "header-name": {pattern: /^[\w-]+:(?=.)/m, alias: "keyword"}
};
var httpLanguages = {
    "application/json": Prism.languages.javascript,
    "application/xml": Prism.languages.markup,
    "text/xml": Prism.languages.markup,
    "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages) if (httpLanguages[contentType]) {
    var options = {};
    options[contentType] = {
        pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
        lookbehind: !0,
        inside: {rest: httpLanguages[contentType]}
    }, Prism.languages.insertBefore("http", "header-name", options)
}
!function (e) {
    e.languages.jade = {
        comment: {pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m, lookbehind: !0},
        "multiline-script": {
            pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {rest: e.languages.javascript}
        },
        filter: {
            pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {"filter-name": {pattern: /^:[\w-]+/, alias: "variable"}}
        },
        "multiline-plain-text": {
            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {pattern: /(^[\t ]*)<.+/m, lookbehind: !0, inside: {rest: e.languages.markup}},
        doctype: {pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0},
        "flow-control": {
            pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {pattern: /^each .+? in\b/, inside: {keyword: /\b(?:each|in)\b/, punctuation: /,/}},
                branch: {pattern: /^(?:if|unless|else|case|when|default|while)\b/, alias: "keyword"},
                rest: e.languages.javascript
            }
        },
        keyword: {pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m, lookbehind: !0},
        mixin: [{
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/}
        }, {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {name: {pattern: /^\+\w+/, alias: "function"}, rest: e.languages.javascript}
        }],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
            lookbehind: !0,
            inside: {rest: e.languages.javascript}
        },
        "plain-text": {pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m, lookbehind: !0},
        tag: {
            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: {rest: e.languages.javascript}
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: {rest: e.languages.javascript}
                        }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/
                    }
                }], punctuation: /:/
            }
        },
        code: [{pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: !0, inside: {rest: e.languages.javascript}}],
        punctuation: /[.\-!=|]+/
    };
    for (var t = "(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+", a = [{
        filter: "atpl",
        language: "twig"
    }, {
        filter: "coffee",
        language: "coffeescript"
    }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
        filter: "sass",
        language: "scss"
    }, "stylus", "swig"], i = {}, r = 0, s = a.length; s > r; r++) {
        var n = a[r];
        n = "string" == typeof n ? {
            filter: n,
            language: n
        } : n, e.languages[n.language] && (i["filter-" + n.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", n.filter), "m"),
            lookbehind: !0,
            inside: {"filter-name": {pattern: /^:[\w-]+/, alias: "variable"}, rest: e.languages[n.language]}
        })
    }
    e.languages.insertBefore("jade", "filter", i)
}(Prism), Prism.languages.json = {
    property: /"(?:\\.|[^\\"])*"(?=\s*:)/gi,
    string: /"(?!:)(?:\\.|[^\\"])*"(?!:)/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
    punctuation: /[{}[\]);,]/g,
    operator: /:/g,
    boolean: /\b(true|false)\b/gi,
    null: /\bnull\b/gi
}, Prism.languages.jsonp = Prism.languages.json, Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
    blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
    },
    code: [{pattern: /^(?: {4}|\t).+/m, alias: "keyword"}, {pattern: /``.+?``|`[^`\n]+`/, alias: "keyword"}],
    title: [{
        pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
        alias: "important",
        inside: {punctuation: /==+$|--+$/}
    }, {pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: "important", inside: {punctuation: /^#+|#+$/}}],
    hr: {pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation"},
    list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation"},
    "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
            variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^\*\*|^__|\*\*$|__$/}
    },
    italic: {
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^[*_]|[*_]$/}
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: {pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0},
            string: {pattern: /"(?:\\.|[^"\\])*"(?=\)$)/}
        }
    }
}), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold), Prism.languages.nginx = Prism.languages.extend("clike", {
    comment: {
        pattern: /(^|[^"{\\])#.*/,
        lookbehind: !0
    },
    keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
}), Prism.languages.insertBefore("nginx", "keyword", {variable: /\$[a-z_]+/i}), function (e) {
    var t = e.util.clone(e.languages.javascript);
    e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\})\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i, e.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: /\{\.{3}\w+\}/,
            inside: {punctuation: /\{|\}|\./, "attr-value": /\w+/}
        }
    }, e.languages.jsx.tag);
    var a = e.util.clone(e.languages.jsx);
    delete a.punctuation, a = e.languages.insertBefore("jsx", "operator", {punctuation: /=(?={)|[{}[\];(),.:]/}, {jsx: a}), e.languages.insertBefore("inside", "attr-value", {
        script: {
            pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
            inside: a,
            alias: "language-javascript"
        }
    }, e.languages.jsx.tag)
}(Prism), Prism.languages.yaml = {
    scalar: {
        pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
        lookbehind: !0,
        alias: "string"
    },
    comment: /#.*/,
    key: {
        pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
        lookbehind: !0,
        alias: "atrule"
    },
    directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important"},
    datetime: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0,
        alias: "number"
    },
    boolean: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0,
        alias: "important"
    },
    null: {pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im, lookbehind: !0, alias: "important"},
    string: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
        lookbehind: !0,
        greedy: !0
    },
    number: {
        pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
        lookbehind: !0
    },
    tag: /![^\s]+/,
    important: /[&*][\w]+/,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
};