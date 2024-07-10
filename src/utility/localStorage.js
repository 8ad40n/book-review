const getStoredRead = () => {
  const storeRead = localStorage.getItem('Read');
  if (storeRead) {
    return JSON.parse(storeRead);
  }
  return [];
};

const getStoredWishlist = () => {
  const storeWishlist = localStorage.getItem('Wishlist');
  if (storeWishlist) {
    return JSON.parse(storeWishlist);
  }
  return [];
};

const saveRead = (id) => {
  const store = getStoredRead();
  const exists = store.find((bookid) => bookid === id);
  if (!exists) {
    store.push(id);
    localStorage.setItem('Read', JSON.stringify(store));
  }
};

const saveWishlist = (id) => {
  const store = getStoredWishlist();
  const exists = store.find((bookid) => bookid === id);
  if (!exists) {
    store.push(id);
    localStorage.setItem('Wishlist', JSON.stringify(store));
  }
};

export { getStoredRead, getStoredWishlist, saveRead, saveWishlist };

