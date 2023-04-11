import { describe, expect, test } from 'vitest';

import { formateDate } from '.';

describe('formate date', () => {
  test('formates date correctly', () => {
    expect(formateDate('2017-02-02')).toBe('02-02-2017');
  });
});
