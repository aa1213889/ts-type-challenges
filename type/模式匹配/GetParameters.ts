/** 匹配函数类型的参数 */
type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never

type Func = (a: number, b: string) => number
const func: Func = (a, b) => a + parseInt(b)

let result: GetParameters<Func> = [1, '2'] //let result: [a: number, b: string]
