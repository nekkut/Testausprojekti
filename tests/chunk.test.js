import chunk from '../src/chunk';

describe('Test Chunk Positive', () => {
    test('Input [\'a\',\'b\'] should produce output [\'a\'],[\'b\']', () => {
      expect(chunk(['a', 'b'],1)).toStrictEqual(['a'], ['b']);
    })

    test('Input [\'a\',\'b\,\'c\'] should produce output [\'a\',\'b\'], [\'c\']', () => {
      expect(chunk(['a', 'b'],1)).toStrictEqual(['a', 'b'], ['c']);
    })
})

describe('Test Chunk Negative', () => {
    test('Input null should produce output []', () => {
      expect(chunk([null,1])).toStrictEqual([]);
    })

    test('Null as size should work as if it was 0', () => {
      expect(chunk(['a', 'b'],null)).toStrictEqual(['a', 'b']);
    })
	
	test('undefined as size should work as if it was 0', () => {
      expect(chunk(['a', 'b'],undefined)).toStrictEqual(['a', 'b']);
    })
	test('NaN as size should work as if it was 0', () => {
      expect(chunk(['a', 'b'],NaN)).toStrictEqual(['a', 'b']);
    })
})
