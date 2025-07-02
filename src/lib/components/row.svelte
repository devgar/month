<script lang="ts">
let { i, stamp_entries = 2, weekend, holiday, entries } = $props();
</script>

<style>
    tr td {
        text-align: center;
    }
</style>

<tr>
    <td>{ i }</td>
    {#each Array(stamp_entries) }
        <td>HH:MM</td>
        <td>HH:MM</td>
    {/each}
</tr>
