import {r as I, a as W} from "./in-view.es.GFlACgdF.js";
const M = (e,t,n)=>Math.min(Math.max(n, e), t)
  , E = e=>typeof e == "number"
  , R = e=>Array.isArray(e) && !E(e[0])
  , F = (e,t,n)=>{
    const r = t - e;
    return ((n - e) % r + r) % r + e
}
;
function _(e, t) {
    return R(e) ? e[F(0, e.length, t)] : e
}
const A = (e,t,n)=>-n * e + n * t + e
  , P = e=>e
  , O = (e,t,n)=>t - e === 0 ? 1 : (n - e) / (t - e);
function T(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = O(0, t, r);
        e.push(A(n, 1, s))
    }
}
function k(e) {
    const t = [0];
    return T(t, e - 1),
    t
}
function j(e, t=k(e.length), n=P) {
    const r = e.length
      , s = r - t.length;
    return s > 0 && T(t, s),
    i=>{
        let o = 0;
        for (; o < r - 2 && !(i < t[o + 1]); o++)
            ;
        let f = M(0, 1, O(t[o], t[o + 1], i));
        return f = _(n, o)(f),
        A(e[o], e[o + 1], f)
    }
}
const B = e=>typeof e == "string";
function N(e, t) {
    return t ? e * (1e3 / t) : 0
}
function D(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
}
const v = new WeakMap;
let u;
function G(e, t) {
    if (t) {
        const {inlineSize: n, blockSize: r} = t[0];
        return {
            width: n,
            height: r
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function C({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = v.get(e)) === null || r === void 0 || r.forEach(s=>{
        s({
            target: e,
            contentSize: t,
            get size() {
                return G(e, n)
            }
        })
    }
    )
}
function V(e) {
    e.forEach(C)
}
function q() {
    typeof ResizeObserver > "u" || (u = new ResizeObserver(V))
}
function $(e, t) {
    u || q();
    const n = I(e);
    return n.forEach(r=>{
        let s = v.get(r);
        s || (s = new Set,
        v.set(r, s)),
        s.add(t),
        u?.observe(r)
    }
    ),
    ()=>{
        n.forEach(r=>{
            const s = v.get(r);
            s?.delete(t),
            s?.size || u?.unobserve(r)
        }
        )
    }
}
const w = new Set;
let p;
function J() {
    p = ()=>{
        const e = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , t = {
            target: window,
            size: e,
            contentSize: e
        };
        w.forEach(n=>n(t))
    }
    ,
    window.addEventListener("resize", p)
}
function K(e) {
    return w.add(e),
    p || J(),
    ()=>{
        w.delete(e),
        !w.size && p && (p = void 0)
    }
}
function Q(e, t) {
    return W(e) ? K(e) : $(e, t)
}
const U = 50
  , z = ()=>({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , X = ()=>({
    time: 0,
    x: z(),
    y: z()
})
  , Y = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function L(e, t, n, r) {
    const s = n[t]
      , {length: i, position: o} = Y[t]
      , f = s.current
      , h = n.time;
    s.current = e["scroll" + o],
    s.scrollLength = e["scroll" + i] - e["client" + i],
    s.offset.length = 0,
    s.offset[0] = 0,
    s.offset[1] = s.scrollLength,
    s.progress = O(0, s.scrollLength, s.current);
    const l = r - h;
    s.velocity = l > U ? 0 : N(s.current - f, l)
}
function Z(e, t, n) {
    L(e, "x", t, n),
    L(e, "y", t, n),
    t.time = n
}
function ee(e, t) {
    let n = {
        x: 0,
        y: 0
    }
      , r = e;
    for (; r && r !== t; )
        if (r instanceof HTMLElement)
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r instanceof SVGGraphicsElement && "getBBox"in r) {
            const {top: s, left: i} = r.getBBox();
            for (n.x += i,
            n.y += s; r && r.tagName !== "svg"; )
                r = r.parentNode
        }
    return n
}
const te = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , y = {
    start: 0,
    center: .5,
    end: 1
};
function H(e, t, n=0) {
    let r = 0;
    if (y[e] !== void 0 && (e = y[e]),
    B(e)) {
        const s = parseFloat(e);
        e.endsWith("px") ? r = s : e.endsWith("%") ? e = s / 100 : e.endsWith("vw") ? r = s / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = s / 100 * document.documentElement.clientHeight : e = s
    }
    return E(e) && (r = t * e),
    n + r
}
const ne = [0, 0];
function re(e, t, n, r) {
    let s = Array.isArray(e) ? e : ne
      , i = 0
      , o = 0;
    return E(e) ? s = [e, e] : B(e) && (e = e.trim(),
    e.includes(" ") ? s = e.split(" ") : s = [e, y[e] ? e : "0"]),
    i = H(s[0], n, r),
    o = H(s[1], t),
    i - o
}
const se = {
    x: 0,
    y: 0
};
function ie(e, t, n) {
    let {offset: r=te.All} = n;
    const {target: s=e, axis: i="y"} = n
      , o = i === "y" ? "height" : "width"
      , f = s !== e ? ee(s, e) : se
      , h = s === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : {
        width: s.clientWidth,
        height: s.clientHeight
    }
      , l = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[i].offset.length = 0;
    let a = !t[i].interpolate;
    const d = r.length;
    for (let c = 0; c < d; c++) {
        const x = re(r[c], l[o], h[o], f[i]);
        !a && x !== t[i].interpolatorOffsets[c] && (a = !0),
        t[i].offset[c] = x
    }
    a && (t[i].interpolate = j(k(d), t[i].offset),
    t[i].interpolatorOffsets = [...t[i].offset]),
    t[i].progress = t[i].interpolate(t[i].current)
}
function oe(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r != e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function le(e, t, n, r={}) {
    const s = r.axis || "y";
    return {
        measure: ()=>oe(e, r.target, n),
        update: i=>{
            Z(e, n, i),
            (r.offset || r.target) && ie(e, n, r)
        }
        ,
        notify: W(t) ? ()=>t(n) : ce(t, n[s])
    }
}
function ce(e, t) {
    return e.pause(),
    e.forEachNative((n,{easing: r})=>{
        var s, i;
        if (n.updateDuration)
            r || (n.easing = P),
            n.updateDuration(1);
        else {
            const o = {
                duration: 1e3
            };
            r || (o.easing = "linear"),
            (i = (s = n.effect) === null || s === void 0 ? void 0 : s.updateTiming) === null || i === void 0 || i.call(s, o)
        }
    }
    ),
    ()=>{
        e.currentTime = t.progress
    }
}
const g = new WeakMap
  , S = new WeakMap
  , m = new WeakMap
  , b = e=>e === document.documentElement ? window : e;
function ae(e, t={}) {
    var {container: n=document.documentElement} = t
      , r = D(t, ["container"]);
    let s = m.get(n);
    s || (s = new Set,
    m.set(n, s));
    const i = X()
      , o = le(n, e, i, r);
    if (s.add(o),
    !g.has(n)) {
        const l = ()=>{
            const d = performance.now();
            for (const c of s)
                c.measure();
            for (const c of s)
                c.update(d);
            for (const c of s)
                c.notify()
        }
        ;
        g.set(n, l);
        const a = b(n);
        window.addEventListener("resize", l, {
            passive: !0
        }),
        n !== document.documentElement && S.set(n, Q(n, l)),
        a.addEventListener("scroll", l, {
            passive: !0
        })
    }
    const f = g.get(n)
      , h = requestAnimationFrame(f);
    return ()=>{
        var l;
        typeof e != "function" && e.stop(),
        cancelAnimationFrame(h);
        const a = m.get(n);
        if (!a || (a.delete(o),
        a.size))
            return;
        const d = g.get(n);
        g.delete(n),
        d && (b(n).removeEventListener("scroll", d),
        (l = S.get(n)) === null || l === void 0 || l(),
        window.removeEventListener("resize", d))
    }
}
export {ae as s};