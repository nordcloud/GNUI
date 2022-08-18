import { css } from "styled-components";
import theme from "../../theme";

export const mainCss = css`
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: ${theme.colors.accent};
    --rdp-background-color: ${theme.colors.primary};
    --rdp-accent-color-dark: ${theme.colors.accent};
    --rdp-background-color-dark: ${theme.colors.primary};
    --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75); /* Outline border for focused _and_ selected elements */

    margin: ${theme.spacing.spacing04};
  }

  /* Hide elements for devices that are not screen readers */
  .rdp-vhidden {
    box-sizing: border-box;
    margin: 0;
    background: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: absolute !important;
    top: 0;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    border: 0 !important;
  }

  /* Buttons */
  .rdp-button_reset {
    appearance: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: default;
    color: inherit;
    outline: none;
    background: none;
    font: inherit;

    -moz-appearance: none;
    -webkit-appearance: none;
  }

  .rdp-button {
    border: 2px solid transparent;
  }

  .rdp-button[disabled] {
    opacity: 0.25;
  }

  .rdp-button:not([disabled]) {
    cursor: pointer;
  }

  .rdp-button:focus:not([disabled]),
  .rdp-button:active:not([disabled]) {
    color: inherit;
    border: var(--rdp-outline);
    background-color: var(--rdp-background-color);
  }

  .rdp-button:hover:not([disabled]) {
    background-color: var(--rdp-background-color);
  }

  .rdp-months {
    display: flex;
  }

  .rdp-month {
    margin: 0 ${theme.spacing.spacing04};
  }

  .rdp-month:first-child {
    margin-left: 0;
  }

  .rdp-month:last-child {
    margin-right: 0;
  }

  .rdp-table {
    margin: 0;
    max-width: calc(var(--rdp-cell-size) * 7);
    border-collapse: collapse;
  }

  .rdp-with_weeknumber .rdp-table {
    max-width: calc(var(--rdp-cell-size) * 8);
    border-collapse: collapse;
  }

  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    text-align: left;
  }

  .rdp-multiple_months .rdp-caption {
    position: relative;
    display: block;
    text-align: center;
  }

  .rdp-caption_dropdowns {
    position: relative;
    display: inline-flex;
  }

  .rdp-caption_label {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0 ${theme.spacing.spacing01};
    white-space: nowrap;
    color: currentColor;
    border: 2px solid transparent;
    font-family: ${theme.fonts.body};
    font-size: 140%;
    font-weight: bold;
  }

  .rdp-nav {
    white-space: nowrap;
  }

  .rdp-multiple_months .rdp-caption_start .rdp-nav {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .rdp-multiple_months .rdp-caption_end .rdp-nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .rdp-nav_button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    padding: ${theme.spacing.spacing01};
    border-radius: 100%;
  }

  /* ---------- */
  /* Dropdowns  */
  /* ---------- */

  .rdp-dropdown_year,
  .rdp-dropdown_month {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .rdp-dropdown {
    appearance: none;
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    opacity: 0;
    border: none;
    background-color: transparent;
    font-family: ${theme.fonts.body};
    font-size: inherit;
    line-height: inherit;
  }

  .rdp-dropdown[disabled] {
    opacity: unset;
    color: unset;
  }

  .rdp-dropdown:focus:not([disabled]) + .rdp-caption_label,
  .rdp-dropdown:active:not([disabled]) + .rdp-caption_label {
    border: var(--rdp-outline);
    border-radius: 6px;
    background-color: var(--rdp-background-color);
  }

  .rdp-dropdown_icon {
    margin: 0 0 0 5px;
  }

  .rdp-head {
    border: 0;
  }

  .rdp-head_row,
  .rdp-row {
    height: 100%;
  }

  .rdp-head_cell {
    vertical-align: middle;
    text-transform: uppercase;
    font-size: ${theme.fontSizes.sm};
    font-weight: 700;
    text-align: center;
    height: var(--rdp-cell-size);
    padding: 0;
  }

  .rdp-tbody {
    border: 0;
  }

  .rdp-tfoot {
    margin: ${theme.spacing.spacing02};
  }

  .rdp-cell {
    width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    padding: 0;
    text-align: center;
  }

  .rdp-weeknumber {
    font-size: ${theme.fontSizes.sm};
  }

  .rdp-weeknumber,
  .rdp-day {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: var(--rdp-cell-size);
    max-width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    margin: 0;
    border: 2px solid transparent;
    border-radius: 100%;
  }

  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: bold;
  }

  .rdp-day_selected:not([disabled]),
  .rdp-day_selected:focus:not([disabled]),
  .rdp-day_selected:active:not([disabled]),
  .rdp-day_selected:hover:not([disabled]) {
    color: white;
    background-color: var(--rdp-accent-color);
  }

  .rdp-day_selected:focus:not([disabled]) {
    border: var(--rdp-outline-selected);
  }

  .rdp:not([dir="rtl"]) .rdp-day_range_start:not(.rdp-day_range_end) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdp:not([dir="rtl"]) .rdp-day_range_end:not(.rdp-day_range_start) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rdp[dir="rtl"] .rdp-day_range_start:not(.rdp-day_range_end) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rdp[dir="rtl"] .rdp-day_range_end:not(.rdp-day_range_start) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdp-day_range_end.rdp-day_range_start {
    border-radius: 100%;
  }

  .rdp-day_range_middle {
    border-radius: 0;
  }
`;
