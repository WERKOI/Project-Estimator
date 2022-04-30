<script>
   import materialStore from "./material-store";
   export let id;   
   export let name="";
   export let price;
   // условия смены надписи на кнопках
   $: mode = id ? "edit" : "add";
   $: console.log(price);
   $: canSubmit = price >= 0 && name !== "";
   // функция изменения состояния кнопки
   function submit() {
      if (!canSubmit) {
         return;
      }

      if (mode === 'add'){
         materialStore.add(name, price);   
      }

      price = "";
      name = "";
      id = undefined;
   }
   
   // функция изменения состояния кнопки
   function cansel(){
      price = "";
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
      on:click={cansel} 
      class="float-right" 
      type="button">
      Cancel
      </button><!--кнопка отменить-->
   {/if}
</form>