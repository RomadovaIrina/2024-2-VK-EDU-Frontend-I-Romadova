/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  const prefix = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'ExB']
  if (typeof bytes !== 'number' || bytes < 0 || isNaN(bytes)) {
    return false;
  }

  if (bytes === 0) { return '0 B' }
  const sizeBytes = Math.floor(Math.log(bytes) / Math.log(1024));
  const exactSize = (bytes / Math.pow(1024, sizeBytes));
  const measure = sizeBytes >= prefix.length ? '...' : prefix[sizeBytes];
  const value =Number.isInteger(exactSize) ? exactSize : exactSize.toFixed(2);

  return `${value} ${measure}`;


}
