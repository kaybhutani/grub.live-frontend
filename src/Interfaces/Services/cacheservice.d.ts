export interface CacheServiceType {
  get: (key: string, parse: boolean) => any;
  set: <T>(key: string, value: T) => void;
}
