//the idea comes from here: https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
export type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: T[K] }; // gives a Type which includes all keys (optinally) of T which are not also keys of U
export type SaveCombine<T, U> = Without<T, U> & U; // this is for attributes which are present in both types but the resulting type should only inherit those attributes from U specific type

/* Example

type A = {
  a: number;
  b: number;
  d: number;
};

type B = {
  b: number;
  c: number;
};

type C = Without<A, B>;

-> type C will be = {
    a?: number | undefined;
    d?: number | undefined;
}

*/
