export function nullthrows<T>(value?: T | null, message?: string): T {
  if (value != null) {
    return value;
  }
  const error = new Error(
    message !== undefined ? message : 'Got unexpected ' + value
  );
  // Skip nullthrows's own stack frame.
  (error as any).framesToPop = 1;
  throw error;
}
