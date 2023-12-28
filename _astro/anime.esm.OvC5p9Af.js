const Se = typeof window < "u"
  , st = Se ? window : null
  , Ee = Se ? document : null
  , b = {
    INVALID: 0,
    OBJECT: 1,
    ATTRIBUTE: 2,
    CSS: 3,
    TRANSFORM: 4,
    CSS_VAR: 5
}
  , _ = {
    NUMBER: 0,
    UNIT: 1,
    COLOR: 2,
    PATH: 3,
    COMPLEX: 4
}
  , H = {
    NONE: 0,
    AUTO: 1,
    FORCE: 2
}
  , P = {
    replace: 0,
    none: 1,
    add: 2
}
  , Rt = Symbol()
  , mt = Symbol()
  , pt = Symbol()
  , Ge = Symbol()
  , S = 1e-11
  , un = 1e12
  , Je = 1e3
  , lt = 120
  , le = ""
  , Ue = new Map;
Ue.set("x", "translateX");
Ue.set("y", "translateY");
Ue.set("z", "translateZ");
const Pt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"]
  , Ft = Pt.reduce((e,t)=>({
    ...e,
    [t]: t + "("
}), {})
  , fe = ()=>{}
  , dn = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i
  , hn = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i
  , fn = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i
  , _n = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i
  , mn = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i
  , Nt = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g
  , Vt = /^([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)+([a-z]+|%)$/i
  , pn = /([a-z])([A-Z])/g
  , Tn = /(\w+)(\([^)]+\)+)/g
  , Bt = /(\*=|\+=|-=)/
  , we = {
    id: null,
    keyframes: null,
    playbackRate: 1,
    frameRate: lt,
    loop: 0,
    reversed: !1,
    alternate: !1,
    autoplay: !0,
    beginDelay: 0,
    duration: Je,
    delay: 0,
    endDelay: 0,
    ease: "outQuad",
    composition: P.replace,
    modifier: e=>e,
    onBegin: fe,
    onUpdate: fe,
    onTick: fe,
    onRender: fe,
    onLoop: fe,
    onComplete: fe
}
  , gn = e=>{
    try {
        return Ee.querySelectorAll(e)
    } catch {
        return
    }
}
  , yn = e=>e.replace(pn, "$1-$2").toLowerCase()
  , Ce = (e,t)=>e.indexOf(t) === 0
  , Ye = Date.now
  , De = e=>Array.isArray(e)
  , ge = e=>e && e.constructor === Object
  , Me = e=>typeof e == "number" && !isNaN(e)
  , Pe = e=>typeof e == "string"
  , ze = e=>typeof e == "function"
  , m = e=>typeof e > "u"
  , Qe = e=>m(e) || e === null
  , Xt = e=>Se && e instanceof SVGElement
  , $t = e=>dn.test(e)
  , qt = e=>Ce(e, "rgb")
  , Ht = e=>Ce(e, "hsl")
  , bn = e=>$t(e) || qt(e) || Ht(e)
  , ct = e=>!we.hasOwnProperty(e)
  , ye = e=>Pe(e) ? parseFloat(e) : e
  , ve = Math.pow
  , Wt = Math.sqrt
  , Cn = Math.sin
  , Sn = Math.cos
  , ut = Math.abs
  , Rn = Math.ceil
  , dt = Math.floor
  , Nn = Math.asin
  , vn = Math.max
  , Tt = Math.PI
  , ie = (e,t,n)=>e < t ? t : e > n ? n : e
  , oe = (e,t)=>{
    const n = 10 ** (t || 0);
    return Math.round(e * n) / n
}
  , pe = (e,t,n)=>e + (t - e) * n
  , Oe = e=>e === 1 / 0 ? un : e
  , Ze = e=>e < S ? S : e
  , vt = e=>Se ? (Pe(e) && (e = gn(e) || e),
e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]) : [e]
  , j = e=>De(e) ? [...e] : e
  , Jt = (e,t)=>{
    const n = {
        ...e
    };
    for (let s in t)
        n[s] = m(e[s]) ? t[s] : e[s];
    return n
}
  , I = (e,t,n,s="_prev",i="_next")=>{
    let o = e._head
      , r = i;
    for (n && (o = e._tail,
    r = s); o; ) {
        const a = o[r];
        t(o),
        o = a
    }
}
  , ht = (e,t,n="_prev",s="_next")=>{
    const i = t[n]
      , o = t[s];
    i ? i[s] = o : e._head = o,
    o ? o[n] = i : e._tail = i,
    t[n] = null,
    t[s] = null
}
  , be = (e,t,n,s="_prev",i="_next")=>{
    let o = e._tail;
    for (; o && n && n(o, t); )
        o = o[s];
    const r = o ? o[i] : e._head;
    o ? o[i] = t : e._head = t,
    r ? r[s] = t : e._tail = t,
    t[s] = o,
    t[i] = r
}
;
class Yt {
    constructor() {
        this.deltaTime = 0,
        this._elapsedTime = 0,
        this._startTime = 0,
        this._lastTime = 0,
        this._scheduledTime = 0,
        this._frameDuration = Je / lt,
        this._fps = lt,
        this._speed = 1,
        this._hasChildren = !1,
        this._head = null,
        this._tail = null
    }
    get frameRate() {
        return this._fps
    }
    set frameRate(t) {
        const n = this._frameDuration
          , s = +t
          , i = s < S ? S : s
          , o = Je / i;
        this._fps = i,
        this._frameDuration = o,
        this._scheduledTime += o - n
    }
    get playbackRate() {
        return this._speed
    }
    set playbackRate(t) {
        const n = +t;
        this._speed = n < S ? S : n
    }
    requestTick(t) {
        const n = this._scheduledTime
          , s = this._elapsedTime;
        if (this._elapsedTime += t - s,
        s < n)
            return H.NONE;
        const i = this._frameDuration
          , o = s - n;
        return this._scheduledTime += o < i ? i : o,
        H.AUTO
    }
    computeDeltaTime(t) {
        const n = t - this._lastTime;
        return this.deltaTime = n,
        this._lastTime = t,
        n
    }
}
const Et = (e,t,n,s,i)=>{
    const o = e.duration
      , r = e.currentTime
      , a = e._beginDelay
      , c = e._currentIteration
      , u = e._iterationChangeStartTime
      , h = e._iterationChangeEndTime
      , g = e._iterationDuration
      , y = e._iterationCount
      , T = e._reversed
      , X = e._alternate
      , O = e._hasChildren
      , D = ie(t - a, -a, o)
      , E = i === H.FORCE
      , ee = i === H.AUTO
      , $ = D - r
      , W = E || ($ < 0 ? $ * -1 : $) >= 200;
    let J = 0
      , Y = D;
    y > 1 && (e._currentIteration = ~~(D / g),
    D >= o && e._currentIteration--,
    J = e._currentIteration % 2,
    Y = D % g);
    const F = T ^ (X && J)
      , V = D >= o ? F ? 0 : o : F ? g - Y : Y
      , ue = V < e._iterationTime
      , Re = W ? ue ? 2 : 1 : 0;
    e._iterationTime = V,
    e._backwards = ue && !F,
    !n && !e.began && D > 0 && (e.began = !0,
    e.onBegin(e)),
    e.currentTime = D;
    let N = 0;
    if ((E || ee && (t >= u && t <= h || t <= u && r !== 0 || t >= h && r !== o) || V >= h && r !== o || V <= u && r !== 0 || t <= r && r === o && e.completed) && (n || (e.computeDeltaTime(r),
    e.onUpdate(e)),
    !O)) {
        let l = e._head, p, te, _e, de, x = 0;
        const C = e._timelineOffset + V;
        for (; l; ) {
            const k = l._composition
              , z = l._currentTime
              , me = l._changeDuration
              , re = k === P.add;
            if ((Re || (z !== me || C <= l._absoluteChangeEndTime) && (z !== 0 || C >= l._absoluteChangeStartTime)) && (k === P.none || !l._isOverridden && (!l._isOverlapped || C <= l._absoluteChangeEndTime) && (!l._nextRep || l._nextRep._isOverridden || C <= l._nextRep._absoluteStartTime) && (!l._prevRep || l._prevRep._isOverridden || C >= l._prevRep._absoluteChangeEndTime))) {
                const ae = l._currentTime = ie(V - l._changeStartTime, 0, me)
                  , B = l._ease(ae / l._updateDuration)
                  , q = l._modifier
                  , Z = l._valueType;
                let A, G;
                if (Z === _.NUMBER)
                    A = G = q(pe(l._fromNumber, l._toNumber, B));
                else if (Z === _.UNIT)
                    G = q(oe(pe(l._fromNumber, l._toNumber, B), 3)),
                    A = `${G}${l._unit}`;
                else if (Z === _.COLOR) {
                    const R = l._fromNumbers
                      , w = l._toNumbers
                      , Q = oe(ie(q(pe(R[0], w[0], B)), 0, 255), 0)
                      , K = oe(ie(q(pe(R[1], w[1], B)), 0, 255), 0)
                      , Ne = oe(ie(q(pe(R[2], w[2], B)), 0, 255), 0)
                      , Fe = ie(q(pe(R[3], w[3], B)), 0, 1);
                    A = `rgba(${Q},${K},${Ne},${Fe})`
                } else if (Z === _.PATH)
                    G = q(l._path.p(B)),
                    A = G + l._unit;
                else if (Z === _.COMPLEX) {
                    A = l._strings[0];
                    for (let R = 0, w = l._toNumbers.length; R < w; R++) {
                        const Q = q(oe(pe(l._fromNumbers[R], l._toNumbers[R], B), 3))
                          , K = l._strings[R + 1];
                        A += `${K ? Q + K : Q}`,
                        re && (l._numbers[R] = Q)
                    }
                }
                if (s)
                    l._value = A;
                else {
                    const R = l.property
                      , w = l._tweenType;
                    p = l.target,
                    l._number = G,
                    w === b.OBJECT ? p[R] = A : w === b.ATTRIBUTE ? p.setAttribute(R, A) : (te = p.style,
                    w === b.TRANSFORM ? (p !== _e && (_e = p,
                    de = p[Ge]),
                    de[R] = A,
                    x = 1) : w === b.CSS ? te[R] = A : w === b.CSS_VAR && te.setProperty(R, A)),
                    N = 1
                }
            }
            if (x && l._renderTransforms) {
                let ae = le;
                for (let B in de)
                    ae += `${Ft[B]}${de[B]}) `;
                te.transform = ae,
                x = 0
            }
            l = l._next
        }
        e.began && N && e.onRender(e)
    }
    return e.began && (D >= o ? y === 1 / 0 ? e._startTime -= e.duration : e._currentIteration >= y - 1 && (e.paused = !0,
    e.completed || (e.completed = !0,
    e.onComplete(e),
    e._resolve(e))) : e._currentIteration !== c && (e.onLoop(e),
    e._hasChildren && I(e, l=>l.reset(), !0))),
    N
}
  , ce = (e,t,n,s,i)=>{
    if (Et(e, t, n, s, i),
    e._hasChildren) {
        let o = 0;
        const r = s ? t : e._iterationTime
          , a = Ye();
        I(e, c=>{
            o += Et(c, r - c._timelineOffset, n, s, c._fps < e._fps ? c.requestTick(a) : i)
        }
        , e._backwards),
        e.began && o && e.onRender(e)
    }
}
  , ke = {
    animation: null,
    render: fe
}
  , En = e=>{
    let t = ke.animation;
    return t || (t = {
        duration: S,
        _beginDelay: 0,
        _head: null,
        _tail: null
    },
    ke.animation = t,
    ke.render = ()=>{
        e.forEach(n=>{
            for (let s in n) {
                const i = n[s]
                  , o = i._head
                  , r = o._valueType === _.COMPLEX ? j(o._fromNumbers) : null;
                let a = o._fromNumber
                  , c = i._tail;
                for (; c && c !== o; )
                    r ? c._numbers.forEach((u,h)=>r[h] += u) : a += c._number,
                    c = c._prevAdd;
                o._toNumber = a,
                o._toNumbers = r
            }
        }
        ),
        ce(t, 1, 1, 0, H.FORCE)
    }
    ),
    t
}
  , zt = Se ? requestAnimationFrame : setImmediate
  , Dn = Se ? cancelAnimationFrame : clearImmediate;
