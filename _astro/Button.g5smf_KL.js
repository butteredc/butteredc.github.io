import {S as C, i as E, s as S, n as b, $ as A, e as v, A as B, c, a as p, C as N, d as m, b as q, N as g, f as y, h as k, l as D, D as P, a0 as U} from "./index.JGMlkmnd.js";
import {g as j} from "./spread.AQEXjpNi.js";
/* empty css                       */
function w(t) {
    let e, l, a, s, o, u, _, r, d = [{
        class: "button svelte-r1kbxr"
    }, {
        href: s = t[1] ?? null
    }, {
        target: o = t[1] && t[3] ? "_blank" : void 0
    }, {
        rel: u = t[1] && t[3] ? "external noopener" : void 0
    }, {
        tabindex: "0"
    }, {
        role: "button"
    }], f = {};
    for (let n = 0; n < d.length; n += 1)
        f = A(f, d[n]);
    return {
        c() {
            e = v(t[2]),
            l = v("span"),
            a = B(t[0]),
            this.h()
        },
        l(n) {
            e = c(n, (t[2] || "null").toUpperCase(), {
                class: !0,
                href: !0,
                target: !0,
                rel: !0,
                tabindex: !0,
                role: !0
            });
            var i = p(e);
            l = c(i, "SPAN", {
                class: !0
            });
            var h = p(l);
            a = N(h, t[0]),
            h.forEach(m),
            i.forEach(m),
            this.h()
        },
        h() {
            q(l, "class", "svelte-r1kbxr"),
            g(t[2])(e, f)
        },
        m(n, i) {
            y(n, e, i),
            k(e, l),
            k(l, a),
            _ || (r = D(e, "click", t[4]),
            _ = !0)
        },
        p(n, i) {
            i & 1 && P(a, n[0]),
            g(n[2])(e, f = j(d, [{
                class: "button svelte-r1kbxr"
            }, i & 2 && s !== (s = n[1] ?? null) && {
                href: s
            }, i & 2 && o !== (o = n[1] && n[3] ? "_blank" : void 0) && {
                target: o
            }, i & 2 && u !== (u = n[1] && n[3] ? "external noopener" : void 0) && {
                rel: u
            }, {
                tabindex: "0"
            }, {
                role: "button"
            }]))
        },
        d(n) {
            n && m(e),
            _ = !1,
            r()
        }
    }
}
function z(t) {
    let e = t[2] && w(t);
    return {
        c() {
            e && e.c()
        },
        l(l) {
            e && e.l(l)
        },
        m(l, a) {
            e && e.m(l, a)
        },
        p(l, [a]) {
            l[2] && e.p(l, a)
        },
        i: b,
        o: b,
        d(l) {
            e && e.d(l)
        }
    }
}
function F(t, e, l) {
    let {label: a} = e
      , {href: s=void 0} = e;
    const o = s ? "a" : "button"
      , u = s && /^https?:\/\//i.test(s);
    function _(r) {
        U.call(this, t, r)
    }
    return t.$$set = r=>{
        "label"in r && l(0, a = r.label),
        "href"in r && l(1, s = r.href)
    }
    ,
    [a, s, o, u, _]
}
class J extends C {
    constructor(e) {
        super(),
        E(this, e, F, z, S, {
            label: 0,
            href: 1
        })
    }
}
export {J as B};
