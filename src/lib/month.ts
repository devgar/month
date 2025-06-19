const SUNDAY = 0;
const TUESDAY = 2;
const THURSDAY = 4;
const SATURDAY = 6;

type PrintableDay = {
  i: number;
  dark?: boolean;
  weekend?: boolean;
};

export function* genMonthDays(refDate?: Date): Generator<PrintableDay> {
  refDate ??= new Date();
  for (let i = 1; i <= 32; i++) {
    const date = new Date(refDate.getFullYear(), refDate.getMonth(), i);
    if (date.getMonth() !== refDate.getMonth()) {
      break;
    }
    const weekend = [SUNDAY, SATURDAY].includes(date.getDay());
    const dark = [TUESDAY, THURSDAY].includes(date.getDay());
    yield { i, dark, weekend };
  }
}
