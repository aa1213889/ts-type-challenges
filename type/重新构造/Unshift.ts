type Unshift<Arr extends unknown[], NewEle> = [NewEle, ...Arr];

type tuple = [1, 2, 3];

let myTuple: Unshift<tuple, 0> = [0, 1, 2, 3];
//let myTuple: [0, 1, 2, 3]
