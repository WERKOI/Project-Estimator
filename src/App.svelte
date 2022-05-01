<script>//отвечает за создание функционала страницы
	import Table from "./Table.svelte";// импорт файлов в App.svelte
	import Form from "./Form.svelte";
	let id;
	let name = "";
	let price = 5;

	function edit(event){
		({ id, name, price } = event.detail);
	}
</script>

<style>/*отвечает за стиль страницы*/
	main {
		flex: 1;
		align-content: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
	}
</style>


<main> <!--основное содержимое App.svelte-->
	<h1>Project Estimator</h1>

	<Form bind:price bind:id bind:name /> <!--Вызов Form.svelte-->

	<Table on:edit={edit}/>
</main>