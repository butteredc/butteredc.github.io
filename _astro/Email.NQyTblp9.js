import {S as j, i as B, s as H, e as v, z as J, c as g, a as w, B as K, d as p, b as d, k as R, t as A, f as y, h as b, r as Q, l as V, a5 as W, u as E, v as S, H as F, Q as G, j as L, a6 as M, A as x, C as z, D as U, g as X, I as Y, J as Z, K as $} from "./index.JGMlkmnd.js";
import {e as T} from "./each.vSSWZ5md.js";
import {f as q} from "./index.nJCu8LX1.js";
import {q as D} from "./index.aG_mIMe3.js";
import {r as N} from "./index.DOgy6W64.js";
/* empty css                       */
import "./index.s8Pg_BOU.js";
function O(c, e, a) {
    const t = c.slice();
    return t[6] = e[a],
    t[8] = a,
    t
}
function P(c) {
    let e, a = c[8] === 1 ? "@" : "", t, i = c[6] + "", r;
    return {
        c() {
            e = v("span"),
            t = x(a),
            r = x(i),
            this.h()
        },
        l(s) {
            e = g(s, "SPAN", {
                class: !0
            });
            var u = w(e);
            t = z(u, a),
            r = z(u, i),
            u.forEach(p),
            this.h()
        },
        h() {
            d(e, "class", "part svelte-sdwn1v")
        },
        m(s, u) {
            y(s, e, u),
            b(e, t),
            b(e, r)
        },
        p(s, u) {
            u & 1 && i !== (i = s[6] + "") && U(r, i)
        },
        d(s) {
            s && p(e)
        }
    }
}
function I(c) {
    let e, a = "Email copied to clipboard!", t, i, r;
    return {
        c() {
            e = v("span"),
            e.textContent = a,
            this.h()
        },
        l(s) {
            e = g(s, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }),
            X(e) !== "svelte-1wr57hc" && (e.textContent = a),
            this.h()
        },
        h() {
            d(e, "class", "notice text-caps svelte-sdwn1v")
        },
        m(s, u) {
            y(s, e, u),
            r = !0
        },
        i(s) {
            r || (s && R(()=>{
                r && (i && i.end(1),
                t = Y(e, q, {
                    y: 12,
                    duration: 500,
                    easing: D
                }),
                t.start())
            }
            ),
            r = !0)
        },
        o(s) {
            t && t.invalidate(),
            s && (i = Z(e, q, {
                y: -12,
                duration: 500,
                easing: D
            })),
            r = !1
        },
        d(s) {
            s && p(e),
            s && i && i.end()
        }
    }
}
function ee(c) {
    let e, a, t, i, r, s, u, k, _ = T(c[0].split("@")), f = [];
    for (let l = 0; l < _.length; l += 1)
        f[l] = P(O(c, _, l));
    let o = c[1] && I();
    return {
        c() {
            e = v("div"),
            a = v("a"),
            t = v("span");
            for (let l = 0; l < f.length; l += 1)
                f[l].c();
            i = J(),
            o && o.c(),
            this.h()
        },
        l(l) {
            e = g(l, "DIV", {
                class: !0
            });
            var h = w(e);
            a = g(h, "A", {
                href: !0,
                tabindex: !0,
                class: !0
            });
            var n = w(a);
            t = g(n, "SPAN", {
                class: !0
            });
            var m = w(t);
            for (let C = 0; C < f.length; C += 1)
                f[C].l(m);
            i = K(m),
            o && o.l(m),
            m.forEach(p),
            n.forEach(p),
            h.forEach(p),
            this.h()
        },
        h() {
            d(t, "class", "box svelte-sdwn1v"),
            d(a, "href", r = "mailto:" + c[0]),
            d(a, "tabindex", "0"),
            d(a, "class", "svelte-sdwn1v"),
            d(e, "class", "email svelte-sdwn1v"),
            R(()=>c[4].call(e)),
            A(e, "is-copied", c[1])
        },
        m(l, h) {
            y(l, e, h),
            b(e, a),
            b(a, t);
            for (let n = 0; n < f.length; n += 1)
                f[n] && f[n].m(t, null);
            b(t, i),
            o && o.m(t, null),
            s = Q(e, c[4].bind(e)),
            u || (k = V(a, "click", W(c[3])),
            u = !0)
        },
        p(l, [h]) {
            if (h & 1) {
                _ = T(l[0].split("@"));
                let n;
                for (n = 0; n < _.length; n += 1) {
                    const m = O(l, _, n);
                    f[n] ? f[n].p(m, h) : (f[n] = P(m),
                    f[n].c(),
                    f[n].m(t, i))
                }
                for (; n < f.length; n += 1)
                    f[n].d(1);
                f.length = _.length
            }
            l[1] ? o ? h & 2 && E(o, 1) : (o = I(),
            o.c(),
            E(o, 1),
            o.m(t, null)) : o && ($(),
            S(o, 1, 1, ()=>{
                o = null
            }
            ),
            F()),
            h & 1 && r !== (r = "mailto:" + l[0]) && d(a, "href", r),
            h & 2 && A(e, "is-copied", l[1])
        },
        i(l) {
            E(o)
        },
        o(l) {
            S(o)
        },
        d(l) {
            l && p(e),
            G(f, l),
            o && o.d(),
            s(),
            u = !1,
            k()
        }
    }
}
function te(c, e, a) {
    let t;
    L(c, N, _=>a(2, t = _));
    let {email: i} = e, r = !1, s;
    const u = ()=>{
        a(1, r = !0),
        s = setTimeout(()=>a(1, r = !1), 2e3),
        navigator.clipboard.writeText(i)
    }
    ;
    M(()=>{
        clearTimeout(s)
    }
    );
    function k() {
        t = this.offsetWidth,
        N.set(t)
    }
    return c.$$set = _=>{
        "email"in _ && a(0, i = _.email)
    }
    ,
    [i, r, t, u, k]
}
class ce extends j {
    constructor(e) {
        super(),
        B(this, e, te, ee, H, {
            email: 0
        })
    }
}
export {ce as default};
