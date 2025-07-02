
export type NonWorkDayKind = 'holiday' | 'weekend';

export type NonWorkingDayProps = {
    stamp_entries: number;
    day_kind: NonWorkDayKind;
}
