const fib = (n) => {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2); 
}

class Obj {
    doSomeThing(arg1_) {
        let callback_ = arguments[arguments.length - 1];

        let callback = typeof(callback_) == 'function' ? callback_ : null;

        let arg1 = typeof arg1_ === 'number' ? arg1_ : null;

        if (!arg1) return callback(new Error('first arg missing or not number'));

        process.nextTick(() => {
            let data = fib(arg1);
            callback(null, data);
        })
    }
}

let test = new Obj();
const number = 10;

test.doSomeThing(number, (err, value) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`fibonaci value for ${number} is ${value}`);
    }
})

console.log('called doSomething');