import {S as Z, i as V, s as G, $ as _, e as J, c as K, a1 as k, f as Q, l as X, n as U, d as Y, a2 as I, a0 as tt} from "./index.JGMlkmnd.js";
import {g as rt} from "./spread.AQEXjpNi.js";
const et = {
    "images.ctfassets.net": "contentful",
    "cdn.builder.io": "builder.io",
    "images.prismic.io": "imgix",
    "www.datocms-assets.com": "imgix",
    "cdn.sanity.io": "imgix",
    "images.unsplash.com": "imgix",
    "cdn.shopify.com": "shopify",
    "s7d1.scene7.com": "scene7",
    "ip.keycdn.com": "keycdn",
    "assets.caisy.io": "bunny",
    "images.contentstack.io": "contentstack"
}
  , nt = {
    "imgix.net": "imgix",
    "files.wordpress.com": "wordpress",
    "b-cdn.net": "bunny",
    "storyblok.com": "storyblok",
    "kc-usercontent.com": "kontent.ai",
    "cloudinary.com": "cloudinary",
    "kxcdn.com": "keycdn",
    "imgeng.in": "imageengine",
    "imagekit.io": "imagekit",
    "cloudimg.io": "cloudimage"
}
  , st = {
    "/cdn-cgi/image/": "cloudflare",
    "/cdn-cgi/imagedelivery/": "cloudflare_images",
    "/_next/image": "nextjs",
    "/_next/static": "nextjs",
    "/_vercel/image": "vercel",
    "/is/image": "scene7",
    "/_ipx/": "ipx",
    "/_image": "astro",
    "/.netlify/images": "netlify"
}
  , $ = r=>{
    if (!r)
        return r;
    const t = Number(r);
    return isNaN(t) ? r : Math.round(t)
}
  , c = (r,t,e,s,n)=>{
    e ? (n && (e = $(e)),
    r.searchParams.set(t, e.toString())) : s && r.searchParams.delete(t)
}
  , g = (r,t,e)=>{
    r.searchParams.has(t) || r.searchParams.set(t, e.toString())
}
  , w = (r,t)=>{
    const e = Number(r.searchParams.get(t));
    return isNaN(e) ? void 0 : e
}
  , q = r=>{
    const {pathname: t, search: e} = r;
    return `${t}${e}`
}
  , P = r=>r.hostname === "n" ? q(r) : r.toString()
  , m = (r,t)=>typeof r == "string" ? new URL(r,t ?? "http://n/") : r
  , O = new Map(Object.entries(et))
  , at = Object.entries(nt);
