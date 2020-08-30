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

export function formatFAQCategory(category) {
  let str = 'Unknown';

  // Thanks but I hate switch cases for no reason
  if (category === 'voter_list') {
    return 'မဲဆန္ဒရှင်စာရင်း';
  } else if (category === 'candidate') {
    return 'ကိုယ်စားလှယ်လောင်း';
  } else if (category === 'international_observer') {
    return 'စောင့်ကြည့်လေ့လာခြင်း';
  } else {
    return 'သံတမန်ရေးရာ'; // diplomatic
  }

  return str;
}
