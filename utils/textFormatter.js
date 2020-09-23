import { HOUSES, FAQ_CATEGORY } from './constants';
import myanmarNumbers from 'myanmar-numbers';
import moment from 'moment';

export function formatHouse(house) {
  return HOUSES[house];
}

export function formatConstituency(stateRegion, constituencyName) {
  return `${stateRegion} ${constituencyName.split(' ').slice(1).join('')}`;
}

export function formatFAQCategory(category) {
  return FAQ_CATEGORY[category];
}

// Nasty format function to quickly achieve our MM locale result
// dateStr will be in YYYY-MM-DD format
export function formatPublishDateToMMLocale(dateStr) {
  const publishedTime = moment(dateStr);
  const date = dateStr.split('-')[2]; // It has zero paddings so we cheat.
  const month = publishedTime.month(); // This is to access MM Locale months below
  const year = publishedTime.year();
  // Text data taken from https://gist.github.com/eimg/3f115b39fbc6c48976e6cc7af1b8ddf9
  const months = 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_');
  return `${myanmarNumbers(date, 'my')} ${months[month]} ${myanmarNumbers(year, 'my')}`
}

export function formatBirthDay(birthday) {
  const strArr = birthday.split('-');
  return `${myanmarNumbers(strArr[2], 'my')}၊ ${myanmarNumbers(strArr[1], 'my')}၊ ${myanmarNumbers(strArr[0], 'my')}`
}
