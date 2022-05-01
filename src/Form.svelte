<script>
   import materialStore from "./material-store";
   export let id;   
   export let name="";
   export let price;
   let inputPrice;
   // условия смены надписи на кнопках
   $: mode = id ? "edit" : "add";
   $: canSubmit = price >= 0 && name !== "";
   // функция изменения состояния кнопки
   function submit() {
      if (!canSubmit) {
         return;
      }
      // если значение mode === add добавляем название и цену в materialStore 
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

<style>/*отвечает за стиль кнопок*/
   button {
      margin-left: 20px;
   }
   button:disabled{
      cursor: not-allowed;
   }
</style>

<form on:submit|preventDefault={submit}><!--создаём форму-->
   <fieldset><!--используется для группировки нескольких элементов управления-->
        <label for="nameField">Material</label><!--представляет заголовок для элемента-->
        <input 
        bind:value={name} 
        placeholder="Wood, Glue, Etc"
        type="text" 
        id="nameField"><!--приём данных-->

        <label for="priceField">Price</label><!--представляет заголовок для элемента-->
        <input
        bind:this={inputPrice}
        bind:value={price}
        min="0"
        step="any" 
        placeholder="Price"
        type="number" 
        id="priceField">
   </fieldset> 
   
   <button 
   disabled={!canSubmit}
   class="float-right"
   type="submit">
   {mode}
   </button><!--кнопка добавить-->

   <!--конструкция if для активации кнопки отмены-->
   {#if mode === 'edit'}
      <button 
      on:click={cancel} 
      class="float-right" 
      type="button">
      Cancel
      </button><!--кнопка отменить-->
   {/if}
</form>