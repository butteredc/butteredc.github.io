const r = ()=>{}
;
const f = t=>(s,e,n,{client: l})=>{
    if (!t.hasAttribute("ssr"))
        return;
    const i = {};
    for (const [o,a] of Object.entries(n))
        i[o] = c(o, a);
    try {
        const o = new s({
            target: t,
            props: {
                ...e,
                $$slots: i,
                $$scope: {
                    ctx: []
                }
            },
            hydrate: l !== "only",
            $$inline: !0
        });
        t.addEventListener("astro:unmount", ()=>o.$destroy(), {
            once: !0
        })
    } catch {} finally {}
}
;
function c(t, s) {
    let e;
    return [()=>({
        m(n) {
            e = n,
            n.insertAdjacentHTML("beforeend", `<astro-slot${t === "default" ? "" : ` name="${t}"`}>${s}</astro-slot>`)
        },
        c: r,
        l: r,
        d() {
            if (!e)
                return;
            const n = e.querySelector(`astro-slot${t === "default" ? ":not([name])" : `[name="${t}"]`}`);
            n && n.remove()
        }
    }), r, r]
}
export {f as default};
