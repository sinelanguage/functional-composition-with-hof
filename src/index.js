const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const sayHello = str => str.toUpperCase();
const louder = str => `${str}!!`;
const repeat = str => `${str} ${str} ${str}`;

const doEverything = compose(
  sayHello,
  louder,
  repeat
);

const result = doEverything("hello world");

console.log(result);
