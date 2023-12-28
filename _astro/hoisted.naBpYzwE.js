import {a as i, s as c, e as d} from "./anime.esm.OvC5p9Af.js";
import {i as a} from "./in-view.es.GFlACgdF.js";
import {s as u} from "./index.es.h7yWt7Ul.js";
import {l as y} from "./math.62SB_m8q.js";
document.querySelectorAll(".title-animate").forEach(e=>{
    const t = i(e.querySelectorAll("em"), {
        marginLeft(r) {
            const [,,,s] = r.style.getPropertyValue("--kern").split(" ");
            return [0, s]
        },
        marginRight(r) {
            const [,s,,] = r.style.getPropertyValue("--kern").split(" ");
            return [0, s]
        },
        "font-variation-settings": ['"ital" 0', '"ital" 9'],
        delay: c(150),
        duration: 2e3,
        ease: "inOutQuart",
        autoplay: !1
    });
    a(e, ()=>(t._reversed && t.reverse(),
    t.playbackRate = 1,
    t.play(),
    ()=>{
        t._reversed || t.reverse(),
        t.playbackRate = 2,
        t.play()
    }
    ), {
        amount: 0,
        margin: "-30% 0%"
    })
}
);
document.querySelectorAll(".typewriter").forEach(e=>{
    const t = Number(e.dataset.speed)
      , r = e.querySelectorAll("span")
      , s = i(r, {
        opacity: [0, 1],
        duration: 200,
        delay: c(t, {
            ease: d.irregular(r.length - 1, 2)
        }),
        autoplay: !1
    });
    a(e, ()=>{
        s.play()
    }
    , {
        amount: .75
    })
}
);
const m = document.querySelector(".introduction");
document && document.fonts && requestAnimationFrame(()=>{
    document.fonts.load('200px "Mango Grotesque"').then(()=>{
        m.querySelectorAll(".line").forEach(e=>{
            e.style.opacity = "1"
        }
        )
    }
    )
}
);
a(m.querySelectorAll(".illu-rects"), ({target: e})=>(e.classList.add("is-visible"),
()=>e.classList.remove("is-visible")), {
    amount: 0,
    margin: "-15% 0%"
});
const o = document.getElementById("projects")
  , p = o.querySelector(".splash");
u(({y: e})=>{
    const t = Math.min(1, Math.max(0, (window.scrollY - e.targetOffset) / p.offsetHeight) * 1.1);
    o.style.setProperty("--progress", `${t}`)
}
, {
    target: o,
    offset: ["start end", "end start"]
});
a(o, ()=>{
    const e = document.querySelector(".backgrounds .gray");
    return e.classList.add("is-visible"),
    ()=>e.classList.remove("is-visible")
}
, {
    amount: 0,
    margin: "-25% 0% -50%"
});
const l = document.querySelector(".letude")
  , n = l.querySelector(".logo");
u(({y: e})=>{
    l.style.setProperty("--parallax", `${y(-10, 10, e.progress)}%`)
}
, {
    target: l,
    offset: ["start end", "end start"]
});
a(l, ()=>(n.classList.add("is-animated"),
()=>{
    n.classList.remove("is-animated")
}
), {
    amount: .3
});
