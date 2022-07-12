import { resolveResponsiveProps } from './resolveResponsiveProps';

const breakpoints = Array.from({ length: 4 });
const values = [1, 2];

describe('resolveResponsiveProps', () => {
  it('return null if no target is specified', () => {
    const result = resolveResponsiveProps({ breakpoints }, values);
    expect(result).toStrictEqual([null]);
  });

  describe('above', () => {
    it('0', () => {
      const result = resolveResponsiveProps({ above: 0, breakpoints }, values);
      expect(result).toStrictEqual([2, 1, 1, 1, 1]);
    });

    it('1', () => {
      const result = resolveResponsiveProps({ above: 1, breakpoints }, values);
      expect(result).toStrictEqual([2, 2, 1, 1, 1]);
    });

    it('3', () => {
      const result = resolveResponsiveProps({ above: 3, breakpoints }, values);
      expect(result).toStrictEqual([2, 2, 2, 2, 1]);
    });

    it('is larger than breakpoints length', () => {
      const result = resolveResponsiveProps({ above: 6, breakpoints }, values);
      expect(result).toStrictEqual([2, 2, 2, 2, 2]);
    });
  });

  describe('below', () => {
    it('0', () => {
      const result = resolveResponsiveProps({ below: 0, breakpoints }, values);
      expect(result).toStrictEqual([2, 2, 2, 2, 2]);
    });

    it('1', () => {
      const result = resolveResponsiveProps({ below: 1, breakpoints }, values);
      expect(result).toStrictEqual([1, 1, 2, 2, 2]);
    });

    it('3', () => {
      const result = resolveResponsiveProps({ below: 3, breakpoints }, values);
      expect(result).toStrictEqual([1, 1, 1, 1, 2]);
    });

    it('is larger than breakpoints length', () => {
      const result = resolveResponsiveProps({ below: 6, breakpoints }, values);
      expect(result).toStrictEqual([1, 1, 1, 1, 1]);
    });
  });

  describe('above and below', () => {
    it('above 0, below 0', () => {
      const result = resolveResponsiveProps(
        { above: 0, below: 0, breakpoints },
        values
      );
      expect(result).toStrictEqual([2, 1, 1, 1, 1]);
    });

    it('above 3, below 1', () => {
      const result = resolveResponsiveProps(
        { above: 3, below: 1, breakpoints },
        values
      );
      expect(result).toStrictEqual([1, 1, 2, 2, 1]);
    });

    it('above 1, below 3', () => {
      const result = resolveResponsiveProps(
        { above: 1, below: 3, breakpoints },
        values
      );
      expect(result).toStrictEqual([null]);
    });
  });

  describe('responsive values', () => {
    it('first arg of values is array', () => {
      const result = resolveResponsiveProps({ below: 2, breakpoints }, [
        [8, 16],
        'auto',
      ]);
      expect(result).toStrictEqual([8, 16, null, 'auto', 'auto']);
    });
    it('second arg of values is array', () => {
      const result = resolveResponsiveProps({ below: 1, breakpoints }, [
        'auto',
        [8, 16, 32, 64],
      ]);
      expect(result).toStrictEqual(['auto', 'auto', 32, 64, null]);
    });
  });

  // TODO:
  // describe('passing other than numbers', () => {
  //   it('above is string', () => {
  //     const result = resolveResponsiveProps(
  //       { above: '1', breakpoints },
  //       values
  //     );
  //     expect(result).toStrictEqual([null]);
  //   });
  //   it('below is string', () => {
  //     const result = resolveResponsiveProps(
  //       { below: '1', breakpoints },
  //       values
  //     );
  //     expect(result).toStrictEqual([null]);
  //   });
  //   it('both are strings', () => {
  //     const result = resolveResponsiveProps(
  //       { above: '1', below: '1', breakpoints },
  //       values
  //     );
  //     expect(result).toStrictEqual([null]);
  //   });
  // });
});
