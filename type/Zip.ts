type Zip<OneArr extends unknown[], TwoArr extends unknown[]> = OneArr extends [infer OneFristEle, ...infer OneEles]
  ? TwoArr extends [infer TwoFristEle, ...infer TwoEles]
    ? [[OneFristEle, TwoFristEle], ...Zip<OneEles, TwoEles>]
    : []
  : []

type ZipResult = Zip<[1, 2, 3], ['a', 'b', 'c']>
//type ZipResult = [[1, "a"], [2, "b"], [3, "c"]]
