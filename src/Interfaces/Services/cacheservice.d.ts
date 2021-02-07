export interface CacheServiceType {
  get: (key: string, parse: boolean) => any;
  set: (key: string, value: any) => void;
}