class xn extends Yt {
    constructor() {
        super();
        const t = Ye();
        this._elapsedTime = t,
        this._startTime = t,
        this._lastTime = t,
        this.useDefaultMainLoop = !0,
        this.suspendWhenHidden = !0,
        this._reqId = 0
    }
    tick() {
        const t = Ye();
        if (this.requestTick(t)) {
            this.computeDeltaTime(t);
            const n = this._speed
              , s = this._fps;
            let i = this._head;
            for (; i; ) {
                const o = i._next;
                i.paused ? (ht(U, i),
                this._hasChildren = !!this._tail,
                i._running = !1,
                i.completed && !i._cancelled && i.cancel()) : ce(i, (t + i._startTime) * i._speed * n, 0, 0, i._fps < s ? i.requestTick(t) : H.AUTO),
                i = o
            }
            ke.render()
        }
    }
    start() {
        return this.useDefaultMainLoop && !this._reqId ? this._reqId = zt(Zt) : 0
    }
    resume() {
        return I(this, t=>t.resetTime()),
        this.start()
    }
    suspend() {
        return this._reqId = Dn(this._reqId),
        this
    }
    get playbackRate() {
        return super.playbackRate
    }
    set playbackRate(t) {
        super.playbackRate = t,
        I(this, n=>n.playbackRate = n._speed)
    }
}
const U = new xn
  , Zt = ()=>{
    U._head ? (U._reqId = zt(Zt),
    U.tick()) : U._reqId = 0
}
  , An = (e,t,n)=>{
    const s = e.style.transform;
    let i;
    if (s) {
        const o = e[Ge];
        let r;
        for (; r = Tn.exec(s); ) {
            const a = r[1]
              , c = r[2].slice(1, -1);
            o[a] = c,
            a === t && (i = c,
            n && (n[t] = c))
        }
    }
    return s && !m(i) ? i : Ce(t, "scale") ? "1" : Ce(t, "rotate") || Ce(t, "skew") ? "0deg" : "0px"
}
  , Kt = e=>{
    if (!Qe(e))
        if (De(e)) {
            const t = e
              , n = [].concat(...t.map(vt));
            return n.filter((s,i)=>n.indexOf(s) === i)
        } else
            return vt(e)
}
  , In = e=>{
    if (Qe(e))
        return;
    const t = Kt(e);
    for (let n = 0, s = t.length; n < s; n++) {
        const i = t[n];
        if (!i[Rt]) {
            i[Rt] = !0;
            const o = Xt(i);
            (i.nodeType || o) && (i[mt] = !0,
            i[pt] = o,
            i[Ge] = {})
        }
    }
    return t
}
  , On = ["opacity", "rotate", "overflow", "color"]
  , kn = (e,t)=>{
    if (On.includes(t))
        return !1;
    if (t in e.style || t in e) {
        if (t === "scale") {
            const n = e.parentNode;
            return n && n.tagName === "filter"
        }
        return !0
    }
}
  , wn = e=>{
    const t = hn.exec(e) || fn.exec(e)
      , n = m(t[4]) ? 1 : +t[4];
    return [+t[1], +t[2], +t[3], n]
}
  , Mn = e=>{
    const t = e.length
      , n = t === 4 || t === 5;
    return [+("0x" + e[1] + e[n ? 1 : 2]), +("0x" + e[n ? 2 : 3] + e[n ? 2 : 4]), +("0x" + e[n ? 3 : 5] + e[n ? 3 : 6]), t === 5 || t === 9 ? +(+("0x" + e[n ? 4 : 7] + e[n ? 4 : 8]) / 255).toFixed(3) : 1]
}
  , it = (e,t,n)=>(n < 0 && (n += 1),
n > 1 && (n -= 1),
n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e)
  , Ln = e=>{
    const t = _n.exec(e) || mn.exec(e)
      , n = +t[1] / 360
      , s = +t[2] / 100
      , i = +t[3] / 100
      , o = m(t[4]) ? 1 : +t[4];
    let r, a, c;
    if (s === 0)
        r = a = c = i;
    else {
        const u = i < .5 ? i * (1 + s) : i + s - i * s
          , h = 2 * i - u;
        r = oe(it(h, u, n + 1 / 3) * 255, 0),
        a = oe(it(h, u, n) * 255, 0),
        c = oe(it(h, u, n - 1 / 3) * 255, 0)
    }
    return [r, a, c, o]
}
  , Un = e=>qt(e) ? wn(e) : $t(e) ? Mn(e) : Ht(e) ? Ln(e) : [0, 0, 0, 1]
  , L = (e,t)=>m(e) ? t : e
  , Dt = (e,t,n,s)=>{
    if (ze(e)) {
        const i = e(t, n, s);
        return isNaN(+i) ? i || 0 : +i
    } else
        return e
}
  , Te = (e,t,n,s)=>{
    let i = Dt(e, t, n, s);
    return De(i) && (i = i.map(o=>Dt(o, t, n, s))),
    i
}
  , Gt = (e,t)=>{
    const n = e[mt] ? e[pt] && kn(e, t) ? b.ATTRIBUTE : Pt.includes(t) || Ue.get(t) ? b.TRANSFORM : Ce(t, "--") ? b.CSS_VAR : t in e.style ? b.CSS : Qe(e.getAttribute(t)) ? m(e[t]) ? b.INVALID : b.OBJECT : b.ATTRIBUTE : b.OBJECT;
    return n === b.INVALID && console.warn(`Can't find property '${t}' on target '${e}'.`),
    n
}
  , xt = (e,t,n)=>{
    const s = e.style[t];
    s && n && (n[t] = s);
    const i = s || getComputedStyle(e).getPropertyValue(t);
    return i === "auto" ? "0" : i
}
  , Xe = (e,t,n,s)=>{
    const i = m(n) ? Gt(e, t) : n;
    return i === b.OBJECT ? e[t] || 0 : i === b.ATTRIBUTE ? e.getAttribute(t) : i === b.TRANSFORM ? An(e, t, s) : i === b.CSS_VAR ? xt(e, t, s).trimStart() : xt(e, t, s)
}
  , ft = (e,t,n)=>n === "-" ? e - t : n === "+" ? e + t : e * t
  , gt = ()=>({
    t: _.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null,
    p: null
})
  , he = (e,t)=>{
    if (t.t = _.NUMBER,
    t.n = 0,
    t.u = null,
    t.o = null,
    t.d = null,
    t.s = null,
    t.p = null,
    !e)
        return t;
    let n = e;
    const s = +n;
    if (isNaN(s))
        if (m(e.inSvg)) {
            const i = Bt.exec(n);
            i && (n = n.slice(2),
            t.o = i[0][0]);
            const o = Vt.exec(n);
            if (o)
                return t.t = _.UNIT,
                t.n = +o[1],
                t.u = o[2],
                t;
            if (t.o)
                return t.n = +n,
                t;
            if (bn(n))
                return t.t = _.COLOR,
                t.d = Un(n),
                t;
            {
                const r = n + le
                  , a = r.match(Nt);
                return t.t = _.COMPLEX,
                t.d = a ? a.map(Number) : [],
                t.s = r.split(Nt) || [],
                t
            }
        } else
            return t.t = _.PATH,
            t.n = e.n,
            t.u = le,
            t.p = e,
            t;
    else
        return t.n = s,
        t
}
  , At = (e,t)=>(t.t = e._valueType,
t.n = e._toNumber,
t.u = e._unit,
t.o = null,
t.d = j(e._toNumbers),
t.s = j(e._strings),
t.p = e._path,
t)
  , $e = gt()
  , Qt = {
    _rep: new WeakMap,
    _add: new Map
}
  , Le = (e,t,n="_rep")=>{
    const s = Qt[n];
    let i = s.get(e);
    return i || (i = {},
    s.set(e, i)),
    i[t] ? i[t] : i[t] = {
        _head: null,
        _tail: null
    }
}
  , Pn = (e,t)=>e._isOverridden || e._absoluteStartTime >= t._absoluteStartTime
  , jt = (e,t)=>{
    const n = e._composition;
    if (n === P.replace) {
        const s = e._absoluteStartTime;
        be(t, e, Pn, "_prevRep", "_nextRep");
        const i = e._prevRep;
        if (i && i._absoluteChangeEndTime > s) {
            const r = i._changeStartTime
              , a = i._absoluteChangeEndTime - (r + i._updateDuration);
            i._absoluteChangeEndTime = s,
            i._changeDuration = s - a - r,
            i._currentTime = i._changeDuration,
            i._isOverlapped = 1,
            i._changeDuration < S && (i._changeDuration = S,
            i._currentTime = S)
        }
        let o = e._nextRep;
        if (o && o._absoluteStartTime >= s)
            for (; o; )
                o._changeDuration = S,
                o._currentTime = S,
                o._isOverlapped = 1,
                o._isOverridden = 1,
                o = o._nextRep
    } else if (n === P.add) {
        const s = Le(e.target, e.property, "_add")
          , i = En(Qt._add);
        let o = s._head;
        o || (o = {
            ...e
        },
        o._composition = P.replace,
        o._updateDuration = S,
        o._changeStartTime = 0,
        o._numbers = j(e._fromNumbers),
        o._number = 0,
        o._next = null,
        o._prev = null,
        be(s, o),
        be(i, o));
        const r = e._toNumber;
        if (e._fromNumber = o._fromNumber - r,
        e._toNumber = 0,
        e._numbers = j(e._fromNumbers),
        e._number = 0,
        o._fromNumber = r,
        e._toNumbers) {
            const a = j(e._toNumbers);
            a && a.forEach((c,u)=>{
                e._fromNumbers[u] = o._fromNumbers[u] - c,
                e._toNumbers[u] = 0
            }
            ),
            o._fromNumbers = a
        }
        be(s, e, null, "_prevAdd", "_nextAdd")
    }
    return e
}
  , Fn = e=>{
    const t = e._composition;
    if (t !== P.none) {
        const n = e.target
          , s = e.property
          , i = Le(n, s);
        if (ht(i, e, "_prevRep", "_nextRep"),
        t === P.add) {
            const o = Le(n, s, "_add");
            ht(o, e, "_prevAdd", "_nextAdd")
        }
    }
    return e
}
  , It = e=>(e.paused = !0,
e.began = !1,
e.completed = !1,
e)
  , _t = e=>(e._cancelled && (e._hasChildren ? I(e, _t) : I(e, t=>{
    t._composition !== P.none && jt(t, Le(t.target, t.property))
}
),
e._cancelled = 0),
e);
let Vn = 0;
class yt extends Yt {
    constructor(t={}, n) {
        super();
        const {id: s, beginDelay: i, duration: o, reversed: r, alternate: a, loop: c, autoplay: u, frameRate: h, playbackRate: g, onComplete: y, onLoop: T, onRender: X, onBegin: O, onUpdate: D} = t
          , E = n ? n.defaults : we
          , ee = L(o, 1 / 0)
          , $ = L(c, E.loop)
          , W = L(i, E.beginDelay)
          , J = $ === !0 || $ === 1 / 0 || $ < 0 ? 1 / 0 : $ + 1
          , Y = n ? 0 : U._elapsedTime
          , F = n ? 0 : W;
        this.id = m(s) ? o === S ? 0 : ++Vn : s,
        this.duration = Oe(ee * J),
        this.currentTime = -F,
        this.paused = !0,
        this.began = !1,
        this.completed = !1,
        this.onBegin = O || E.onBegin,
        this.onUpdate = D || E.onUpdate,
        this.onRender = X || E.onRender,
        this.onLoop = T || E.onLoop,
        this.onComplete = y || E.onComplete,
        this._hasChildren = !1,
        this._running = !1,
        this._autoplay = L(u, E.autoplay),
        this._cancelled = 0,
        this._reversed = +L(r, E.reversed),
        this._alternate = L(a, E.alternate),
        this._backwards = !1,
        this._timelineOffset = W + (n ? 0 : U._elapsedTime - U._startTime),
        this._beginDelay = F,
        this._iterationTime = 0,
        this._iterationDuration = ee,
        this._iterationChangeStartTime = 0,
        this._iterationChangeEndTime = ee,
        this._iterationCount = J,
        this._currentIteration = 0,
        this._resolve = fe,
        this._prev = null,
        this._next = null,
        this._elapsedTime = Y,
        this._startTime = Y,
        this._lastTime = Y,
        this._fps = L(h, E.frameRate),
        this._speed = L(g, E.playbackRate)
    }
    reset(t=0) {
        return _t(this),
        this._iterationTime = this._iterationDuration,
        ce(this, 0, 1, t, H.FORCE),
        It(this),
        this._hasChildren && I(this, It),
        this
    }
    init(t=0) {
        return this.frameRate = this._fps,
        this.playbackRate = this._speed,
        !t && this._hasChildren && ce(this, this.duration, 1, t, H.FORCE),
        this.reset(t),
        this._autoplay && this.play(),
        this
    }
    resetTime() {
        const t = 1 / (this._speed * U._speed);
        return this._startTime = (this.currentTime + this._beginDelay) * t - Ye() + 16,
        this
    }
    pause() {
        return this.paused ? this : (this.paused = !0,
        this)
    }
    play() {
        return this.paused ? ((this.completed || this._cancelled) && this.reset(0),
        this.paused = !1,
        this.duration <= S ? ce(this, 1, 0, 0, H.FORCE) : (this._running || (be(U, this),
        U._hasChildren = !0,
        this._running = !0),
        this.resetTime(),
        U.start()),
        this) : this
    }
    restart() {
        return this.reset(0).play()
    }
    seek(t, n) {
        _t(this),
        this.completed = !1;
        const s = this.paused;
        return this.paused = !0,
        ce(this, t, ~~n, 0, H.AUTO),
        s ? this : this.play()
    }
    reverse() {
        const t = this._reversed;
        return this._reversed = +(this._alternate && !(this._iterationCount % 2) ? t : !t),
        this.seek(this.duration - this.currentTime),
        this.resetTime(),
        this
    }
    cancel() {
        return this._hasChildren ? I(this, t=>t.cancel(), !0) : I(this, Fn),
        this._cancelled = 1,
        this.pause()
    }
    stretch(t) {
        const n = t / this.duration;
        return this.duration = Ze(Oe(this.duration * n)),
        this._iterationDuration = Ze(Oe(this._iterationDuration * n)),
        this._timelineOffset *= n,
        this._beginDelay *= n,
        this._iterationChangeStartTime *= n,
        this._iterationChangeEndTime *= n,
        this
    }
    get progress() {
        return oe(this.currentTime / this.duration, 3)
    }
    set progress(t) {
        const n = this.paused;
        this.pause().seek(this.duration * +t),
        n || this.play()
    }
    get playbackRate() {
        return super.playbackRate
    }
    set playbackRate(t) {
        super.playbackRate = t,
        this.resetTime()
    }
}
const xe = e=>e
  , en = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Bn = (e,t,n)=>{
    let s = 0, i = 1, o, r, a = 0;
    do
        r = s + (i - s) / 2,
        o = en(r, t, n) - e,
        o > 0 ? i = r : s = r;
    while (ut(o) > 1e-7 && ++a < 10);
    return r
}
  , Xn = (e,t,n,s)=>e === t && n === s ? xe : i=>i === 0 || i === 1 ? i : en(Bn(i, e, n), t, s)
  , $n = (e=10,t)=>{
    const n = t ? Rn : dt;
    return s=>n(ie(s, 0, 1) * e) * (1 / e)
}
  , qn = Tt / 2
  , Ot = Tt * 2
  , Ae = (e=1.675)=>t=>ve(t, +e)
  , kt = {
    [le]: Ae,
    Quad: Ae(2),
    Cubic: Ae(3),
    Quart: Ae(4),
    Quint: Ae(5),
    Sine: e=>1 - Sn(e * qn),
    Circ: e=>1 - Wt(1 - e * e),
    Expo: e=>e ? ve(2, 10 * e - 10) : 0,
    Bounce: e=>{
        let t, n = 4;
        for (; e < ((t = ve(2, --n)) - 1) / 11; )
            ;
        return 1 / ve(4, 3 - n) - 7.5625 * ve((t * 3 - 2) / 22 - e, 2)
    }
    ,
    Back: (e=1.70158)=>t=>(+e + 1) * t * t * t - +e * t * t,
    Elastic: (e=1,t=.3)=>{
        const n = ie(+e, 1, 10)
          , s = ie(+t, S, 2)
          , i = s / Ot * Nn(1 / n)
          , o = Ot / s;
        return r=>r === 0 || r === 1 ? r : -n * ve(2, -10 * (1 - r)) * Cn((1 - r - i) * o)
    }
}
  , wt = {
    in: e=>t=>e(t),
    out: e=>t=>1 - e(1 - t),
    inOut: e=>t=>t < .5 ? e(t * 2) / 2 : 1 - e(t * -2 + 2) / 2,
    outIn: e=>t=>t < .5 ? (1 - e(1 - t * 2)) / 2 : (e(t * 2 - 1) + 1) / 2
}
  , tn = (...e)=>{
    const t = e.length;
    if (!t)
        return xe;
    const n = t - 1
      , s = e[0]
      , i = e[n]
      , o = [0]
      , r = [ye(s)];
    for (let a = 1; a < n; a++) {
        const c = e[a]
          , u = Pe(c) ? c.trim().split(" ") : [c]
          , h = u[0]
          , g = u[1];
        o.push(m(g) ? a / n : ye(g) / 100),
        r.push(ye(h))
    }
    return r.push(ye(i)),
    o.push(1),
    function(c) {
        for (let u = 1, h = o.length; u < h; u++) {
            const g = o[u];
            if (c <= g) {
                const y = o[u - 1]
                  , T = r[u - 1];
                return T + (r[u] - T) * (c - y) / (g - y)
            }
        }
        return r[r.length - 1]
    }
}
  , Hn = (e=10,t=1)=>{
    const n = [0]
      , s = e - 1;
    for (let i = 1; i < s; i++) {
        const o = n[i - 1]
          , r = i / s
          , a = (i + 1) / s
          , c = r + (a - r) * Math.random()
          , u = r * (1 - t) + c * t;
        n.push(ie(u, o, 1))
    }
    return n.push(1),
    tn(...n)
}
  , nn = {
    linear: tn,
    irregular: Hn,
    steps: $n,
    cubicBezier: Xn
}
  , Ke = {
    linear: xe
};
for (let e in wt)
    for (let t in kt) {
        const n = kt[t]
          , s = wt[e]
          , i = t === le || t === "Back" || t === "Elastic"
          , o = i ? (a,c)=>s(n(a, c)) : s(n)
          , r = e + t;
        nn[r] = o,
        Ke[r] = i ? o() : o
    }
