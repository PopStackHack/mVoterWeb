// This is a very hard coded shortcut solution to
// parse day, month and year in very easy way
import myanmarNumbers from 'myanmar-numbers';
import moment from 'moment';

// Text data taken from https://gist.github.com/eimg/3f115b39fbc6c48976e6cc7af1b8ddf9
const months = 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_');

export function parseDateToMMFormat(date, month, year) {
  return `${myanmarNumbers(date, 'my')} ${months[month - 1]} ${myanmarNumbers(year, 'my')}`
};
