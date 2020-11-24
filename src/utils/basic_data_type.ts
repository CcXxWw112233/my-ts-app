/* eslint-disable @typescript-eslint/no-unused-vars */
const a: any = "my name is cxw";
const b: number = (a as string).length;
declare function create(o: object): void;
// create({ props: 0 });
// 函数参数
interface c {
  c1: number;
  c2: string;
  [propname: string]: any;
}
interface d {
  c1?: number;
  c2?: string;
}
function d(c_p: { c1: string }) {
  console.log(c_p);
}
function e(params: c): c {
  return params;
}
function f(params: d): d {
  return params;
}
console.log(e({ c1: 1, c2: "a", c3: "333" }));
console.log(f({ c1: 1 }));

// 对象属性不可修改
interface g {
  readonly x: number;
  y: number;
}
let h: g = { x: 1, y: 2 };
h.y = 4;
console.log(h);

// 函数类型
interface i {
  (xx: string, yy: string): boolean;
}
let j: i;
j = function name(x: string, y: string) {
  return true;
};
console.log(j("1", "2"));

// 可索引的类型
interface k {
  [index: number]: string;
}
let l: k;
l = ["1", "2"];
console.log(l[0]);

// 混合类型
interface M {
  (start: number): string;
  interval: number;
  reset(): void;
}
function n(): M {
  let counter = <M>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {
    console.log(counter.interval);
  };
  return counter;
}
let o = n();
o(10);
o.interval = 5.0;
o.reset();
console.log(o);

// 函数
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myAdd(1, 2));
let mayadd = function (x: number, y: number): number {
  return x + y;
};
console.log(mayadd(1, 2));

// 泛型
function p<T>(arg: T): T {
  return arg;
}
let p2: <T>(arg: T) => T = p;
let q = p<string>("sss");
let q2 = p2("sss2");
console.log(q, q2);

interface r<T> {
  (arg: T): T;
}
let r2: r<number> = p;
export { a, b, d, h, n };
