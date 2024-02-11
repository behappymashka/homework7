//Найти среднее арифметическое всех целых чисел от 1 до 500

let sum = 0;
let average = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
}
average = sum / 500;
document.write(`среднее арифметическое всех целых чисел от 1 до 500 = ${average}`);
