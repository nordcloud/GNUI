type EventListenerParams = [
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions | undefined
];

export const on = (obj: EventTarget, ...args: EventListenerParams) =>
  obj.addEventListener(...args);

export const off = (obj: EventTarget, ...args: EventListenerParams) =>
  obj.removeEventListener(...args);
