<script>
   export let id;   
   export let name="";
   export let price;

   $: mode = id ? "edit" : "add";
   $: console.log(price);
   $: canSubmit = price >= 0 && name !== "";

   function submit() {
      if (!canSubmit) {
         return;
      }

      price = "";
      name = "";
      id = undefined;
   }

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

   {#if mode === 'edit'}
      <button 
      on:click={cansel} 
      class="float-right" 
      type="button">
      Cancel
      </button><!--кнопка отменить-->
   {/if}
</form>