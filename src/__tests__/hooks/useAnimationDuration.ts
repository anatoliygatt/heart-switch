import { renderHook } from '@testing-library/react-hooks';
import { useAnimationDuration } from '../../hooks/useAnimationDuration';

describe('useAnimationDuration', () => {
  test('responds to a change in state', async () => {
    const { result, waitForNextUpdate, rerender } = renderHook(
      ({ state, defaultAnimationDurationInMs }) =>
        useAnimationDuration(state, defaultAnimationDurationInMs),
      { initialProps: { state: 'sm', defaultAnimationDurationInMs: 350 } }
    );

    expect(result.current).toBe(0);
    await waitForNextUpdate();
    expect(result.current).toBe(350);

    rerender({ state: 'md', defaultAnimationDurationInMs: 350 });

    expect(result.current).toBe(0);
    await waitForNextUpdate();
    expect(result.current).toBe(350);
  });

  test('reschedules the update when the state is changed before the update is fired', async () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    const { result, waitForNextUpdate, rerender } = renderHook(
      ({ state, defaultAnimationDurationInMs }) =>
        useAnimationDuration(state, defaultAnimationDurationInMs),
      { initialProps: { state: 'sm', defaultAnimationDurationInMs: 350 } }
    );

    expect(clearTimeoutSpy).not.toHaveBeenCalled();
    expect(result.current).toBe(0);

    rerender({ state: 'md', defaultAnimationDurationInMs: 350 });

    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(result.current).toBe(0);
    await waitForNextUpdate();
    expect(result.current).toBe(350);

    clearTimeoutSpy.mockRestore();
  });
});
