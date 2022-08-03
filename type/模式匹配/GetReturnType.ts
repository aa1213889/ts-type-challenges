/** 获取函数类型的返回类型 */
type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : unknown

type Func = (a: number, b: number) => string
const func: Func = (a, b) => (a + b).toString()

let result: GetReturnType<Func> = 'str' //let result: string
