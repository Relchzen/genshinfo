import curatedJson from "./curated.json";
import type { Curated } from "./types";

export const CURATED = curatedJson as Curated[];

export function getCurated(slug: string): Curated | undefined {
  return CURATED.find((c) => c.name === slug);
}
