import { describe, expect, test } from 'vitest';

import { formateDate, getExperience } from '.';

describe('formate date', () => {
  test('formates date correctly', () => {
    expect(formateDate('2017-02-02')).toBe('02-02-2017');
    expect(formateDate('')).toBe('');
  });
});

describe('get experience', () => {
  test('returns experience correctly', () => {
    const dateNow = new Date();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();

    const noExperience = getExperience(`${year}-${month}`);

    expect(noExperience).toEqual('Have no experience yet');
    expect(getExperience('')).toEqual('Have no experience yet');
  });
});
