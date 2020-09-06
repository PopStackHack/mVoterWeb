export function hasFullLocation() {
  return localStorage.getItem('stateRegion') &&
    localStorage.getItem('township') &&
    localStorage.getItem('wardVillage');
}

// https://chrisboakes.com/how-a-javascript-debounce-function-works/ <- Code taken from this article
export function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}