function ot(r) {
    return A(r) || it(r)
}
function A(r) {
    if (typeof r == "string" && !r.startsWith("https://"))
        return !1;
    const {hostname: t} = m(r);
    if (O.has(t))
        return O.get(t);
    for (const [e,s] of at)
        if (t.endsWith(`.${e}`))
            return s;
    return !1
}
function it(r) {
    const {pathname: t} = m(r);
    for (const [e,s] of Object.entries(st))
        if (t.startsWith(e))
            return s;
    return !1
}
const ct = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return t && t > 4e3 && (e && (e = Math.round(e * 4e3 / t)),
    t = 4e3),
    e && e > 4e3 && (t && (t = Math.round(t * 4e3 / e)),
    e = 4e3),
    c(n, "w", t, !0, !0),
    c(n, "h", e, !0, !0),
    c(n, "fm", s),
    g(n, "fit", "fill"),
    n
}
  , ut = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "width", t, !0, !0),
    c(n, "height", e, !0, !0),
    c(n, "format", s),
    t && e && (g(n, "fit", "cover"),
    g(n, "sharp", "true")),
    n
}
  , ft = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    if (c(n, "w", t, !0, !0),
    c(n, "h", e, !0, !0),
    g(n, "fit", "min"),
    s) {
        n.searchParams.set("fm", s);
        const a = n.searchParams.get("auto");
        a === "format" ? n.searchParams.delete("auto") : a?.includes("format") && n.searchParams.set("auto", a.split(",").filter(o=>o !== "format").join(","))
    } else
        n.searchParams.delete("fm"),
        n.searchParams.get("auto")?.includes("format") || n.searchParams.append("auto", "format");
    return n
}
  , mt = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/
  , lt = r=>{
    const t = m(r)
      , e = t.pathname.match(mt);
    if (!e)
        throw new Error("Invalid Shopify URL");
    const [,s,n,a,o,i,u,f] = e;
    t.pathname = `${s}${u}`;
    const l = a || t.searchParams.get("width")
      , d = o || t.searchParams.get("height");
    return t.searchParams.delete("width"),
    t.searchParams.delete("height"),
    {
        base: t.toString(),
        width: Number(l) || void 0,
        height: Number(d) || void 0,
        format: f ? f.slice(1) : void 0,
        params: {
            crop: i,
            size: n
        },
        cdn: "shopify"
    }
}
  , dt = ({base: r, width: t, height: e, format: s, params: n})=>{
    const a = m(r);
    return c(a, "width", t, !0, !0),
    c(a, "height", e, !0, !0),
    c(a, "crop", n?.crop),
    c(a, "format", s),
    a
}
  , pt = ({url: r, width: t, height: e})=>{
    const s = lt(r);
    if (!s)
        return;
    const n = {
        ...s,
        width: t,
        height: e
    };
    return dt(n)
}
  , gt = ({url: r, width: t, height: e})=>{
    const s = m(r);
    return c(s, "w", t, !0, !0),
    c(s, "h", e, !0, !0),
    g(s, "crop", "1"),
    s
}
  , ht = ({url: r, width: t, height: e})=>{
    const s = m(r);
    return c(s, "w", t, !0, !0),
    c(s, "h", e, !0, !0),
    c(s, "q", w(s, "q"), !0),
    s
}
  , yt = /https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g
  , bt = r=>r ? Object.fromEntries(r.split(",").map(t=>t.split("_"))) : {}
  , C = ({host: r, cloudName: t, assetType: e, deliveryType: s, signature: n, transformations: a={}, version: o, id: i, format: u})=>{
    u && (a.f = u);
    const f = Object.entries(a).map(([d,p])=>`${d}_${p}`).join(",");
    return `https://${[r, t, e, s, n, f, o, i].filter(Boolean).join("/")}`
}
  , T = r=>{
    const e = [...m(r).toString().matchAll(yt)];
    if (!e.length)
        throw new Error("Invalid Cloudinary URL");
    const s = e[0].groups || {}
      , {transformations: n="", idAndFormat: a, ...o} = s;
    delete s.idAndFormat;
    const i = a.lastIndexOf(".")
      , u = i < 0 ? a : a.slice(0, i)
      , f = i < 0 ? void 0 : a.slice(i + 1)
      , {w: l, h: d, f: p, ...y} = bt(n)
      , h = p && p !== "auto" ? p : f;
    return {
        base: C({
            ...o,
            id: u,
            transformations: y
        }),
        width: Number(l) || void 0,
        height: Number(d) || void 0,
        format: h,
        cdn: "cloudinary",
        params: {
            ...s,
            id: s.deliveryType === "fetch" ? a : u,
            format: h,
            transformations: y
        }
    }
}
  , wt = ({base: r, width: t, height: e, format: s, params: n})=>{
    const a = T(r.toString())
      , o = {
        transformations: {},
        ...a.params,
        ...n,
        format: s || "auto"
    };
    return t && (o.transformations.w = $(t).toString()),
    e && (o.transformations.h = $(e).toString()),
    o.transformations.c ||= "lfill",
    C(o)
}
  , xt = ({url: r, width: t, height: e, format: s="auto"})=>{
    const n = T(r);
    if (!n)
        throw new Error("Invalid Cloudinary URL");
    if (n.params?.assetType !== "image")
        throw new Error("Cloudinary transformer only supports images");
    if (n.params?.signature)
        throw new Error("Cloudinary transformer does not support signed URLs");
    const a = {
        ...n,
        width: t,
        height: e,
        format: s
    };
    return wt(a)
}
  , _t = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g
  , $t = r=>Object.fromEntries(r.split(",").map(t=>t.split("=")))
  , F = ({host: r, transformations: t={}, path: e})=>{
    const s = Object.entries(t).map(([a,o])=>`${a}=${o}`).join(",");
    return `https://${[r, "cdn-cgi", "image", s, e].join("/")}`
}
  , z = r=>{
    const t = m(r)
      , e = [...t.toString().matchAll(_t)];
    if (!e.length)
        throw new Error("Invalid Cloudflare URL");
    const s = e[0].groups || {}
      , {transformations: n, ...a} = s
      , {width: o, height: i, f: u, ...f} = $t(n);
    return F({
        ...a,
        transformations: f
    }),
    {
        base: t.toString(),
        width: Number(o) || void 0,
        height: Number(i) || void 0,
        format: u,
        cdn: "cloudflare",
        params: {
            ...s,
            transformations: f
        }
    }
}
  , St = ({base: r, width: t, height: e, format: s, params: n})=>{
    const a = z(r.toString())
      , o = {
        transformations: {},
        ...a.params,
        ...n
    };
    return t && (o.transformations.width = t?.toString()),
    e && (o.transformations.height = e?.toString()),
    s && (o.transformations.f = s === "jpg" ? "jpeg" : s),
    o.transformations.fit ||= "cover",
    new URL(F(o))
}
  , Pt = ({url: r, width: t, height: e, format: s="auto"})=>{
    const n = z(r);
    if (!n)
        throw new Error("Invalid Cloudflare URL");
    const a = {
        ...n,
        width: t,
        height: e,
        format: s
    };
    return St(a)
}
  , vt = ({url: r, width: t, height: e})=>{
    const s = m(r);
    return c(s, "width", t, !0, !0),
    t && e && g(s, "aspect_ratio", `${t}:${e}`),
    s
}
  , jt = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g
  , kt = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g
  , Ut = r=>r ? Object.fromEntries(r.split(":").map(t=>{
    if (!t)
        return [];
    const [e,s] = t.split("(");
    return [e, s.replace(")", "")]
}
)) : {}
  , It = r=>{
    if (!r)
        return;
    const t = Object.entries(r).map(([e,s])=>`${e}(${s ?? ""})`);
    if (t.length !== 0)
        return `filters:${t.join(":")}`
}
  , Ot = r=>{
    const t = m(r)
      , e = t.hostname === "img2.storyblok.com" ? kt : jt
      , [s] = t.pathname.matchAll(e);
    if (!s || !s.groups)
        throw new Error("Invalid Storyblok URL");
    const {id: n, crop: a, width: o, height: i, filters: u, flipx: f, flipy: l} = s.groups
      , {format: d, ...p} = Ut(u);
    return t.hostname === "img2.storyblok.com" && (t.hostname = "a.storyblok.com"),
    {
        base: t.origin + n,
        width: Number(o) || void 0,
        height: Number(i) || void 0,
        format: d,
        params: {
            crop: a,
            filters: p,
            flipx: f,
            flipy: l
        },
        cdn: "storyblok"
    }
}
  , Et = ({base: r, width: t=0, height: e=0, format: s, params: n={}})=>{
    const {crop: a, filters: o, flipx: i="", flipy: u=""} = n
      , f = `${i}${t}x${u}${e}`;
    return new URL([r, "m", a, f, It(o), s].filter(Boolean).join("/"))
}
  , Nt = ({url: r, width: t, height: e, format: s})=>{
    const n = Ot(r);
    if (n)
        return s && (n.params || (n.params = {
            filters: {}
        }),
        n.params.filters || (n.params.filters = {}),
        n.params.filters.format = s),
        Et({
            ...n,
            width: t,
            height: e
        })
}
  , Wt = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "w", t, !0, !0),
    c(n, "h", e, !0, !0),
    c(n, "fm", s, !0),
    t && e && g(n, "fit", "crop"),
    n
}
  , E = r=>{
    const e = m(r).searchParams.get("url");
    if (!e || !e.startsWith("http"))
        return !1;
    const s = A(e);
    return s ? {
        cdn: s,
        url: e
    } : !1
}
  , Rt = ({base: r, width: t, params: {quality: e=75, root: s="_vercel"}={}})=>{
    const n = new URL("http://n");
    return n.pathname = `/${s}/image`,
    n.searchParams.set("url", r.toString()),
    c(n, "w", t, !1, !0),
    g(n, "q", e),
    q(n)
}
  , D = ({url: r, width: t, cdn: e})=>{
    const s = m(r)
      , n = s.pathname.startsWith("/_next/image") || s.pathname.startsWith("/_vercel/image")
      , a = n ? s.searchParams.get("url") : r.toString();
    if (a)
        return c(s, "w", t, !0, !0),
        n ? P(s) : Rt({
            base: a,
            width: t,
            params: {
                root: e === "nextjs" ? "_next" : "_vercel"
            }
        })
}
  , Lt = r=>D({
    ...r,
    cdn: "nextjs"
})
  , qt = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "wid", t, !0, !0),
    c(n, "hei", e, !0, !0),
    c(n, "fmt", s, !0),
    c(n, "qlt", w(n, "qlt"), !0),
    c(n, "scl", w(n, "scl"), !0),
    g(n, "fit", "crop"),
    !t && !e && g(n, "scl", 1),
    n
}
  , At = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "width", t, !0, !0),
    c(n, "height", e, !0, !0),
    c(n, "format", s, !0),
    c(n, "quality", w(n, "quality"), !0),
    g(n, "enlarge", 0),
    n
}
  , Ct = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "width", t, !0, !0),
    c(n, "height", e, !0, !0),
    c(n, "format", s),
    c(n, "quality", w(n, "quality"), !0),
    n
}
  , S = {
    width: "w",
    height: "h",
    autoWidthWithFallback: "w_auto",
    auto_width_fallback: "w_auto",
    scaleToScreenWidth: "pc",
    scale_to_screen_width: "pc",
    crop: "cr",
    outputFormat: "f",
    format: "f",
    fit: "m",
    fitMethod: "m",
    compression: "cmpr",
    sharpness: "s",
    rotate: "r",
    inline: "in",
    keepMeta: "meta",
    keep_meta: "meta",
    noOptimization: "pass",
    no_optimization: "pass",
    force_download: "dl",
    max_device_pixel_ratio: "maxdpr",
    maxDevicePixelRatio: "maxdpr"
};
function Tt(r) {
    return Object.keys(S).find(s=>S[s] === r) || ""
}
function Ft(r) {
    let t = r.toString()
      , e = [];
    if (t) {
        let s = t.split("imgeng=");
        s.length > 1 && (e = s[1].split("/"))
    }
    return e
}
function zt(r) {
    let t = r.toString()
      , e = "";
    if (t) {
        let s = t.split("imgeng=");
        s.length > 1 ? e = s[0].slice(0, -1) : e = t
    }
    return e
}
const Dt = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r)
      , a = zt(n);
    let o = {};
    const i = n.toString() === a ? [] : Ft(n);
    i.length && (o = Zt(i)),
    t && (o.width = t),
    e && (o.height = e),
    s && (o.format = s),
    o.hasOwnProperty("fit") || (o = {
        ...o,
        fit: "cropbox"
    });
    let u = Mt(o)
      , f = Bt(u)
      , l = f === "" ? "" : a.includes("?") ? "&" : "?";
    return `${a}${l}${f}`
}
;
function Mt(r) {
    return Object.entries(r).reduce((t,[e,s])=>t + Ht(e, s), "")
}
function Bt(r) {
    return r && r !== "" ? `imgeng=${r}` : ""
}
function Ht(r, t) {
    let e = S[r];
    return e && (t || t === 0) ? `/${e}_${t}` : ""
}
function Zt(r) {
    let t = {};
    return r.forEach(e=>{
        let s = e.split("_");
        if (s.length > 1) {
            let n = s[0]
              , a = s[1]
              , o = Tt(n);
            o && (t[o] = a)
        }
    }
    ),
    t
}
const Vt = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r);
    return c(n, "width", t, !0, !0),
    c(n, "height", e, !0, !0),
    c(n, "format", s),
    n.searchParams.has("format") || g(n, "auto", "webp"),
    t && e && g(n, "fit", "crop"),
    n
}
  , Gt = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g
  , Jt = r=>Object.fromEntries(r?.split(",")?.map(t=>t.split("=")) ?? [])
  , Kt = ({host: r, accountHash: t, transformations: e={}, imageId: s})=>{
    const n = Object.entries(e).map(([o,i])=>`${o}=${i}`).join(",");
    return `https://${[r, "cdn-cgi", "imagedelivery", t, s, n].join("/")}`
}
  , M = r=>{
    const t = m(r)
      , e = [...t.toString().matchAll(Gt)];
    if (!e.length)
        throw new Error("Invalid Cloudflare Images URL");
    const s = e[0].groups || {}
      , {transformations: n, ...a} = s
      , {w: o, h: i, f: u, ...f} = Jt(n);
    return {
        base: t.toString(),
        width: Number(o) || void 0,
        height: Number(i) || void 0,
        format: u,
        cdn: "cloudflare_images",
        params: {
            ...a,
            transformations: f
        }
    }
}
  , Qt = ({base: r, width: t, height: e, format: s, params: n})=>{
    const a = M(r.toString())
      , o = {
        transformations: {},
        ...a.params,
        ...n
    };
    return t && (o.transformations.w = t?.toString()),
    e && (o.transformations.h = e?.toString()),
    s && (o.transformations.f = s),
    o.transformations.fit ||= "cover",
    new URL(Kt(o))
}
  , Xt = ({url: r, width: t, height: e, format: s="auto"})=>{
    const n = M(r);
    if (!n)
        throw new Error("Invalid Cloudflare Images URL");
    const a = {
        ...n,
        width: t,
        height: e,
        format: s
    };
    return Qt(a)
}
  , Yt = r=>{
    const t = m(r)
      , [e,...s] = t.pathname.split("/").slice(1)
      , n = Object.fromEntries(e.split(",").map(a=>{
        const [o,i] = a.split("_");
        return [o, i]
    }
    ));
    if (n.s) {
        const [a,o] = n.s.split("x");
        n.w ||= a,
        n.h ||= o
    }
    return {
        base: s.join("/"),
        width: Number(n.w) || void 0,
        height: Number(n.h) || void 0,
        quality: Number(n.q) || void 0,
        format: n.f || "auto",
        params: n,
        cdn: "ipx"
    }
}
  , N = ({base: r, width: t, height: e, format: s, params: n})=>{
    const a = n?.modifiers ?? {};
    t && e ? a.s = `${t}x${e}` : t ? a.w = `${t}` : e && (a.h = `${e}`),
    s && (a.f = s);
    const o = n?.base.endsWith("/") ? n?.base : `${n?.base}/`
      , i = Object.entries(a).map(([l,d])=>`${l}_${d}`).join(",")
      , u = r.toString()
      , f = u.startsWith("/") ? u.slice(1) : u;
    return `${o}${i}/${f}`
}
  , tr = r=>{
    const t = String(r.url)
      , e = m(t)
      , s = e.pathname.startsWith("/_ipx") && e.hostname !== "n" ? `${e.origin}/_ipx` : "/_ipx"
      , n = r.cdnOptions?.ipx?.base ?? s;
    if (n && n !== "/" && t.startsWith(n)) {
        const o = Yt(t.replace(n, ""));
        return N({
            ...o,
            ...r,
            params: {
                ...r.cdnOptions?.ipx,
                base: n
            }
        })
    }
    return N({
        ...r,
        base: t,
        params: {
            ...r.cdnOptions?.ipx,
            base: n
        }
    })
}
  , rr = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r)
      , a = P(new URL(n.pathname,n.origin))
      , o = {
        searchParams: new URLSearchParams
    };
    return c(o, "href", a, !0, !0),
    c(o, "w", t, !0, !0),
    c(o, "h", e, !0, !0),
    c(o, "f", s),
    `/_image?${o.searchParams.toString()}`
}
  , er = new Set(["w", "h", "q", "fm", "url", "width", "height", "quality"])
  , nr = r=>{
    const t = m(r)
      , e = Number(t.searchParams.get("w") ?? t.searchParams.get("width")) ?? void 0
      , s = Number(t.searchParams.get("h") ?? t.searchParams.get("height")) ?? void 0
      , n = Number(t.searchParams.get("q") ?? t.searchParams.get("quality")) || void 0
      , a = t.searchParams.get("fm") || void 0
      , o = t.searchParams.get("url") || ""
      , i = {
        quality: n
    };
    return t.searchParams.forEach((u,f)=>{
        er.has(f) || (i[f] = u)
    }
    ),
    t.search = "",
    {
        base: o,
        width: e,
        height: s,
        format: a,
        params: i,
        cdn: "netlify"
    }
}
  , W = ({base: r, width: t, height: e, format: s, params: {site: n, quality: a, ...o}={}})=>{
    const i = m("/.netlify/images", n);
    return Object.entries(o).forEach(([u,f])=>c(i, u, f)),
    c(i, "q", a, !0, !0),
    c(i, "w", t, !0, !0),
    c(i, "h", e, !0, !0),
    c(i, "fm", s),
    g(i, "fit", "cover"),
    i.searchParams.set("url", r.toString()),
    P(i)
}
  , sr = r=>{
    const t = m(r.url);
    if (t.pathname.startsWith("/.netlify/images")) {
        const {params: e, base: s, format: n} = nr(t);
        return W({
            base: s,
            format: n,
            ...r,
            params: {
                ...e,
                site: t.hostname === "n" ? void 0 : t.origin
            }
        })
    }
    return W({
        ...r,
        base: r.url,
        params: {
            site: r.cdnOptions?.netlify?.site
        }
    })
}
  , ar = r=>(r.searchParams.get("tr") || "").split(",").reduce((e,s)=>{
    const [n,a] = s.split("-");
    return e[n] = a,
    e
}
, {})
  , or = ({url: r, width: t, height: e, format: s})=>{
    const n = m(r)
      , a = ar(n);
    a.w = t && Math.round(t),
    a.h = e && Math.round(e),
    a.fm || (a.fm = "auto"),
    s && (a.fm = s);
    const o = Object.keys(a).map(i=>{
        const u = a[i];
        if (u)
            return `${i}-${u}`
    }
    ).filter(i=>i).join(",");
    return n.searchParams.set("tr", o),
    n
}
  , R = {
    vercel: E,
    nextjs: E
};
function ir(r, t) {
    if (!(t in R))
        return !1;
    const e = R[t];
    return e ? e(r) : !1
}
function B(r, t) {
    const e = ot(r) || t;
    if (!e)
        return !1;
    const s = ir(r, e);
    return s || {
        cdn: e,
        url: r
    }
}
const H = r=>({
    imgix: ft,
    contentful: ct,
    "builder.io": ut,
    shopify: pt,
    wordpress: gt,
    cloudimage: ht,
    cloudinary: xt,
    bunny: vt,
    storyblok: Nt,
    cloudflare: Pt,
    vercel: D,
    nextjs: Lt,
    scene7: qt,
    "kontent.ai": Wt,
    keycdn: At,
    directus: Ct,
    imageengine: Dt,
    contentstack: Vt,
    cloudflare_images: Xt,
    ipx: tr,
    astro: rr,
    netlify: sr,
    imagekit: or
})[r];
var cr = (r,t)=>{
    if (!(!r || !t))
        switch (t) {
        case "constrained":
            return `(min-width: ${r}px) ${r}px, 100vw`;
        case "fixed":
            return `${r}px`;
        case "fullWidth":
            return "100vw";
        default:
            return
        }
}
  , b = r=>r || r === 0 ? `${r}px` : void 0
  , ur = ({width: r, height: t, aspectRatio: e, layout: s, objectFit: n="cover", background: a})=>{
    const o = [["object-fit", n]];
    return a?.startsWith("https:") || a?.startsWith("http:") || a?.startsWith("data:") ? (o.push(["background-image", `url(${a})`]),
    o.push(["background-size", "cover"]),
    o.push(["background-repeat", "no-repeat"])) : o.push(["background", a]),
    s === "fixed" && (o.push(["width", b(r)]),
    o.push(["height", b(t)])),
    s === "constrained" && (o.push(["max-width", b(r)]),
    o.push(["max-height", b(t)]),
    o.push(["aspect-ratio", e ? `${e}` : void 0]),
    o.push(["width", "100%"])),
    s === "fullWidth" && (o.push(["width", "100%"]),
    o.push(["aspect-ratio", e ? `${e}` : void 0]),
    o.push(["height", b(t)])),
    Object.fromEntries(o.filter(([,i])=>i))
}
  , fr = [6016, 5120, 4480, 3840, 3200, 2560, 2048, 1920, 1668, 1280, 1080, 960, 828, 750, 640]
  , L = 24
  , mr = ({width: r, layout: t, resolutions: e=fr})=>{
    if (t === "fullWidth")
        return e;
    if (!r)
        return [];
    const s = r * 2;
    return t === "fixed" ? [r, s] : t === "constrained" ? [r, s, ...e.filter(n=>n < s)] : []
}
  , lr = ({src: r, width: t, layout: e="constrained", height: s, aspectRatio: n, breakpoints: a, cdn: o, transformer: i, format: u})=>{
    const f = B(r, o);
    if (f && !i && (i = H(f.cdn)),
    !!i)
        return a ||= mr({
            width: t,
            layout: e
        }),
        a.sort((l,d)=>l - d).map(l=>{
            let d;
            s && n && (d = Math.round(l / n));
            const p = i({
                url: f ? f.url : r,
                width: l,
                height: d,
                format: u
            });
            return p ? `${p.toString()} ${l}w` : ""
        }
        ).join(`,
`)
}
;
function dr({width: r, height: t, priority: e, layout: s="constrained", aspectRatio: n, ...a}) {
    return r = r && Number(r) || void 0,
    t = t && Number(t) || void 0,
    e ? (a.loading ||= "eager",
    a.fetchpriority ||= "high") : (a.loading ||= "lazy",
    a.decoding ||= "async"),
    a.alt === "" && (a.role ||= "presentation"),
    n ? r ? t || (t = r / n) : t && (r = t * n) : r && t && (n = r / t),
    {
        width: r,
        height: t,
        aspectRatio: n,
        layout: s,
        ...a
    }
}
function pr(r) {
    let {src: t, cdn: e, transformer: s, background: n, layout: a, objectFit: o, breakpoints: i, width: u, height: f, aspectRatio: l, unstyled: d, ...p} = dr(r);
    const y = t ? B(t, e) : void 0;
    let h = t;
    if (y && (h = y.url,
    s ||= H(y.cdn)),
    s && n === "auto") {
        const x = l ? Math.round(L / l) : void 0
          , j = s({
            url: h,
            width: L,
            height: x
        });
        j && (n = j.toString())
    }
    const v = {
        width: u,
        height: f,
        aspectRatio: l,
        layout: a,
        objectFit: o,
        background: n
    };
    if (p.sizes ||= cr(u, a),
    d || (p.style = {
        ...ur(v),
        ...p.style
    }),
    s) {
        p.srcset = lr({
            src: h,
            width: u,
            height: f,
            aspectRatio: l,
            layout: a,
            breakpoints: i,
            transformer: s,
            cdn: e
        });
        const x = s({
            url: h,
            width: u,
            height: f
        });
        x && (h = x),
        (a === "fullWidth" || a === "constrained") && (u = void 0,
        f = void 0)
    }
    return {
        ...p,
        src: h?.toString(),
        width: u,
        height: f
    }
}
function gr(r, t) {
    const e = RegExp(r, "g");
    return s=>{
        if (typeof s != "string")
            throw new TypeError(`expected an argument of type string, but got ${typeof s}`);
        return s.match(e) ? s.replace(e, t) : s
    }
}
const hr = gr(/[A-Z]/, r=>`-${r.toLowerCase()}`);
function yr(r, t=hr) {
    if (!r || typeof r != "object" || Array.isArray(r))
        throw new TypeError(`expected an argument of type object, but got ${typeof r}`);
    return Object.keys(r).map(e=>`${t(e)}: ${r[e]};`).join(`
`)
}
function br(r) {
    let t, e, s, n = [{
        alt: r[2]
    }, {
        style: r[0]
    }, r[1]], a = {};
    for (let o = 0; o < n.length; o += 1)
        a = _(a, n[o]);
    return {
        c() {
            t = J("img"),
            this.h()
        },
        l(o) {
            t = K(o, "IMG", {
                alt: !0,
                style: !0
            }),
            this.h()
        },
        h() {
            k(t, a)
        },
        m(o, i) {
            Q(o, t, i),
            e || (s = X(t, "load", r[6]),
            e = !0)
        },
        p(o, [i]) {
            k(t, a = rt(n, [i & 4 && {
                alt: o[2]
            }, i & 1 && {
                style: o[0]
            }, i & 2 && o[1]]))
        },
        i: U,
        o: U,
        d(o) {
            o && Y(t),
            e = !1,
            s()
        }
    }
}
function wr(r, t, e) {
    let s, n, a, o, i, u;
    function f(l) {
        tt.call(this, r, l)
    }
    return r.$$set = l=>{
        e(7, t = _(_({}, t), I(l)))
    }
    ,
    r.$$.update = ()=>{
        e(3, {style: s, ...n} = t, s, (e(5, n),
        e(7, t))),
        r.$$.dirty & 32 && e(2, {alt: a, style: o, ...i} = pr({
            ...n
        }), a, (e(4, o),
        e(5, n),
        e(7, t)), (e(1, i),
        e(5, n),
        e(7, t))),
        r.$$.dirty & 24 && e(0, u = [yr(o || {}), s].filter(Boolean).join(";"))
    }
    ,
    t = I(t),
    [u, i, a, s, o, n, f]
}
class $r extends Z {
    constructor(t) {
        super(),
        V(this, t, wr, br, G, {})
    }
}
export {$r as I};