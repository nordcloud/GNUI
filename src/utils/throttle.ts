export function throttle(
  throttledFunction: (...args: unknown[]) => unknown,
  timeout = 100
) {
  const throttlePaused = { state: false };

  return () => {
    if (throttlePaused.state) {
      return;
    }

    throttlePaused.state = true;

    setTimeout(() => {
      throttledFunction();

      throttlePaused.state = false;
    }, timeout);
  };
}
