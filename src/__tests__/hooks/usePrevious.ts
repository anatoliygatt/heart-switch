import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from '../../hooks/usePrevious';

describe('usePrevious', () => {
  test('returns previous state after each update', () => {
    const { result, rerender } = renderHook(({ state }) => usePrevious(state), {
      initialProps: { state: 0 },
    });
    expect(result.current).toBeUndefined();
    rerender({ state: 1 });
    expect(result.current).toBe(0);
    rerender({ state: 2 });
    expect(result.current).toBe(1);
    rerender({ state: 3 });
    expect(result.current).toBe(2);
  });
});
