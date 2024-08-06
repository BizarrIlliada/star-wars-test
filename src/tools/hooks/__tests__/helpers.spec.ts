import { describe, expect, test, vi } from 'vitest';
import { useHelpers } from '@/tools/hooks/helpers.hook';

vi.mock('vue-router');

const {
  getPageFromUrl,
  // setQueryParams,
  getUniqueValArraysIntersection,
  normalizeHTTPParams,
} = useHelpers();

describe('gerPageFromUrl', () => {
  test('with correct value (1)', () => {
    expect(getPageFromUrl('https://some-random-url?first-arg=17&page=42&third-arg=1')).toBe('42');
  });
  
  test('with correct value (2)', () => {
    expect(getPageFromUrl('https://some-random-url?first-arg=17&page=11')).toBe('11');
  });
  
  test('with missing value', () => {
    expect(getPageFromUrl('https://some-random-url?first-arg=17&second-arg=44&third-arg=1')).toBe(null);
  });
  
  test('with no query params', () => {
    expect(getPageFromUrl('https://some-random-url')).toBe(null);
  });
  
  test('with null URL', () => {
    expect(getPageFromUrl(null)).toBe(null);
  });
});

// describe('setQueryParams', () => {
//   test('', () => {
//     TODO: learn how to fix the problem with using router in testing
//     setQueryParams({ newParam: 'newParam' });
//   });
// });

describe('getUniqueValArraysIntersection', () => {
  test('with empty arrays', () => {
    expect(getUniqueValArraysIntersection([], [])).toEqual([]);
  });
  
  test('with first array empty', () => {
    expect(getUniqueValArraysIntersection([], [1, 3, 8])).toEqual([]);
  });
  
  test('with second array empty', () => {
    expect(getUniqueValArraysIntersection([5, 6, 12], [])).toEqual([]);
  });
  
  test('with numbers arrays', () => {
    expect(getUniqueValArraysIntersection([3, 8, 14], [12, 14, 3])).toEqual([3, 14]);
  });
  
  test('with string arrays', () => {
    expect(getUniqueValArraysIntersection(['apple', 'green', 'sweet'], ['banana', 'yellow', 'sweet'])).toEqual(['sweet']);
  });
});

describe('normalizeHTTPParams', () => {
  test('with empty params', () => {
    expect(normalizeHTTPParams({})).toEqual({});
  });
  
  test('with a string parameter', () => {
    expect(normalizeHTTPParams({ example: 'param' })).toEqual({ example: 'param' });
  });
  
  test('with a number parameter', () => {
    expect(normalizeHTTPParams({ example: 2 })).toEqual({ example: '2' });
  });
  
  test('with an string array parameter', () => {
    expect(normalizeHTTPParams({ example: ['string', 'is', 'text'] })).toEqual({ example: 'string,is,text' });
  });
  
  test('with an number array parameter', () => {
    expect(normalizeHTTPParams({ example: [12, 22, 17] })).toEqual({ example: '12,22,17' });
  });
  
  test('with null parameter', () => {
    expect(normalizeHTTPParams({ example: null })).toEqual({});
  });
  
  test('with different parameters', () => {
    expect(normalizeHTTPParams({
      key1: 'string',
      key2: 2,
      key3: ['apple', 'sweet'],
      key4: [1, 2, 3],
      key5: null,
    })).toEqual({
      key1: 'string',
      key2: '2',
      key3: 'apple,sweet',
      key4: '1,2,3',
    });
  });
});
