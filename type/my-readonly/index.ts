/**
 * 遍历Key(Key in) 且Key都是T的key属性
 * 每次遍历都得加上readonly
 */
type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

/** test */
type Data = {
  name: string
}
let data: MyReadonly<Data> = {
  name: 'xiaoming'
}

data.name = 'daming' //无法为“name”赋值，因为它是只读属性。ts(2540)