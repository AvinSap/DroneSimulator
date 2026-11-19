import { Scenario } from "./scenario.types";

export const SCENARIOS: Scenario[] = [
  {
    id: 'normal',
    name: 'Normal flight',
    category: 'baseline',
    summary: 'An agricultural spray drone flies its planned route from base (A) to the field end (B).',
    attack: 'No attacker. This is the baseline every attack is compared against.',
    defense: 'None needed.',
    hasDefense: false,
  },
  {
    id: 'jamming',
    name: 'Jamming',
    category: 'radio',
    summary: 'An attacker transmits noise on the control frequency and drowns out the real signal.',
    attack: 'The link fades near the jammer, then drops. The drone disappears from the ground station.',
    defense: 'Frequency hopping (FHSS) moves to clean channels; a link-loss failsafe returns the drone home.',
    hasDefense: true,
  },
  {
    id: 'gps-spoofing',
    name: 'GPS spoofing',
    category: 'navigation',
    summary: 'Fake GPS signals, stronger than real satellites, slowly drag the drone off course.',
    attack: 'The drone thinks it is on route to B but actually ends up somewhere else.',
    defense: 'Cross-check GPS against the IMU and camera; reject GPS when they disagree.',
    hasDefense: true,
  },
  {
    id: 'dos',
    name: 'Denial of service',
    category: 'network',
    summary: 'The attacker floods the radio link with thousands of fake packets per second.',
    attack: 'Latency spikes, the operator screen lags, the drone stalls and ignores Return-Home.',
    defense: 'Rate limiting plus MAVLink 2 message signing drops unauthenticated packets.',
    hasDefense: true,
  },
  {
    id: 'data-poisoning',
    name: 'Data poisoning',
    category: 'ai',
    summary: 'The crop-health AI was trained on tampered data where some "blight" labels were flipped to "healthy".',
    attack: 'The flight looks normal, but infected tiles are classified healthy and never sprayed.',
    defense: 'Validate training data (provenance + outlier checks) and cross-check with a second model.',
    hasDefense: true,
  },
];  
