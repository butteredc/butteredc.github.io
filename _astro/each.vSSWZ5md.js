import {x as q, v as z, u as B} from "./index.JGMlkmnd.js";
function D(n) {
    return n?.length !== void 0 ? n : Array.from(n)
}
function E(n, d) {
    z(n, 1, 1, ()=>{
        d.delete(n.key)
    }
    )
}
function F(n, d, v, M, x, y, o, S, g, A, h, j) {
    let i = n.length
      , c = y.length
      , a = i;
    const w = {};
    for (; a--; )
        w[n[a].key] = a;
    const l = []
      , u = new Map
      , _ = new Map
      , m = [];
    for (a = c; a--; ) {
        const e = j(x, y, a)
          , t = v(e);
        let s = o.get(t);
        s ? M && m.push(()=>s.p(e, d)) : (s = A(t, e),
        s.c()),
        u.set(t, l[a] = s),
        t in w && _.set(t, Math.abs(a - w[t]))
    }
    const p = new Set
      , k = new Set;
    function r(e) {
        B(e, 1),
        e.m(S, h),
        o.set(e.key, e),
        h = e.first,
        c--
    }
    for (; i && c; ) {
        const e = l[c - 1]
          , t = n[i - 1]
          , s = e.key
          , f = t.key;
        e === t ? (h = e.first,
        i--,
        c--) : u.has(f) ? !o.has(s) || p.has(s) ? r(e) : k.has(f) ? i-- : _.get(s) > _.get(f) ? (k.add(s),
        r(e)) : (p.add(f),
        i--) : (g(t, o),
        i--)
    }
    for (; i--; ) {
        const e = n[i];
        u.has(e.key) || g(e, o)
    }
    for (; c; )
        r(l[c - 1]);
    return q(m),
    l
}
export {D as e, E as o, F as u};
