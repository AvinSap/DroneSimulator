export type ScenarioCategory =
 'baseline' | 'radio' | 'navigation' | 'network' | 'ai';
 
export interface Scenario{
    id: string;
    name: string;
    category: ScenarioCategory;
    summary: string;
    attack: string;
    defense: string;
    hasDefense: boolean;
}