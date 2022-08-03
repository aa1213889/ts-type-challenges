/** 判断字符串是否以某个前缀开头 */
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false

let result: StartsWith<'hello wrold', 'hello'> = true
