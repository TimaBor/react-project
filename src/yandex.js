export function yandex(J, S) {
  const JArray = J.split('');
  const SArray = S.split('');
  let result = 0;

  const JArraySort = JArray.filter(function (item, index) {
    return JArray.indexOf(item) == index;
  });

  for (let i = 0; i < JArraySort.length; i++) {
    const subresult = SArray.filter((symb) => symb === JArraySort[i]);
    result += subresult.length;
  }
  console.log(result);
  return result;
}

yandex('aabb', 'aabbccd');
