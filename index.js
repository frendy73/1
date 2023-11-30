// Создание массива из 30 случайных чисел в диапазоне от 0 до 99
const array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

// Вывод исходного массива
console.log('Исходный массив:', array);

// Добавление случайного числа в массив
const randomNumber = Math.floor(Math.random() * 100);
array.push(randomNumber);

// Вывод массива после добавления случайного числа
console.log('Массив после добавления случайного числа:', array);
