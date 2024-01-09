// console.log('Hello World Node.js!');

import { reject } from "lodash-es";

// const drop = require('lodash/drop');

// console.log(drop([1, 2, 3, 4, 5], 1));

// used function drop from Lodash liberary, which ignor 1st element from array



// import { camelCase } from 'lodash-es';

// let str = 'Hello World Node.js!'

// str = camelCase(str);

// console.log(str);



const fetchData = async () => {
    try {
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
    };
    
    fetchData();



// let checkWeather = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         if (Math.random () > 0.5) {
//             resolve ("Sunny");
//         } else {
//             reject (" Faild to get weather data");
//         }
//     }, 2000)
// });
// async function getWeather () {
//     try {
//         let weather = await checkWeather;
//         console.log(`Weather is ${weather}`);

//     } catch (error) {
//         console.log(`Error ${error}`);

//     }
// };

// getWeather();