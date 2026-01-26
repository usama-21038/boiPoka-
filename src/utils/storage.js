const READ_KEY = 'readBooks';
const WISHLIST_KEY = 'wishlistBooks';

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export const getList = (key) => {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
  const list = stored ? safeParse(stored) : [];
  if (!Array.isArray(list)) return [];
  return list;
};

export const setList = (key, list) => {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(list));
};

export const isInList = (key, bookId) => {
  return getList(key).some(item => item?.bookId === bookId);
};

export const toggleBookInList = (key, book) => {
  const current = getList(key);
  const exists = current.find(item => item?.bookId === book.bookId);
  let updated;
  let added;
  if (exists) {
    updated = current.filter(item => item?.bookId !== book.bookId);
    added = false;
  } else {
    updated = [...current, book];
    added = true;
  }
  setList(key, updated);
  return { added, list: updated };
};

export { READ_KEY, WISHLIST_KEY };
