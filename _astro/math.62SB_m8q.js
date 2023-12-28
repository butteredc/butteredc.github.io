const o = (t,s,e,l=!0)=>{
    const r = (1 - e) * t + e * s;
    return l ? parseFloat(r.toFixed(3)) : r
}
;
export {o as l};
