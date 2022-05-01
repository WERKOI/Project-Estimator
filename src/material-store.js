import { writable } from 'svelte/store'; //импорт svelte/store 

const materialStore = writable([]); //создаём константу для хранения массива
const key = 'materials';

//при получении ключа разбирает строку в JSON 
if (localStorage.getItem(key)) {
  materialStore.set(JSON.parse(localStorage.getItem(key)));
}


// функция для добавления названия ицены материала в качестве констант
// возврат массивов товаров
const add = (name, price) => {
    materialStore.update((items) => {
      const item = {
        name,
        price,
        id: new Date().getTime(),
      };
  
      return [item, ...items];
    });
  };

  const edit = (id, name, price) => {
          materialStore.update(items => {
            const index = items.findIndex((i) => i.id === id);
            if (index === -1) {
              return items;
            }

            items[index].name = name;
            items[index].price = price;

            return items;
          });
  };

    const remove = (id) => {
      materialStore.update((items) => {
        return items.filter(i => i.id !== id);
      });

    }

  //метод разбирает строку в JSON
  materialStore.subscribe((items) => {
    const jsonString = JSON.stringify(items);
    localStorage.setItem(key, jsonString);
  });

// экспорт по умолчанию
export default {
    subscribe: materialStore.subscribe,
    add,
    edit,
    remove,
  };