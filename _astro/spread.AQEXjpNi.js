function u(c, r) {
    const e = {}
      , s = {}
      , f = {
        $$scope: 1
    };
    let i = c.length;
    for (; i--; ) {
        const o = c[i]
          , t = r[i];
        if (t) {
            for (const n in o)
                n in t || (s[n] = 1);
            for (const n in t)
                f[n] || (e[n] = t[n],
                f[n] = 1);
            c[i] = t
        } else
            for (const n in o)
                f[n] = 1
    }
    for (const o in s)
        o in e || (e[o] = void 0);
    return e
}
export {u as g};
