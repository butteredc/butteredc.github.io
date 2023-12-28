import {S as I, i as M, s as S, e as y, a3 as k, z as B, A as P, c as E, a as q, a4 as R, d as m, B as j, C as x, b as g, p as z, t as w, f as A, h as p, l as H, D as F, n as V, x as G, j as L, y as T, L as D, P as U} from "./index.JGMlkmnd.js";
import {w as W} from "./index.s8Pg_BOU.js";
/* empty css                       */
import {i as J} from "./in-view.es.GFlACgdF.js";
function K(s) {
    let a, t, l, c, d, n, r, _ = `${s[4].x}deg`, o = `${s[4].y}deg`, u, v;
    return {
        c() {
            a = y("div"),
            t = y("div"),
            l = y("figure"),
            c = new k(!1),
            d = B(),
            n = y("h4"),
            r = P(s[1]),
            this.h()
        },
        l(i) {
            a = E(i, "DIV", {
                class: !0,
                role: !0
            });
            var e = q(a);
            t = E(e, "DIV", {
                class: !0
            });
            var f = q(t);
            l = E(f, "FIGURE", {
                class: !0
            });
            var b = q(l);
            c = R(b, !1),
            b.forEach(m),
            d = j(f),
            n = E(f, "H4", {
                class: !0
            });
            var h = q(n);
            r = x(h, s[1]),
            h.forEach(m),
            f.forEach(m),
            e.forEach(m),
            this.h()
        },
        h() {
            c.a = null,
            g(l, "class", "icon svelte-1qpahrz"),
            g(n, "class", "text-caps svelte-1qpahrz"),
            g(t, "class", "card__inner svelte-1qpahrz"),
            z(t, "--rotate-x", _),
            z(t, "--rotate-y", o),
            g(a, "class", "card svelte-1qpahrz"),
            g(a, "role", "presentation"),
            w(a, "is-visible", s[3])
        },
        m(i, e) {
            A(i, a, e),
            p(a, t),
            p(t, l),
            c.m(s[0], l),
            p(t, d),
            p(t, n),
            p(n, r),
            s[9](a),
            u || (v = [H(a, "mousemove", s[6]), H(a, "mouseleave", s[7])],
            u = !0)
        },
        p(i, [e]) {
            e & 1 && c.p(i[0]),
            e & 2 && F(r, i[1]),
            e & 16 && _ !== (_ = `${i[4].x}deg`) && z(t, "--rotate-x", _),
            e & 16 && o !== (o = `${i[4].y}deg`) && z(t, "--rotate-y", o),
            e & 8 && w(a, "is-visible", i[3])
        },
        i: V,
        o: V,
        d(i) {
            i && m(a),
            s[9](null),
            u = !1,
            G(v)
        }
    }
}
function N(s, a, t) {
    let l, {shape: c} = a, {label: d} = a, {delta: n=35} = a, r, _ = !1;
    const o = W({
        x: 0,
        y: 0
    });
    L(s, o, e=>t(4, l = e));
    const u = ({target: e, clientX: f, clientY: b})=>{
        const h = e
          , C = h.getBoundingClientRect();
        D(o, l = {
            x: ((f - C.left) / h.clientWidth - .5) * -n,
            y: ((b - C.top) / h.clientHeight - .5) * n
        }, l)
    }
      , v = ()=>{
        D(o, l = {
            x: 0,
            y: 0
        }, l)
    }
    ;
    T(()=>{
        J(r, ()=>(t(3, _ = !0),
        ()=>t(3, _ = !1)))
    }
    );
    function i(e) {
        U[e ? "unshift" : "push"](()=>{
            r = e,
            t(2, r)
        }
        )
    }
    return s.$$set = e=>{
        "shape"in e && t(0, c = e.shape),
        "label"in e && t(1, d = e.label),
        "delta"in e && t(8, n = e.delta)
    }
    ,
    [c, d, r, _, l, o, u, v, n, i]
}
class Z extends I {
    constructor(a) {
        super(),
        M(this, a, N, K, S, {
            shape: 0,
            label: 1,
            delta: 8
        })
    }
}
export {Z as default};
