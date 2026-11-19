import type { Scenario } from "../types/scenario";

const API_URL = 'http://localhost:3000';

export async function getScenarios(): Promise<Scenario[]> {
    const res = await fetch(`${API_URL}/scenarios`);
    if (!res.ok) {
        throw new Error(`Failed to load scenarios (${res.status})`);
  }
  return res.json();
}