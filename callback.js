const addSum = (a,b, callback) => {
    setTimeout(() => {
        if(typeof a !== 'number' || typeof b !== 'number') return callback('a, b must be numbers');
        callback(undefined, a+b);
    },3000);
};
// 콜백의 첫번째 인자가 오류, 첫번째 인자가 없는 경우에 성공이다라는 것은
// 개발자들간의 약속일뿐, 프로그래밍상으로 보장해주지 않기 때문에
// callback의 형태로 로직이 개발되는 경우, 호출되지 말아야할 로직이 호출되는 등의
// 로직 에러가 발생할 수 있고, 원인을 쉽게 찾지 못할 수 있다. 

let callback = (error, sum) => {
    if(error) return console.log({error});
    console.log({sum});
}

addSum(10,20, callback);