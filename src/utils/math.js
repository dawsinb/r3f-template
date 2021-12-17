export function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}
