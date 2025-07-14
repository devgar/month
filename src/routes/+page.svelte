<script lang="ts">
import Table from '$lib/components/table.svelte';

let stamp_entries = $state(2);

const disabled = $derived(stamp_entries >= 4);
const onclick = () => { stamp_entries++; };
</script>

<style>
header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
}

header h1 {
    flex-grow: 1;
}

header button {
    font-size: 1.2em;
    height: max-content;
}
</style>

<header>
    <h1>Month<sub>v2</sub></h1>
    <button {onclick} {disabled}>
        {disabled ? 'Max reached' : 'Add stamp'}
    </button>
</header>

<Table {stamp_entries} />

