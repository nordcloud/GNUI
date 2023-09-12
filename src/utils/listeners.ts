type EventListenerParams = [
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: EventListenerOptions | boolean | undefined,
];

export const on = (object: EventTarget, ...args: EventListenerParams) =>
  object.addEventListener(...args);

export const off = (object: EventTarget, ...args: EventListenerParams) =>
  object.removeEventListener(...args);
