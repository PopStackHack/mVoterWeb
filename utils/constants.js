export const FAQ_CATEGORY = Object.freeze({
  voter_list: 'မဲဆန္ဒရှင်စာရင်း',
  candidate: 'ကိုယ်စားလှယ်လောင်း',
  international_observer: 'စောင့်ကြည့်လေ့လာခြင်း',
  diplomatic: 'သံတမန်ရေးရာ',
  conflict_resolution: 'အငြင်းပွားမှုများဖြေရှင်းခြင်း',
  mediation_committees: 'စေ့စပ်ညှိနိုင်းရေးကော်မတီများ',
});

export const HOUSES = Object.freeze({
  amyota: 'အမျိုးသားလွှတ်တော်',
  pyithu: 'ပြည်ထောင်စုလွှတ်တော်',
  state: 'တိုင်း/ပြည်နယ်လွှတ်တော်',
});

export const BALLOT_CATEGORIES = Object.freeze([
  { label: 'မဲနမူနာများ', value: 'normal' },
  { label: 'ကြိုတင်မဲနမူနာများ', value: 'advanced' },
]);

export const customSelectStyle = Object.freeze({
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
  }),
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
  }),
});