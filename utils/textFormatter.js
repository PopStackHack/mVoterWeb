export function formatHouse(house) {
  let str = 'Unknown';

  if (house === 'amyotha') {
    str = 'အမျိုးသားလွှတ်တော်';
  } else if (house === 'pyithu') {
    str = 'ပြည်ထောင်စုလွှတ်တော်'
  } else if (house === 'state') {
    str = 'တိုင်း/ပြည်နယ်လွှတ်တော်';
  }

  return str;
}

export function formatConstituency(stateRegion, constituencyName) {
  return `${stateRegion} ${constituencyName.split(' ').slice(1).join('')}`;
}
