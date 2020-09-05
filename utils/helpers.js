export function hasFullLocation() {
  return localStorage.getItem('stateRegion') &&
    localStorage.getItem('township') &&
    localStorage.getItem('wardVillage');
}
