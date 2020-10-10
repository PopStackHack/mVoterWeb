export const FAQ_CATEGORY = Object.freeze({
  voter_list: 'မဲဆန္ဒရှင်စာရင်း',
  candidate: 'ကိုယ်စားလှယ်လောင်း',
  international_observer: 'စောင့်ကြည့်လေ့လာခြင်း',
  diplomatic: 'သံတမန်ရေးရာ',
  conflict_resolution: 'အငြင်းပွားမှုများဖြေရှင်းခြင်း',
  mediation_committees: 'စေ့စပ်ညှိနှိုင်းရေးကော်မတီများ'
});

export const HOUSES = Object.freeze({
  amyota: 'အမျိုးသားလွှတ်တော်',
  pyithu: 'ပြည်ထောင်စုလွှတ်တော်',
  state: 'တိုင်း/ပြည်နယ်လွှတ်တော်'
});

export const BALLOT_CATEGORIES = Object.freeze([
  { label: 'မဲနမူနာများ', value: 'normal' },
  { label: 'ကြိုတင်မဲနမူနာများ', value: 'advanced' }
]);

export const customSelectStyle = Object.freeze({
  option: styles => ({
    ...styles,
    cursor: 'pointer'
  }),
  control: styles => ({
    ...styles,
    cursor: 'pointer'
  })
});

export const VOTER_LIST_LINKS = [
  {
    region: 'တိုင်းဒေသကြီး/ပြည်နယ်တိုင်းအားလုံး',
    url: 'https://findyourpollingstation.uec.gov.mm'
  },
  { region: 'ကချင်ပြည်နယ်', url: 'http://bit.ly/kachin-voters' },
  { region: 'ကယားပြည်နယ်', url: 'http://bit.ly/kayah-voters' },
  { region: 'ကရင်ပြည်နယ်', url: 'http://bit.ly/kayin-voters' },
  { region: 'ချင်းပြည်နယ်', url: 'http://bit.ly/chin-voters' },
  { region: 'စစ်ကိုင်းတိုင်းဒေသကြီး', url: 'http://bit.ly/sagaing-voters' },
  { region: 'တနင်္သာရီတိုင်းဒေသကြီး', url: 'http://bit.ly/tanintharyi-voters' },
  { region: 'ပဲခူးတိုင်းဒေသကြီး', url: 'http://bit.ly/bago-voters' },
  { region: 'မကွေးတိုင်းဒေသကြီး', url: 'http://bit.ly/magway-voters' },
  { region: 'မန္တလေးတိုင်းဒေသကြီး', url: 'http://bit.ly/mandalay-voters' },
  { region: 'မွန်ပြည်နယ်', url: 'http://bit.ly/mon-voters' },
  { region: 'ရခိုင်ပြည်နယ်', url: 'http://bit.ly/rakhine-voters' },
  { region: 'ရန်ကုန်တိုင်းဒေသကြီး', url: 'http://bit.ly/yangon-voters' },
  { region: 'ရှမ်းပြည်နယ်', url: 'http://bit.ly/shan-voters' },
  { region: 'ဧရာဝတီတိုင်းဒေသကြီး', url: 'http://bit.ly/ayarwaddy-voters' },
  { region: 'ပြည်ထောင်စုနယ်မြေ', url: 'http://bit.ly/naypyitaw-voters' }
];
