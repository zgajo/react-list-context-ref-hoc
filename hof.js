const fun1 = (callback) => {
  callback();

  console.log("fun1");
};

const foo = () => {
  console.log("foo");
};

fun1(foo);
console.log("---------------------------");

const funWithProps = (callback, props) => {
  callback(props);

  console.log("fun1");
};

const fooWithProps = (props) => {
  console.log("foo", props);
};

funWithProps(fooWithProps, { name: "Darko" });

console.log("---------------------------");

const funWithReturnFunction = (callback) => {
  callback();

  console.log("fun1");

  return () => {
    console.log("return function");
  };
};

funWithReturnFunction(foo)();
