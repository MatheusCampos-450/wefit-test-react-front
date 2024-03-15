export function removeDuplicates<T>(array: T[]): T[] {
  const newSet = new Set(array.map((item) => JSON.stringify(item)));
  const toJSON = (item: string) => JSON.parse(item);

  const uniqueArray: T[] = Array.from(newSet, toJSON);

  return uniqueArray;
}
