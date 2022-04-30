import { writable } from "svelte/store"; //импорт svelte/store 

const materialStore = writable([]); //создаём константу для хранения массива
const key = 'materials';

if (localStorage.getItem(key)){
    materialStore.set(JSON.parse(localStorage.getItem()));
};

// функция для добавления названия ицены материала в качестве констант
// возврат массивов товаров
const add = (name, price) => {
    materialStore.update((items) => {

        const item = {
            name,
            price,
            id: new Date().getTime()   
        };

        return[item,...items];
    });
};

materialStore.subscribe((items) => {
    console.log(items);
    const jsonString = JSON.stringify(items);
    localStorage.setItem(key, jsonString);
});

// экспорт по умолчанию
export default {
    subscribe: materialStore.subscribe,
    add,
}