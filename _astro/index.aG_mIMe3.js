function u(t) {
    const n = t - 1;
    return n * n * n + 1
}
function c(t) {
    return Math.pow(t - 1, 3) * (1 - t) + 1
}
function r(t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
}
export {u as c, c as q, r as s};