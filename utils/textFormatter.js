import { HOUSES, FAQ_CATEGORY } from './constants';

export function formatHouse(house) {
  return HOUSES[house];
}

export function formatConstituency(stateRegion, constituencyName) {
  return `${stateRegion} ${constituencyName.split(' ').slice(1).join('')}`;
}

export function formatFAQCategory(category) {
  return FAQ_CATEGORY[category];
}
