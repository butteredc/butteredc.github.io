import {S as J, i as K, s as Q, e as D, z as q, A, c as j, a as w, d as g, B as I, C as S, b as s, f as X, h as i, D as M, n as N, m as Y, E as F, o as x, F as G, p as Z, k as $, t as P, q as ee, r as te, l as ae, u as le, v as ne, w as se, j as H, y as oe, G as ie} from "./index.JGMlkmnd.js";
import {s as re, r as ce} from "./index.DOgy6W64.js";
/* empty css                       */
import {i as ue} from "./in-view.es.GFlACgdF.js";
import "./index.s8Pg_BOU.js";
function fe(e) {
    let a, t, r, b, n, L, p, c, o, u, _;
    return {
        c() {
            a = D("p"),
            t = D("a"),
            r = D("i"),
            b = q(),
            n = D("span"),
            L = A("Currently in "),
            p = A(e[0]),
            c = A(" ("),
            o = A(e[1]),
            u = A(")"),
            this.h()
        },
        l(h) {
            a = j(h, "P", {
                class: !0
            });
            var f = w(a);
            t = j(f, "A", {
                href: !0,
                target: !0,
                rel: !0,
                class: !0
            });
            var v = w(t);
            r = j(v, "I", {
                class: !0
            }),
            w(r).forEach(g),
            b = I(v),
            n = j(v, "SPAN", {});
            var d = w(n);
            L = S(d, "Currently in "),
            p = S(d, e[0]),
            c = S(d, " ("),
            o = S(d, e[1]),
            u = S(d, ")"),
            d.forEach(g),
            v.forEach(g),
            f.forEach(g),
            this.h()
        },
        h() {
            s(r, "class", "svelte-aihk2c"),
            s(t, "href", _ = "https://maps.google.com/?q=" + e[0]),
            s(t, "target", "_blank"),
            s(t, "rel", "noopener noreferrer"),
            s(t, "class", "svelte-aihk2c"),
            s(a, "class", "location text-caps-small")
        },
        m(h, f) {
            X(h, a, f),
            i(a, t),
            i(t, r),
            i(t, b),
            i(t, n),
            i(n, L),
            i(n, p),
            i(n, c),
            i(n, o),
            i(n, u)
        },
        p(h, [f]) {
            f & 1 && M(p, h[0]),
            f & 2 && M(o, h[1]),
            f & 1 && _ !== (_ = "https://maps.google.com/?q=" + h[0]) && s(t, "href", _)
        },
        i: N,
        o: N,
        d(h) {
            h && g(a)
        }
    }
}
function he(e, a, t) {
    let {location: r} = a
      , {timezone: b} = a;
    return e.$$set = n=>{
        "location"in n && t(0, r = n.location),
        "timezone"in n && t(1, b = n.timezone)
    }
    ,
    [r, b]
}
class me extends J {
    constructor(a) {
        super(),
        K(this, a, he, fe, Q, {
            location: 0,
            timezone: 1
        })
    }
}
function _e(e) {
    let a, t, r, b, n, L, p, c, o, u, _, h, f, v, d, C, V, y, z, B, l;
    return r = new me({
        props: {
            location: e[2],
            timezone: e[3]
        }
    }),
    {
        c() {
            a = D("div"),
            t = D("div"),
            Y(r.$$.fragment),
            b = q(),
            n = D("p"),
            L = A(e[4]),
            p = q(),
            c = D("p"),
            o = D("a"),
            u = F("svg"),
            _ = F("path"),
            h = q(),
            f = D("span"),
            v = A(e[10]),
            this.h()
        },
        l(E) {
            a = j(E, "DIV", {
                class: !0
            });
            var m = w(a);
            t = j(m, "DIV", {
                class: !0
            });
            var k = w(t);
            x(r.$$.fragment, k),
            b = I(k),
            n = j(k, "P", {
                class: !0
            });
            var R = w(n);
            L = S(R, e[4]),
            R.forEach(g),
            p = I(k),
            c = j(k, "P", {
                class: !0
            });
            var T = w(c);
            o = j(T, "A", {
                href: !0,
                target: !0,
                rel: !0,
                tabindex: !0,
                class: !0
            });
            var O = w(o);
            u = G(O, "svg", {
                width: !0,
                height: !0,
                fill: !0,
                viewBox: !0,
                class: !0
            });
            var U = w(u);
            _ = G(U, "path", {
                fill: !0,
                d: !0
            }),
            w(_).forEach(g),
            U.forEach(g),
            h = I(O),
            f = j(O, "SPAN", {});
            var W = w(f);
            v = S(W, e[10]),
            W.forEach(g),
            O.forEach(g),
            T.forEach(g),
            k.forEach(g),
            m.forEach(g),
            this.h()
        },
        h() {
            s(n, "class", "availability svelte-1pnjbe"),
            Z(n, "--right-width", e[1] ? `${e[9] - e[8]}px` : null),
            s(_, "fill", "currentColor"),
            s(_, "d", "M11.73 8a1.84 1.84 0 0 0-2.02.08.37.37 0 0 1-.4.02L7.48 7.04a.05.05 0 0 1 0-.08L9.3 5.91a.37.37 0 0 1 .4.02 1.84 1.84 0 1 0-.76-1.34.37.37 0 0 1-.18.36L6.93 6a.05.05 0 0 1-.07-.04V3.85a.37.37 0 0 1 .22-.33 1.84 1.84 0 1 0-1.54 0 .37.37 0 0 1 .22.33v2.11a.05.05 0 0 1-.07.04L3.86 4.95a.37.37 0 0 1-.18-.36 1.84 1.84 0 1 0-.77 1.34.37.37 0 0 1 .4-.02l1.82 1.05a.05.05 0 0 1 0 .08L3.3 8.1a.37.37 0 0 1-.4-.02 1.84 1.84 0 1 0 .78 1.33.37.37 0 0 1 .18-.36L5.69 8a.05.05 0 0 1 .07.04v2.11a.37.37 0 0 1-.22.33 1.84 1.84 0 1 0 1.54 0 .37.37 0 0 1-.22-.33V8.04A.05.05 0 0 1 6.93 8l1.83 1.05a.37.37 0 0 1 .18.36 1.84 1.84 0 1 0 2.79-1.4Z"),
            s(u, "width", "13"),
            s(u, "height", "14"),
            s(u, "fill", "none"),
            s(u, "viewBox", "0 0 13 14"),
            s(u, "class", "svelte-1pnjbe"),
            s(o, "href", d = e[0] ? e[5] : "/#contact"),
            s(o, "target", C = e[0] ? "_blank" : null),
            s(o, "rel", V = e[0] ? "external noopener" : null),
            s(o, "tabindex", "0"),
            s(o, "class", "svelte-1pnjbe"),
            s(c, "class", "contact svelte-1pnjbe"),
            $(()=>e[16].call(c)),
            s(t, "class", "container is-inner grid svelte-1pnjbe"),
            s(a, "class", "reachout text-caps-small svelte-1pnjbe"),
            P(a, "is-visible", e[7] && !e[6]),
            P(a, "is-bottom", e[0])
        },
        m(E, m) {
            X(E, a, m),
            i(a, t),
            ee(r, t, null),
            i(t, b),
            i(t, n),
            i(n, L),
            i(t, p),
            i(t, c),
            i(c, o),
            i(o, u),
            i(u, _),
            i(o, h),
            i(o, f),
            i(f, v),
            y = te(c, e[16].bind(c)),
            z = !0,
            B || (l = ae(o, "click", function() {
                ie(!e[0] && e[11]) && (!e[0] && e[11]).apply(this, arguments)
            }),
            B = !0)
        },
        p(E, [m]) {
            e = E;
            const k = {};
            m & 4 && (k.location = e[2]),
            m & 8 && (k.timezone = e[3]),
            r.$set(k),
            (!z || m & 16) && M(L, e[4]),
            m & 770 && Z(n, "--right-width", e[1] ? `${e[9] - e[8]}px` : null),
            (!z || m & 1024) && M(v, e[10]),
            (!z || m & 33 && d !== (d = e[0] ? e[5] : "/#contact")) && s(o, "href", d),
            (!z || m & 1 && C !== (C = e[0] ? "_blank" : null)) && s(o, "target", C),
            (!z || m & 1 && V !== (V = e[0] ? "external noopener" : null)) && s(o, "rel", V),
            (!z || m & 192) && P(a, "is-visible", e[7] && !e[6]),
            (!z || m & 1) && P(a, "is-bottom", e[0])
        },
        i(E) {
            z || (le(r.$$.fragment, E),
            z = !0)
        },
        o(E) {
            ne(r.$$.fragment, E),
            z = !1
        },
        d(E) {
            E && g(a),
            se(r),
            y(),
            B = !1,
            l()
        }
    }
}
function de(e, a, t) {
    let r, b, n, L;
    H(e, re, l=>t(17, n = l)),
    H(e, ce, l=>t(15, L = l));
    let {autohide: p=!0} = a, {bottom: c=!1} = a, {calculated: o=!0} = a, {revealDelay: u=250} = a, {location: _} = a, {timezone: h} = a, {available: f} = a, {callLabel: v} = a, {contactUrl: d} = a, C = !1, V = !1, y;
    const z = l=>{
        n.scrollTo("#contact", {
            easing: E=>Math.min(1, 1.001 - Math.pow(2, -10 * E))
        }),
        l.preventDefault()
    }
    ;
    oe(()=>{
        c || setTimeout(()=>t(7, V = !0), u);
        const l = ue(document.getElementById("map"), ()=>(t(6, C = !0),
        ()=>t(6, C = !1)), {
            amount: .5
        });
        return ()=>l()
    }
    );
    function B() {
        y = this.offsetWidth,
        t(8, y)
    }
    return e.$$set = l=>{
        "autohide"in l && t(12, p = l.autohide),
        "bottom"in l && t(0, c = l.bottom),
        "calculated"in l && t(1, o = l.calculated),
        "revealDelay"in l && t(13, u = l.revealDelay),
        "location"in l && t(2, _ = l.location),
        "timezone"in l && t(3, h = l.timezone),
        "available"in l && t(4, f = l.available),
        "callLabel"in l && t(14, v = l.callLabel),
        "contactUrl"in l && t(5, d = l.contactUrl)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 20481 && t(10, r = p && (c ? v : "Contact")),
        e.$$.dirty & 32768 && t(9, b = L)
    }
    ,
    [c, o, _, h, f, d, C, V, y, b, r, z, p, u, v, L, B]
}
class Le extends J {
    constructor(a) {
        super(),
        K(this, a, de, _e, Q, {
            autohide: 12,
            bottom: 0,
            calculated: 1,
            revealDelay: 13,
            location: 2,
            timezone: 3,
            available: 4,
            callLabel: 14,
            contactUrl: 5
        })
    }
}
export {Le as default};
