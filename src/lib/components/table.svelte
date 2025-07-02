<script>
import { genMonthDays } from "$lib/month";

import Row from './row.svelte'
import NonWorkingRow from './row.non-working.svelte';

let { stamp_entries = 2 } = $props();

const monthDays = Array.from(genMonthDays());

$effect(() => {
    stamp_entries = stamp_entries > 4 ? 4 : stamp_entries;
})
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}
table thead tr th:first-child {
    width: 40px;
}
</style>

<table>
    <thead>
        <tr>
            <th>Day</th>
            {#each Array(stamp_entries) }
                <th>Entrada</th>
                <th>Salida</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each monthDays as {i, weekend}}
            {#if weekend}
                {#if (i % 2 === 1)}
                    <NonWorkingRow stamp_entries={stamp_entries} day_kind="weekend" />
                {/if}
            {:else}
                <Row {i} {stamp_entries} {weekend} holiday={false} entries={[]} />
            {/if}
        {/each}
    </tbody>
</table>
