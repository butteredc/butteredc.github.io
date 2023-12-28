import {S as T, i as E, s as H, e as w, c as v, a as b, g as V, d as _, b as u, t as g, f as z, h as I, l as k, n as S, j, k as y, m as L, o as M, p as C, q as O, r as q, u as A, v as F, w as W, x as Y, y as B} from "./index.JGMlkmnd.js";
import {s as P} from "./index.DOgy6W64.js";
/* empty css                       */
import {i as R} from "./in-view.es.GFlACgdF.js";
import "./index.s8Pg_BOU.js";
function X(r) {
    let t, e, n = '<source src="https://assets.flayks.com/logo.mp4" type="video/mp4;codecs=hvc1"/><source src="https://assets.flayks.com/logo.webm" type="video/webm"/><p>Flayks logo</p>', s, l;
    return {
        c() {
            t = w("a"),
            e = w("video"),
            e.innerHTML = n,
            this.h()
        },
        l(a) {
            t = v(a, "A", {
                href: !0,
                class: !0,
                "aria-label": !0
            });
            var o = b(t);
            e = v(o, "VIDEO", {
                width: !0,
                height: !0,
                preload: !0,
                class: !0,
                "data-svelte-h": !0
            }),
            V(e) !== "svelte-2c9flr" && (e.innerHTML = n),
            o.forEach(_),
            this.h()
        },
        h() {
            u(e, "width", "600"),
            u(e, "height", "211"),
            e.autoplay = !0,
            e.loop = !0,
            e.muted = !0,
            e.playsInline = !0,
            u(e, "preload", "auto"),
            u(e, "class", "svelte-1ekuja2"),
            u(t, "href", D),
            u(t, "class", "logo svelte-1ekuja2"),
            u(t, "aria-label", "Flayks logo"),
            g(t, "is-small", r[0]),
            g(t, "is-centered", r[1])
        },
        m(a, o) {
            z(a, t, o),
            I(t, e),
            s || (l = k(t, "click", r[3]),
            s = !0)
        },
        p(a, [o]) {
            o & 1 && g(t, "is-small", a[0]),
            o & 2 && g(t, "is-centered", a[1])
        },
        i: S,
        o: S,
        d(a) {
            a && _(t),
            s = !1,
            l()
        }
    }
}
const D = "#top";
function G(r, t, e) {
    let n;
    j(r, P, o=>e(2, n = o));
    let {isSmall: s=!1} = t
      , {isCentered: l=!1} = t;
    const a = ()=>n.scrollTo(D);
    return r.$$set = o=>{
        "isSmall"in o && e(0, s = o.isSmall),
        "isCentered"in o && e(1, l = o.isCentered)
    }
    ,
    [s, l, n, a]
}
class J extends T {
    constructor(t) {
        super(),
        E(this, t, G, X, H, {
            isSmall: 0,
            isCentered: 1
        })
    }
}
function K(r) {
    let t = !1, e = ()=>{
        t = !1
    }
    , n, s, l, a, o, d = `${r[2]}px`, m, h, p;
    return y(r[5]),
    y(r[6]),
    a = new J({
        props: {
            isSmall: r[3] && !r[4],
            isCentered: r[4]
        }
    }),
    {
        c() {
            s = w("header"),
            l = w("div"),
            L(a.$$.fragment),
            this.h()
        },
        l(i) {
            s = v(i, "HEADER", {
                class: !0
            });
            var c = b(s);
            l = v(c, "DIV", {
                class: !0
            });
            var f = b(l);
            M(a.$$.fragment, f),
            f.forEach(_),
            c.forEach(_),
            this.h()
        },
        h() {
            u(l, "class", "container is-inner"),
            u(s, "class", "header"),
            y(()=>r[7].call(s)),
            C(s, "--vwidth", d)
        },
        m(i, c) {
            z(i, s, c),
            I(s, l),
            O(a, l, null),
            o = q(s, r[7].bind(s)),
            m = !0,
            h || (p = [k(window, "scroll", ()=>{
                t = !0,
                clearTimeout(n),
                n = setTimeout(e, 100),
                r[5]()
            }
            ), k(window, "resize", r[6])],
            h = !0)
        },
        p(i, [c]) {
            c & 1 && !t && (t = !0,
            clearTimeout(n),
            scrollTo(window.pageXOffset, i[0]),
            n = setTimeout(e, 100));
            const f = {};
            c & 24 && (f.isSmall = i[3] && !i[4]),
            c & 16 && (f.isCentered = i[4]),
            a.$set(f),
            c & 4 && d !== (d = `${i[2]}px`) && C(s, "--vwidth", d)
        },
        i(i) {
            m || (A(a.$$.fragment, i),
            m = !0)
        },
        o(i) {
            F(a.$$.fragment, i),
            m = !1
        },
        d(i) {
            i && _(s),
            W(a),
            o(),
            h = !1,
            Y(p)
        }
    }
}
function N(r, t, e) {
    let n, s, l, a = !1, o = !1;
    B(()=>{
        const p = R(document.getElementById("contact"), ()=>(e(4, o = !0),
        ()=>e(4, o = !1)), {
            amount: 0,
            margin: "0% 0% -75%"
        });
        return ()=>p()
    }
    );
    function d() {
        e(0, n = window.pageYOffset)
    }
    function m() {
        e(1, s = window.innerHeight)
    }
    function h() {
        l = this.offsetWidth,
        e(2, l)
    }
    return r.$$.update = ()=>{
        r.$$.dirty & 3 && e(3, a = n >= s * .75)
    }
    ,
    [n, s, l, a, o, d, m, h]
}
class ee extends T {
    constructor(t) {
        super(),
        E(this, t, N, K, H, {})
    }
}
export {ee as default};
