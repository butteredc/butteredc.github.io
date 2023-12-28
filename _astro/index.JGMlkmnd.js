function w() {}
const Z = t=>t;
function xt(t, e) {
    for (const n in e)
        t[n] = e[n];
    return t
}
function tt(t) {
    return t()
}
function K() {
    return Object.create(null)
}
function N(t) {
    t.forEach(tt)
}
function H(t) {
    return typeof t == "function"
}
function Xt(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let M;
function Yt(t, e) {
    return t === e ? !0 : (M || (M = document.createElement("a")),
    M.href = e,
    t === M.href)
}
function bt(t) {
    return Object.keys(t).length === 0
}
function $t(t, ...e) {
    if (t == null) {
        for (const i of e)
            i(void 0);
        return w
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? ()=>n.unsubscribe() : n
}
function Zt(t, e, n) {
    t.$$.on_destroy.push($t(e, n))
}
function te(t, e, n, i) {
    if (t) {
        const s = et(t, e, n, i);
        return t[0](s)
    }
}
function et(t, e, n, i) {
    return t[1] && i ? xt(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function ee(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0)
            return s;
        if (typeof s == "object") {
            const r = []
              , o = Math.max(e.dirty.length, s.length);
            for (let a = 0; a < o; a += 1)
                r[a] = e.dirty[a] | s[a];
            return r
        }
        return e.dirty | s
    }
    return e.dirty
}
function ne(t, e, n, i, s, r) {
    if (s) {
        const o = et(e, n, i, r);
        t.p(o, s)
    }
}
function ie(t) {
    if (t.ctx.length > 32) {
        const e = []
          , n = t.ctx.length / 32;
        for (let i = 0; i < n; i++)
            e[i] = -1;
        return e
    }
    return -1
}
function se(t) {
    const e = {};
    for (const n in t)
        n[0] !== "$" && (e[n] = t[n]);
    return e
}
function re(t, e, n) {
    return t.set(n),
    e
}
function oe(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
const nt = typeof window < "u";
let it = nt ? ()=>window.performance.now() : ()=>Date.now()
  , U = nt ? t=>requestAnimationFrame(t) : w;
const $ = new Set;
function st(t) {
    $.forEach(e=>{
        e.c(t) || ($.delete(e),
        e.f())
    }
    ),
    $.size !== 0 && U(st)
}
function rt(t) {
    let e;
    return $.size === 0 && U(st),
    {
        promise: new Promise(n=>{
            $.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            $.delete(e)
        }
    }
}
let z = !1;
function vt() {
    z = !0
}
function Et() {
    z = !1
}
function Nt(t, e, n, i) {
    for (; t < e; ) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}
function Tt(t) {
    if (t.hydrate_init)
        return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let l = 0; l < e.length; l++) {
            const f = e[l];
            f.claim_order !== void 0 && c.push(f)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1)
      , i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let c = 0; c < e.length; c++) {
        const l = e[c].claim_order
          , f = (s > 0 && e[n[s]].claim_order <= l ? s + 1 : Nt(1, s, _=>e[n[_]].claim_order, l)) - 1;
        i[c] = n[f] + 1;
        const u = f + 1;
        n[u] = c,
        s = Math.max(u, s)
    }
    const r = []
      , o = [];
    let a = e.length - 1;
    for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
        for (r.push(e[c - 1]); a >= c; a--)
            o.push(e[a]);
        a--
    }
    for (; a >= 0; a--)
        o.push(e[a]);
    r.reverse(),
    o.sort((c,l)=>c.claim_order - l.claim_order);
    for (let c = 0, l = 0; c < o.length; c++) {
        for (; l < r.length && o[c].claim_order >= r[l].claim_order; )
            l++;
        const f = l < r.length ? r[l] : null;
        t.insertBefore(o[c], f)
    }
}
function ot(t, e) {
    t.appendChild(e)
}
function ct(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function At(t) {
    const e = R("style");
    return e.textContent = "/* empty */",
    kt(ct(t), e),
    e.sheet
}
function kt(t, e) {
    return ot(t.head || t, e),
    e.sheet
}
function St(t, e) {
    if (z) {
        for (Tt(t),
        (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
            t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else
        (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function Ct(t, e, n) {
    t.insertBefore(e, n || null)
}
function Mt(t, e, n) {
    z && !n ? St(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function E(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function ce(t, e) {
    for (let n = 0; n < t.length; n += 1)
        t[n] && t[n].d(e)
}
function R(t) {
    return document.createElement(t)
}
function lt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function V(t) {
    return document.createTextNode(t)
}
function le() {
    return V(" ")
}
function ae() {
    return V("")
}
function Q(t, e, n, i) {
    return t.addEventListener(e, n, i),
    ()=>t.removeEventListener(e, n, i)
}
function ue(t) {
    return function(e) {
        return e.preventDefault(),
        t.call(this, e)
    }
}
function at(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const Lt = ["width", "height"];
function Ot(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e)
        e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Lt.indexOf(i) === -1 ? t[i] = e[i] : at(t, i, e[i])
}
function jt(t, e) {
    Object.keys(e).forEach(n=>{
        Pt(t, n, e[n])
    }
    )
}
function Pt(t, e, n) {
    const i = e.toLowerCase();
    i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : at(t, e, n)
}
function fe(t) {
    return /-/.test(t) ? jt : Ot
}
function _e(t) {
    return t.dataset.svelteH
}
function Dt(t) {
    return Array.from(t.childNodes)
}
function ut(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}
function ft(t, e, n, i, s=!1) {
    ut(t);
    const r = (()=>{
        for (let o = t.claim_info.last_index; o < t.length; o++) {
            const a = t[o];
            if (e(a)) {
                const c = n(a);
                return c === void 0 ? t.splice(o, 1) : t[o] = c,
                s || (t.claim_info.last_index = o),
                a
            }
        }
        for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
            const a = t[o];
            if (e(a)) {
                const c = n(a);
                return c === void 0 ? t.splice(o, 1) : t[o] = c,
                s ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = o,
                a
            }
        }
        return i()
    }
    )();
    return r.claim_order = t.claim_info.total_claimed,
    t.claim_info.total_claimed += 1,
    r
}
function _t(t, e, n, i) {
    return ft(t, s=>s.nodeName === e, s=>{
        const r = [];
        for (let o = 0; o < s.attributes.length; o++) {
            const a = s.attributes[o];
            n[a.name] || r.push(a.name)
        }
        r.forEach(o=>s.removeAttribute(o))
    }
    , ()=>i(e))
}
function de(t, e, n) {
    return _t(t, e, n, R)
}
function he(t, e, n) {
    return _t(t, e, n, lt)
}
function Ht(t, e) {
    return ft(t, n=>n.nodeType === 3, n=>{
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length)
                return n.splitText(i.length)
        } else
            n.data = i
    }
    , ()=>V(e), !0)
}
function me(t) {
    return Ht(t, " ")
}
function X(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e)
            return i
    }
    return -1
}
function pe(t, e) {
    const n = X(t, "HTML_TAG_START", 0)
      , i = X(t, "HTML_TAG_END", n + 1);
    if (n === -1 || i === -1)
        return new I(e);
    ut(t);
    const s = t.splice(n, i - n + 1);
    E(s[0]),
    E(s[s.length - 1]);
    const r = s.slice(1, s.length - 1);
    if (r.length === 0)
        return new I(e);
    for (const o of r)
        o.claim_order = t.claim_info.total_claimed,
        t.claim_info.total_claimed += 1;
    return new I(e,r)
}
function ye(t, e) {
    e = "" + e,
    t.data !== e && (t.data = e)
}
function ge(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}
let L;
function zt() {
    if (L === void 0) {
        L = !1;
        try {
            typeof window < "u" && window.parent && window.parent.document
        } catch {
            L = !0
        }
    }
    return L
}
function we(t, e) {
    getComputedStyle(t).position === "static" && (t.style.position = "relative");
    const i = R("iframe");
    i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),
    i.setAttribute("aria-hidden", "true"),
    i.tabIndex = -1;
    const s = zt();
    let r;
    return s ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",
    r = Q(window, "message", o=>{
        o.source === i.contentWindow && e()
    }
    )) : (i.src = "about:blank",
    i.onload = ()=>{
        r = Q(i.contentWindow, "resize", e),
        e()
    }
    ),
    ot(t, i),
    ()=>{
        (s || r && i.contentWindow) && r(),
        E(i)
    }
}
function xe(t, e, n) {
    t.classList.toggle(e, !!n)
}
function Rt(t, e, {bubbles: n=!1, cancelable: i=!1}={}) {
    return new CustomEvent(t,{
        detail: e,
        bubbles: n,
        cancelable: i
    })
}
class Bt {
    is_svg = !1;
    e = void 0;
    n = void 0;
    t = void 0;
    a = void 0;
    constructor(e=!1) {
        this.is_svg = e,
        this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i=null) {
        this.e || (this.is_svg ? this.e = lt(n.nodeName) : this.e = R(n.nodeType === 11 ? "TEMPLATE" : n.nodeName),
        this.t = n.tagName !== "TEMPLATE" ? n : n.content,
        this.c(e)),
        this.i(i)
    }
    h(e) {
        this.e.innerHTML = e,
        this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1)
            Ct(this.t, this.n[n], e)
    }
    p(e) {
        this.d(),
        this.h(e),
        this.i(this.a)
    }
    d() {
        this.n.forEach(E)
    }
}
class I extends Bt {
    l = void 0;
    constructor(e=!1, n) {
        super(e),
        this.e = this.n = null,
        this.l = n
    }
    c(e) {
        this.l ? this.n = this.l : super.c(e)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1)
            Mt(this.t, this.n[n], e)
    }
}
function be(t, e) {
    return new t(e)
}
const j = new Map;
let P = 0;
function It(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function qt(t, e) {
    const n = {
        stylesheet: At(e),
        rules: {}
    };
    return j.set(t, n),
    n
}
function dt(t, e, n, i, s, r, o, a=0) {
    const c = 16.666 / i;
    let l = `{
`;
    for (let y = 0; y <= 1; y += c) {
        const p = e + (n - e) * r(y);
        l += y * 100 + `%{${o(p, 1 - p)}}
`
    }
    const f = l + `100% {${o(n, 1 - n)}}
}`
      , u = `__svelte_${It(f)}_${a}`
      , _ = ct(t)
      , {stylesheet: d, rules: h} = j.get(_) || qt(_, t);
    h[u] || (h[u] = !0,
    d.insertRule(`@keyframes ${u} ${f}`, d.cssRules.length));
    const m = t.style.animation || "";
    return t.style.animation = `${m ? `${m}, ` : ""}${u} ${i}ms linear ${s}ms 1 both`,
    P += 1,
    u
}
function W(t, e) {
    const n = (t.style.animation || "").split(", ")
      , i = n.filter(e ? r=>r.indexOf(e) < 0 : r=>r.indexOf("__svelte") === -1)
      , s = n.length - i.length;
    s && (t.style.animation = i.join(", "),
    P -= s,
    P || Wt())
}
function Wt() {
    U(()=>{
        P || (j.forEach(t=>{
            const {ownerNode: e} = t.stylesheet;
            e && E(e)
        }
        ),
        j.clear())
    }
    )
}
let k;
function A(t) {
    k = t
}
function ht() {
    if (!k)
        throw new Error("Function called outside component initialization");
    return k
}
function $e(t) {
    ht().$$.on_mount.push(t)
}
function ve(t) {
    ht().$$.on_destroy.push(t)
}
function Ee(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach(i=>i.call(this, e))
}
const b = []
  , Y = [];
let v = [];
const F = []
  , mt = Promise.resolve();
let G = !1;
function pt() {
    G || (G = !0,
    mt.then(yt))
}
function Ne() {
    return pt(),
    mt
}
function S(t) {
    v.push(t)
}
function Te(t) {
    F.push(t)
}
const q = new Set;
let x = 0;
function yt() {
    if (x !== 0)
        return;
    const t = k;
    do {
        try {
            for (; x < b.length; ) {
                const e = b[x];
                x++,
                A(e),
                Ft(e.$$)
            }
        } catch (e) {
            throw b.length = 0,
            x = 0,
            e
        }
        for (A(null),
        b.length = 0,
        x = 0; Y.length; )
            Y.pop()();
        for (let e = 0; e < v.length; e += 1) {
            const n = v[e];
            q.has(n) || (q.add(n),
            n())
        }
        v.length = 0
    } while (b.length);
    for (; F.length; )
        F.pop()();
    G = !1,
    q.clear(),
    A(t)
}
function Ft(t) {
    if (t.fragment !== null) {
        t.update(),
        N(t.before_update);
        const e = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(S)
    }
}
function Gt(t) {
    const e = []
      , n = [];
    v.forEach(i=>t.indexOf(i) === -1 ? e.push(i) : n.push(i)),
    n.forEach(i=>i()),
    v = e
}
let T;
function gt() {
    return T || (T = Promise.resolve(),
    T.then(()=>{
        T = null
    }
    )),
    T
}
function D(t, e, n) {
    t.dispatchEvent(Rt(`${e ? "intro" : "outro"}${n}`))
}
const O = new Set;
let g;
function Ae() {
    g = {
        r: 0,
        c: [],
        p: g
    }
}
function ke() {
    g.r || N(g.c),
    g = g.p
}
function Ut(t, e) {
    t && t.i && (O.delete(t),
    t.i(e))
}
function Se(t, e, n, i) {
    if (t && t.o) {
        if (O.has(t))
            return;
        O.add(t),
        g.c.push(()=>{
            O.delete(t),
            i && (n && t.d(1),
            i())
        }
        ),
        t.o(e)
    } else
        i && i()
}
const wt = {
    duration: 0
};
function Ce(t, e, n) {
    const i = {
        direction: "in"
    };
    let s = e(t, n, i), r = !1, o, a, c = 0;
    function l() {
        o && W(t, o)
    }
    function f() {
        const {delay: _=0, duration: d=300, easing: h=Z, tick: m=w, css: y} = s || wt;
        y && (o = dt(t, 0, 1, d, _, h, y, c++)),
        m(0, 1);
        const p = it() + _
          , C = p + d;
        a && a.abort(),
        r = !0,
        S(()=>D(t, !0, "start")),
        a = rt(B=>{
            if (r) {
                if (B >= C)
                    return m(1, 0),
                    D(t, !0, "end"),
                    l(),
                    r = !1;
                if (B >= p) {
                    const J = h((B - p) / d);
                    m(J, 1 - J)
                }
            }
            return r
        }
        )
    }
    let u = !1;
    return {
        start() {
            u || (u = !0,
            W(t),
            H(s) ? (s = s(i),
            gt().then(f)) : f())
        },
        invalidate() {
            u = !1
        },
        end() {
            r && (l(),
            r = !1)
        }
    }
}
function Me(t, e, n) {
    const i = {
        direction: "out"
    };
    let s = e(t, n, i), r = !0, o;
    const a = g;
    a.r += 1;
    let c;
    function l() {
        const {delay: f=0, duration: u=300, easing: _=Z, tick: d=w, css: h} = s || wt;
        h && (o = dt(t, 1, 0, u, f, _, h));
        const m = it() + f
          , y = m + u;
        S(()=>D(t, !1, "start")),
        "inert"in t && (c = t.inert,
        t.inert = !0),
        rt(p=>{
            if (r) {
                if (p >= y)
                    return d(0, 1),
                    D(t, !1, "end"),
                    --a.r || N(a.c),
                    !1;
                if (p >= m) {
                    const C = _((p - m) / u);
                    d(1 - C, C)
                }
            }
            return r
        }
        )
    }
    return H(s) ? gt().then(()=>{
        s = s(i),
        l()
    }
    ) : l(),
    {
        end(f) {
            f && "inert"in t && (t.inert = c),
            f && s.tick && s.tick(1, 0),
            r && (o && W(t, o),
            r = !1)
        }
    }
}
function Le(t, e, n) {
    const i = t.$$.props[e];
    i !== void 0 && (t.$$.bound[i] = n,
    n(t.$$.ctx[i]))
}
function Oe(t) {
    t && t.c()
}
function je(t, e) {
    t && t.l(e)
}
function Vt(t, e, n) {
    const {fragment: i, after_update: s} = t.$$;
    i && i.m(e, n),
    S(()=>{
        const r = t.$$.on_mount.map(tt).filter(H);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : N(r),
        t.$$.on_mount = []
    }
    ),
    s.forEach(S)
}
function Jt(t, e) {
    const n = t.$$;
    n.fragment !== null && (Gt(n.after_update),
    N(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Kt(t, e) {
    t.$$.dirty[0] === -1 && (b.push(t),
    pt(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function Pe(t, e, n, i, s, r, o=null, a=[-1]) {
    const c = k;
    A(t);
    const l = t.$$ = {
        fragment: null,
        ctx: [],
        props: r,
        update: w,
        not_equal: s,
        bound: K(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: K(),
        dirty: a,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    o && o(l.root);
    let f = !1;
    if (l.ctx = n ? n(t, e.props || {}, (u,_,...d)=>{
        const h = d.length ? d[0] : _;
        return l.ctx && s(l.ctx[u], l.ctx[u] = h) && (!l.skip_bound && l.bound[u] && l.bound[u](h),
        f && Kt(t, u)),
        _
    }
    ) : [],
    l.update(),
    f = !0,
    N(l.before_update),
    l.fragment = i ? i(l.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            vt();
            const u = Dt(e.target);
            l.fragment && l.fragment.l(u),
            u.forEach(E)
        } else
            l.fragment && l.fragment.c();
        e.intro && Ut(t.$$.fragment),
        Vt(t, e.target, e.anchor),
        Et(),
        yt()
    }
    A(c)
}
class De {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
        Jt(this, 1),
        this.$destroy = w
    }
    $on(e, n) {
        if (!H(n))
            return w;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n),
        ()=>{
            const s = i.indexOf(n);
            s !== -1 && i.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !bt(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const Qt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Qt);
export {xt as $, V as A, me as B, Ht as C, ye as D, lt as E, he as F, H as G, ke as H, Ce as I, Me as J, Ae as K, re as L, ae as M, fe as N, Ne as O, Y as P, ce as Q, U as R, De as S, Yt as T, te as U, ne as V, ie as W, ee as X, be as Y, Le as Z, Te as _, Dt as a, Ee as a0, Ot as a1, se as a2, I as a3, pe as a4, ue as a5, ve as a6, oe as a7, it as a8, rt as a9, Z as aa, at as b, de as c, E as d, R as e, Mt as f, _e as g, St as h, Pe as i, Zt as j, S as k, Q as l, Oe as m, w as n, je as o, ge as p, Vt as q, we as r, Xt as s, xe as t, Ut as u, Se as v, Jt as w, N as x, $e as y, le as z};
