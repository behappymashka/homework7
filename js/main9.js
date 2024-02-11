//--------------------Дано натуральное число. Найти и вывести на страницу все его делители
let x = parseInt(prompt("Введите любое натурально число"));
for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
        document.write(`${i} `);
    }
}
//----------------------------Определить количество его четных делителей
/*let x = parseInt(prompt("Введите любое натурально число"));
let count = 0;
for (let i = 1; i <= x; i++) {
    if (x % i === 0 && i % 2 === 0) {
        document.write(`${i} `);
        count++
    }
}
document.write(`<p>${count} </p>`);*/
//-----------------------Найти сумму его парных делителей
/*let x = parseInt(prompt("Введите любое натурально число"));
let sum = 0;
for (let i = 1; i <= x; i++) {
    if (x % i === 0 && i % 2 === 0) {
        document.write(`${i} `);
        sum += i;
    }

}
document.write(`<p>${sum} </p>`);*/
