import { useEffect, useRef, useState } from 'react';
import { useFirstMountState, usePrevious } from 'react-use';

export function useAnimationDuration<T>(
  state: T,
  defaultAnimationDurationInMs: number
): number {
  const isFirstMount = useFirstMountState();
  const previousState = usePrevious(state);
  const [animationDuration, setAnimationDuration] = useState<number>(
    defaultAnimationDurationInMs
  );
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (state !== previousState) {
      setAnimationDuration(0);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => {
        setAnimationDuration(defaultAnimationDurationInMs);
        timeoutId.current = undefined;
      }, defaultAnimationDurationInMs);
    }
  }, [state, previousState, defaultAnimationDurationInMs]);

  if (isFirstMount) {
    return 0;
  }
  return animationDuration;
}
