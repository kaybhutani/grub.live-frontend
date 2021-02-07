import { CacheServiceType } from "../Interfaces/Services/cacheservice";

class CacheService implements CacheServiceType {
  get = (key: string): any => {
    const resp = localStorage.getItem(key);
    if (!resp) return null;
    return JSON.parse(resp);
  };
  set = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
}

export default CacheService;
