import { expect, test } from 'vitest';
import { useHelpers } from '@/tools/hooks/helpers.hook';

const {
  getPageFromUrl,
} = useHelpers();

// TEST gerPageFromUrl
test('gerPageFromUrl with correct value (1)', () => {
  expect(getPageFromUrl('https://some-random-url?first-arg=17&page=42&third-arg=1')).toBe('42');
});

test('gerPageFromUrl with correct value (2)', () => {
  expect(getPageFromUrl('https://some-random-url?first-arg=17&page=11')).toBe('11');
});

test('gerPageFromUrl with missing value', () => {
  expect(getPageFromUrl('https://some-random-url?first-arg=17&second-arg=44&third-arg=1')).toBe(null);
});

test('gerPageFromUrl with no query params', () => {
  expect(getPageFromUrl('https://some-random-url')).toBe(null);
});

test('gerPageFromUrl with null URL', () => {
  expect(getPageFromUrl(null)).toBe(null);
});

// TEST setQueryParams
test
