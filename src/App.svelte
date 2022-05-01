<!-- отвечает за создание функционала страницы -->
<script>
	// импорт классов из дериктории
	import Table from "./Table.svelte";
	import Form from "./Form.svelte";

	//создаём переменные
	let id;
	let name = "";
	let price = 5;

	/* функция edit, которая присваивает event.detail 
	 переменным id, name 
	 и price, при клике на добавленный материал позвлоялет 
	 редактирвоать его название и цену  */
	function edit(event){
		({ id, name, price } = event.detail);
	}
</script>

<!-- отвечает за стиль страницы -->
<style>
	main {
		flex: 1;
		align-content: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
	}
</style>

<!-- основное содержимое App.svelte -->
<main> 
	<h1>Project Estimator</h1>

	<!-- вызов Form.svelte -->
	<Form bind:price bind:id bind:name />

	<Table on:edit={edit}/>
</main>