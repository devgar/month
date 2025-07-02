<script lang="ts">
import Table from '$lib/components/table.svelte';

let stamp_entries = $state(2);

const disabled = $derived(stamp_entries >= 4);
const onclick = () => { stamp_entries++; };
</script>

<h1>Month<sub>v2</sub></h1>
<button {onclick} {disabled}>
    + 1 day
</button>

<Table {stamp_entries} />

