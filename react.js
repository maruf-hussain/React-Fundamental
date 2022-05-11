// Template String..........................
// const Phone = {
//     Name: 'Samsung',
//     Price:25000,
//     Procecer: 'Sd 778'
// }
// const PhoneDetails = `
// Phone Name: ${Phone.Name}
// Phone Procecer: ${Phone.Procecer};`
// console.log(PhoneDetails);



// // Arrow Function.apply..................................
// const doMath = (nam1, nam2) => {
//     add = nam1 + nam2;
//     return add
// }

// const output = doMath(200, 500);
// console.log(output);

// const cashMoney = (maruf, sobuj) => {
//     total = maruf + sobuj;
//     return total
// }
// totalCash = cashMoney(3000, 5000);
// console.log(totalCash);

// const totalBudget = 200000;
// const motCost = (madrasa, mosjid, house, donation) => {
//     const totalCost = madrasa + mosjid + house;
//     const totalTaka = totalBudget + donation;
//     const obosistoTaka = totalTaka - totalCost;
//     return obosistoTaka;
    
// }

// const takaAse = motCost(50000,60000,120000,50000);
// console.log(takaAse);

// Array Method Map.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const products = [
//     {name:'laptop', brand:'dell', price: 75000,},
//     {name:'watch', brand:'rolex', price:52000},
//     {name: 'phone', brand:'samsung', price: 32000}
// ];
// const price = products.map (product => product.price);
// console.log(price);

// products.forEach(product => {
//     console.log(product.name);
// });


// const highPrice = products.filter(product => product.price >= 50000);


// const highPrice = products.find(product => product.name.includes('l'));
// console.log(highPrice);

// Destucsaring.........................................

const Howlader = {
name: 'pobon mia',
age: 45,
occupation: 'buissnes',
favorite:{
    palyer:'sakib al hasan',
    movie:'alu potol',
    song: 'ting tong'
}
}

// const {name, age} = Howlader;
// const {palyer} = Howlader.favorite;


// JSON...,,,,,,,,,,,,,,,,,,,,,,
// const Json = JSON.stringify(Howlader);
// console.log(Json);

// fetch.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
fetch('url')