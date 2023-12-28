import {S as K, i as L, s as P, M as E, f as q, n as Q, v as I, d as m, y as j, e as y, c as w, a as v, N as G, p as h, K as J, H as W, u as z, O as Y, P as Z, m as x, z as $, o as ee, B as te, b as C, t as T, h as X, q as ae, k as se, I as re, w as le} from "./index.JGMlkmnd.js";
import {e as A, u as ne, o as oe} from "./each.vSSWZ5md.js";
import {q as ie} from "./index.aG_mIMe3.js";
import {c as ce, s as fe} from "./anime.esm.OvC5p9Af.js";
import {I as de} from "./image.BOJ5USvO.js";
/* empty css                       */
import {s as ue} from "./index.es.h7yWt7Ul.js";
import {i as he} from "./in-view.es.GFlACgdF.js";
import "./spread.AQEXjpNi.js";
function M(i, t, e) {
    const a = i.slice();
    a[14] = t[e],
    a[17] = e;
    const s = a[5][a[17]];
    return a[15] = s,
    a
}
function N(i, t) {
    let e, a, s, c, _, r = `${t[15].rotate}deg`, l = `${t[15].offsetX}%`, n;
    return s = new de({
        props: {
            src: t[14].url + "?q=85",
            alt: t[14].alt,
            layout: "constrained",
            width: t[14].width,
            height: t[14].width * k,
            breakpoints: [320, 550],
            sizes: "(max-width: 550px) 64vw, 28vw",
            priority: !0
        }
    }),
    {
        key: i,
        first: null,
        c() {
            e = y("span"),
            a = y("picture"),
            x(s.$$.fragment),
            c = $(),
            this.h()
        },
        l(d) {
            e = w(d, "SPAN", {
                class: !0
            });
            var o = v(e);
            a = w(o, "PICTURE", {
                class: !0
            });
            var u = v(a);
            ee(s.$$.fragment, u),
            u.forEach(m),
            c = te(o),
            o.forEach(m),
            this.h()
        },
        h() {
            C(a, "class", "svelte-r3voeq"),
            T(a, "has-parallax", t[4]),
            C(e, "class", "card svelte-r3voeq"),
            h(e, "--index", t[17]),
            h(e, "--rotate", r),
            h(e, "--scale", t[15].scale),
            h(e, "--offset-x", l),
            h(e, "--progress", t[17] !== 0 ? t[3] : null),
            this.first = e
        },
        m(d, o) {
            q(d, e, o),
            X(e, a),
            ae(s, a, null),
            X(e, c),
            n = !0
        },
        p(d, o) {
            t = d;
            const u = {};
            o & 4 && (u.src = t[14].url + "?q=85"),
            o & 4 && (u.alt = t[14].alt),
            o & 4 && (u.width = t[14].width),
            o & 4 && (u.height = t[14].width * k),
            s.$set(u),
            (!n || o & 16) && T(a, "has-parallax", t[4]),
            o & 4 && h(e, "--index", t[17]),
            o & 4 && r !== (r = `${t[15].rotate}deg`) && h(e, "--rotate", r),
            o & 4 && h(e, "--scale", t[15].scale),
            o & 4 && l !== (l = `${t[15].offsetX}%`) && h(e, "--offset-x", l),
            o & 12 && h(e, "--progress", t[17] !== 0 ? t[3] : null)
        },
        i(d) {
            n || (z(s.$$.fragment, d),
            d && (_ || se(()=>{
                _ = re(e, t[6], t[4] ? {
                    y: 12,
                    x: 24,
                    duration: 1200
                } : null),
                _.start()
            }
            )),
            n = !0)
        },
        o(d) {
            I(s.$$.fragment, d),
            n = !1
        },
        d(d) {
            d && m(e),
            le(s)
        }
    }
}
function g(i) {
    let t, e = [], a = new Map, s, c = A(i[2]);
    const _ = r=>r[14];
    for (let r = 0; r < c.length; r += 1) {
        let l = M(i, c, r)
          , n = _(l);
        a.set(n, e[r] = N(n, l))
    }
    return {
        c() {
            t = y(i[1]);
            for (let r = 0; r < e.length; r += 1)
                e[r].c();
            this.h()
        },
        l(r) {
            t = w(r, (i[1] || "null").toUpperCase(), {
                class: !0
            });
            var l = v(t);
            for (let n = 0; n < e.length; n += 1)
                e[n].l(l);
            l.forEach(m),
            this.h()
        },
        h() {
            G(i[1])(t, {
                class: "cards svelte-r3voeq"
            }),
            h(t, "--ratio", k)
        },
        m(r, l) {
            q(r, t, l);
            for (let n = 0; n < e.length; n += 1)
                e[n] && e[n].m(t, null);
            i[10](t),
            s = !0
        },
        p(r, l) {
            l & 60 && (c = A(r[2]),
            J(),
            e = ne(e, l, _, 1, r, c, a, t, oe, N, null, M),
            W())
        },
        i(r) {
            if (!s) {
                for (let l = 0; l < c.length; l += 1)
                    z(e[l]);
                s = !0
            }
        },
        o(r) {
            for (let l = 0; l < e.length; l += 1)
                I(e[l]);
            s = !1
        },
        d(r) {
            r && m(t);
            for (let l = 0; l < e.length; l += 1)
                e[l].d();
            i[10](null)
        }
    }
}
function _e(i) {
    let t = i[1], e, a = i[1] && g(i);
    return {
        c() {
            a && a.c(),
            e = E()
        },
        l(s) {
            a && a.l(s),
            e = E()
        },
        m(s, c) {
            a && a.m(s, c),
            q(s, e, c)
        },
        p(s, [c]) {
            s[1] ? t ? P(t, s[1]) ? (a.d(1),
            a = g(s),
            t = s[1],
            a.c(),
            a.m(e.parentNode, e)) : a.p(s, c) : (a = g(s),
            t = s[1],
            a.c(),
            a.m(e.parentNode, e)) : t && (a.d(1),
            a = null,
            t = s[1])
        },
        i: Q,
        o(s) {
            I(a, s)
        },
        d(s) {
            s && m(e),
            a && a.d(s)
        }
    }
}
const k = 1.35;
function me(i, t, e) {
    let {tag: a="span"} = t, {cards: s} = t, {cardsToShow: c=3} = t, {cardsInterval: _=2e3} = t, {cardsEl: r=void 0} = t, l = -1, n = [], d, o, u = !1;
    const H = [{
        rotate: -11,
        scale: .5,
        offsetX: -37,
        opacity: 0
    }, {
        rotate: -10,
        scale: .83,
        offsetX: -22,
        opacity: 0
    }, {
        rotate: -8,
        scale: .915,
        offsetX: -10,
        opacity: 1
    }, {
        rotate: -6,
        scale: 1,
        offsetX: 0,
        opacity: 1
    }]
      , b = ()=>{
        for (n.shift(); n.length < c + 1; )
            ++l > s.length - 1 && (l = 0),
            e(2, n = [...n, {
                ...s[l],
                id: Math.random()
            }])
    }
      , O = (f,p)=>{
        if (!p)
            return;
        const {x: U, y: V, duration: B, easing: D} = p;
        return {
            easing: D || ie,
            duration: B || 1200,
            css: (F,S)=>`
                    opacity: ${Math.min(1, F * 2)};
                    transform: translate3d(${U * S}px, ${V * S}px, 0);
                `
        }
    }
    ;
    j(async()=>{
        b(),
        await Y();
        const f = ce({
            autoplay: !1,
            defaults: {
                duration: 1200,
                ease: "outQuart"
            }
        });
        f.add(r.querySelector(".card:nth-child(4) picture"), {
            scale: [1.025, 1],
            opacity: {
                to: [0, 1],
                duration: 400
            },
            duration: 1200
        }, 0).add(Array.from(r.querySelectorAll(".card:nth-child(2) picture, .card:nth-child(3) picture")).reverse(), {
            translateX: ["7%", "0%"],
            opacity: {
                to: [0, 1],
                duration: 800
            },
            delay: fe(200),
            rotate: [6, 0]
        }, 150).init(),
        ue(({y: p})=>e(3, o = p.progress), {
            target: document.body,
            offset: ["start start", `${window.innerHeight / 1.5}px start`]
        }),
        he(r, ()=>(requestAnimationFrame(()=>f.play()),
        setTimeout(()=>e(4, u = !0), 1500),
        d = setInterval(b, _),
        ()=>clearInterval(d)))
    }
    );
    function R(f) {
        Z[f ? "unshift" : "push"](()=>{
            r = f,
            e(0, r)
        }
        )
    }
    return i.$$set = f=>{
        "tag"in f && e(1, a = f.tag),
        "cards"in f && e(7, s = f.cards),
        "cardsToShow"in f && e(8, c = f.cardsToShow),
        "cardsInterval"in f && e(9, _ = f.cardsInterval),
        "cardsEl"in f && e(0, r = f.cardsEl)
    }
    ,
    [r, a, n, o, u, H, O, s, c, _, R]
}
class Se extends K {
    constructor(t) {
        super(),
        L(this, t, me, _e, P, {
            tag: 1,
            cards: 7,
            cardsToShow: 8,
            cardsInterval: 9,
            cardsEl: 0
        })
    }
}
export {Se as default};