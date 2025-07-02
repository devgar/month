<script lang="ts">
import type { NonWorkingDayProps } from '$lib/components/row.types';

let { stamp_entries = 2, day_kind }: NonWorkingDayProps = $props();

const capital_kind = $derived(day_kind.charAt(0).toUpperCase() + day_kind.slice(1));
</script>

<style>
tr.weekend, tr.holiday {
    td {
        padding: 2px;
        text-align: center;
        font-size: 40%;
        color: #fff;
        color: var(--text);
        background-color: #161f27;
        background-color: var(--background);
    }
}
</style>

<tr class="{day_kind}">
    <td class="{day_kind}" colspan="{1 + stamp_entries * 2}">{capital_kind}</td>
</tr>
