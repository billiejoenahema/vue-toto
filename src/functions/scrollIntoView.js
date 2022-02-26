export const scrollIntoElement = () => {
  // インデックス0を指定することで単一の要素を取得できる
  const el = document.getElementsByClassName('active')[0];
  el.scrollIntoView({
    behavior: 'smooth', // [auto, instant, smooth](default: auto)
    block: 'center', // [start, center, end, nearest](default: nearest)
  });
};
