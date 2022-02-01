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

// async_await를 사용하면 원래 익숙한 동기코드(예를들어 Java)와 동일한 형태로 작성이 가능
const totalSum = async() => {
    try {
        let sum1 = await addSum(10, 20);
        let sum2 = await addSum(sum1, 1);
        let sum3 = await addSum(sum2, 2);
        let sum = await addSum(sum3, 3);
        console.log({sum});   
    } catch (error) {
        if(error) console.log(error);
    } 
}