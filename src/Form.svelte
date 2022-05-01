<!-- отвечает за создание функционала страницы -->
<script>
   // импорт классов из дериктории
   import materialStore from "./material-store";

   // экспортируем переменные
   export let id;   
   export let name="";
   export let price;

   // создаём переменные
   let inputPrice;

   // условия смены надписи на кнопках
   $: mode = id ? "edit" : "add";
   $: canSubmit = price >= 0 && name !== "";

   // функция изменения состояния кнопки
   function submit() {
      if (!canSubmit) {
         return;
      }
      /* если значение mode === add добавляем название 
      и цену в materialStore */
      if (mode === 'add'){
         materialStore.add(name, price);   
      }

      if (mode === "edit") {
         materialStore.edit(id, name, price);
      }
      name = "";
      price = 5;
      inputPrice.value = price;
      id = undefined;
   }
   
   // функция изменения состояния кнопки
   function cancel(){
      price = 5;
      name = "";
      id = undefined;    
   }
</script>

<!-- отвечает за стиль кнопок -->
<style>
   button {
      margin-left: 20px;
   }
   button:disabled{
      cursor: not-allowed;
   }
</style>

<!--создаём форму-->
<form on:submit|preventDefault={submit}>
   <!--используется для группировки нескольких элементов управления-->
   <fieldset>
        <!--представляет заголовок для элемента-->
        <label for="nameField">Material</label>
        <!--приём данных-->
        <input 
        bind:value={name} 
        placeholder="Wood, Glue, Etc"
        type="text" 
        id="nameField">

         <!--представляет заголовок для элемента-->
        <label for="priceField">Price</label>
        <input
        bind:this={inputPrice}
        bind:value={price}
        min="0"
        step="any" 
        placeholder="Price"
        type="number" 
        id="priceField">
   </fieldset> 

   <!--кнопка добавить-->
   <button 
   disabled={!canSubmit}
   class="float-right"
   type="submit">
   {mode}
   </button>

   <!--конструкция if для активации кнопки отмены-->
   {#if mode === 'edit'}
      <!--кнопка отменить-->
      <button 
      on:click={cancel} 
      class="float-right" 
      type="button">
      Cancel
      </button>
   {/if}
</form>