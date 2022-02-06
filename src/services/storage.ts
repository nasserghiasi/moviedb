const cache = {};

const storage = {
  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      const parsedValue = JSON.parse(value);
      this.setCache(key, parsedValue);

      return parsedValue;
    }
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    this.setCache(key, value);
  },
  setCache(key: string, value: any) {
    cache[key] = value;
  },
};

export default storage;