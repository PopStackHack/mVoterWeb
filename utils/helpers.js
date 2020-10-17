import moment from 'moment';
import { LOCALSTORAGE_KEYS } from './constants';

export function hasFullLocation() {
  return (
    localStorage.getItem(LOCALSTORAGE_KEYS.STATE_REGION) &&
    localStorage.getItem(LOCALSTORAGE_KEYS.TOWNSHIP) &&
    localStorage.getItem(LOCALSTORAGE_KEYS.WARD_VILLAGE)
  );
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

export function handleCountdown(cb) {
  const electionDay = moment('2020-11-08').utcOffset('+0630');
  const nowEpoch = moment().unix() * 1000;

  const electionDayStartEpoch =
    electionDay
      .clone()
      .startOf('day')
      .unix() * 1000;

  const pollingStationOpenEpoch =
    electionDay
      .clone()
      .set({ hours: 6 })
      .unix() * 1000;

  const pollingStationCloseEpoch =
    electionDay
      .clone()
      .set({ hours: 16 })
      .unix() * 1000;

  // Check if it's still day diff >= 1
  const dayDiff = Math.ceil(
    moment.duration(moment(electionDayStartEpoch).diff(nowEpoch)).asDays()
  );

  if (dayDiff >= 1) {
    return cb(dayDiff, 'day');
  }

  // Election over
  if (dayDiff >= 0 && nowEpoch > pollingStationCloseEpoch) {
    return cb(null, 'over');
  }

  setInterval(() => {
    const currentIntervalEpoch = moment().unix() * 1000;
    // Check if pollion station has closed
    if (currentIntervalEpoch > pollingStationCloseEpoch) {
      return cb(null, 'over');
    }

    // Check if current interval epoch has passed election day
    // To show မဲရုံများဖွင့်ချိန်
    if (
      currentIntervalEpoch > electionDayStartEpoch &&
      currentIntervalEpoch < pollingStationOpenEpoch
    ) {
      const diffTime = pollingStationOpenEpoch - currentIntervalEpoch;
      const duration = moment.duration(diffTime, 'milliseconds');
      const cd = moment.duration(duration - 1000, 'milliseconds');

      const hours = cd.hours() < 10 ? `0${cd.hours()}` : cd.hours();
      const minutes = cd.minutes() < 10 ? `0${cd.minutes()}` : cd.minutes();
      const seconds = cd.seconds() < 10 ? `0${cd.seconds()}` : cd.seconds();

      return cb(`${hours}-${minutes}-${seconds}`, 'start');
    }

    // Check if pollion station has opened
    // To show မဲရုံများပိတ်ချိန်
    if (
      currentIntervalEpoch > electionDayStartEpoch &&
      currentIntervalEpoch > pollingStationOpenEpoch &&
      currentIntervalEpoch < pollingStationCloseEpoch
    ) {
      const diffTime = pollingStationCloseEpoch - currentIntervalEpoch;
      const duration = moment.duration(diffTime, 'milliseconds');
      const cd = moment.duration(duration - 1000, 'milliseconds');

      const hours = cd.hours() < 10 ? `0${cd.hours()}` : cd.hours();
      const minutes = cd.minutes() < 10 ? `0${cd.minutes()}` : cd.minutes();
      const seconds = cd.seconds() < 10 ? `0${cd.seconds()}` : cd.seconds();

      return cb(`${hours}-${minutes}-${seconds}`, 'close');
    }

    return true;
  }, 1000);

  return true;
}
