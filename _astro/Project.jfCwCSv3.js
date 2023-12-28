import {S as _e, i as pe, s as ae, e as j, z as we, A as Ne, E as ht, c as F, a as V, d as g, B as Ie, C as Ae, F as gt, b as L, k as ln, p as Fe, f as M, h as C, l as Oe, D as Re, n as Ce, x as rn, M as O, Q as He, R as Sn, P as Qe, T as Lt, K as oe, v as k, H as ie, u as b, U as se, V as fe, W as ue, X as ce, Y as Se, m as G, o as ee, q as K, w as Q, t as Ee, r as Tn, y as Pn, Z as Ln, _ as Dn, O as Bn} from "./index.JGMlkmnd.js";
import {e as ve, u as On, o as Mn} from "./each.vSSWZ5md.js";
import {I as Dt} from "./image.BOJ5USvO.js";
import {l as Cn} from "./math.62SB_m8q.js";
/* empty css                       */
import {B as Nn} from "./Button.g5smf_KL.js";
import {s as An} from "./index.es.h7yWt7Ul.js";
import {i as Vn} from "./in-view.es.GFlACgdF.js";
import "./spread.AQEXjpNi.js";
/* empty css                       */
const $n = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function bt(r) {
    return typeof r == "number"
}
function _t(r) {
    return typeof r == "string"
}
function kt(r) {
    return typeof r == "boolean"
}
function Bt(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
function ne(r) {
    return Math.abs(r)
}
function vt(r) {
    return Math.sign(r)
}
function lt(r, e) {
    return ne(r - e)
}
function jn(r, e) {
    if (r === 0 || e === 0 || ne(r) <= ne(e))
        return 0;
    const l = lt(ne(r), ne(e));
    return ne(l / r)
}
function Xe(r) {
    return Ze(r).map(Number)
}
function De(r) {
    return r[Je(r)]
}
function Je(r) {
    return Math.max(0, r.length - 1)
}
function yt(r, e) {
    return e === Je(r)
}
function Ot(r, e=0) {
    return Array.from(Array(r), (l,n)=>e + n)
}
function Ze(r) {
    return Object.keys(r)
}
function on(r, e) {
    return [r, e].reduce((l,n)=>(Ze(n).forEach(t=>{
        const i = l[t]
          , o = n[t]
          , f = Bt(i) && Bt(o);
        l[t] = f ? on(i, o) : o
    }
    ),
    l), {})
}
function sn(r, e) {
    return typeof e.MouseEvent < "u" && r instanceof e.MouseEvent
}
function Fn(r, e) {
    const l = {
        start: n,
        center: t,
        end: i
    };
    function n() {
        return 0
    }
    function t(s) {
        return i(s) / 2
    }
    function i(s) {
        return e - s
    }
    function o(s, u) {
        return _t(r) ? l[r](s) : r(e, s, u)
    }
    return {
        measure: o
    }
}
function Rn(r, e) {
    const l = r === "y" ? "y" : "x"
      , n = r === "y" ? "x" : "y"
      , t = f()
      , i = s();
    function o(d) {
        const {width: c, height: a} = d;
        return l === "x" ? c : a
    }
    function f() {
        return l === "y" ? "top" : e === "rtl" ? "right" : "left"
    }
    function s() {
        return l === "y" ? "bottom" : e === "rtl" ? "left" : "right"
    }
    return {
        scroll: l,
        cross: n,
        startEdge: t,
        endEdge: i,
        measureSize: o
    }
}
function qe(r=0, e=0) {
    const l = ne(r - e);
    function n(u) {
        return u < r
    }
    function t(u) {
        return u > e
    }
    function i(u) {
        return n(u) || t(u)
    }
    function o(u) {
        return i(u) ? n(u) ? r : e : u
    }
    function f(u) {
        return l ? u - l * Math.ceil((u - e) / l) : u
    }
    return {
        length: l,
        max: e,
        min: r,
        constrain: o,
        reachedAny: i,
        reachedMax: t,
        reachedMin: n,
        removeOffset: f
    }
}
function fn(r, e, l) {
    const {constrain: n} = qe(0, r)
      , t = r + 1;
    let i = o(e);
    function o(a) {
        return l ? ne((t + a) % t) : n(a)
    }
    function f() {
        return i
    }
    function s(a) {
        return i = o(a),
        c
    }
    function u(a) {
        return d().set(f() + a)
    }
    function d() {
        return fn(r, f(), l)
    }
    const c = {
        get: f,
        set: s,
        add: u,
        clone: d
    };
    return c
}
function qn(r) {
    const e = r === "rtl" ? -1 : 1;
    function l(t) {
        return t * e
    }
    return {
        apply: l
    }
}
function We() {
    let r = [];
    function e(t, i, o, f={
        passive: !0
    }) {
        let s;
        if ("addEventListener"in t)
            t.addEventListener(i, o, f),
            s = ()=>t.removeEventListener(i, o, f);
        else {
            const u = t;
            u.addListener(o),
            s = ()=>u.removeListener(o)
        }
        return r.push(s),
        n
    }
    function l() {
        r = r.filter(t=>t())
    }
    const n = {
        add: e,
        clear: l
    };
    return n
}
function Hn(r, e, l, n, t, i, o, f, s, u, d, c, a, m, h, _, v, P, w, p) {
    const {cross: N} = r
      , D = ["INPUT", "SELECT", "TEXTAREA"]
      , A = {
        passive: !1
    }
      , q = We()
      , y = We()
      , S = qe(50, 225).constrain(h.measure(20))
      , I = {
        mouse: 300,
        touch: 400
    }
      , z = {
        mouse: 500,
        touch: 600
    }
      , E = _ ? 43 : 25;
    let te = !1
      , X = 0
      , be = 0
      , W = !1
      , Pe = !1
      , Be = !1
      , ge = !1;
    function le(B) {
        if (!p)
            return;
        function $(U) {
            (kt(p) || p(B, U)) && de(U)
        }
        const H = l;
        q.add(H, "dragstart", U=>U.preventDefault(), A).add(H, "touchmove", ()=>{}
        , A).add(H, "touchend", ()=>{}
        ).add(H, "touchstart", $).add(H, "mousedown", $).add(H, "touchcancel", re).add(H, "contextmenu", re).add(H, "click", ye, !0)
    }
    function Y() {
        q.clear(),
        y.clear()
    }
    function Z() {
        const B = ge ? n : l;
        y.add(B, "touchmove", ke, A).add(B, "touchend", re).add(B, "mousemove", ke, A).add(B, "mouseup", re)
    }
    function J(B) {
        const $ = B.nodeName || "";
        return D.includes($)
    }
    function T() {
        return (_ ? z : I)[ge ? "mouse" : "touch"]
    }
    function R(B, $) {
        const H = a.add(vt(B) * -1)
          , U = c.byDistance(B, !_).distance;
        return _ || ne(B) < S ? U : P && $ ? U * .5 : c.byIndex(H.get(), 0).distance
    }
    function de(B) {
        const $ = sn(B, t);
        ge = $,
        !($ && B.button !== 0) && (J(B.target) || (Be = _ && $ && !B.buttons && te,
        te = lt(i.get(), f.get()) >= 2,
        W = !0,
        o.pointerDown(B),
        d.useFriction(0).useDuration(0),
        i.set(f),
        Z(),
        X = o.readPoint(B),
        be = o.readPoint(B, N),
        m.emit("pointerDown")))
    }
    function ke(B) {
        const $ = o.readPoint(B)
          , H = o.readPoint(B, N)
          , U = lt($, X)
          , he = lt(H, be);
        if (!Pe && !ge && (!B.cancelable || (Pe = U > he,
        !Pe)))
            return re(B);
        const me = o.pointerMove(B);
        U > v && (Be = !0),
        d.useFriction(.3).useDuration(1),
        s.start(),
        i.add(e.apply(me)),
        B.preventDefault()
    }
    function re(B) {
        const H = c.byDistance(0, !1).index !== a.get()
          , U = o.pointerUp(B) * T()
          , he = R(e.apply(U), H)
          , me = jn(U, he)
          , Le = E - 10 * me
          , Ve = w + me / 50;
        Pe = !1,
        W = !1,
        y.clear(),
        d.useDuration(Le).useFriction(Ve),
        u.distance(he, !_),
        ge = !1,
        m.emit("pointerUp")
    }
    function ye(B) {
        Be && (B.stopPropagation(),
        B.preventDefault())
    }
    function x() {
        return W
    }
    return {
        init: le,
        pointerDown: x,
        destroy: Y
    }
}
function zn(r, e) {
    let n, t;
    function i(c) {
        return c.timeStamp
    }
    function o(c, a) {
        const h = `client${(a || r.scroll) === "x" ? "X" : "Y"}`;
        return (sn(c, e) ? c : c.touches[0])[h]
    }
    function f(c) {
        return n = c,
        t = c,
        o(c)
    }
    function s(c) {
        const a = o(c) - o(t)
          , m = i(c) - i(n) > 170;
        return t = c,
        m && (n = c),
        a
    }
    function u(c) {
        if (!n || !t)
            return 0;
        const a = o(t) - o(n)
          , m = i(c) - i(n)
          , h = i(c) - i(t) > 170
          , _ = a / m;
        return m && !h && ne(_) > .1 ? _ : 0
    }
    return {
        pointerDown: f,
        pointerMove: s,
        pointerUp: u,
        readPoint: o
    }
}
function Un() {
    function r(l) {
        const {offsetTop: n, offsetLeft: t, offsetWidth: i, offsetHeight: o} = l;
        return {
            top: n,
            right: t + i,
            bottom: n + o,
            left: t,
            width: i,
            height: o
        }
    }
    return {
        measure: r
    }
}
function Gn(r) {
    function e(n) {
        return r * (n / 100)
    }
    return {
        measure: e
    }
}
function Kn(r, e, l, n, t, i, o) {
    let f, s, u = [], d = !1;
    function c(_) {
        return t.measureSize(o.measure(_))
    }
    function a(_) {
        if (!i)
            return;
        s = c(r),
        u = n.map(c);
        function v(w) {
            for (const p of w) {
                const N = p.target === r
                  , D = n.indexOf(p.target)
                  , A = N ? s : u[D]
                  , q = c(N ? r : n[D]);
                if (ne(q - A) >= .5) {
                    l.requestAnimationFrame(()=>{
                        _.reInit(),
                        e.emit("resize")
                    }
                    );
                    break
                }
            }
        }
        f = new ResizeObserver(w=>{
            d || (kt(i) || i(_, w)) && v(w)
        }
        ),
        [r].concat(n).forEach(w=>f.observe(w))
    }
    function m() {
        f && f.disconnect(),
        d = !0
    }
    return {
        init: a,
        destroy: m
    }
}
function Qn(r, e, l, n, t) {
    let i = 0
      , o = 0
      , f = n
      , s = t
      , u = r.get()
      , d = 0;
    function c() {
        const D = l.get() - r.get()
          , A = !f;
        let q = 0;
        return A ? (i = 0,
        r.set(l),
        q = D) : (i += D / f,
        i *= s,
        u += i,
        r.add(i),
        q = u - d),
        o = vt(q),
        d = u,
        N
    }
    function a() {
        const D = l.get() - e.get();
        return ne(D) < .001
    }
    function m() {
        return f
    }
    function h() {
        return o
    }
    function _() {
        return i
    }
    function v() {
        return w(n)
    }
    function P() {
        return p(t)
    }
    function w(D) {
        return f = D,
        N
    }
    function p(D) {
        return s = D,
        N
    }
    const N = {
        direction: h,
        duration: m,
        velocity: _,
        seek: c,
        settled: a,
        useBaseFriction: P,
        useBaseDuration: v,
        useFriction: p,
        useDuration: w
    };
    return N
}
function Xn(r, e, l, n, t) {
    const i = t.measure(10)
      , o = t.measure(50)
      , f = qe(.1, .99);
    let s = !1;
    function u() {
        return !(s || !r.reachedAny(l.get()) || !r.reachedAny(e.get()))
    }
    function d(m) {
        if (!u())
            return;
        const h = r.reachedMin(e.get()) ? "min" : "max"
          , _ = ne(r[h] - e.get())
          , v = l.get() - e.get()
          , P = f.constrain(_ / o);
        l.subtract(v * P),
        !m && ne(v) < i && (l.set(r.constrain(l.get())),
        n.useDuration(25).useBaseFriction())
    }
    function c(m) {
        s = !m
    }
    return {
        constrain: d,
        toggleActive: c
    }
}
function Zn(r, e, l, n, t) {
    const i = qe(-e + r, 0)
      , o = d()
      , f = u()
      , s = c();
    function u() {
        const m = o[0]
          , h = De(o)
          , _ = o.lastIndexOf(m)
          , v = o.indexOf(h) + 1;
        return qe(_, v)
    }
    function d() {
        return l.map((m,h)=>{
            const _ = !h
              , v = yt(l, h);
            return _ ? i.max : v ? i.min : i.constrain(m)
        }
        ).map(m=>parseFloat(m.toFixed(3)))
    }
    function c() {
        if (e <= r + t)
            return [i.max];
        if (n === "keepSnaps")
            return o;
        const {min: m, max: h} = f;
        return o.slice(m, h)
    }
    return {
        snapsContained: s,
        scrollContainLimit: f
    }
}
function Wn(r, e, l) {
    const n = e[0]
      , t = l ? n - r : De(e);
    return {
        limit: qe(t, n)
    }
}
function Yn(r, e, l, n) {
    const i = e.min + .1
      , o = e.max + .1
      , {reachedMin: f, reachedMax: s} = qe(i, o);
    function u(a) {
        return a === 1 ? s(l.get()) : a === -1 ? f(l.get()) : !1
    }
    function d(a) {
        if (!u(a))
            return;
        const m = r * (a * -1);
        n.forEach(h=>h.add(m))
    }
    return {
        loop: d
    }
}
function Jn(r) {
    const {max: e, length: l} = r;
    function n(i) {
        const o = i - e;
        return l ? o / -l : 0
    }
    return {
        get: n
    }
}
function xn(r, e, l, n, t) {
    const {startEdge: i, endEdge: o} = r
      , {groupSlides: f} = t
      , s = c().map(e.measure)
      , u = a()
      , d = m();
    function c() {
        return f(n).map(_=>De(_)[o] - _[0][i]).map(ne)
    }
    function a() {
        return n.map(_=>l[i] - _[i]).map(_=>-ne(_))
    }
    function m() {
        return f(u).map(_=>_[0]).map((_,v)=>_ + s[v])
    }
    return {
        snaps: u,
        snapsAligned: d
    }
}
function el(r, e, l, n, t, i) {
    const {groupSlides: o} = t
      , {min: f, max: s} = n
      , u = d();
    function d() {
        const a = o(i)
          , m = !r || e === "keepSnaps";
        return l.length === 1 ? [i] : m ? a : a.slice(f, s).map((h,_,v)=>{
            const P = !_
              , w = yt(v, _);
            if (P) {
                const p = De(v[0]) + 1;
                return Ot(p)
            }
            if (w) {
                const p = Je(i) - De(v)[0] + 1;
                return Ot(p, De(v)[0])
            }
            return h
        }
        )
    }
    return {
        slideRegistry: u
    }
}
function tl(r, e, l, n, t) {
    const {reachedAny: i, removeOffset: o, constrain: f} = n;
    function s(h) {
        return h.concat().sort((_,v)=>ne(_) - ne(v))[0]
    }
    function u(h) {
        const _ = r ? o(h) : f(h)
          , v = e.map(w=>w - _).map(w=>d(w, 0)).map((w,p)=>({
            diff: w,
            index: p
        })).sort((w,p)=>ne(w.diff) - ne(p.diff))
          , {index: P} = v[0];
        return {
            index: P,
            distance: _
        }
    }
    function d(h, _) {
        const v = [h, h + l, h - l];
        if (!r)
            return v[0];
        if (!_)
            return s(v);
        const P = v.filter(w=>vt(w) === _);
        return P.length ? s(P) : De(v) - l
    }
    function c(h, _) {
        const v = e[h] - t.get()
          , P = d(v, _);
        return {
            index: h,
            distance: P
        }
    }
    function a(h, _) {
        const v = t.get() + h
          , {index: P, distance: w} = u(v)
          , p = !r && i(v);
        if (!_ || p)
            return {
                index: P,
                distance: h
            };
        const N = e[P] - w
          , D = h + d(N, 0);
        return {
            index: P,
            distance: D
        }
    }
    return {
        byDistance: a,
        byIndex: c,
        shortcut: d
    }
}
function nl(r, e, l, n, t, i) {
    function o(d) {
        const c = d.distance
          , a = d.index !== e.get();
        t.add(c),
        c && r.start(),
        a && (l.set(e.get()),
        e.set(d.index),
        i.emit("select"))
    }
    function f(d, c) {
        const a = n.byDistance(d, c);
        o(a)
    }
    function s(d, c) {
        const a = e.clone().set(d)
          , m = n.byIndex(a.get(), c);
        o(m)
    }
    return {
        distance: f,
        index: s
    }
}
function ll(r, e, l, n, t, i) {
    let o = 0;
    function f() {
        i.add(document, "keydown", s, !1),
        e.forEach(u)
    }
    function s(c) {
        c.code === "Tab" && (o = new Date().getTime())
    }
    function u(c) {
        const a = ()=>{
            if (new Date().getTime() - o > 10)
                return;
            r.scrollLeft = 0;
            const _ = e.indexOf(c)
              , v = l.findIndex(P=>P.includes(_));
            bt(v) && (t.useDuration(0),
            n.index(v, 0))
        }
        ;
        i.add(c, "focus", a, {
            passive: !0,
            capture: !0
        })
    }
    return {
        init: f
    }
}
function rt(r) {
    let e = r;
    function l() {
        return e
    }
    function n(s) {
        e = o(s)
    }
    function t(s) {
        e += o(s)
    }
    function i(s) {
        e -= o(s)
    }
    function o(s) {
        return bt(s) ? s : s.get()
    }
    return {
        get: l,
        set: n,
        add: t,
        subtract: i
    }
}
function un(r, e, l) {
    const n = r.scroll === "x" ? o : f
      , t = l.style;
    let i = !1;
    function o(a) {
        return `translate3d(${a}px,0px,0px)`
    }
    function f(a) {
        return `translate3d(0px,${a}px,0px)`
    }
    function s(a) {
        i || (t.transform = n(e.apply(a)))
    }
    function u(a) {
        i = !a
    }
    function d() {
        i || (t.transform = "",
        l.getAttribute("style") || l.removeAttribute("style"))
    }
    return {
        clear: d,
        to: s,
        toggleActive: u
    }
}
function rl(r, e, l, n, t, i, o, f, s, u) {
    const c = Xe(i)
      , a = Xe(i).reverse()
      , m = w().concat(p());
    function h(y, S) {
        return y.reduce((I,z)=>I - i[z], S)
    }
    function _(y, S) {
        return y.reduce((I,z)=>h(I, S) > 0 ? I.concat([z]) : I, [])
    }
    function v(y) {
        return o.map((S,I)=>({
            start: S - t[I] + .5 + y,
            end: S + l - .5 + y
        }))
    }
    function P(y, S, I) {
        const z = v(S);
        return y.map(E=>{
            const te = I ? 0 : -n
              , X = I ? n : 0
              , be = I ? "end" : "start"
              , W = z[E][be];
            return {
                index: E,
                loopPoint: W,
                slideLocation: rt(-1),
                translate: un(r, e, u[E]),
                target: ()=>s.get() > W ? te : X
            }
        }
        )
    }
    function w() {
        const y = f[0]
          , S = _(a, y);
        return P(S, n, !1)
    }
    function p() {
        const y = l - f[0] - 1
          , S = _(c, y);
        return P(S, -n, !0)
    }
    function N() {
        return m.every(({index: y})=>{
            const S = c.filter(I=>I !== y);
            return h(S, l) <= .1
        }
        )
    }
    function D() {
        m.forEach(y=>{
            const {target: S, translate: I, slideLocation: z} = y
              , E = S();
            E !== z.get() && (I.to(E),
            z.set(E))
        }
        )
    }
    function A() {
        m.forEach(y=>y.translate.clear())
    }
    return {
        canLoop: N,
        clear: A,
        loop: D,
        loopPoints: m
    }
}
function ol(r, e, l) {
    let n, t = !1;
    function i(s) {
        if (!l)
            return;
        function u(d) {
            for (const c of d)
                if (c.type === "childList") {
                    s.reInit(),
                    e.emit("slidesChanged");
                    break
                }
        }
        n = new MutationObserver(d=>{
            t || (kt(l) || l(s, d)) && u(d)
        }
        ),
        n.observe(r, {
            childList: !0
        })
    }
    function o() {
        n && n.disconnect(),
        t = !0
    }
    return {
        init: i,
        destroy: o
    }
}
function il(r, e, l, n) {
    const t = {};
    let i = null, o = null, f, s = !1;
    function u() {
        f = new IntersectionObserver(h=>{
            s || (h.forEach(_=>{
                const v = e.indexOf(_.target);
                t[v] = _
            }
            ),
            i = null,
            o = null,
            l.emit("slidesInView"))
        }
        ,{
            root: r.parentElement,
            threshold: n
        }),
        e.forEach(h=>f.observe(h))
    }
    function d() {
        f && f.disconnect(),
        s = !0
    }
    function c(h) {
        return Ze(t).reduce((_,v)=>{
            const P = parseInt(v)
              , {isIntersecting: w} = t[P];
            return (h && w || !h && !w) && _.push(P),
            _
        }
        , [])
    }
    function a(h=!0) {
        if (h && i)
            return i;
        if (!h && o)
            return o;
        const _ = c(h);
        return h && (i = _),
        h || (o = _),
        _
    }
    return {
        init: u,
        destroy: d,
        get: a
    }
}
function sl(r, e, l, n, t, i) {
    const {measureSize: o, startEdge: f, endEdge: s} = r
      , u = l[0] && t
      , d = h()
      , c = _()
      , a = l.map(o)
      , m = v();
    function h() {
        if (!u)
            return 0;
        const w = l[0];
        return ne(e[f] - w[f])
    }
    function _() {
        if (!u)
            return 0;
        const w = i.getComputedStyle(De(n));
        return parseFloat(w.getPropertyValue(`margin-${s}`))
    }
    function v() {
        return l.map((w,p,N)=>{
            const D = !p
              , A = yt(N, p);
            return D ? a[p] + d : A ? a[p] + c : N[p + 1][f] - w[f]
        }
        ).map(ne)
    }
    return {
        slideSizes: a,
        slideSizesWithGaps: m,
        startGap: d,
        endGap: c
    }
}
function fl(r, e, l, n, t, i, o, f, s, u) {
    const {startEdge: d, endEdge: c} = r
      , a = bt(n);
    function m(P, w) {
        return Xe(P).filter(p=>p % w === 0).map(p=>P.slice(p, p + w))
    }
    function h(P) {
        return P.length ? Xe(P).reduce((w,p)=>{
            const N = De(w) || 0
              , D = N === 0
              , A = p === Je(P)
              , q = i[d] - o[N][d]
              , y = i[d] - o[p][c]
              , S = !t && D ? e.apply(f) : 0
              , I = !t && A ? e.apply(s) : 0;
            return ne(y - I - (q + S)) > l + u && w.push(p),
            A && w.push(P.length),
            w
        }
        , []).map((w,p,N)=>{
            const D = Math.max(N[p - 1] || 0);
            return P.slice(D, w)
        }
        ) : []
    }
    function _(P) {
        return a ? m(P, n) : h(P)
    }
    return {
        groupSlides: _
    }
}
function ul(r, e, l, n, t, i, o, f) {
    const {align: s, axis: u, direction: d, startIndex: c, loop: a, duration: m, dragFree: h, dragThreshold: _, inViewThreshold: v, slidesToScroll: P, skipSnaps: w, containScroll: p, watchResize: N, watchSlides: D, watchDrag: A} = i
      , q = 2
      , y = Un()
      , S = y.measure(e)
      , I = l.map(y.measure)
      , z = qn(d)
      , E = Rn(u, d)
      , te = E.measureSize(S)
      , X = Gn(te)
      , be = Fn(s, te)
      , W = !a && !!p
      , Pe = a || !!p
      , {slideSizes: Be, slideSizesWithGaps: ge, startGap: le, endGap: Y} = sl(E, S, I, l, Pe, t)
      , Z = fl(E, z, te, P, a, S, I, le, Y, q)
      , {snaps: J, snapsAligned: T} = xn(E, be, S, I, Z)
      , R = -De(J) + De(ge)
      , {snapsContained: de, scrollContainLimit: ke} = Zn(te, R, T, p, q)
      , re = W ? de : T
      , {limit: ye} = Wn(R, re, a)
      , x = fn(Je(re), c, a)
      , Te = x.clone()
      , B = Xe(l)
      , $ = ({dragHandler: je, scrollBody: ut, scrollBounds: ct, options: {loop: tt}})=>{
        tt || ct.constrain(je.pointerDown()),
        ut.seek()
    }
      , H = ({scrollBody: je, translate: ut, location: ct, offsetLocation: tt, scrollLooper: kn, slideLooper: vn, dragHandler: yn, animation: wn, eventHandler: St, options: {loop: In}},En)=>{
        const Tt = je.velocity()
          , Pt = je.settled();
        Pt && !yn.pointerDown() && (wn.stop(),
        St.emit("settle")),
        Pt || St.emit("scroll"),
        tt.set(ct.get() - Tt + Tt * En),
        In && (kn.loop(je.direction()),
        vn.loop()),
        ut.to(tt.get())
    }
      , U = {
        start: ()=>f.start(Ge),
        stop: ()=>f.stop(Ge),
        update: ()=>$(Ge),
        render: je=>H(Ge, je)
    }
      , he = .68
      , me = re[x.get()]
      , Le = rt(me)
      , Ve = rt(me)
      , $e = rt(me)
      , et = Qn(Le, Ve, $e, m, he)
      , st = tl(a, re, R, ye, $e)
      , ft = nl(U, x, Te, st, $e, o)
      , wt = Jn(ye)
      , It = We()
      , gn = il(e, l, o, v)
      , {slideRegistry: Et} = el(W, p, re, ke, Z, B)
      , bn = ll(r, l, Et, ft, et, It)
      , Ge = {
        ownerDocument: n,
        ownerWindow: t,
        eventHandler: o,
        containerRect: S,
        slideRects: I,
        animation: U,
        axis: E,
        direction: z,
        dragHandler: Hn(E, z, r, n, t, $e, zn(E, t), Le, U, ft, et, st, x, o, X, h, _, w, he, A),
        eventStore: It,
        percentOfView: X,
        index: x,
        indexPrevious: Te,
        limit: ye,
        location: Le,
        offsetLocation: Ve,
        options: i,
        resizeHandler: Kn(e, o, t, l, E, N, y),
        scrollBody: et,
        scrollBounds: Xn(ye, Le, $e, et, X),
        scrollLooper: Yn(R, ye, Ve, [Le, Ve, $e]),
        scrollProgress: wt,
        scrollSnapList: re.map(wt.get),
        scrollSnaps: re,
        scrollTarget: st,
        scrollTo: ft,
        slideLooper: rl(E, z, te, R, Be, ge, J, re, Ve, l),
        slideFocus: bn,
        slidesHandler: ol(e, o, D),
        slidesInView: gn,
        slideIndexes: B,
        slideRegistry: Et,
        slidesToScroll: Z,
        target: $e,
        translate: un(E, z, e)
    };
    return Ge
}
function cl(r) {
    const e = 16.666666666666668;
    let l = []
      , n = null
      , t = 0
      , i = 0;
    function o(c) {
        n || (n = c);
        const a = c - n;
        for (n = c,
        t += a; t >= e; )
            l.forEach(({animation: h})=>h.update()),
            t -= e;
        const m = ne(t / e);
        l.forEach(({animation: h})=>h.render(m)),
        i && r.requestAnimationFrame(o)
    }
    function f(c) {
        l.includes(c) || l.push(c),
        !i && (i = r.requestAnimationFrame(o))
    }
    function s(c) {
        l = l.filter(a=>a !== c),
        !l.length && (r.cancelAnimationFrame(i),
        n = null,
        t = 0,
        i = 0)
    }
    function u() {
        n = null,
        t = 0
    }
    return {
        start: f,
        stop: s,
        reset: u,
        window: r
    }
}
function al() {
    const r = {};
    let e;
    function l(s) {
        e = s
    }
    function n(s) {
        return r[s] || []
    }
    function t(s) {
        return n(s).forEach(u=>u(e, s)),
        f
    }
    function i(s, u) {
        return r[s] = n(s).concat([u]),
        f
    }
    function o(s, u) {
        return r[s] = n(s).filter(d=>d !== u),
        f
    }
    const f = {
        init: l,
        emit: t,
        off: o,
        on: i
    };
    return f
}
const dl = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0
};
function ml(r) {
    function e(i, o) {
        return on(i, o || {})
    }
    function l(i) {
        const o = i.breakpoints || {}
          , f = Ze(o).filter(s=>r.matchMedia(s).matches).map(s=>o[s]).reduce((s,u)=>e(s, u), {});
        return e(i, f)
    }
    function n(i) {
        return i.map(o=>Ze(o.breakpoints || {})).reduce((o,f)=>o.concat(f), []).map(r.matchMedia)
    }
    return {
        mergeOptions: e,
        optionsAtMedia: l,
        optionsMediaQueries: n
    }
}
function _l(r) {
    let e = [];
    function l(i, o) {
        return e = o.filter(({options: f})=>r.optionsAtMedia(f).active !== !1),
        e.forEach(f=>f.init(i, r)),
        o.reduce((f,s)=>Object.assign(f, {
            [s.name]: s
        }), {})
    }
    function n() {
        e = e.filter(i=>i.destroy())
    }
    return {
        init: l,
        destroy: n
    }
}
function Ye(r, e, l) {
    const n = r.ownerDocument
      , t = n.defaultView
      , i = ml(t)
      , o = _l(i)
      , f = We()
      , s = We()
      , u = al()
      , {animationRealms: d} = Ye
      , {mergeOptions: c, optionsAtMedia: a, optionsMediaQueries: m} = i
      , {on: h, off: _, emit: v} = u
      , P = te;
    let w = !1, p, N = c(dl, Ye.globalOptions), D = c(N), A = [], q, y, S;
    function I() {
        const {container: $, slides: H} = D;
        y = (_t($) ? r.querySelector($) : $) || r.children[0];
        const he = _t(H) ? y.querySelectorAll(H) : H;
        S = [].slice.call(he || y.children)
    }
    function z($, H) {
        const U = ul(r, y, S, n, t, $, u, H);
        if ($.loop && !U.slideLooper.canLoop()) {
            const he = Object.assign({}, $, {
                loop: !1
            });
            return z(he, H)
        }
        return U
    }
    function E($, H) {
        if (w)
            return;
        const U = d.find(me=>me.window === t)
          , he = U || cl(t);
        U || d.push(he),
        N = c(N, $),
        D = a(N),
        A = H || A,
        I(),
        p = z(D, he),
        m([N, ...A.map(({options: me})=>me)]).forEach(me=>f.add(me, "change", te)),
        D.active && (p.translate.to(p.location.get()),
        p.slidesInView.init(),
        p.slideFocus.init(),
        p.eventHandler.init(B),
        p.resizeHandler.init(B),
        p.slidesHandler.init(B),
        s.add(n, "visibilitychange", ()=>{
            n.hidden && he.reset()
        }
        ),
        p.options.loop && p.slideLooper.loop(),
        y.offsetParent && S.length && p.dragHandler.init(B),
        q = o.init(B, A))
    }
    function te($, H) {
        const U = J();
        X(),
        E(c({
            startIndex: U
        }, $), H),
        u.emit("reInit")
    }
    function X() {
        p.dragHandler.destroy(),
        p.animation.stop(),
        p.eventStore.clear(),
        p.translate.clear(),
        p.slideLooper.clear(),
        p.resizeHandler.destroy(),
        p.slidesHandler.destroy(),
        p.slidesInView.destroy(),
        o.destroy(),
        f.clear(),
        s.clear()
    }
    function be() {
        w || (w = !0,
        f.clear(),
        X(),
        u.emit("destroy"))
    }
    function W($, H, U) {
        !D.active || w || (p.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : D.duration),
        p.scrollTo.index($, U || 0))
    }
    function Pe($) {
        const H = p.index.add(1).get();
        W(H, $, -1)
    }
    function Be($) {
        const H = p.index.add(-1).get();
        W(H, $, 1)
    }
    function ge() {
        return p.index.add(1).get() !== J()
    }
    function le() {
        return p.index.add(-1).get() !== J()
    }
    function Y() {
        return p.scrollSnapList
    }
    function Z() {
        return p.scrollProgress.get(p.location.get())
    }
    function J() {
        return p.index.get()
    }
    function T() {
        return p.indexPrevious.get()
    }
    function R() {
        return p.slidesInView.get()
    }
    function de() {
        return p.slidesInView.get(!1)
    }
    function ke() {
        return q
    }
    function re() {
        return p
    }
    function ye() {
        return r
    }
    function x() {
        return y
    }
    function Te() {
        return S
    }
    const B = {
        canScrollNext: ge,
        canScrollPrev: le,
        containerNode: x,
        internalEngine: re,
        destroy: be,
        off: _,
        on: h,
        emit: v,
        plugins: ke,
        previousScrollSnap: T,
        reInit: P,
        rootNode: ye,
        scrollNext: Pe,
        scrollPrev: Be,
        scrollProgress: Z,
        scrollSnapList: Y,
        scrollTo: W,
        selectedScrollSnap: J,
        slideNodes: Te,
        slidesInView: R,
        slidesNotInView: de
    };
    return E(e, l),
    setTimeout(()=>u.emit("init"), 0),
    B
}
Ye.animationRealms = [];
Ye.globalOptions = void 0;
const {isNaN: pl} = $n;
function Mt(r, e, l) {
    const n = r.slice();
    return n[23] = e[l],
    n
}
function Ct(r) {
    let e, l = ve(r[1]), n = [];
    for (let t = 0; t < l.length; t += 1)
        n[t] = At(Mt(r, l, t));
    return {
        c() {
            for (let t = 0; t < n.length; t += 1)
                n[t].c();
            e = O()
        },
        l(t) {
            for (let i = 0; i < n.length; i += 1)
                n[i].l(t);
            e = O()
        },
        m(t, i) {
            for (let o = 0; o < n.length; o += 1)
                n[o] && n[o].m(t, i);
            M(t, e, i)
        },
        p(t, i) {
            if (i & 2) {
                l = ve(t[1]);
                let o;
                for (o = 0; o < l.length; o += 1) {
                    const f = Mt(t, l, o);
                    n[o] ? n[o].p(f, i) : (n[o] = At(f),
                    n[o].c(),
                    n[o].m(e.parentNode, e))
                }
                for (; o < n.length; o += 1)
                    n[o].d(1);
                n.length = l.length
            }
        },
        d(t) {
            t && g(e),
            He(n, t)
        }
    }
}
function Nt(r) {
    let e, l, n;
    return {
        c() {
            e = j("source"),
            this.h()
        },
        l(t) {
            e = F(t, "SOURCE", {
                type: !0,
                src: !0
            }),
            this.h()
        },
        h() {
            L(e, "type", l = r[23].format),
            Lt(e.src, n = r[23].url) || L(e, "src", n)
        },
        m(t, i) {
            M(t, e, i)
        },
        p(t, i) {
            i & 2 && l !== (l = t[23].format) && L(e, "type", l),
            i & 2 && !Lt(e.src, n = t[23].url) && L(e, "src", n)
        },
        d(t) {
            t && g(e)
        }
    }
}
function At(r) {
    let e, l = r[23]?.url && Nt(r);
    return {
        c() {
            l && l.c(),
            e = O()
        },
        l(n) {
            l && l.l(n),
            e = O()
        },
        m(n, t) {
            l && l.m(n, t),
            M(n, e, t)
        },
        p(n, t) {
            n[23]?.url ? l ? l.p(n, t) : (l = Nt(n),
            l.c(),
            l.m(e.parentNode, e)) : l && (l.d(1),
            l = null)
        },
        d(n) {
            n && g(e),
            l && l.d(n)
        }
    }
}
function hl(r) {
    let e;
    return {
        c() {
            e = ht("path"),
            this.h()
        },
        l(l) {
            e = gt(l, "path", {
                fill: !0,
                d: !0
            }),
            V(e).forEach(g),
            this.h()
        },
        h() {
            L(e, "fill", "currentColor"),
            L(e, "d", "M2 0a2 2 0 0 0-2 2v16a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2Zm10 0a2 2 0 0 0-2 2v16a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2Z")
        },
        m(l, n) {
            M(l, e, n)
        },
        d(l) {
            l && g(e)
        }
    }
}
function gl(r) {
    let e;
    return {
        c() {
            e = ht("path"),
            this.h()
        },
        l(l) {
            e = gt(l, "path", {
                fill: !0,
                d: !0
            }),
            V(e).forEach(g),
            this.h()
        },
        h() {
            L(e, "fill", "currentColor"),
            L(e, "d", "M13.35 8.64c.87.67.87 2.05 0 2.72L2.5 19.68c-1.05.8-2.5 0-2.5-1.36V1.68C0 .3 1.45-.48 2.5.32l10.85 8.32Z")
        },
        m(l, n) {
            M(l, e, n)
        },
        d(l) {
            l && g(e)
        }
    }
}
function bl(r) {
    let e, l, n = !0, t = !1, i, o, f, s, u, d, c, a, m, h, _, v, P, w, p = r[1] && Ct(r);
    function N() {
        cancelAnimationFrame(i),
        l.paused || (i = Sn(N),
        t = !0),
        r[20].call(l)
    }
    function D(y, S) {
        return y[12] ? gl : hl
    }
    let A = D(r)
      , q = A(r);
    return {
        c() {
            e = j("div"),
            l = j("video"),
            p && p.c(),
            o = we(),
            f = j("div"),
            s = j("p"),
            u = Ne(r[13]),
            d = we(),
            c = j("button"),
            a = ht("svg"),
            q.c(),
            h = we(),
            _ = j("div"),
            v = j("span"),
            this.h()
        },
        l(y) {
            e = F(y, "DIV", {
                class: !0
            });
            var S = V(e);
            l = F(S, "VIDEO", {
                width: !0,
                height: !0,
                preload: !0,
                poster: !0,
                class: !0
            });
            var I = V(l);
            p && p.l(I),
            I.forEach(g),
            o = Ie(S),
            f = F(S, "DIV", {
                class: !0
            });
            var z = V(f);
            s = F(z, "P", {
                class: !0
            });
            var E = V(s);
            u = Ae(E, r[13]),
            E.forEach(g),
            d = Ie(z),
            c = F(z, "BUTTON", {
                class: !0,
                title: !0,
                tabindex: !0
            });
            var te = V(c);
            a = gt(te, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                class: !0
            });
            var X = V(a);
            q.l(X),
            X.forEach(g),
            te.forEach(g),
            h = Ie(z),
            _ = F(z, "DIV", {
                class: !0,
                role: !0
            });
            var be = V(_);
            v = F(be, "SPAN", {
                class: !0
            }),
            V(v).forEach(g),
            be.forEach(g),
            z.forEach(g),
            S.forEach(g),
            this.h()
        },
        h() {
            L(l, "width", r[2]),
            L(l, "height", r[3]),
            l.loop = r[5],
            l.playsInline = r[6],
            l.autoplay = r[8],
            L(l, "preload", r[7]),
            l.muted = r[4],
            L(l, "poster", r[14]),
            L(l, "class", "svelte-jiqqi1"),
            r[10] === void 0 && ln(()=>r[21].call(l)),
            L(s, "class", "time svelte-jiqqi1"),
            L(a, "width", "14"),
            L(a, "height", "20"),
            L(a, "viewBox", "0 0 14 20"),
            L(a, "fill", "none"),
            L(a, "class", "svelte-jiqqi1"),
            L(c, "class", "icon svelte-jiqqi1"),
            L(c, "title", m = (r[12] ? "Resume" : "Pause") + " video"),
            L(c, "tabindex", "-1"),
            L(v, "class", "svelte-jiqqi1"),
            Fe(v, "--width", r[9] / r[10] * 100),
            L(_, "class", "progress svelte-jiqqi1"),
            L(_, "role", "presentation"),
            L(f, "class", "controls svelte-jiqqi1"),
            L(e, "class", "video svelte-jiqqi1")
        },
        m(y, S) {
            M(y, e, S),
            C(e, l),
            p && p.m(l, null),
            r[18](l),
            C(e, o),
            C(e, f),
            C(f, s),
            C(s, u),
            C(f, d),
            C(f, c),
            C(c, a),
            q.m(a, null),
            C(f, h),
            C(f, _),
            C(_, v),
            r[22](_),
            P || (w = [Oe(l, "play", r[19]), Oe(l, "pause", r[19]), Oe(l, "timeupdate", N), Oe(l, "durationchange", r[21]), Oe(l, "click", r[15]), Oe(c, "click", r[15]), Oe(_, "click", r[16])],
            P = !0)
        },
        p(y, [S]) {
            y[1] ? p ? p.p(y, S) : (p = Ct(y),
            p.c(),
            p.m(l, null)) : p && (p.d(1),
            p = null),
            S & 4 && L(l, "width", y[2]),
            S & 8 && L(l, "height", y[3]),
            S & 32 && (l.loop = y[5]),
            S & 64 && (l.playsInline = y[6]),
            S & 256 && (l.autoplay = y[8]),
            S & 128 && L(l, "preload", y[7]),
            S & 16 && (l.muted = y[4]),
            S & 16384 && L(l, "poster", y[14]),
            S & 4096 && n !== (n = y[12]) && l[n ? "pause" : "play"](),
            !t && S & 512 && !pl(y[9]) && (l.currentTime = y[9]),
            t = !1,
            S & 8192 && Re(u, y[13]),
            A !== (A = D(y)) && (q.d(1),
            q = A(y),
            q && (q.c(),
            q.m(a, null))),
            S & 4096 && m !== (m = (y[12] ? "Resume" : "Pause") + " video") && L(c, "title", m),
            S & 1536 && Fe(v, "--width", y[9] / y[10] * 100)
        },
        i: Ce,
        o: Ce,
        d(y) {
            y && g(e),
            p && p.d(),
            r[18](null),
            q.d(),
            r[22](null),
            P = !1,
            rn(w)
        }
    }
}
function kl(r, e, l) {
    let n, t, {sources: i} = e, {width: o} = e, {height: f} = e, {poster: s=void 0} = e, {muted: u=!0} = e, {loop: d=!0} = e, {playsinline: c=!0} = e, {preload: a="none"} = e, {autoplay: m=!1} = e, {videoEl: h=null} = e, _, v, P, w = !1;
    const p = ()=>{
        w ? h.play() : h.pause()
    }
      , N = I=>{
        const z = P.getBoundingClientRect();
        l(9, _ = (I.clientX - z.left) / z.width * v)
    }
    ;
    function D(I) {
        Qe[I ? "unshift" : "push"](()=>{
            h = I,
            l(0, h)
        }
        )
    }
    function A() {
        w = this.paused,
        l(12, w)
    }
    function q() {
        _ = this.currentTime,
        l(9, _)
    }
    function y() {
        v = this.duration,
        l(10, v)
    }
    function S(I) {
        Qe[I ? "unshift" : "push"](()=>{
            P = I,
            l(11, P)
        }
        )
    }
    return r.$$set = I=>{
        "sources"in I && l(1, i = I.sources),
        "width"in I && l(2, o = I.width),
        "height"in I && l(3, f = I.height),
        "poster"in I && l(17, s = I.poster),
        "muted"in I && l(4, u = I.muted),
        "loop"in I && l(5, d = I.loop),
        "playsinline"in I && l(6, c = I.playsinline),
        "preload"in I && l(7, a = I.preload),
        "autoplay"in I && l(8, m = I.autoplay),
        "videoEl"in I && l(0, h = I.videoEl)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 131072 && l(14, n = s ? `${s}?w=1024&auto=format&q=60` : null),
        r.$$.dirty & 512 && l(13, t = isNaN(_) ? "0:00" : `${Math.floor(_ / 60)}:${String(Math.floor(_ % 60)).padStart(2, "0")}`)
    }
    ,
    [h, i, o, f, u, d, c, a, m, _, v, P, w, t, n, p, N, s, D, A, q, y, S]
}
class vl extends _e {
    constructor(e) {
        super(),
        pe(this, e, kl, bl, ae, {
            sources: 1,
            width: 2,
            height: 3,
            poster: 17,
            muted: 4,
            loop: 5,
            playsinline: 6,
            preload: 7,
            autoplay: 8,
            videoEl: 0
        })
    }
}
function Vt(r, e) {
    var l = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        e && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
        })),
        l.push.apply(l, n)
    }
    return l
}
function $t(r) {
    for (var e = 1; e < arguments.length; e++) {
        var l = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Vt(Object(l), !0).forEach(function(n) {
            yl(r, n, l[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : Vt(Object(l)).forEach(function(n) {
            Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(l, n))
        })
    }
    return r
}
function yl(r, e, l) {
    return e = wl(e),
    e in r ? Object.defineProperty(r, e, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = l,
    r
}
function wl(r) {
    var e = Il(r, "string");
    return typeof e == "symbol" ? e : String(e)
}
function Il(r, e) {
    if (typeof r != "object" || r === null)
        return r;
    var l = r[Symbol.toPrimitive];
    if (l !== void 0) {
        var n = l.call(r, e || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(r)
}
function ot(r) {
    return r._type === "span" && "text"in r && typeof r.text == "string" && (typeof r.marks > "u" || Array.isArray(r.marks) && r.marks.every(e=>typeof e == "string"))
}
function cn(r) {
    return typeof r._type == "string" && r._type[0] !== "@" && (!("markDefs"in r) || !r.markDefs || Array.isArray(r.markDefs) && r.markDefs.every(e=>typeof e._key == "string")) && "children"in r && Array.isArray(r.children) && r.children.every(e=>typeof e == "object" && "_type"in e)
}
function an(r) {
    return cn(r) && "listItem"in r && typeof r.listItem == "string" && (typeof r.level > "u" || typeof r.level == "number")
}
function dn(r) {
    return r._type === "@list"
}
function mn(r) {
    return r._type === "@span"
}
function _n(r) {
    return r._type === "@text"
}
const jt = ["strong", "em", "code", "underline", "strike-through"];
function El(r, e, l) {
    if (!ot(r) || !r.marks)
        return [];
    if (!r.marks.length)
        return [];
    const n = r.marks.slice()
      , t = {};
    return n.forEach(i=>{
        t[i] = 1;
        for (let o = e + 1; o < l.length; o++) {
            const f = l[o];
            if (f && ot(f) && Array.isArray(f.marks) && f.marks.indexOf(i) !== -1)
                t[i]++;
            else
                break
        }
    }
    ),
    n.sort((i,o)=>Sl(t, i, o))
}
function Sl(r, e, l) {
    const n = r[e]
      , t = r[l];
    if (n !== t)
        return t - n;
    const i = jt.indexOf(e)
      , o = jt.indexOf(l);
    return i !== o ? i - o : e.localeCompare(l)
}
function it(r) {
    var e;
    const {children: l, markDefs: n=[]} = r;
    if (!l || !l.length)
        return [];
    const t = l.map(El)
      , i = {
        _type: "@span",
        children: [],
        markType: "<unknown>"
    };
    let o = [i];
    for (let f = 0; f < l.length; f++) {
        const s = l[f];
        if (!s)
            continue;
        const u = t[f] || [];
        let d = 1;
        if (o.length > 1)
            for (d; d < o.length; d++) {
                const a = ((e = o[d]) == null ? void 0 : e.markKey) || ""
                  , m = u.indexOf(a);
                if (m === -1)
                    break;
                u.splice(m, 1)
            }
        o = o.slice(0, d);
        let c = o[o.length - 1];
        if (c) {
            for (const a of u) {
                const m = n.find(v=>v._key === a)
                  , h = m ? m._type : a
                  , _ = {
                    _type: "@span",
                    _key: s._key,
                    children: [],
                    markDef: m,
                    markType: h,
                    markKey: a
                };
                c.children.push(_),
                o.push(_),
                c = _
            }
            if (ot(s)) {
                const a = s.text.split(`
`);
                for (let m = a.length; m-- > 1; )
                    a.splice(m, 0, `
`);
                c.children = c.children.concat(a.map(m=>({
                    _type: "@text",
                    text: m
                })))
            } else
                c.children = c.children.concat(s)
        }
    }
    return i.children
}
function Tl(r, e) {
    const l = [];
    let n;
    for (let t = 0; t < r.length; t++) {
        const i = r[t];
        if (i) {
            if (!an(i)) {
                l.push(i),
                n = void 0;
                continue
            }
            if (!n) {
                n = nt(i, t, e),
                l.push(n);
                continue
            }
            if (Pl(i, n)) {
                n.children.push(i);
                continue
            }
            if ((i.level || 1) > n.level) {
                const o = nt(i, t, e);
                if (e === "html") {
                    const f = n.children[n.children.length - 1]
                      , s = $t($t({}, f), {}, {
                        children: [...f.children, o]
                    });
                    n.children[n.children.length - 1] = s
                } else
                    n.children.push(o);
                n = o;
                continue
            }
            if ((i.level || 1) < n.level) {
                const o = l[l.length - 1]
                  , f = o && pt(o, i);
                if (f) {
                    n = f,
                    n.children.push(i);
                    continue
                }
                n = nt(i, t, e),
                l.push(n);
                continue
            }
            if (i.listItem !== n.listItem) {
                const o = l[l.length - 1]
                  , f = o && pt(o, {
                    level: i.level || 1
                });
                if (f && f.listItem === i.listItem) {
                    n = f,
                    n.children.push(i);
                    continue
                } else {
                    n = nt(i, t, e),
                    l.push(n);
                    continue
                }
            }
            console.warn("Unknown state encountered for block", i),
            l.push(i)
        }
    }
    return l
}
function Pl(r, e) {
    return (r.level || 1) === e.level && r.listItem === e.listItem
}
function nt(r, e, l) {
    return {
        _type: "@list",
        _key: "".concat(r._key || "".concat(e), "-parent"),
        mode: l,
        level: r.level || 1,
        listItem: r.listItem,
        children: [r]
    }
}
function pt(r, e) {
    const l = e.level || 1
      , n = e.listItem || "normal"
      , t = typeof e.listItem == "string";
    if (dn(r) && (r.level || 1) === l && t && (r.listItem || "normal") === n)
        return r;
    if (!("children"in r))
        return;
    const i = r.children[r.children.length - 1];
    return i && !ot(i) ? pt(i, e) : void 0
}
function pn(r) {
    let e = "";
    return r.children.forEach(l=>{
        _n(l) ? e += l.text : mn(l) && (e += pn(l))
    }
    ),
    e
}
const Ll = "html";
function hn() {
    return Math.random().toFixed(5).split(".")[1]
}
function Dl(r) {
    return {
        _key: r._key || hn(),
        ...r
    }
}
function Bl(r) {
    return {
        _key: r._key || hn(),
        ...r,
        ...r._type === "block" && Array.isArray(r.children) ? {
            children: r.children.map(Dl)
        } : {}
    }
}
function Ol(r) {
    let e;
    const l = r[3].default
      , n = se(l, r, r[2], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 4) && fe(n, l, t, t[2], e ? ce(l, t[2], i, null) : ue(t[2]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Ml(r) {
    let e, l;
    const n = r[3].default
      , t = se(n, r, r[2], null);
    return {
        c() {
            e = j("del"),
            t && t.c()
        },
        l(i) {
            e = F(i, "DEL", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 4) && fe(t, n, i, i[2], l ? ce(n, i[2], o, null) : ue(i[2]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Cl(r) {
    let e, l;
    const n = r[3].default
      , t = se(n, r, r[2], null);
    return {
        c() {
            e = j("span"),
            t && t.c(),
            this.h()
        },
        l(i) {
            e = F(i, "SPAN", {
                style: !0
            });
            var o = V(e);
            t && t.l(o),
            o.forEach(g),
            this.h()
        },
        h() {
            Fe(e, "text-decoration", "underline")
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 4) && fe(t, n, i, i[2], l ? ce(n, i[2], o, null) : ue(i[2]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Nl(r) {
    let e, l;
    const n = r[3].default
      , t = se(n, r, r[2], null);
    return {
        c() {
            e = j("code"),
            t && t.c()
        },
        l(i) {
            e = F(i, "CODE", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 4) && fe(t, n, i, i[2], l ? ce(n, i[2], o, null) : ue(i[2]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Al(r) {
    let e, l;
    const n = r[3].default
      , t = se(n, r, r[2], null);
    return {
        c() {
            e = j("em"),
            t && t.c()
        },
        l(i) {
            e = F(i, "EM", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 4) && fe(t, n, i, i[2], l ? ce(n, i[2], o, null) : ue(i[2]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Vl(r) {
    let e, l;
    const n = r[3].default
      , t = se(n, r, r[2], null);
    return {
        c() {
            e = j("strong"),
            t && t.c()
        },
        l(i) {
            e = F(i, "STRONG", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 4) && fe(t, n, i, i[2], l ? ce(n, i[2], o, null) : ue(i[2]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function $l(r) {
    let e, l, n, t;
    const i = [Vl, Al, Nl, Cl, Ml, Ol]
      , o = [];
    function f(s, u) {
        return s[0] === "strong" ? 0 : s[0] === "em" ? 1 : s[0] === "code" ? 2 : s[0] === "underline" ? 3 : s[0] === "strike-through" ? 4 : 5
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function jl(r, e, l) {
    let n, {$$slots: t={}, $$scope: i} = e, {portableText: o} = e;
    return r.$$set = f=>{
        "portableText"in f && l(1, o = f.portableText),
        "$$scope"in f && l(2, i = f.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 2 && l(0, {markType: n} = o, n)
    }
    ,
    [n, o, i, t]
}
class ze extends _e {
    constructor(e) {
        super(),
        pe(this, e, jl, $l, ae, {
            portableText: 1
        })
    }
}
function Fl(r) {
    let e;
    const l = r[4].default
      , n = se(l, r, r[3], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 8) && fe(n, l, t, t[3], e ? ce(l, t[3], i, null) : ue(t[3]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Rl(r) {
    let e, l;
    const n = r[4].default
      , t = se(n, r, r[3], null);
    return {
        c() {
            e = j("a"),
            t && t.c(),
            this.h()
        },
        l(i) {
            e = F(i, "A", {
                href: !0
            });
            var o = V(e);
            t && t.l(o),
            o.forEach(g),
            this.h()
        },
        h() {
            L(e, "href", r[0])
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 8) && fe(t, n, i, i[3], l ? ce(n, i[3], o, null) : ue(i[3]), null),
            (!l || o & 1) && L(e, "href", i[0])
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function ql(r) {
    let e, l, n, t;
    const i = [Rl, Fl]
      , o = [];
    function f(s, u) {
        return typeof s[0] == "string" ? 0 : 1
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function Hl(r, e, l) {
    let n, t, {$$slots: i={}, $$scope: o} = e, {portableText: f} = e;
    return r.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, o = s.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 2 && l(2, {value: n} = f, n),
        r.$$.dirty & 4 && l(0, t = n?.href || n?.url || n?.link || n?.value)
    }
    ,
    [t, f, n, o, i]
}
class zl extends _e {
    constructor(e) {
        super(),
        pe(this, e, Hl, ql, ae, {
            portableText: 1
        })
    }
}
function Ul(r) {
    let e;
    const l = r[4].default
      , n = se(l, r, r[3], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 8) && fe(n, l, t, t[3], e ? ce(l, t[3], i, null) : ue(t[3]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Gl(r) {
    let e, l;
    const n = r[4].default
      , t = se(n, r, r[3], null);
    return {
        c() {
            e = j("p"),
            t && t.c()
        },
        l(i) {
            e = F(i, "P", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 8) && fe(t, n, i, i[3], l ? ce(n, i[3], o, null) : ue(i[3]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Kl(r) {
    let e = r[0], l, n, t = r[0] && at(r);
    return {
        c() {
            t && t.c(),
            l = O()
        },
        l(i) {
            t && t.l(i),
            l = O()
        },
        m(i, o) {
            t && t.m(i, o),
            M(i, l, o),
            n = !0
        },
        p(i, o) {
            i[0] ? e ? ae(e, i[0]) ? (t.d(1),
            t = at(i),
            e = i[0],
            t.c(),
            t.m(l.parentNode, l)) : t.p(i, o) : (t = at(i),
            e = i[0],
            t.c(),
            t.m(l.parentNode, l)) : e && (t.d(1),
            t = null,
            e = i[0])
        },
        i(i) {
            n || (b(t, i),
            n = !0)
        },
        o(i) {
            k(t, i),
            n = !1
        },
        d(i) {
            i && g(l),
            t && t.d(i)
        }
    }
}
function at(r) {
    let e, l;
    const n = r[4].default
      , t = se(n, r, r[3], null);
    return {
        c() {
            e = j(r[0]),
            t && t.c()
        },
        l(i) {
            e = F(i, (r[0] || "null").toUpperCase(), {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 8) && fe(t, n, i, i[3], l ? ce(n, i[3], o, null) : ue(i[3]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Ql(r) {
    let e, l, n, t, i;
    const o = [Kl, Gl, Ul]
      , f = [];
    function s(u, d) {
        return d & 1 && (e = null),
        e == null && (e = !!["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(u[0])),
        e ? 0 : u[0] === "normal" ? 1 : 2
    }
    return l = s(r, -1),
    n = f[l] = o[l](r),
    {
        c() {
            n.c(),
            t = O()
        },
        l(u) {
            n.l(u),
            t = O()
        },
        m(u, d) {
            f[l].m(u, d),
            M(u, t, d),
            i = !0
        },
        p(u, [d]) {
            let c = l;
            l = s(u, d),
            l === c ? f[l].p(u, d) : (oe(),
            k(f[c], 1, 1, ()=>{
                f[c] = null
            }
            ),
            ie(),
            n = f[l],
            n ? n.p(u, d) : (n = f[l] = o[l](u),
            n.c()),
            b(n, 1),
            n.m(t.parentNode, t))
        },
        i(u) {
            i || (b(n),
            i = !0)
        },
        o(u) {
            k(n),
            i = !1
        },
        d(u) {
            u && g(t),
            f[l].d(u)
        }
    }
}
function Xl(r, e, l) {
    let n, t, {$$slots: i={}, $$scope: o} = e, {portableText: f} = e;
    return r.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, o = s.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 2 && l(2, {value: n} = f, n),
        r.$$.dirty & 4 && l(0, t = n.style || "normal")
    }
    ,
    [t, f, n, o, i]
}
class Me extends _e {
    constructor(e) {
        super(),
        pe(this, e, Xl, Ql, ae, {
            portableText: 1
        })
    }
}
function Zl(r) {
    let e, l;
    const n = r[4].default
      , t = se(n, r, r[3], null);
    return {
        c() {
            e = j("ul"),
            t && t.c()
        },
        l(i) {
            e = F(i, "UL", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 8) && fe(t, n, i, i[3], l ? ce(n, i[3], o, null) : ue(i[3]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Wl(r) {
    let e, l;
    const n = r[4].default
      , t = se(n, r, r[3], null);
    return {
        c() {
            e = j("ol"),
            t && t.c()
        },
        l(i) {
            e = F(i, "OL", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, o) {
            t && t.p && (!l || o & 8) && fe(t, n, i, i[3], l ? ce(n, i[3], o, null) : ue(i[3]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function Yl(r) {
    let e, l, n, t;
    const i = [Wl, Zl]
      , o = [];
    function f(s, u) {
        return s[0] === "number" ? 0 : 1
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function Jl(r, e, l) {
    let n, t, {$$slots: i={}, $$scope: o} = e, {portableText: f} = e;
    return r.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, o = s.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 2 && l(2, {value: n} = f, n),
        r.$$.dirty & 4 && l(0, {listItem: t} = n, t)
    }
    ,
    [t, f, n, o, i]
}
class dt extends _e {
    constructor(e) {
        super(),
        pe(this, e, Jl, Yl, ae, {
            portableText: 1
        })
    }
}
function xl(r) {
    let e, l;
    const n = r[1].default
      , t = se(n, r, r[0], null);
    return {
        c() {
            e = j("li"),
            t && t.c()
        },
        l(i) {
            e = F(i, "LI", {});
            var o = V(e);
            t && t.l(o),
            o.forEach(g)
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, [o]) {
            t && t.p && (!l || o & 1) && fe(t, n, i, i[0], l ? ce(n, i[0], o, null) : ue(i[0]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function er(r, e, l) {
    let {$$slots: n={}, $$scope: t} = e;
    return r.$$set = i=>{
        "$$scope"in i && l(0, t = i.$$scope)
    }
    ,
    [t, n]
}
class mt extends _e {
    constructor(e) {
        super(),
        pe(this, e, er, xl, ae, {})
    }
}
function tr(r) {
    let e;
    return {
        c() {
            e = j("br")
        },
        l(l) {
            e = F(l, "BR", {})
        },
        m(l, n) {
            M(l, e, n)
        },
        p: Ce,
        i: Ce,
        o: Ce,
        d(l) {
            l && g(e)
        }
    }
}
class nr extends _e {
    constructor(e) {
        super(),
        pe(this, e, null, tr, ae, {})
    }
}
function lr(r) {
    let e;
    const l = r[1].default
      , n = se(l, r, r[0], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, [i]) {
            n && n.p && (!e || i & 1) && fe(n, l, t, t[0], e ? ce(l, t[0], i, null) : ue(t[0]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function rr(r, e, l) {
    let {$$slots: n={}, $$scope: t} = e;
    return r.$$set = i=>{
        "$$scope"in i && l(0, t = i.$$scope)
    }
    ,
    [t, n]
}
class or extends _e {
    constructor(e) {
        super(),
        pe(this, e, rr, lr, ae, {})
    }
}
const ir = {
    marks: {
        "strike-through": ze,
        code: ze,
        em: ze,
        strong: ze,
        underline: ze,
        link: zl
    },
    block: {
        blockquote: Me,
        h1: Me,
        h2: Me,
        h3: Me,
        h4: Me,
        h5: Me,
        h6: Me,
        normal: Me
    },
    list: {
        bullet: dt,
        number: dt
    },
    listItem: {
        bullet: mt,
        number: mt
    },
    types: {},
    hardBreak: nr,
    unknownBlockStyle: Me,
    unknownList: dt,
    unknownListItem: mt,
    unknownMark: ze,
    unknownType: or
};
function sr(r, e={}) {
    return {
        ...r,
        ...e,
        block: Ke(r, e, "block"),
        list: Ke(r, e, "list"),
        listItem: Ke(r, e, "listItem"),
        marks: Ke(r, e, "marks"),
        types: Ke(r, e, "types")
    }
}
function Ke(r, e, l) {
    const n = e[l]
      , t = r[l];
    return typeof n == "function" || n && typeof t == "function" ? n : n ? {
        ...t,
        ...n
    } : t
}
function fr(r) {
    let e;
    const l = r[7].default
      , n = se(l, r, r[8], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 256) && fe(n, l, t, t[8], e ? ce(l, t[8], i, null) : ue(t[8]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function ur(r) {
    let e, l, n;
    var t = r[0] || r[1].unknownBlockStyle;
    function i(o, f) {
        return {
            props: {
                portableText: o[2],
                $$slots: {
                    default: [fr]
                },
                $$scope: {
                    ctx: o
                }
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, [f]) {
            if (f & 3 && t !== (t = o[0] || o[1].unknownBlockStyle)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 4 && (s.portableText = o[2]),
                f & 256 && (s.$$scope = {
                    dirty: f,
                    ctx: o
                }),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function cr(r, e, l) {
    let n, t, i, o, {$$slots: f={}, $$scope: s} = e, {global: u} = e, {node: d} = e, {indexInParent: c} = e;
    return r.$$set = a=>{
        "global"in a && l(3, u = a.global),
        "node"in a && l(4, d = a.node),
        "indexInParent"in a && l(5, c = a.indexInParent),
        "$$scope"in a && l(8, s = a.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 8 && l(1, {components: n} = u, n),
        r.$$.dirty & 16 && l(6, {style: t="normal"} = d, t),
        r.$$.dirty & 66 && l(0, i = typeof n.block == "function" ? n.block : n.block[t]),
        r.$$.dirty & 73 && (i || u.missingComponentHandler(t, "blockStyle")),
        r.$$.dirty & 56 && l(2, o = {
            global: u,
            indexInParent: c,
            value: d
        })
    }
    ,
    [i, n, o, u, d, c, t, f, s]
}
class ar extends _e {
    constructor(e) {
        super(),
        pe(this, e, cr, ur, ae, {
            global: 3,
            node: 4,
            indexInParent: 5
        })
    }
}
function dr(r) {
    let e, l, n;
    var t = r[0] || r[1].unknownType;
    function i(o, f) {
        return {
            props: {
                portableText: o[2]
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, [f]) {
            if (f & 3 && t !== (t = o[0] || o[1].unknownType)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 4 && (s.portableText = o[2]),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function mr(r, e, l) {
    let n, t, i, o, {global: f} = e, {node: s} = e, {parentBlock: u} = e, {indexInParent: d} = e, {isInline: c=!1} = e;
    return r.$$set = a=>{
        "global"in a && l(3, f = a.global),
        "node"in a && l(4, s = a.node),
        "parentBlock"in a && l(5, u = a.parentBlock),
        "indexInParent"in a && l(6, d = a.indexInParent),
        "isInline"in a && l(7, c = a.isInline)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 8 && l(1, {components: n} = f, n),
        r.$$.dirty & 16 && l(8, {_type: t} = s, t),
        r.$$.dirty & 258 && l(0, i = n.types[t]),
        r.$$.dirty & 265 && (i || f.missingComponentHandler(t, "block")),
        r.$$.dirty & 248 && l(2, o = {
            global: f,
            value: s,
            indexInParent: d,
            parentBlock: u,
            isInline: c
        })
    }
    ,
    [i, n, o, f, s, u, d, c, t]
}
class _r extends _e {
    constructor(e) {
        super(),
        pe(this, e, mr, dr, ae, {
            global: 3,
            node: 4,
            parentBlock: 5,
            indexInParent: 6,
            isInline: 7
        })
    }
}
function pr(r) {
    let e;
    const l = r[8].default
      , n = se(l, r, r[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 512) && fe(n, l, t, t[9], e ? ce(l, t[9], i, null) : ue(t[9]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function hr(r) {
    let e, l, n;
    var t = r[0] || r[1].unknownList;
    function i(o, f) {
        return {
            props: {
                portableText: o[2],
                $$slots: {
                    default: [pr]
                },
                $$scope: {
                    ctx: o
                }
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, [f]) {
            if (f & 3 && t !== (t = o[0] || o[1].unknownList)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 4 && (s.portableText = o[2]),
                f & 512 && (s.$$scope = {
                    dirty: f,
                    ctx: o
                }),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function gr(r, e, l) {
    let n, t, i, o, f, {$$slots: s={}, $$scope: u} = e, {global: d} = e, {indexInParent: c} = e, {node: a} = e;
    return r.$$set = m=>{
        "global"in m && l(3, d = m.global),
        "indexInParent"in m && l(4, c = m.indexInParent),
        "node"in m && l(5, a = m.node),
        "$$scope"in m && l(9, u = m.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 8 && l(1, {components: n} = d, n),
        r.$$.dirty & 32 && l(6, {listItem: t} = a, t),
        r.$$.dirty & 66 && l(7, i = typeof n.list == "function" ? n.list : n.list[t]),
        r.$$.dirty & 128 && l(0, o = i),
        r.$$.dirty & 73 && (o || d.missingComponentHandler(t, "listStyle")),
        r.$$.dirty & 56 && l(2, f = {
            global: d,
            value: a,
            indexInParent: c
        })
    }
    ,
    [o, n, f, d, c, a, t, i, s, u]
}
class br extends _e {
    constructor(e) {
        super(),
        pe(this, e, gr, hr, ae, {
            global: 3,
            indexInParent: 4,
            node: 5
        })
    }
}
function kr(r) {
    let e;
    const l = r[8].default
      , n = se(l, r, r[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 512) && fe(n, l, t, t[9], e ? ce(l, t[9], i, null) : ue(t[9]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function vr(r) {
    let e, l, n;
    var t = r[4];
    function i(o, f) {
        return {
            props: {
                portableText: {
                    ...o[3],
                    value: {
                        ...o[0],
                        listItem: void 0
                    }
                },
                $$slots: {
                    default: [yr]
                },
                $$scope: {
                    ctx: o
                }
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, f) {
            if (f & 16 && t !== (t = o[4])) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 9 && (s.portableText = {
                    ...o[3],
                    value: {
                        ...o[0],
                        listItem: void 0
                    }
                }),
                f & 512 && (s.$$scope = {
                    dirty: f,
                    ctx: o
                }),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function yr(r) {
    let e;
    const l = r[8].default
      , n = se(l, r, r[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 512) && fe(n, l, t, t[9], e ? ce(l, t[9], i, null) : ue(t[9]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function wr(r) {
    let e, l, n, t;
    const i = [vr, kr]
      , o = [];
    function f(s, u) {
        return s[4] ? 0 : 1
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, u) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function Ir(r) {
    let e, l, n;
    var t = r[2] || r[1].unknownListItem;
    function i(o, f) {
        return {
            props: {
                portableText: o[3],
                $$slots: {
                    default: [wr]
                },
                $$scope: {
                    ctx: o
                }
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, [f]) {
            if (f & 6 && t !== (t = o[2] || o[1].unknownListItem)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 8 && (s.portableText = o[3]),
                f & 537 && (s.$$scope = {
                    dirty: f,
                    ctx: o
                }),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function Er(r, e, l) {
    let n, t, i, o, f, {$$slots: s={}, $$scope: u} = e, {global: d} = e, {indexInParent: c} = e, {node: a} = e;
    return r.$$set = m=>{
        "global"in m && l(5, d = m.global),
        "indexInParent"in m && l(6, c = m.indexInParent),
        "node"in m && l(0, a = m.node),
        "$$scope"in m && l(9, u = m.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 32 && l(1, {components: n} = d, n),
        r.$$.dirty & 1 && l(7, {style: t="normal"} = a, t),
        r.$$.dirty & 130 && l(2, i = typeof n.listItem == "function" ? n.listItem : n.listItem[t]),
        r.$$.dirty & 164 && (i || d.missingComponentHandler(t, "listItemStyle")),
        r.$$.dirty & 130 && l(4, o = t !== "normal" ? n.block[t] : void 0),
        r.$$.dirty & 97 && l(3, f = {
            global: d,
            value: a,
            indexInParent: c
        })
    }
    ,
    [a, n, i, f, o, d, c, t, s, u]
}
class Sr extends _e {
    constructor(e) {
        super(),
        pe(this, e, Er, Ir, ae, {
            global: 5,
            indexInParent: 6,
            node: 0
        })
    }
}
function Tr(r) {
    let e;
    const l = r[7].default
      , n = se(l, r, r[8], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, i) {
            n && n.m(t, i),
            e = !0
        },
        p(t, i) {
            n && n.p && (!e || i & 256) && fe(n, l, t, t[8], e ? ce(l, t[8], i, null) : ue(t[8]), null)
        },
        i(t) {
            e || (b(n, t),
            e = !0)
        },
        o(t) {
            k(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Pr(r) {
    let e, l, n;
    var t = r[0] || r[1].unknownMark;
    function i(o, f) {
        return {
            props: {
                portableText: o[2],
                $$slots: {
                    default: [Tr]
                },
                $$scope: {
                    ctx: o
                }
            }
        }
    }
    return t && (e = Se(t, i(r))),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, [f]) {
            if (f & 3 && t !== (t = o[0] || o[1].unknownMark)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i(o)),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            } else if (t) {
                const s = {};
                f & 4 && (s.portableText = o[2]),
                f & 256 && (s.$$scope = {
                    dirty: f,
                    ctx: o
                }),
                e.$set(s)
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function Lr(r, e, l) {
    let n, t, i, o, {$$slots: f={}, $$scope: s} = e, {global: u} = e, {node: d} = e, {parentBlock: c} = e;
    return r.$$set = a=>{
        "global"in a && l(3, u = a.global),
        "node"in a && l(4, d = a.node),
        "parentBlock"in a && l(5, c = a.parentBlock),
        "$$scope"in a && l(8, s = a.$$scope)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 8 && l(1, {components: n} = u, n),
        r.$$.dirty & 16 && l(6, {markType: t} = d, t),
        r.$$.dirty & 66 && l(0, i = n.marks[t]),
        r.$$.dirty & 73 && (i || u.missingComponentHandler(t, "mark")),
        r.$$.dirty & 120 && l(2, o = {
            global: u,
            parentBlock: c,
            markType: t,
            value: d.markDef,
            markKey: d.markKey,
            plainTextContent: pn(d)
        })
    }
    ,
    [i, n, o, u, d, c, t, f, s]
}
class Dr extends _e {
    constructor(e) {
        super(),
        pe(this, e, Lr, Pr, ae, {
            global: 3,
            node: 4,
            parentBlock: 5
        })
    }
}
function Br(r) {
    let e;
    return {
        c() {
            e = Ne(r[0])
        },
        l(l) {
            e = Ae(l, r[0])
        },
        m(l, n) {
            M(l, e, n)
        },
        p(l, n) {
            n & 1 && Re(e, l[0])
        },
        i: Ce,
        o: Ce,
        d(l) {
            l && g(e)
        }
    }
}
function Or(r) {
    let e, l, n, t;
    const i = [Cr, Mr]
      , o = [];
    function f(s, u) {
        return typeof s[1].hardBreak == "function" ? 0 : 1
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, u) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function Mr(r) {
    let e;
    return {
        c() {
            e = Ne(r[0])
        },
        l(l) {
            e = Ae(l, r[0])
        },
        m(l, n) {
            M(l, e, n)
        },
        p(l, n) {
            n & 1 && Re(e, l[0])
        },
        i: Ce,
        o: Ce,
        d(l) {
            l && g(e)
        }
    }
}
function Cr(r) {
    let e, l, n;
    var t = r[1].hardBreak;
    function i(o, f) {
        return {}
    }
    return t && (e = Se(t, i())),
    {
        c() {
            e && G(e.$$.fragment),
            l = O()
        },
        l(o) {
            e && ee(e.$$.fragment, o),
            l = O()
        },
        m(o, f) {
            e && K(e, o, f),
            M(o, l, f),
            n = !0
        },
        p(o, f) {
            if (f & 2 && t !== (t = o[1].hardBreak)) {
                if (e) {
                    oe();
                    const s = e;
                    k(s.$$.fragment, 1, 0, ()=>{
                        Q(s, 1)
                    }
                    ),
                    ie()
                }
                t ? (e = Se(t, i()),
                G(e.$$.fragment),
                b(e.$$.fragment, 1),
                K(e, l.parentNode, l)) : e = null
            }
        },
        i(o) {
            n || (e && b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && g(l),
            e && Q(e, o)
        }
    }
}
function Nr(r) {
    let e, l, n, t;
    const i = [Or, Br]
      , o = [];
    function f(s, u) {
        return s[0] === `
` ? 0 : 1
    }
    return e = f(r),
    l = o[e] = i[e](r),
    {
        c() {
            l.c(),
            n = O()
        },
        l(s) {
            l.l(s),
            n = O()
        },
        m(s, u) {
            o[e].m(s, u),
            M(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let d = e;
            e = f(s),
            e === d ? o[e].p(s, u) : (oe(),
            k(o[d], 1, 1, ()=>{
                o[d] = null
            }
            ),
            ie(),
            l = o[e],
            l ? l.p(s, u) : (l = o[e] = i[e](s),
            l.c()),
            b(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (b(l),
            t = !0)
        },
        o(s) {
            k(l),
            t = !1
        },
        d(s) {
            s && g(n),
            o[e].d(s)
        }
    }
}
function Ar(r, e, l) {
    let n, t, {global: i} = e, {node: o} = e;
    return r.$$set = f=>{
        "global"in f && l(2, i = f.global),
        "node"in f && l(3, o = f.node)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 4 && l(1, {components: n} = i, n),
        r.$$.dirty & 8 && l(0, {text: t} = o, t)
    }
    ,
    [t, n, i, o]
}
class Vr extends _e {
    constructor(e) {
        super(),
        pe(this, e, Ar, Nr, ae, {
            global: 2,
            node: 3
        })
    }
}
function Ft(r, e, l) {
    const n = r.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Rt(r, e, l) {
    const n = r.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function qt(r, e, l) {
    const n = r.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Ht(r, e, l) {
    const n = r.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function $r(r) {
    let e, l;
    return e = new _r({
        props: {
            node: r[4],
            parentBlock: r[2],
            indexInParent: r[3],
            isInline: r[1],
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 4 && (i.parentBlock = n[2]),
            t & 8 && (i.indexInParent = n[3]),
            t & 2 && (i.isInline = n[1]),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function jr(r) {
    let e, l;
    return e = new Vr({
        props: {
            node: r[4],
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Fr(r) {
    let e, l;
    return e = new ar({
        props: {
            node: r[4],
            indexInParent: r[3],
            global: r[0],
            $$slots: {
                default: [zr]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 8 && (i.indexInParent = n[3]),
            t & 1 && (i.global = n[0]),
            t & 4113 && (i.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Rr(r) {
    let e, l;
    return e = new Dr({
        props: {
            node: r[4],
            parentBlock: r[2],
            global: r[0],
            $$slots: {
                default: [Ur]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 4 && (i.parentBlock = n[2]),
            t & 1 && (i.global = n[0]),
            t & 4117 && (i.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function qr(r) {
    let e, l;
    return e = new Sr({
        props: {
            node: r[4],
            indexInParent: r[3],
            global: r[0],
            $$slots: {
                default: [Gr]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 8 && (i.indexInParent = n[3]),
            t & 1 && (i.global = n[0]),
            t & 4113 && (i.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Hr(r) {
    let e, l;
    return e = new br({
        props: {
            node: r[4],
            indexInParent: r[3],
            global: r[0],
            $$slots: {
                default: [Kr]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.node = n[4]),
            t & 8 && (i.indexInParent = n[3]),
            t & 1 && (i.global = n[0]),
            t & 4113 && (i.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function zt(r) {
    let e, l;
    return e = new xe({
        props: {
            options: {
                parentBlock: r[4],
                node: r[6],
                isInline: !0,
                indexInParent: r[8]
            },
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.options = {
                parentBlock: n[4],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function zr(r) {
    let e, l, n = ve(it(r[4])), t = [];
    for (let o = 0; o < n.length; o += 1)
        t[o] = zt(Ft(r, n, o));
    const i = o=>k(t[o], 1, 1, ()=>{
        t[o] = null
    }
    );
    return {
        c() {
            for (let o = 0; o < t.length; o += 1)
                t[o].c();
            e = O()
        },
        l(o) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(o);
            e = O()
        },
        m(o, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(o, f);
            M(o, e, f),
            l = !0
        },
        p(o, f) {
            if (f & 17) {
                n = ve(it(o[4]));
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Ft(o, n, s);
                    t[s] ? (t[s].p(u, f),
                    b(t[s], 1)) : (t[s] = zt(u),
                    t[s].c(),
                    b(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (oe(),
                s = n.length; s < t.length; s += 1)
                    i(s);
                ie()
            }
        },
        i(o) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    b(t[f]);
                l = !0
            }
        },
        o(o) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                k(t[f]);
            l = !1
        },
        d(o) {
            o && g(e),
            He(t, o)
        }
    }
}
function Ut(r) {
    let e, l;
    return e = new xe({
        props: {
            options: {
                parentBlock: r[2],
                node: r[6],
                isInline: !0,
                indexInParent: r[8]
            },
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 20 && (i.options = {
                parentBlock: n[2],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Ur(r) {
    let e, l, n = ve(r[4].children), t = [];
    for (let o = 0; o < n.length; o += 1)
        t[o] = Ut(Rt(r, n, o));
    const i = o=>k(t[o], 1, 1, ()=>{
        t[o] = null
    }
    );
    return {
        c() {
            for (let o = 0; o < t.length; o += 1)
                t[o].c();
            e = O()
        },
        l(o) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(o);
            e = O()
        },
        m(o, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(o, f);
            M(o, e, f),
            l = !0
        },
        p(o, f) {
            if (f & 21) {
                n = ve(o[4].children);
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Rt(o, n, s);
                    t[s] ? (t[s].p(u, f),
                    b(t[s], 1)) : (t[s] = Ut(u),
                    t[s].c(),
                    b(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (oe(),
                s = n.length; s < t.length; s += 1)
                    i(s);
                ie()
            }
        },
        i(o) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    b(t[f]);
                l = !0
            }
        },
        o(o) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                k(t[f]);
            l = !1
        },
        d(o) {
            o && g(e),
            He(t, o)
        }
    }
}
function Gt(r) {
    let e, l;
    return e = new xe({
        props: {
            options: {
                parentBlock: r[4],
                node: r[6],
                isInline: !0,
                indexInParent: r[8]
            },
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.options = {
                parentBlock: n[4],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Gr(r) {
    let e, l, n = ve(it(r[4])), t = [];
    for (let o = 0; o < n.length; o += 1)
        t[o] = Gt(qt(r, n, o));
    const i = o=>k(t[o], 1, 1, ()=>{
        t[o] = null
    }
    );
    return {
        c() {
            for (let o = 0; o < t.length; o += 1)
                t[o].c();
            e = O()
        },
        l(o) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(o);
            e = O()
        },
        m(o, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(o, f);
            M(o, e, f),
            l = !0
        },
        p(o, f) {
            if (f & 17) {
                n = ve(it(o[4]));
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = qt(o, n, s);
                    t[s] ? (t[s].p(u, f),
                    b(t[s], 1)) : (t[s] = Gt(u),
                    t[s].c(),
                    b(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (oe(),
                s = n.length; s < t.length; s += 1)
                    i(s);
                ie()
            }
        },
        i(o) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    b(t[f]);
                l = !0
            }
        },
        o(o) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                k(t[f]);
            l = !1
        },
        d(o) {
            o && g(e),
            He(t, o)
        }
    }
}
function Kt(r) {
    let e, l;
    return e = new xe({
        props: {
            options: {
                node: r[6],
                indexInParent: r[8],
                parentBlock: void 0,
                isInline: void 0
            },
            global: r[0]
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 16 && (i.options = {
                node: n[6],
                indexInParent: n[8],
                parentBlock: void 0,
                isInline: void 0
            }),
            t & 1 && (i.global = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function Kr(r) {
    let e, l, n = ve(r[4].children), t = [];
    for (let o = 0; o < n.length; o += 1)
        t[o] = Kt(Ht(r, n, o));
    const i = o=>k(t[o], 1, 1, ()=>{
        t[o] = null
    }
    );
    return {
        c() {
            for (let o = 0; o < t.length; o += 1)
                t[o].c();
            e = O()
        },
        l(o) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(o);
            e = O()
        },
        m(o, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(o, f);
            M(o, e, f),
            l = !0
        },
        p(o, f) {
            if (f & 17) {
                n = ve(o[4].children);
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Ht(o, n, s);
                    t[s] ? (t[s].p(u, f),
                    b(t[s], 1)) : (t[s] = Kt(u),
                    t[s].c(),
                    b(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (oe(),
                s = n.length; s < t.length; s += 1)
                    i(s);
                ie()
            }
        },
        i(o) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    b(t[f]);
                l = !0
            }
        },
        o(o) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                k(t[f]);
            l = !1
        },
        d(o) {
            o && g(e),
            He(t, o)
        }
    }
}
function Qr(r) {
    let e, l, n, t, i, o, f, s, u;
    const d = [Hr, qr, Rr, Fr, jr, $r]
      , c = [];
    function a(m, h) {
        return h & 16 && (e = null),
        h & 16 && (l = null),
        h & 16 && (n = null),
        h & 16 && (t = null),
        h & 16 && (i = null),
        e == null && (e = !!dn(m[4])),
        e ? 0 : (l == null && (l = !!an(m[4])),
        l ? 1 : (n == null && (n = !!mn(m[4])),
        n ? 2 : (t == null && (t = !!cn(m[4])),
        t ? 3 : (i == null && (i = !!_n(m[4])),
        i ? 4 : m[4] ? 5 : -1))))
    }
    return ~(o = a(r, -1)) && (f = c[o] = d[o](r)),
    {
        c() {
            f && f.c(),
            s = O()
        },
        l(m) {
            f && f.l(m),
            s = O()
        },
        m(m, h) {
            ~o && c[o].m(m, h),
            M(m, s, h),
            u = !0
        },
        p(m, [h]) {
            let _ = o;
            o = a(m, h),
            o === _ ? ~o && c[o].p(m, h) : (f && (oe(),
            k(c[_], 1, 1, ()=>{
                c[_] = null
            }
            ),
            ie()),
            ~o ? (f = c[o],
            f ? f.p(m, h) : (f = c[o] = d[o](m),
            f.c()),
            b(f, 1),
            f.m(s.parentNode, s)) : f = null)
        },
        i(m) {
            u || (b(f),
            u = !0)
        },
        o(m) {
            k(f),
            u = !1
        },
        d(m) {
            m && g(s),
            ~o && c[o].d(m)
        }
    }
}
function Xr(r, e, l) {
    let n, t, i, o, {global: f} = e, {options: s} = e;
    return r.$$set = u=>{
        "global"in u && l(0, f = u.global),
        "options"in u && l(5, s = u.options)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 32 && l(4, {node: n, indexInParent: t, parentBlock: i, isInline: o} = s, n, (l(3, t),
        l(5, s)), (l(2, i),
        l(5, s)), (l(1, o),
        l(5, s)))
    }
    ,
    [f, o, i, t, n, s]
}
class xe extends _e {
    constructor(e) {
        super(),
        pe(this, e, Xr, Qr, ae, {
            global: 0,
            options: 5
        })
    }
}
const Ue = (r,e)=>`Unknown ${r}, specify a component for it in the \`components${e ? "." : ""}${e}\` prop`
  , Zr = (r,e)=>{
    switch (e) {
    case "block":
        return Ue(`block type "${r}"`, "types");
    case "blockStyle":
        return Ue(`block style "${r}"`, "block");
    case "listItemStyle":
        return Ue(`list item style "${r}"`, "listItem");
    case "listStyle":
        return Ue(`list style "${r}"`, "list");
    case "mark":
        return Ue(`mark type "${r}"`, "marks");
    default:
        return Ue("type")
    }
}
;
function Wr(r) {
    console.warn(r)
}
function Qt(r, e, l) {
    const n = r.slice();
    return n[8] = e[l],
    n[10] = l,
    n
}
function Xt(r, e) {
    let l, n, t;
    return n = new xe({
        props: {
            global: {
                components: e[4],
                missingComponentHandler: e[2],
                context: e[1],
                ptBlocks: e[3],
                ptRawValue: e[0]
            },
            options: {
                node: e[8],
                isInline: !1,
                indexInParent: e[10]
            }
        }
    }),
    {
        key: r,
        first: null,
        c() {
            l = O(),
            G(n.$$.fragment),
            this.h()
        },
        l(i) {
            l = O(),
            ee(n.$$.fragment, i),
            this.h()
        },
        h() {
            this.first = l
        },
        m(i, o) {
            M(i, l, o),
            K(n, i, o),
            t = !0
        },
        p(i, o) {
            e = i;
            const f = {};
            o & 31 && (f.global = {
                components: e[4],
                missingComponentHandler: e[2],
                context: e[1],
                ptBlocks: e[3],
                ptRawValue: e[0]
            }),
            o & 8 && (f.options = {
                node: e[8],
                isInline: !1,
                indexInParent: e[10]
            }),
            n.$set(f)
        },
        i(i) {
            t || (b(n.$$.fragment, i),
            t = !0)
        },
        o(i) {
            k(n.$$.fragment, i),
            t = !1
        },
        d(i) {
            i && g(l),
            Q(n, i)
        }
    }
}
function Yr(r) {
    let e = [], l = new Map, n, t, i = ve(r[3]);
    const o = f=>f[8]._key;
    for (let f = 0; f < i.length; f += 1) {
        let s = Qt(r, i, f)
          , u = o(s);
        l.set(u, e[f] = Xt(u, s))
    }
    return {
        c() {
            for (let f = 0; f < e.length; f += 1)
                e[f].c();
            n = O()
        },
        l(f) {
            for (let s = 0; s < e.length; s += 1)
                e[s].l(f);
            n = O()
        },
        m(f, s) {
            for (let u = 0; u < e.length; u += 1)
                e[u] && e[u].m(f, s);
            M(f, n, s),
            t = !0
        },
        p(f, [s]) {
            s & 31 && (i = ve(f[3]),
            oe(),
            e = On(e, s, o, 1, f, i, l, n.parentNode, Mn, Xt, n, Qt),
            ie())
        },
        i(f) {
            if (!t) {
                for (let s = 0; s < i.length; s += 1)
                    b(e[s]);
                t = !0
            }
        },
        o(f) {
            for (let s = 0; s < e.length; s += 1)
                k(e[s]);
            t = !1
        },
        d(f) {
            f && g(n);
            for (let s = 0; s < e.length; s += 1)
                e[s].d(f)
        }
    }
}
function Jr(r, e, l) {
    let n, t, i, o, {value: f=[]} = e, {components: s} = e, {context: u={}} = e, {onMissingComponent: d=!0} = e;
    return r.$$set = c=>{
        "value"in c && l(0, f = c.value),
        "components"in c && l(5, s = c.components),
        "context"in c && l(1, u = c.context),
        "onMissingComponent"in c && l(6, d = c.onMissingComponent)
    }
    ,
    r.$$.update = ()=>{
        r.$$.dirty & 32 && l(4, n = sr(ir, s)),
        r.$$.dirty & 1 && l(7, t = (Array.isArray(f) ? f : [f]).map(Bl)),
        r.$$.dirty & 128 && l(3, i = Tl(t, Ll)),
        r.$$.dirty & 64 && l(2, o = (c,a)=>{
            if (d === !1)
                return;
            const m = Zr(c, a);
            if (typeof d == "function") {
                d(m, {
                    type: c,
                    nodeType: a
                });
                return
            }
            Wr(m)
        }
        )
    }
    ,
    [f, u, o, i, n, s, d, t]
}
class xr extends _e {
    constructor(e) {
        super(),
        pe(this, e, Jr, Yr, ae, {
            value: 0,
            components: 5,
            context: 1,
            onMissingComponent: 6
        })
    }
}
function eo(r) {
    let e, l;
    const n = r[1].default
      , t = se(n, r, r[0], null);
    return {
        c() {
            e = j("p"),
            t && t.c(),
            this.h()
        },
        l(i) {
            e = F(i, "P", {
                class: !0
            });
            var o = V(e);
            t && t.l(o),
            o.forEach(g),
            this.h()
        },
        h() {
            L(e, "class", "text-caps-small")
        },
        m(i, o) {
            M(i, e, o),
            t && t.m(e, null),
            l = !0
        },
        p(i, [o]) {
            t && t.p && (!l || o & 1) && fe(t, n, i, i[0], l ? ce(n, i[0], o, null) : ue(i[0]), null)
        },
        i(i) {
            l || (b(t, i),
            l = !0)
        },
        o(i) {
            k(t, i),
            l = !1
        },
        d(i) {
            i && g(e),
            t && t.d(i)
        }
    }
}
function to(r, e, l) {
    let {$$slots: n={}, $$scope: t} = e;
    return r.$$set = i=>{
        "$$scope"in i && l(0, t = i.$$scope)
    }
    ,
    [t, n]
}
class no extends _e {
    constructor(e) {
        super(),
        pe(this, e, to, eo, ae, {})
    }
}
function lo(r) {
    let e, l;
    return e = new xr({
        props: {
            value: r[0],
            components: {
                block: {
                    normal: no
                }
            }
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, [t]) {
            const i = {};
            t & 1 && (i.value = n[0]),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function ro(r, e, l) {
    let {value: n} = e;
    return r.$$set = t=>{
        "value"in t && l(0, n = t.value)
    }
    ,
    [n]
}
class Zt extends _e {
    constructor(e) {
        super(),
        pe(this, e, ro, lo, ae, {
            value: 0
        })
    }
}
function Wt(r, e, l) {
    const n = r.slice();
    return n[7] = e[l].title,
    n[25] = e[l].label,
    n
}
function Yt(r, e, l) {
    const n = r.slice();
    return n[28] = e[l],
    n[30] = l,
    n
}
function Jt(r) {
    let e, l, n = r[30] + 1 + "", t, i, o, f;
    function s() {
        return r[18](r[30])
    }
    return {
        c() {
            e = j("li"),
            l = j("button"),
            t = Ne(n),
            i = we(),
            this.h()
        },
        l(u) {
            e = F(u, "LI", {
                class: !0
            });
            var d = V(e);
            l = F(d, "BUTTON", {
                class: !0
            });
            var c = V(l);
            t = Ae(c, n),
            c.forEach(g),
            i = Ie(d),
            d.forEach(g),
            this.h()
        },
        h() {
            L(l, "class", "svelte-100mvgx"),
            L(e, "class", "svelte-100mvgx"),
            Ee(e, "is-active", r[30] === r[11])
        },
        m(u, d) {
            M(u, e, d),
            C(e, l),
            C(l, t),
            C(e, i),
            o || (f = Oe(l, "click", s),
            o = !0)
        },
        p(u, d) {
            r = u,
            d & 2048 && Ee(e, "is-active", r[30] === r[11])
        },
        d(u) {
            u && g(e),
            o = !1,
            f()
        }
    }
}
function xt(r) {
    let e, l, n;
    function t(o) {
        r[19](o)
    }
    let i = {
        autoplay: !0,
        sources: r[1].sources,
        width: r[1].dimensions.width,
        height: r[1].dimensions.height
    };
    return r[10] !== void 0 && (i.videoEl = r[10]),
    e = new vl({
        props: i
    }),
    Qe.push(()=>Ln(e, "videoEl", t)),
    {
        c() {
            G(e.$$.fragment)
        },
        l(o) {
            ee(e.$$.fragment, o)
        },
        m(o, f) {
            K(e, o, f),
            n = !0
        },
        p(o, f) {
            const s = {};
            f & 2 && (s.sources = o[1].sources),
            f & 2 && (s.width = o[1].dimensions.width),
            f & 2 && (s.height = o[1].dimensions.height),
            !l && f & 1024 && (l = !0,
            s.videoEl = o[10],
            Dn(()=>l = !1)),
            e.$set(s)
        },
        i(o) {
            n || (b(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            k(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            Q(e, o)
        }
    }
}
function en(r) {
    let e, l;
    return e = new Nn({
        props: {
            label: r[5].label,
            href: r[5].url
        }
    }),
    {
        c() {
            G(e.$$.fragment)
        },
        l(n) {
            ee(e.$$.fragment, n)
        },
        m(n, t) {
            K(e, n, t),
            l = !0
        },
        p(n, t) {
            const i = {};
            t & 32 && (i.label = n[5].label),
            t & 32 && (i.href = n[5].url),
            e.$set(i)
        },
        i(n) {
            l || (b(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            k(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            Q(e, n)
        }
    }
}
function tn(r) {
    let e, l = ve(r[6]), n = [];
    for (let t = 0; t < l.length; t += 1)
        n[t] = nn(Wt(r, l, t));
    return {
        c() {
            e = j("ul");
            for (let t = 0; t < n.length; t += 1)
                n[t].c();
            this.h()
        },
        l(t) {
            e = F(t, "UL", {
                class: !0
            });
            var i = V(e);
            for (let o = 0; o < n.length; o += 1)
                n[o].l(i);
            i.forEach(g),
            this.h()
        },
        h() {
            L(e, "class", "recog svelte-100mvgx")
        },
        m(t, i) {
            M(t, e, i);
            for (let o = 0; o < n.length; o += 1)
                n[o] && n[o].m(e, null)
        },
        p(t, i) {
            if (i & 64) {
                l = ve(t[6]);
                let o;
                for (o = 0; o < l.length; o += 1) {
                    const f = Wt(t, l, o);
                    n[o] ? n[o].p(f, i) : (n[o] = nn(f),
                    n[o].c(),
                    n[o].m(e, null))
                }
                for (; o < n.length; o += 1)
                    n[o].d(1);
                n.length = l.length
            }
        },
        d(t) {
            t && g(e),
            He(n, t)
        }
    }
}
function nn(r) {
    let e, l, n, t = r[7] + "", i, o, f, s = r[25] + "", u, d;
    return {
        c() {
            e = j("li"),
            l = j("p"),
            n = j("strong"),
            i = Ne(t),
            o = we(),
            f = j("p"),
            u = Ne(s),
            d = we(),
            this.h()
        },
        l(c) {
            e = F(c, "LI", {
                class: !0
            });
            var a = V(e);
            l = F(a, "P", {
                class: !0
            });
            var m = V(l);
            n = F(m, "STRONG", {
                class: !0
            });
            var h = V(n);
            i = Ae(h, t),
            h.forEach(g),
            m.forEach(g),
            o = Ie(a),
            f = F(a, "P", {
                class: !0
            });
            var _ = V(f);
            u = Ae(_, s),
            _.forEach(g),
            d = Ie(a),
            a.forEach(g),
            this.h()
        },
        h() {
            L(n, "class", "svelte-100mvgx"),
            L(l, "class", "title title-xsmall svelte-100mvgx"),
            L(f, "class", "label text-caps-small color-secondary svelte-100mvgx"),
            L(e, "class", "svelte-100mvgx")
        },
        m(c, a) {
            M(c, e, a),
            C(e, l),
            C(l, n),
            C(n, i),
            C(e, o),
            C(e, f),
            C(f, u),
            C(e, d)
        },
        p(c, a) {
            a & 64 && t !== (t = c[7] + "") && Re(i, t),
            a & 64 && s !== (s = c[25] + "") && Re(u, s)
        },
        d(c) {
            c && g(e)
        }
    }
}
function oo(r) {
    let e, l, n, t, i, o, f, s, u, d, c, a, m, h, _, v, P, w = `${r[13]}px`, p = `${r[17]}%`, N, D, A, q, y, S, I, z, E, te, X, be, W, Pe, Be, ge = ve(Array(2)), le = [];
    for (let T = 0; T < ge.length; T += 1)
        le[T] = Jt(Yt(r, ge, T));
    m = new Dt({
        props: {
            src: r[1].poster,
            alt: r[0] + " project thumbnail",
            layout: "fullWidth",
            class: "poster",
            aspectRatio: 1.5,
            breakpoints: [320, 550, 992],
            sizes: "(max-width: 550px) 88vw, 52vw"
        }
    });
    let Y = r[15] && xt(r);
    v = new Dt({
        props: {
            class: "background",
            src: r[2].url + "?auto=format&q=80",
            alt: "Illustrative background image for " + r[0] + " project",
            layout: "fullWidth",
            aspectRatio: r[2].ratio,
            breakpoints: [320, 550, 992, 1280],
            sizes: "(max-width: 550px) 100vw, 90vw"
        }
    }),
    I = new Zt({
        props: {
            value: r[3]
        }
    }),
    E = new Zt({
        props: {
            value: r[4]
        }
    });
    let Z = r[5] && en(r)
      , J = r[6] && tn(r);
    return {
        c() {
            e = j("article"),
            l = j("div"),
            n = j("div"),
            t = j("h3"),
            i = Ne(r[0]),
            o = we(),
            f = j("ol");
            for (let T = 0; T < le.length; T += 1)
                le[T].c();
            s = we(),
            u = j("div"),
            d = j("div"),
            c = j("div"),
            a = j("div"),
            G(m.$$.fragment),
            h = we(),
            Y && Y.c(),
            _ = we(),
            G(v.$$.fragment),
            N = we(),
            D = j("div"),
            A = j("div"),
            q = j("h4"),
            y = Ne(r[7]),
            S = we(),
            G(I.$$.fragment),
            z = we(),
            G(E.$$.fragment),
            te = we(),
            X = j("div"),
            Z && Z.c(),
            be = we(),
            J && J.c(),
            this.h()
        },
        l(T) {
            e = F(T, "ARTICLE", {
                class: !0
            });
            var R = V(e);
            l = F(R, "DIV", {
                class: !0
            });
            var de = V(l);
            n = F(de, "DIV", {
                class: !0
            });
            var ke = V(n);
            t = F(ke, "H3", {
                class: !0
            });
            var re = V(t);
            i = Ae(re, r[0]),
            re.forEach(g),
            o = Ie(ke),
            f = F(ke, "OL", {
                class: !0
            });
            var ye = V(f);
            for (let Le = 0; Le < le.length; Le += 1)
                le[Le].l(ye);
            ye.forEach(g),
            ke.forEach(g),
            s = Ie(de),
            u = F(de, "DIV", {
                class: !0,
                role: !0
            });
            var x = V(u);
            d = F(x, "DIV", {
                class: !0
            });
            var Te = V(d);
            c = F(Te, "DIV", {
                role: !0,
                class: !0
            });
            var B = V(c);
            a = F(B, "DIV", {
                class: !0
            });
            var $ = V(a);
            ee(m.$$.fragment, $),
            h = Ie($),
            Y && Y.l($),
            $.forEach(g),
            _ = Ie(B),
            ee(v.$$.fragment, B),
            B.forEach(g),
            N = Ie(Te),
            D = F(Te, "DIV", {
                class: !0,
                role: !0
            });
            var H = V(D);
            A = F(H, "DIV", {
                class: !0
            });
            var U = V(A);
            q = F(U, "H4", {
                class: !0
            });
            var he = V(q);
            y = Ae(he, r[7]),
            he.forEach(g),
            S = Ie(U),
            ee(I.$$.fragment, U),
            z = Ie(U),
            ee(E.$$.fragment, U),
            U.forEach(g),
            te = Ie(H),
            X = F(H, "DIV", {
                class: !0
            });
            var me = V(X);
            Z && Z.l(me),
            be = Ie(me),
            J && J.l(me),
            me.forEach(g),
            H.forEach(g),
            Te.forEach(g),
            x.forEach(g),
            de.forEach(g),
            R.forEach(g),
            this.h()
        },
        h() {
            L(t, "class", "name color-accent svelte-100mvgx"),
            L(f, "class", "dots svelte-100mvgx"),
            L(n, "class", "details text-caps-small svelte-100mvgx"),
            L(a, "class", "video-wrapper svelte-100mvgx"),
            Ee(a, "has-video", r[16]),
            L(c, "role", "presentation"),
            L(c, "class", "screencast svelte-100mvgx"),
            ln(()=>r[20].call(c)),
            Ee(c, "is-passed", r[11] === 1),
            Fe(c, "--screencast-width", w),
            Fe(c, "--parallax", p),
            L(q, "class", "title title-big svelte-100mvgx"),
            L(A, "class", "text svelte-100mvgx"),
            L(X, "class", "bottom svelte-100mvgx"),
            Ee(X, "has-border", r[6]),
            L(D, "class", "content svelte-100mvgx"),
            L(D, "role", "presentation"),
            Ee(D, "is-visible", r[14]),
            L(d, "class", "slides__container svelte-100mvgx"),
            L(u, "class", "slides svelte-100mvgx"),
            L(u, "role", "presentation"),
            Ee(u, "is-enabled", r[12]),
            Ee(u, "has-content-visible", r[11] !== 0),
            L(l, "class", "container grid svelte-100mvgx"),
            L(e, "class", "project svelte-100mvgx")
        },
        m(T, R) {
            M(T, e, R),
            C(e, l),
            C(l, n),
            C(n, t),
            C(t, i),
            C(n, o),
            C(n, f);
            for (let de = 0; de < le.length; de += 1)
                le[de] && le[de].m(f, null);
            C(l, s),
            C(l, u),
            C(u, d),
            C(d, c),
            C(c, a),
            K(m, a, null),
            C(a, h),
            Y && Y.m(a, null),
            C(c, _),
            K(v, c, null),
            P = Tn(c, r[20].bind(c)),
            C(d, N),
            C(d, D),
            C(D, A),
            C(A, q),
            C(q, y),
            C(A, S),
            K(I, A, null),
            C(A, z),
            K(E, A, null),
            C(D, te),
            C(D, X),
            Z && Z.m(X, null),
            C(X, be),
            J && J.m(X, null),
            r[23](u),
            r[24](e),
            W = !0,
            Pe || (Be = [Oe(c, "click", r[21]), Oe(D, "click", r[22])],
            Pe = !0)
        },
        p(T, [R]) {
            if ((!W || R & 1) && Re(i, T[0]),
            R & 6144) {
                ge = ve(Array(2));
                let x;
                for (x = 0; x < ge.length; x += 1) {
                    const Te = Yt(T, ge, x);
                    le[x] ? le[x].p(Te, R) : (le[x] = Jt(Te),
                    le[x].c(),
                    le[x].m(f, null))
                }
                for (; x < le.length; x += 1)
                    le[x].d(1);
                le.length = ge.length
            }
            const de = {};
            R & 2 && (de.src = T[1].poster),
            R & 1 && (de.alt = T[0] + " project thumbnail"),
            m.$set(de),
            T[15] ? Y ? (Y.p(T, R),
            R & 32768 && b(Y, 1)) : (Y = xt(T),
            Y.c(),
            b(Y, 1),
            Y.m(a, null)) : Y && (oe(),
            k(Y, 1, 1, ()=>{
                Y = null
            }
            ),
            ie()),
            (!W || R & 65536) && Ee(a, "has-video", T[16]);
            const ke = {};
            R & 4 && (ke.src = T[2].url + "?auto=format&q=80"),
            R & 1 && (ke.alt = "Illustrative background image for " + T[0] + " project"),
            R & 4 && (ke.aspectRatio = T[2].ratio),
            v.$set(ke),
            (!W || R & 2048) && Ee(c, "is-passed", T[11] === 1),
            R & 8192 && w !== (w = `${T[13]}px`) && Fe(c, "--screencast-width", w),
            R & 131072 && p !== (p = `${T[17]}%`) && Fe(c, "--parallax", p),
            (!W || R & 128) && Re(y, T[7]);
            const re = {};
            R & 8 && (re.value = T[3]),
            I.$set(re);
            const ye = {};
            R & 16 && (ye.value = T[4]),
            E.$set(ye),
            T[5] ? Z ? (Z.p(T, R),
            R & 32 && b(Z, 1)) : (Z = en(T),
            Z.c(),
            b(Z, 1),
            Z.m(X, be)) : Z && (oe(),
            k(Z, 1, 1, ()=>{
                Z = null
            }
            ),
            ie()),
            T[6] ? J ? J.p(T, R) : (J = tn(T),
            J.c(),
            J.m(X, null)) : J && (J.d(1),
            J = null),
            (!W || R & 64) && Ee(X, "has-border", T[6]),
            (!W || R & 16384) && Ee(D, "is-visible", T[14]),
            (!W || R & 4096) && Ee(u, "is-enabled", T[12]),
            (!W || R & 2048) && Ee(u, "has-content-visible", T[11] !== 0)
        },
        i(T) {
            W || (b(m.$$.fragment, T),
            b(Y),
            b(v.$$.fragment, T),
            b(I.$$.fragment, T),
            b(E.$$.fragment, T),
            b(Z),
            W = !0)
        },
        o(T) {
            k(m.$$.fragment, T),
            k(Y),
            k(v.$$.fragment, T),
            k(I.$$.fragment, T),
            k(E.$$.fragment, T),
            k(Z),
            W = !1
        },
        d(T) {
            T && g(e),
            He(le, T),
            Q(m),
            Y && Y.d(),
            Q(v),
            P(),
            Q(I),
            Q(E),
            Z && Z.d(),
            J && J.d(),
            r[23](null),
            r[24](null),
            Pe = !1,
            rn(Be)
        }
    }
}
function io(r, e, l) {
    let {name: n} = e, {video: t} = e, {background: i} = e, {title: o} = e, {text: f} = e, {credits: s} = e, {cta: u=void 0} = e, {recognition: d=void 0} = e, c, a, m, h = 0, _, v, P = !1, w = !1, p = !1, N;
    Pn(()=>{
        An(({y: te})=>l(17, N = Cn(-15, 10, te.progress)), {
            target: c,
            offset: ["start end", "end start"]
        });
        const E = Vn(c, ()=>{
            l(14, P = !0);
            const te = setTimeout(async()=>{
                l(15, w = !0),
                await Bn(),
                m.addEventListener("canplay", ()=>{
                    l(16, p = !0)
                }
                , !1)
            }
            , 600)
              , X = setTimeout(()=>{
                l(12, _ = Ye(a)),
                _.on("select", ()=>{
                    l(11, h = _.selectedScrollSnap())
                }
                )
            }
            , 1e3);
            return ()=>{
                clearTimeout(X),
                clearTimeout(te),
                m && !m.paused && (l(15, w = !1),
                l(16, p = !1))
            }
        }
        , {
            amount: .6
        });
        return ()=>{
            E(),
            _?.destroy()
        }
    }
    );
    const D = E=>_?.scrollTo(E);
    function A(E) {
        m = E,
        l(10, m)
    }
    function q() {
        v = this.offsetWidth,
        l(13, v)
    }
    const y = ()=>_?.scrollPrev()
      , S = ()=>_?.scrollNext();
    function I(E) {
        Qe[E ? "unshift" : "push"](()=>{
            a = E,
            l(9, a)
        }
        )
    }
    function z(E) {
        Qe[E ? "unshift" : "push"](()=>{
            c = E,
            l(8, c)
        }
        )
    }
    return r.$$set = E=>{
        "name"in E && l(0, n = E.name),
        "video"in E && l(1, t = E.video),
        "background"in E && l(2, i = E.background),
        "title"in E && l(7, o = E.title),
        "text"in E && l(3, f = E.text),
        "credits"in E && l(4, s = E.credits),
        "cta"in E && l(5, u = E.cta),
        "recognition"in E && l(6, d = E.recognition)
    }
    ,
    [n, t, i, f, s, u, d, o, c, a, m, h, _, v, P, w, p, N, D, A, q, y, S, I, z]
}
class bo extends _e {
    constructor(e) {
        super(),
        pe(this, e, io, oo, ae, {
            name: 0,
            video: 1,
            background: 2,
            title: 7,
            text: 3,
            credits: 4,
            cta: 5,
            recognition: 6
        })
    }
}
export {bo as default};
