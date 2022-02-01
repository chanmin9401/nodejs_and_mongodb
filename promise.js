const addSum = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                reject('a, b must be numbers');
            }
            resolve(a+b);
        },3000);
    });
}

addSum(10,20)
.then((sum) => console.log({sum}))
.catch((error) => console.log({error}));    // 에러를 catch에게 일임 가능

// callback hell 개선
addSum(10,20)
.then((sum1) => addSum(sum1, 1))
.then((sum2) => addSum(sum2, 2))
.then((sum3) => addSum(sum3, 3))
.then((sum) => console.log({sum}))
.catch((error) => console.log({error}));