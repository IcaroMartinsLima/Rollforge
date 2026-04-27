export function calcModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}