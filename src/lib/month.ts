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

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("generates month days correctly", () => {
    const refDate = new Date(2023, 9, 1); // October 1, 2023
    const days = Array.from(genMonthDays(refDate));

    expect(days.length).toBe(31); // October has 31 days
    expect(days.at(0)?.i).toBe(1); // First day should be 1
    expect(days.at(-1)?.i).toBe(31); // Last day should be 31
    expect(days[0].dark).toBe(false); // October 1, 2023 is a Sunday (not dark)
    expect(days[6]).toMatchObject({ i: 7, dark: false, weekend: true });
    expect(days[5].weekend).toBe(false); // October 6, 2023 is a Friday (not weekend)
  });

  it("generates leap year February days correctly", () => {
    const refDate = new Date(2020, 1, 1); // February 1, 2020 (leap year)
    const days = Array.from(genMonthDays(refDate));

    expect(days.length).toBe(29); // February in a leap year has 29 days
    expect(days.at(0)?.i).toBe(1); // First day should be 1
    expect(days.at(-1)?.i).toBe(29); // Last day should be 29
    expect(days[0].dark).toBe(false); // February 1, 2020 is a Saturday (not dark)
  });
}
