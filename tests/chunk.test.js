import chunk from '../src/chunk';

describe('Test Chunk', () => {
  describe('Split array into gruops of given size and the split is evenly', () => {
    test('Input [\'a\',\'b\'] should produce output [\'a\'],[\'b\']', () => {
      expect(chunk(['a', 'b'],1)).toStrictEqual(['a'], ['b']);
    })
  })

  describe('Split array into gruops of given size but the split is not evenly', () => {
    test('Input [\'a\',\'b\,\'c\'] should produce output [\'a\',\'b\'], [\'c\']', () => {
      expect(chunk(['a', 'b'],1)).toStrictEqual(['a', 'b'], ['c']);
    })
  })
})