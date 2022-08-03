/**获取去掉第一个元素的数组 */
type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer RestArr] ? RestArr : never

type Arrs = [1, 2, 3]
let arr: ShiftArr<Arrs> = [2, 3]
