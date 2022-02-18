import { renderHook } from '@testing-library/react-hooks';
import { useFirstMountState } from '../../hooks/useFirstMountState';

describe('useFirstMountState', () => {
  test('returns true on the first render and false on the subsequent ones', () => {
    const { result, rerender } = renderHook(() => useFirstMountState());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(false);
    rerender();
    expect(result.current).toBe(false);
  });
});
