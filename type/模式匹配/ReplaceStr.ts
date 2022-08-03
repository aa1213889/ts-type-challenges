/** 实现字符串替换 */
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str

let str: ReplaceStr<'hello world!', 'world', 'moon'> = 'hello moon!'
