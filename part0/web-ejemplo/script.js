const list = [];
const anotherList = list.concat();

const persona = {
    name: 'Lucas',
    twitter: '@midudev',
    age: 24,
    isDeveloper: true,
    links: ['https://midu.tube', 'https://midu.live']
}
//Function suma
const sumar = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
}
console.log(sumar(1, 2));

//Function resta
const restar = (a,b) =>{
    return a - b;
}
console.log(restar(8, 2));
