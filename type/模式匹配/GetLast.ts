/**匹配数组最后一个元素 */
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer LastEle] ? LastEle : []

type Arrs = [1, 2, 3]
let arr: GetLast<Arrs> = 3
