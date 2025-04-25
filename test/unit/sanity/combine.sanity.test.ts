import { combine } from '@app-mrg/combine';

describe('combine', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 1;
      const numChildComponentsFound = Object.keys(combine).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
