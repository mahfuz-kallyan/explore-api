const user ={id: 1, name: 'kalimuddin', age: 20, job: 'creator'}
// JavaScript Object Notation (JSON)
const stringify = JSON.stringify(user);
// console.log(stringify);

const shop ={
    owner: 'Alia',
    address:{
        street: 'kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mobile', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
// console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);



