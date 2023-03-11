/**
 * 两个联合类型 T,U
 * 遍历： T extends U ? never : T
 *  其中 每次遍历T中的某个key 是在联合类型U中 返回never ,否则返回该key
 *            (如 'name')   (如 'name'|'age')
 */

type MyExclude<T, U> = T extends U ? never : T

/** test */
type Student = {
  name: string
  age: number
  score: number
}

type ETest = MyExclude<keyof Student, 'name'> //type ETest = "age" | "score"
type ETest2 = MyExclude<keyof Student, 'name' | 'score'> //type ETest = "age" 
type ETest3 = MyExclude<keyof Student, 'name' | 'score' | 'age'> //type ETest3 = never