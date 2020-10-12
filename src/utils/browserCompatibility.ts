/**
 * example usage in styled components:
 *
 * ${whenIE11(`
 *   -ms-width: 10px;
 * `)}
 * @param styles
 */
export const whenIE11 = (styles: string) => {
  return `
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${styles}
    }
  `;
};
