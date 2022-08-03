type Push<Arr extends unknown[], NewEle> = [...Arr, NewEle];

type tuple = [1, 2, 3];

let myTuple: Push<tuple, 4> = [1, 2, 3, 4];
//let myTuple: [1, 2, 3, 4]
