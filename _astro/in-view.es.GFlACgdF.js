const v = n=>typeof n == "function";
function l(n, r) {
    var t;
    return typeof n == "string" ? r ? ((t = r[n]) !== null && t !== void 0 || (r[n] = document.querySelectorAll(n)),
    n = r[n]) : n = document.querySelectorAll(n) : n instanceof Element && (n = [n]),
    Array.from(n || [])
}
const b = {
    any: 0,
    all: 1
};
function p(n, r, {root: t, margin: u, amount: e="any"}={}) {
    if (typeof IntersectionObserver > "u")
        return ()=>{}
        ;
    const d = l(n)
      , i = new WeakMap
      , g = c=>{
        c.forEach(o=>{
            const f = i.get(o.target);
            if (o.isIntersecting !== !!f)
                if (o.isIntersecting) {
                    const a = r(o);
                    v(a) ? i.set(o.target, a) : s.unobserve(o.target)
                } else
                    f && (f(o),
                    i.delete(o.target))
        }
        )
    }
      , s = new IntersectionObserver(g,{
        root: t,
        rootMargin: u,
        threshold: typeof e == "number" ? e : b[e]
    });
    return d.forEach(c=>s.observe(c)),
    ()=>s.disconnect()
}
export {v as a, p as i, l as r};
