import mock from './mock.json';
const { charitys, questions, donated, donates, shops, coupons } = mock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ title }) => title.toLowerCase().includes(lowered));
}

// 'charity' 관련 함수 추가
export function getCharitys(keyword) {
  if (!keyword) return charitys;
  return filterByKeyword(charitys, keyword);
}

export function getCharityBySlug(charitySlug) {
  return charitys.find((charity) => charity.slug === charitySlug);
}

// 'question' 관련 함수 추가
export function getQuestions(keyword) {
  if (!keyword) return questions;
  return filterByKeyword(questions, keyword);
}

export function getQuestionById(questionId) {
  return questions.find((question) => question.id === questionId);
}

// 'donated' 관련 함수 추가
export function getDonated() {
  return donated;
}

export function getDonatedById(donatedId) {
  return donated.find((item) => item.id === donatedId);
}

export function getDonatedBySlug(donatedSlug) {
  return donated.find((donate) => donate.slug === donatedSlug);
}

export function getDonates(keyword) {
  if (!keyword) return donates;
  return filterByKeyword(donates, keyword);
}

export function getDonateById(donateId) {
  return questions.find((donate) => donate.id === donateId);
}

// 'shop' 관련 함수 추가
export function getShops(keyword) {
  if (!keyword) return shops;
  return filterByKeyword(shops, keyword);
}

export function getShopBySlug(shopSlug) {
  return shops.find((shop) => shop.slug === shopSlug);
}

// 'coupons' 관련 함수 추가
export function getCoupons(keyword) {
  if (!keyword) return coupons;
  return filterByKeyword(coupons, keyword);
}

export function getCouponBySlug(couponSlug) {
  return coupons.find((coupon) => coupon.slug === couponSlug);
}
