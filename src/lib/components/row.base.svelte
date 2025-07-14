<script lang="ts">
import type { RowProps } from "./row.types";
let { i, stamp_entries = 2, classes, header = false, placeholder = '', children }: RowProps = $props();
const colspan = $derived(stamp_entries * 2 + 1);
</script>

<style>
    tr {
        td, th { text-align: center; }
        th { font-size: 80%; }
        th:first-child { width: 40px; }
        &.small td {
            font-size: 80%;
            padding: 2px 0;
        }
    }
</style>

<tr class={classes}>
    {#if children}
       {@render children()}
    {:else if header}
        <th>Day</th>
        {#each Array(stamp_entries)}
            <th>Entrada</th>
            <th>Salida</th>
        {/each}
    {:else if placeholder}
        <td {colspan}>
            {placeholder}
        </td>
    {:else}
        <td>{i}</td>
        {#each Array(stamp_entries)}
            <td>HH:MM</td>
            <td>HH:MM</td>
        {/each}
    {/if}
</tr>
