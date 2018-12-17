export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
  return (<K[]>Object.keys(target)).reduce(
    (res, key) => {
      if (!omitKeys.includes(key)) {
        res[key] = target[key];
      }
      return res;
    },
    <any>{}
  );
}