const Wn = e=>{
    if (e.indexOf("(") <= -1)
        return xe;
    const t = e.slice(0, -1).split("(")
      , n = nn[t[0]];
    return n ? Ke[e] = n(...t[1].split(",")) : xe
}
  , sn = e=>ze(e) ? e : Pe(e) ? Ke[e] ? Ke[e] : Wn(e) : xe
  , Mt = {}
  , Jn = (e,t,n)=>{
    if (n === b.TRANSFORM) {
        const s = Ue.get(e);
        return s || e
    } else if (n === b.CSS || n === b.ATTRIBUTE && Xt(t) && e in t.style) {
        const s = Mt[e];
        if (s)
            return s;
        {
            const i = yn(e);
            return Mt[e] = i,
            i
        }
    } else
        return e
}
  , ot = {
    deg: 1,
    rad: 180 / Tt,
    turn: 360
}
  , Lt = e=>(e.offsetWidth || 0) / 100
  , Ut = {}
  , Yn = (e,t,n)=>{
    const s = t.u
      , i = t.n;
    if (t.t === _.UNIT && s === n)
        return t;
    const o = i + s + n
      , r = Ut[o];
    if (!m(r))
        t.n = r;
    else {
        let a;
        if (s in ot)
            a = i * ot[s] / ot[n];
        else {
            const u = Ee.createElement(e.tagName)
              , h = u.style
              , g = e.parentNode
              , y = g && g !== Ee ? g : Ee.body;
            y.appendChild(u),
            h.position = "absolute",
            h.width = 100 + s;
            const T = Lt(u);
            h.width = 100 + n;
            const X = Lt(u)
              , O = T / X;
            y.removeChild(u),
            a = O * i
        }
        t.n = a,
        Ut[o] = a
    }
    return t.t,
    _.UNIT,
    t.u = n,
    t
}
  , bt = e=>{
    if (e._hasChildren)
        I(e, bt, !0);
    else {
        const t = e;
        t.pause(),
        I(t, n=>{
            const s = n.property
              , i = n.target;
            if (i[mt]) {
                const o = i.style
                  , r = t._inlineStyles[s];
                if (n._tweenType === b.TRANSFORM) {
                    const a = i[Ge];
                    if (m(r) || r === le ? delete a[s] : a[s] = r,
                    n._renderTransforms)
                        if (!Object.keys(a).length)
                            o.removeProperty("transform");
                        else {
                            let c = le;
                            for (let u in a)
                                c += Ft[u] + a[u] + ") ";
                            o.transform = c
                        }
                } else
                    m(r) || r === le ? o.removeProperty(s) : o[s] = r;
                t._tail === n && t.targets.forEach(a=>{
                    a.getAttribute("style") === le && a.removeAttribute("style")
                }
                )
            }
        }
        )
    }
    return e
}
  , d = gt()
  , f = gt()
  , qe = [null]
  , rt = [null, null]
  , He = {
    to: null
};
let zn = 0, Ie, se;
const Zn = e=>{
    const t = {}
      , n = [].concat(...e.map(s=>Object.keys(s))).filter(ct);
    for (let s = 0, i = n.length; s < i; s++) {
        const o = n[s];
        t[o] = e.map(r=>{
            const a = {};
            for (let c in r)
                ct(c) ? c === o && (a.to = r[c]) : a[c] = r[c];
            return a
        }
        )
    }
    return t
}
;
class on extends yt {
    constructor(t, n, s, i) {
        super(n, s);
        const o = In(t);
        if (!o)
            return this;
        const r = n.keyframes ? Jt(Zn(n.keyframes), n) : n
          , {delay: a, duration: c, endDelay: u, ease: h, modifier: g, composition: y} = r
          , T = s ? s.defaults : we
          , X = !m(h) && ge(h)
          , O = X ? h.solver : L(h, T.ease)
          , D = X ? h.duration : L(c, T.duration)
          , E = L(a, T.delay)
          , ee = L(u, T.endDelay)
          , $ = g || T.modifier
          , W = m(y) && o.length >= Je ? P.none : m(y) ? Me(T.composition) ? T.composition : P[T.composition] : Me(y) ? y : P[y]
          , J = {}
          , Y = this._timelineOffset;
        let F = 0
          , V = NaN
          , ue = 0
          , Re = 0;
        for (let N = 0, l = o.length; N < l; N++) {
            const p = o[N];
            let te = NaN
              , _e = NaN;
            for (let x in r)
                if (ct(x)) {
                    const C = Gt(p, x);
                    if (C !== b.INVALID) {
                        const k = Jn(x, p, C);
                        let z = r[x];
                        i && (rt[0] = z,
                        rt[1] = z,
                        z = rt),
                        De(z) ? z.length === 2 && !ge(z[0]) ? (He.to = z,
                        qe[0] = He,
                        Ie = qe) : Ie = z : (qe[0] = z,
                        Ie = qe);
                        let me = null
                          , re = null
                          , ae = NaN
                          , B = 0
                          , q = 0
                          , Z = 0;
                        for (let A = Ie.length; Z < A; Z++) {
                            const G = Ie[Z];
                            ge(G) && m(G.inSvg) ? se = G : (He.to = G,
                            se = He);
                            const R = re ? q : 0
                              , w = Y + R
                              , Q = se.ease
                              , K = Te(se.to, p, N, l)
                              , Ne = Te(se.from, p, N, l)
                              , Fe = !m(Q) && ge(Q)
                              , rn = Fe ? Q.solver : Q || O
                              , an = Fe ? Q.duration : Te(L(se.duration, A > 1 ? Te(D, p, N, l) / A : D), p, N, l)
                              , Ve = Te(L(se.delay, Z ? 0 : E), p, N, l)
                              , Ct = Te(L(se.endDelay, Z === A - 1 ? ee : 0), p, N, l)
                              , je = Te(L(se.composition, W), p, N, l)
                              , ln = se.modifier || $
                              , et = De(K)
                              , cn = et || !m(Ne) && !m(K);
                            let ne = re;
                            if (je !== P.none) {
                                me || (me = Le(p, k));
                                let v = me._head;
                                for (; v && !v._isOverridden && v._absoluteStartTime <= w; )
                                    ne = v,
                                    v = v._nextRep
                            }
                            if (cn ? (he(et ? K[0] : Ne, d),
                            he(et ? K[1] : K, f),
                            d.t === _.NUMBER && (ne ? ne._valueType === _.UNIT && (d.t = _.UNIT,
                            d.u = ne._unit) : (he(Xe(p, k, C, J), $e),
                            $e.t === _.UNIT && (d.t = _.UNIT,
                            d.u = $e.u)))) : (m(K) ? re ? At(re, f) : he(s && ne ? ne._value : Xe(p, k, C, J), f) : he(K, f),
                            m(Ne) ? re ? At(re, d) : he(s && ne ? ne._value : Xe(p, k, C, J), d) : he(Ne, d)),
                            d.o && (d.n = ft(ne ? ne._toNumber : he(Xe(p, k, C, J), $e).n, d.n, d.o)),
                            f.o && (f.n = ft(d.n, f.n, f.o)),
                            d.t !== f.t) {
                                if (d.t === _.COMPLEX || f.t === _.COMPLEX) {
                                    const v = d.t === _.COMPLEX ? d : f
                                      , M = d.t === _.COMPLEX ? f : d;
                                    M.t = _.COMPLEX,
                                    M.s = j(v.s),
                                    M.d = v.d.map(()=>M.n)
                                } else if (d.t === _.UNIT && f.t === _.PATH)
                                    f.u = d.u;
                                else if (d.t === _.UNIT || f.t === _.UNIT) {
                                    const v = d.t === _.UNIT ? d : f
                                      , M = d.t === _.UNIT ? f : d;
                                    M.t = _.UNIT,
                                    M.u = v.u
                                } else if (d.t === _.COLOR || f.t === _.COLOR) {
                                    const v = d.t === _.COLOR ? d : f
                                      , M = d.t === _.COLOR ? f : d;
                                    M.t = _.COLOR,
                                    M.s = v.s,
                                    M.d = [0, 0, 0, 1]
                                }
                            }
                            if (d.u !== f.u) {
                                let v = f.u ? d : f;
                                v = Yn(p, v, f.u ? f.u : d.u)
                            }
                            if (f.d && d.d && f.d.length !== d.d.length) {
                                const v = d.d.length > f.d.length ? d : f
                                  , M = v === d ? f : d;
                                M.d = v.d.map((Qn,St)=>m(M.d[St]) ? 0 : M.d[St]),
                                M.s = j(v.s)
                            }
                            f.t === _.PATH && p[pt] && (f.p.inSvg = !0);
                            const tt = +an || S
                              , nt = R + Ve + tt
                              , Be = {
                                id: zn++,
                                property: k,
                                target: p,
                                _value: null,
                                _delay: +Ve,
                                _endDelay: +Ct,
                                _ease: sn(rn),
                                _fromNumbers: j(d.d),
                                _toNumbers: j(f.d),
                                _strings: j(f.s),
                                _fromNumber: d.n,
                                _toNumber: f.n,
                                _numbers: null,
                                _number: 0,
                                _unit: f.u,
                                _path: x ? {
                                    ...f.p
                                } : null,
                                _modifier: ln,
                                _currentTime: 0,
                                _updateDuration: tt,
                                _changeStartTime: R + Ve,
                                _changeDuration: tt,
                                _absoluteStartTime: w,
                                _absoluteChangeStartTime: w + Ve,
                                _absoluteChangeEndTime: Y + nt,
                                _tweenType: C,
                                _valueType: f.t,
                                _composition: je,
                                _isOverlapped: 0,
                                _isOverridden: 0,
                                _renderTransforms: 0,
                                _prevRep: null,
                                _nextRep: null,
                                _prevAdd: null,
                                _nextAdd: null,
                                _prev: null,
                                _next: null
                            };
                            je !== P.none && jt(Be, me),
                            isNaN(ae) && (ae = Be._changeStartTime),
                            B = nt,
                            q = nt + Ct,
                            re = Be,
                            Re++,
                            be(this, Be)
                        }
                        (isNaN(V) || ae < V) && (V = ae),
                        q > F && (F = q),
                        B > ue && (ue = B),
                        C === b.TRANSFORM && (te = Re - Z,
                        _e = Re)
                    }
                }
            if (!isNaN(te)) {
                let x = 0;
                I(this, C=>{
                    x >= te && x < _e && (C._renderTransforms = 1,
                    C._composition === P.add && I(ke.animation, k=>{
                        k.id === C.id && (k._renderTransforms = 1)
                    }
                    )),
                    x++
                }
                )
            }
            const de = this._iterationCount;
            this.targets = o,
            this.duration = Oe(F * de),
            this._iterationDuration = F,
            this._iterationChangeStartTime = V,
            this._iterationChangeEndTime = ue,
            this._inlineStyles = J
        }
    }
    stretch(t) {
        const n = t / this.duration;
        return I(this, s=>{
            s._updateDuration = Ze(s._updateDuration * n),
            s._changeDuration = Ze(s._changeDuration * n),
            s._delay *= n,
            s._endDelay *= n,
            s._currentTime *= n,
            s._changeStartTime *= n,
            s._absoluteStartTime *= n,
            s._absoluteChangeStartTime *= n,
            s._absoluteChangeEndTime *= n
        }
        ),
        super.stretch(t)
    }
    revert() {
        return ce(this, 0, 1, 0, H.FORCE),
        bt(this),
        this.cancel()
    }
}
const Kn = (e,t)=>{
    if (Ce(t, "<")) {
        const n = t[1] === "<"
          , s = e._tail
          , i = s ? s._timelineOffset : 0;
        return n ? i : i + s.duration
    }
}
  , We = (e,t)=>{
    let n = e._iterationDuration;
    if (n === S && (n = 0),
    m(t))
        return n;
    if (Me(+t))
        return +t;
    const s = t
      , i = e ? e.labels : null
      , o = !Qe(i)
      , r = Kn(e, s)
      , a = !m(r)
      , c = Bt.exec(s);
    if (c) {
        const u = c[0]
          , h = s.split(u)
          , g = o && h[0] ? i[h[0]] : n
          , y = a ? r : o ? g : n
          , T = +h[1];
        return ft(y, T, u[0])
    } else
        return a ? r : o ? m(i[s]) ? n : i[s] : n
}
  , at = (e,t,n,s)=>{
    const i = Me(e.duration) && e.duration <= S ? n - S : n;
    e.beginDelay = i,
    e.autoplay = !1,
    ce(t, i, 1, 1, H.AUTO);
    const o = s ? new on(s,e,t,!1) : new yt(e,t);
    return o.init(1),
    be(t, o),
    I(t, r=>{
        const a = r._timelineOffset
          , c = a + r._iterationChangeStartTime;
        (isNaN(t._iterationChangeStartTime) || c < t._iterationChangeStartTime) && (t._iterationChangeStartTime = c);
        const u = a + r.duration;
        u > t._iterationDuration && (t._iterationDuration = u);
        const h = a + (r.duration - (r._iterationDuration - r._iterationChangeEndTime));
        h > t._iterationChangeEndTime && (t._iterationChangeEndTime = h)
    }
    ),
    t.duration = Oe(t._iterationDuration * t._iterationCount),
    t
}
;
class Gn extends yt {
    constructor(t={}) {
        super(t),
        this.duration = 0,
        this.labels = {},
        this.defaults = t && t.defaults ? Jt(t.defaults, we) : we,
        this._iterationDuration = 0,
        this._iterationChangeStartTime = NaN,
        this._iterationChangeEndTime = 0
    }
    add(t, n, s) {
        const i = ge(n)
          , o = ge(t)
          , r = ze(t);
        if (i || o || r) {
            if (this._hasChildren = !0,
            i) {
                const a = n;
                if (ze(s)) {
                    const c = s
                      , u = Kt(t)
                      , h = this.duration
                      , g = this._iterationDuration
                      , y = a.id;
                    let T = 0;
                    u.forEach(X=>{
                        const O = {
                            ...a
                        };
                        this.duration = h,
                        this._iterationDuration = g,
                        m(y) || (O.id = y + "-" + T),
                        at(O, this, c(X, T++, u.length, this), X)
                    }
                    )
                } else
                    at(a, this, We(this, s), t)
            } else
                at(o ? t : {
                    onComplete: t,
                    duration: S
                }, this, We(this, n), null);
            return this.init(1),
            this._autoplay ? this.play() : this
        } else if (Pe(t))
            return this.labels[t] = We(this, n),
            this
    }
    set(t, n, s) {
        return m(n) ? this : (n.duration = S,
        n.composition = P.replace,
        this.add(t, n, s))
    }
    stretch(t) {
        const n = t / this.duration
          , s = this.labels;
        I(this, i=>{
            i.stretch(i.duration * n)
        }
        );
        for (let i in s)
            s[i] *= n;
        return super.stretch(t)
    }
    revert() {
        return ce(this, 0, 1, 0, H.FORCE),
        bt(this),
        I(this, t=>t.revert, !0),
        this.cancel()
    }
}
const jn = (e,t={})=>{
    let n = []
      , s = 0;
    const i = t.from
      , o = t.reversed
      , r = t.ease
      , a = !m(r)
      , u = (a ? ge(r) : !1) ? r.solver : a ? sn(r) : null
      , h = t.grid
      , g = t.axis
      , y = m(i) || i === 0 || i === "first"
      , T = i === "center"
      , X = i === "last"
      , O = De(e)
      , D = ye(O ? e[0] : e)
      , E = O ? ye(e[1]) : 0
      , ee = Vt.exec(O ? e[1] : e)
      , $ = t.start || 0 + (O ? D : 0);
    let W = y ? 0 : Me(i) ? i : 0;
    return (J,Y,F,V)=>{
        if (T && (W = (F - 1) / 2),
        X && (W = F - 1),
        !n.length) {
            for (let l = 0; l < F; l++) {
                if (!h)
                    n.push(ut(W - l));
                else {
                    const p = T ? (h[0] - 1) / 2 : W % h[0]
                      , te = T ? (h[1] - 1) / 2 : dt(W / h[0])
                      , _e = l % h[0]
                      , de = dt(l / h[0])
                      , x = p - _e
                      , C = te - de;
                    let k = Wt(x * x + C * C);
                    g === "x" && (k = -x),
                    g === "y" && (k = -C),
                    n.push(k)
                }
                s = vn(...n)
            }
            u && (n = n.map(l=>u(l / s) * s)),
            o && (n = n.map(l=>g ? l < 0 ? l * -1 : -l : ut(s - l)))
        }
        const ue = O ? (E - D) / s : D;
        let N = (V ? We(V, m(t.start) ? V._iterationDuration : $) : $) + (ue * oe(n[Y], 2) || 0);
        return t.modifier && (N = t.modifier(N)),
        ee && (N = `${N}${ee[2]}`),
        N
    }
}
  , es = (e,t)=>new on(e,t,null,!1).init()
  , ts = e=>new Gn(e).init();
Se && (st.AnimeJS || (st.AnimeJS = []),
st.AnimeJS.push({
    version: "4.0.0-beta.94",
    engine: U
}),
Ee.addEventListener("visibilitychange", ()=>U.suspendWhenHidden ? Ee.hidden ? U.suspend() : U.resume() : 0));
export {es as a, ts as c, nn as e, jn as s};