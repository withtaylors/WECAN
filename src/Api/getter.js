import mock from "./mock.json";
const { charitys, questions, donated, donates, shops } = mock;

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

// 'wishlist' 관련 함수 추가
const WISHLIST_KEY = "codethat-wishlist";
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}");

export function addWishlist(charitySlug) {
  wishlist[charitySlug] = true;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function deleteWishlist(charitySlug) {
  delete wishlist[charitySlug];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return charitys.filter((charity) => wishlist[charity.slug]);
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
