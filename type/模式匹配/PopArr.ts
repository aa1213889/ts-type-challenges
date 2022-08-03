/**获取去掉最后一个元素的数组 */
type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer RestArr, unknown] ? RestArr : never

type Arrs = [1, 2, 3]
let arr: PopArr<Arrs> = [1, 2]
