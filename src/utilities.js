export const priorityTypes = [
  { type: 3, value: '高' },
  { type: 2, value: '中' },
  { type: 1, value: '低' },
];

export const processTypes = [
  { status: 1, value: '未着手' },
  { status: 2, value: '完了' },
  { status: 3, value: '保留' },
];

export const MAX_LENGTH = {
  title: 200,
  name: 50,
  password: 32,
};

export const ERROR_MESSAGE = {
  title: '文字数オーバーです',
  name: '名前は50文字以内で入力してください',
  password: 'パスワードは32文字以内で入力してください',
  login: 'ログインに失敗しました',
};
