<script>
import { genMonthDays } from "$lib/month";

import BaseRow from './row.base.svelte'

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
</style>

<table>
    <thead>
        <BaseRow header {stamp_entries} />
        <!-- <HeaderRow {stamp_entries} /> -->
    </thead>
    <tbody>
        {#each monthDays as {i, weekend}}
            {#if weekend}
                {#if (i % 2 === 1)}
                    <BaseRow {stamp_entries} classes="weekend small" placeholder="Weekend" />
                    <!-- <WeekendRow {stamp_entries} /> -->
                {/if}
            {:else}
                <BaseRow {i} {stamp_entries} />
                <!-- <WeekRow {i} {stamp_entries} /> -->
            {/if}
        {/each}
    </tbody>
</table>
