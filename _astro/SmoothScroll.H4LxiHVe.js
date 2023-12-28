import {S as N, i as X, s as Y, j as D, y as I, L as q} from "./index.JGMlkmnd.js";
import {s as x} from "./index.DOgy6W64.js";
import "./index.s8Pg_BOU.js";
function z() {
    return z = Object.assign ? Object.assign.bind() : function(h) {
        for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (h[i] = e[i])
        }
        return h
    }
    ,
    z.apply(this, arguments)
}
function _(h, t, e) {
    return Math.max(h, Math.min(t, e))
}
class F {
    advance(t) {
        var e;
        if (!this.isRunning)
            return;
        let i = !1;
        if (this.lerp)
            this.value = (n = this.value,
            s = this.to,
            (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * n + o * s),
            Math.round(this.value) === this.to && (this.value = this.to,
            i = !0);
        else {
            this.currentTime += t;
            const r = _(0, this.currentTime / this.duration, 1);
            i = r >= 1;
            const l = i ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * l
        }
        var n, s, o;
        (e = this.onUpdate) == null || e.call(this, this.value, i),
        i && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {lerp: i=.1, duration: n=1, easing: s=l=>l, onStart: o, onUpdate: r}) {
        this.from = this.value = t,
        this.to = e,
        this.lerp = i,
        this.duration = n,
        this.easing = s,
        this.currentTime = 0,
        this.isRunning = !0,
        o?.(),
        this.onUpdate = r
    }
}
class j {
    constructor({wrapper: t, content: e, autoResize: i=!0}={}) {
        if (this.resize = ()=>{
            this.onWrapperResize(),
            this.onContentResize()
        }
        ,
        this.onWrapperResize = ()=>{
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        ,
        this.onContentResize = ()=>{
            this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth
        }
        ,
        this.wrapper = t,
        this.content = e,
        i) {
            const n = function(s, o) {
                let r;
                return function() {
                    let l = arguments
                      , u = this;
                    clearTimeout(r),
                    r = setTimeout(function() {
                        s.apply(u, l)
                    }, 250)
                }
            }(this.resize);
            this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(n),
            this.wrapperResizeObserver.observe(this.wrapper)),
            this.contentResizeObserver = new ResizeObserver(n),
            this.contentResizeObserver.observe(this.content)
        }
        this.resize()
    }
    destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(),
        (e = this.contentResizeObserver) == null || e.disconnect()
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class C {
    constructor() {
        this.events = {}
    }
    emit(t, ...e) {
        let i = this.events[t] || [];
        for (let n = 0, s = i.length; n < s; n++)
            i[n](...e)
    }
    on(t, e) {
        var i;
        return (i = this.events[t]) != null && i.push(e) || (this.events[t] = [e]),
        ()=>{
            var n;
            this.events[t] = (n = this.events[t]) == null ? void 0 : n.filter(s=>e !== s)
        }
    }
    off(t, e) {
        var i;
        this.events[t] = (i = this.events[t]) == null ? void 0 : i.filter(n=>e !== n)
    }
    destroy() {
        this.events = {}
    }
}
class U {
    constructor(t, {wheelMultiplier: e=1, touchMultiplier: i=2, normalizeWheel: n=!1}) {
        this.onTouchStart = s=>{
            const {clientX: o, clientY: r} = s.targetTouches ? s.targetTouches[0] : s;
            this.touchStart.x = o,
            this.touchStart.y = r,
            this.lastDelta = {
                x: 0,
                y: 0
            }
        }
        ,
        this.onTouchMove = s=>{
            const {clientX: o, clientY: r} = s.targetTouches ? s.targetTouches[0] : s
              , l = -(o - this.touchStart.x) * this.touchMultiplier
              , u = -(r - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = o,
            this.touchStart.y = r,
            this.lastDelta = {
                x: l,
                y: u
            },
            this.emitter.emit("scroll", {
                deltaX: l,
                deltaY: u,
                event: s
            })
        }
        ,
        this.onTouchEnd = s=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: s
            })
        }
        ,
        this.onWheel = s=>{
            let {deltaX: o, deltaY: r} = s;
            this.normalizeWheel && (o = _(-100, o, 100),
            r = _(-100, r, 100)),
            o *= this.wheelMultiplier,
            r *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: o,
                deltaY: r,
                event: s
            })
        }
        ,
        this.element = t,
        this.wheelMultiplier = e,
        this.touchMultiplier = i,
        this.normalizeWheel = n,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new C,
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    destroy() {
        this.emitter.destroy(),
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class V {
    constructor({wrapper: t=window, content: e=document.documentElement, wheelEventsTarget: i=t, eventsTarget: n=i, smoothWheel: s=!0, smoothTouch: o=!1, syncTouch: r=!1, syncTouchLerp: l=.1, __iosNoInertiaSyncTouchLerp: u=.4, touchInertiaMultiplier: g=35, duration: S, easing: a=c=>Math.min(1, 1.001 - Math.pow(2, -10 * c)), lerp: p=!S && .1, infinite: y=!1, orientation: k="vertical", gestureOrientation: A="vertical", touchMultiplier: M=1, wheelMultiplier: L=1, normalizeWheel: b=!1, autoResize: E=!0}={}) {
        this.onVirtualScroll = ({deltaX: c, deltaY: v, event: m})=>{
            if (m.ctrlKey)
                return;
            const f = m.type.includes("touch")
              , R = m.type.includes("wheel");
            if (this.options.gestureOrientation === "both" && c === 0 && v === 0 || this.options.gestureOrientation === "vertical" && v === 0 || this.options.gestureOrientation === "horizontal" && c === 0 || f && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && v <= 0)
                return;
            let T = m.composedPath();
            if (T = T.slice(0, T.indexOf(this.rootElement)),
            T.find(d=>{
                var W;
                return (d.hasAttribute == null ? void 0 : d.hasAttribute("data-lenis-prevent")) || f && (d.hasAttribute == null ? void 0 : d.hasAttribute("data-lenis-prevent-touch")) || R && (d.hasAttribute == null ? void 0 : d.hasAttribute("data-lenis-prevent-wheel")) || ((W = d.classList) == null ? void 0 : W.contains("lenis"))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void m.preventDefault();
            if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && f || this.options.smoothWheel && R,
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            m.preventDefault();
            let w = v;
            this.options.gestureOrientation === "both" ? w = Math.abs(v) > Math.abs(c) ? v : c : this.options.gestureOrientation === "horizontal" && (w = c);
            const H = f && this.options.syncTouch
              , O = f && m.type === "touchend" && Math.abs(w) > 1;
            O && (w = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + w, z({
                programmatic: !1
            }, H && {
                lerp: O ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
            }))
        }
        ,
        this.onNativeScroll = ()=>{
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const c = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - c),
                this.emit()
            }
        }
        ,
        window.lenisVersion = "1.0.29",
        t !== document.documentElement && t !== document.body || (t = window),
        this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: n,
            smoothWheel: s,
            smoothTouch: o,
            syncTouch: r,
            syncTouchLerp: l,
            __iosNoInertiaSyncTouchLerp: u,
            touchInertiaMultiplier: g,
            duration: S,
            easing: a,
            lerp: p,
            infinite: y,
            gestureOrientation: A,
            orientation: k,
            touchMultiplier: M,
            wheelMultiplier: L,
            normalizeWheel: b,
            autoResize: E
        },
        this.animate = new F,
        this.emitter = new C,
        this.dimensions = new j({
            wrapper: t,
            content: e,
            autoResize: E
        }),
        this.toggleClass("lenis", !0),
        this.velocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isSmooth = r || s || o,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll = new U(n,{
            touchMultiplier: M,
            wheelMultiplier: L,
            normalizeWheel: b
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClass("lenis", !1),
        this.toggleClass("lenis-smooth", !1),
        this.toggleClass("lenis-scrolling", !1),
        this.toggleClass("lenis-stopped", !1),
        this.toggleClass("lenis-locked", !1)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    off(t, e) {
        return this.emitter.off(t, e)
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped = !1,
        this.reset()
    }
    stop() {
        this.isStopped = !0,
        this.animate.stop(),
        this.reset()
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t,
        this.animate.advance(.001 * e)
    }
    scrollTo(t, {offset: e=0, immediate: i=!1, lock: n=!1, duration: s=this.options.duration, easing: o=this.options.easing, lerp: r=!s && this.options.lerp, onComplete: l=null, force: u=!1, programmatic: g=!0}={}) {
        if (!this.isStopped && !this.isLocked || u) {
            if (["top", "left", "start"].includes(t))
                t = 0;
            else if (["bottom", "right", "end"].includes(t))
                t = this.limit;
            else {
                var S;
                let a;
                if (typeof t == "string" ? a = document.querySelector(t) : (S = t) != null && S.nodeType && (a = t),
                a) {
                    if (this.options.wrapper !== window) {
                        const y = this.options.wrapper.getBoundingClientRect();
                        e -= this.isHorizontal ? y.left : y.top
                    }
                    const p = a.getBoundingClientRect();
                    t = (this.isHorizontal ? p.left : p.top) + this.animatedScroll
                }
            }
            if (typeof t == "number") {
                if (t += e,
                t = Math.round(t),
                this.options.infinite ? g && (this.targetScroll = this.animatedScroll = this.scroll) : t = _(0, t, this.limit),
                i)
                    return this.animatedScroll = this.targetScroll = t,
                    this.setScroll(this.scroll),
                    this.reset(),
                    void (l == null || l(this));
                if (!g) {
                    if (t === this.targetScroll)
                        return;
                    this.targetScroll = t
                }
                this.animate.fromTo(this.animatedScroll, t, {
                    duration: s,
                    easing: o,
                    lerp: r,
                    onStart: ()=>{
                        n && (this.isLocked = !0),
                        this.isScrolling = !0
                    }
                    ,
                    onUpdate: (a,p)=>{
                        this.isScrolling = !0,
                        this.velocity = a - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = a,
                        this.setScroll(this.scroll),
                        g && (this.targetScroll = a),
                        p || this.emit(),
                        p && (this.reset(),
                        this.emit(),
                        l?.(this),
                        this.__preventNextScrollEvent = !0,
                        requestAnimationFrame(()=>{
                            delete this.__preventNextScrollEvent
                        }
                        ))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
        var t
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(t) {
        this.__isSmooth !== t && (this.__isSmooth = t,
        this.toggleClass("lenis-smooth", t))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t,
        this.toggleClass("lenis-scrolling", t))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t,
        this.toggleClass("lenis-stopped", t))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t,
        this.toggleClass("lenis-locked", t))
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"),
        this.isLocked && (t += " lenis-locked"),
        this.isScrolling && (t += " lenis-scrolling"),
        this.isSmooth && (t += " lenis-smooth"),
        t
    }
    toggleClass(t, e) {
        this.rootElement.classList.toggle(t, e),
        this.emitter.emit("className change", this)
    }
}
function $(h, t, e) {
    let i;
    D(h, x, o=>e(1, i = o));
    let n = 0;
    I(()=>(q(x, i = new V({
        duration: 1.6,
        easing: o=>Math.min(1, 1.001 - Math.pow(2, -10 * o)),
        smoothWheel: !0,
        orientation: "vertical"
    }), i),
    requestAnimationFrame(s),
    ()=>{
        cancelAnimationFrame(n),
        i.destroy()
    }
    ));
    const s = o=>{
        i.raf(o),
        n = requestAnimationFrame(s)
    }
    ;
    return []
}
class G extends N {
    constructor(t) {
        super(),
        X(this, t, $, null, Y, {})
    }
}
export {G as default};
