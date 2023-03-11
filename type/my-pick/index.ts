/**
 * K extends keyof T
 *   K必须在(extends) 类型T的key范围(keyof T)
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


/** test */

type Student = {
  name: string
  age: number
  score: number
}

let s: MyPick<Student, 'name' | 'age'> = {
  name: 'xiaoming',
  age: 20
} 
