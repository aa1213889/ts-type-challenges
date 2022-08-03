/** 匹配数组第一个元素 */
type GetFirst<Arr extends unknown[]> = Arr extends [infer FristEle, ...unknown[]] ? FristEle : []

type Arrs = [1, 2, 3]
let list: GetFirst<Arrs> = 1
