<script>//отвечает за создание функционала страницы
    import materialStore from "./material-store";

    let materials = [];

    materialStore.subscribe(items => {
        materials = items;
    });

    $: total = materials.reduce((prev, next) => {
        prev += next.price;
        return prev;
    }, 0);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"        
    })
</script>

<!-- отвечает за стиль таблицы -->
<style>
    table{
        width: 100%;
    }
</style>
<!-- создаём таблицу -->
<table class="primary">
    <!-- оределяем набор строк -->
    <thead>
        <!-- создаём строку -->
        <tr>
            <!-- определяем ячейку -->
            <th>Material</th>
            <th>Price</th>
            <th />
        </tr>
    </thead>
    <!-- инкапсулируем ячейки -->
    <tbody>
        {#each materials as material (material.id)}
        <tr>
            <td>{material.name}</td>
            <td>{formatter.format(material.price)}</td>
            <td>
                <i class="far fa-trash-alt" />
            </td>
        </tr>
        {/each}
        <tr>
            <td>Total</td>
            <td colspan="2">{formatter.format(total)}</td>
        </tr>
    </tbody>
</table>