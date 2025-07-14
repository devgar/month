import type { Snippet } from 'svelte';

export type NonWorkDayKind = 'holiday' | 'weekend';

export type NonWorkingDayProps = {
    stamp_entries: number;
    day_kind: NonWorkDayKind;
}

export type RowBaseProps = {
    i?: number;
    stamp_entries: number;
    classes?: string | string[];
    header?: boolean
    placeholder?: string;
    children?: Snippet;
}

export type ChildrenProps = {
    children: Snippet;
}

export type PlaceholderProps = {
    placeholder: string;
}

export type StampProps = {
    i: number;
}

export type HeaderProps = {
    header: true
}

export type RowProps = RowBaseProps & (ChildrenProps | PlaceholderProps | StampProps | HeaderProps);
