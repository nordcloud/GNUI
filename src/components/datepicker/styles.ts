import { css } from "styled-components";
import theme from "../../theme";

export const mainCss = css`
  .rdrCalendarWrapper {
    box-sizing: border-box;
    background: #ffffff;
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .rdrDateDisplay {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .rdrDateDisplayItem {
    -webkit-box-flex: 1;
    flex: 1 1;
    width: 0;
    text-align: center;
    color: inherit;
  }

  .rdrDateDisplayItem + .rdrDateDisplayItem {
    margin-left: 0.833em;
  }

  .rdrDateDisplayItem input {
    text-align: inherit;
  }

  .rdrDateDisplayItem input:disabled {
    cursor: default;
  }

  .rdrMonthAndYearWrapper {
    box-sizing: inherit;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .rdrMonthAndYearPickers {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .rdrNextPrevButton {
    box-sizing: inherit;
    cursor: pointer;
    outline: none;
  }

  .rdrMonths {
    display: -webkit-box;
    display: flex;
  }

  .rdrMonthsVertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .rdrMonthsHorizontal > div > div > div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }

  .rdrMonth {
    width: 27.667em;
  }

  .rdrWeekDays {
    display: -webkit-box;
    display: flex;
  }

  .rdrWeekDay {
    flex-basis: calc(100% / 7);
    box-sizing: inherit;
    text-align: center;
  }

  .rdrDays {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
  }

  .rdrInfiniteMonths {
    overflow: auto;
  }

  .rdrDateRangeWrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .rdrDateInput {
    position: relative;
  }

  .rdrDateInput input {
    outline: none;
  }

  .rdrDateInput .rdrWarning {
    position: absolute;
    font-size: 1.6em;
    line-height: 1.6em;
    top: 0;
    right: 0.25em;
    color: #ff0000;
  }

  .rdrDay {
    box-sizing: inherit;
    width: calc(100% / 7);
    position: relative;
    font: inherit;
    cursor: pointer;
  }

  .rdrDayNumber {
    display: block;
    position: relative;
  }

  .rdrDayNumber span {
    color: #1d2429;
  }

  .rdrDayDisabled {
    cursor: not-allowed;
  }

  @supports (-ms-ime-align: auto) {
    .rdrDay {
      flex-basis: 14.285% !important;
    }
  }

  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    pointer-events: none;
  }

  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    pointer-events: none;
  }

  .rdrDateRangePickerWrapper {
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .rdrStaticRanges {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .rdrStaticRange {
    font-size: inherit;
  }

  .rdrInputRange {
    display: -webkit-box;
    display: flex;
  }
`;

export const themeCss = css`
  .rdrCalendarWrapper {
    color: #000000;
    font-size: 12px;
  }

  .rdrDateDisplayWrapper {
    background-color: rgb(239, 242, 247);
  }

  .rdrDateDisplay {
    margin: 0.833em;
  }

  .rdrDateDisplayItem {
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 2px 0 rgba(35, 57, 66, 0.21);
    border: 1px solid transparent;
  }

  .rdrDateDisplayItem input {
    cursor: pointer;
    height: 2.5em;
    line-height: 2.5em;
    border: 0px;
    background: transparent;
    width: 100%;
    color: #849095;
  }

  .rdrDateDisplayItemActive {
    border-color: currentColor;
  }

  .rdrDateDisplayItemActive input {
    color: #7d888d;
  }

  .rdrMonthAndYearWrapper {
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    padding-top: 10px;
  }

  .rdrMonthAndYearPickers {
    font-weight: 600;
  }

  .rdrMonthAndYearPickers select {
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    background: transparent;
    padding: 10px 30px 10px 10px;
    border-radius: 4px;
    outline: 0;
    color: #3e484f;
    background-position: right 8px center;
    cursor: pointer;
    text-align: center;
  }

  .rdrMonthAndYearPickers select:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  .rdrMonthPicker,
  .rdrYearPicker {
    margin: 0 5px;
  }

  .rdrNextPrevButton {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 0.833em;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background: #eff2f7;
  }

  .rdrNextPrevButton:hover {
    background: #e1e7f0;
  }

  .rdrNextPrevButton i {
    display: block;
    width: 0;
    height: 0;
    padding: 0;
    text-align: center;
    border-style: solid;
    margin: auto;
    -webkit-transform: translate(-3px, 0px);
    transform: translate(-3px, 0px);
  }

  .rdrPprevButton i {
    border-width: 4px 6px 4px 4px;
    border-color: transparent rgb(52, 73, 94) transparent transparent;
    -webkit-transform: translate(-3px, 0px);
    transform: translate(-3px, 0px);
  }

  .rdrNextButton i {
    margin: 0 0 0 7px;
    border-width: 4px 4px 4px 6px;
    border-color: transparent transparent transparent rgb(52, 73, 94);
    -webkit-transform: translate(3px, 0px);
    transform: translate(3px, 0px);
  }

  .rdrWeekDays {
    padding: 0 0.833em;
  }

  .rdrMonth {
    padding: 0 0.833em 1.666em 0.833em;
  }

  .rdrMonth .rdrWeekDays {
    padding: 0;
  }

  .rdrMonths.rdrMonthsVertical .rdrMonth:first-child .rdrMonthName {
    display: none;
  }

  .rdrWeekDay {
    font-weight: 400;
    line-height: 2.667em;
    color: rgb(132, 144, 149);
  }

  .rdrDay {
    background: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: 0;
    line-height: 3em;
    height: 3em;
    text-align: center;
    color: #1d2429;
  }

  .rdrDay:focus {
    outline: 0;
  }

  .rdrDayNumber {
    outline: 0;
    font-weight: 300;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    top: 5px;
    bottom: 5px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .rdrDayToday .rdrDayNumber span {
    font-weight: 500;
  }

  .rdrDayToday .rdrDayNumber span:after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #3d91ff;
  }

  .rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after {
    background: #fff;
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: rgba(255, 255, 255, 0.85);
  }

  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    background: currentColor;
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 5px;
  }

  .rdrSelected {
    left: 2px;
    right: 2px;
  }

  .rdrInRange {
  }

  .rdrStartEdge {
    border-top-left-radius: 1.042em;
    border-bottom-left-radius: 1.042em;
    left: 2px;
  }

  .rdrEndEdge {
    border-top-right-radius: 1.042em;
    border-bottom-right-radius: 1.042em;
    right: 2px;
  }

  .rdrSelected {
    border-radius: 1.042em;
  }

  .rdrDayStartOfMonth .rdrInRange,
  .rdrDayStartOfMonth .rdrEndEdge,
  .rdrDayStartOfWeek .rdrInRange,
  .rdrDayStartOfWeek .rdrEndEdge {
    border-top-left-radius: 1.042em;
    border-bottom-left-radius: 1.042em;
    left: 2px;
  }

  .rdrDayEndOfMonth .rdrInRange,
  .rdrDayEndOfMonth .rdrStartEdge,
  .rdrDayEndOfWeek .rdrInRange,
  .rdrDayEndOfWeek .rdrStartEdge {
    border-top-right-radius: 1.042em;
    border-bottom-right-radius: 1.042em;
    right: 2px;
  }

  .rdrDayStartOfMonth .rdrDayInPreview,
  .rdrDayStartOfMonth .rdrDayEndPreview,
  .rdrDayStartOfWeek .rdrDayInPreview,
  .rdrDayStartOfWeek .rdrDayEndPreview {
    border-top-left-radius: 1.333em;
    border-bottom-left-radius: 1.333em;
    border-left-width: 1px;
    left: 0px;
  }

  .rdrDayEndOfMonth .rdrDayInPreview,
  .rdrDayEndOfMonth .rdrDayStartPreview,
  .rdrDayEndOfWeek .rdrDayInPreview,
  .rdrDayEndOfWeek .rdrDayStartPreview {
    border-top-right-radius: 1.333em;
    border-bottom-right-radius: 1.333em;
    border-right-width: 1px;
    right: 0px;
  }

  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    background: rgba(255, 255, 255, 0.09);
    position: absolute;
    top: 3px;
    left: 0px;
    right: 0px;
    bottom: 3px;
    pointer-events: none;
    border: 0px solid currentColor;
    z-index: 1;
  }

  .rdrDayStartPreview {
    border-top-width: 1px;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-top-left-radius: 1.333em;
    border-bottom-left-radius: 1.333em;
    left: 0px;
  }

  .rdrDayInPreview {
    border-top-width: 1px;
    border-bottom-width: 1px;
  }

  .rdrDayEndPreview {
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-top-right-radius: 1.333em;
    border-bottom-right-radius: 1.333em;
    right: 2px;
    right: 0px;
  }

  .rdrDefinedRangesWrapper {
    font-size: 12px;
    width: 226px;
    border-right: solid 1px #eff2f7;
    background: #fff;
  }

  .rdrDefinedRangesWrapper .rdrStaticRangeSelected {
    color: currentColor;
    font-weight: 600;
  }

  .rdrStaticRange {
    border: 0;
    cursor: pointer;
    display: block;
    outline: 0;
    border-bottom: 1px solid #eff2f7;
    padding: 0;
    background: #fff;
  }

  .rdrStaticRange:hover .rdrStaticRangeLabel,
  .rdrStaticRange:focus .rdrStaticRangeLabel {
    background: #eff2f7;
  }

  .rdrStaticRangeLabel {
    display: block;
    outline: 0;
    line-height: 18px;
    padding: 10px 20px;
    text-align: left;
  }

  .rdrInputRanges {
    padding: 10px 0;
  }

  .rdrInputRange {
    -webkit-box-align: center;
    align-items: center;
    padding: 5px 20px;
  }

  .rdrInputRangeInput {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    text-align: center;
    border: solid 1px rgb(222, 231, 235);
    margin-right: 10px;
    color: rgb(108, 118, 122);
  }

  .rdrInputRangeInput:focus,
  .rdrInputRangeInput:hover {
    border-color: rgb(180, 191, 196);
    outline: 0;
    color: #333;
  }

  .rdrCalendarWrapper:not(.rdrDateRangeWrapper)
    .rdrDayHovered
    .rdrDayNumber:after {
    content: "";
    border: 1px solid currentColor;
    border-radius: 1.333em;
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 0px;
    right: 0px;
    background: transparent;
  }

  .rdrDayPassive {
    pointer-events: none;
  }

  .rdrDayPassive .rdrDayNumber span {
    color: #d5dce0;
  }

  .rdrDayPassive .rdrInRange,
  .rdrDayPassive .rdrStartEdge,
  .rdrDayPassive .rdrEndEdge,
  .rdrDayPassive .rdrSelected,
  .rdrDayPassive .rdrDayStartPreview,
  .rdrDayPassive .rdrDayInPreview,
  .rdrDayPassive .rdrDayEndPreview {
    display: none;
  }

  .rdrDayDisabled {
    background-color: rgb(248, 248, 248);
  }

  .rdrDayDisabled .rdrDayNumber span {
    color: #aeb9bf;
  }

  .rdrDayDisabled .rdrInRange,
  .rdrDayDisabled .rdrStartEdge,
  .rdrDayDisabled .rdrEndEdge,
  .rdrDayDisabled .rdrSelected,
  .rdrDayDisabled .rdrDayStartPreview,
  .rdrDayDisabled .rdrDayInPreview,
  .rdrDayDisabled .rdrDayEndPreview {
    -webkit-filter: grayscale(100%) opacity(60%);
    filter: grayscale(100%) opacity(60%);
  }

  .rdrMonthName {
    text-align: left;
    font-weight: 600;
    color: #849095;
    padding: 0.833em;
  }
`;

export const customCss = css`
  .rdrCalendarWrapper,
  .rdrDateRangePickerWrapper {
    overflow: hidden;
    background: ${theme.color.background.ui01};
    color: ${theme.color.text.text01};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    border-radius: ${theme.radiusDefault};
    box-shadow: ${theme.shadow.shadow04};

    .rdrMonthAndYearWrapper {
      background: ${theme.color.background.ui03};
      border-bottom: 1px solid ${theme.color.border.border01};
      padding: ${theme.spacing.spacing02} 0;
      button {
        background: ${theme.color.interactive.secondary};
        width: 2rem;
        height: 2rem;
        border-radius: ${theme.radius.sm};
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          margin: 0;
        }
        &.rdrPprevButton {
          i {
            border-color: transparent ${theme.color.interactive.primary}
              transparent transparent;
          }
        }
        &.rdrNextButton {
          i {
            border-color: transparent transparent transparent
              ${theme.color.interactive.primary};
          }
        }
      }
      select {
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.sm};
        color: ${theme.color.text.text01};
        background: ${theme.color.field.default};
        border: 1px solid ${theme.color.border.input};
        padding: 0.5rem;
      }
    }
    .rdrMonth {
      padding: ${theme.spacing.spacing02};
      .rdrMonthName {
        padding-top: 0;
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.sm};
        color: ${theme.color.text.text02};
        font-weight: ${theme.fontWeights.medium};
      }
      .rdrWeekDays {
        .rdrWeekDay {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.sm};
          color: ${theme.color.text.text02};
          font-weight: ${theme.fontWeights.medium};
        }
      }
      .rdrDays {
        .rdrDay {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.sm};
          color: ${theme.color.text.text01};
          .rdrDayNumber {
            font-weight: ${theme.fontWeights.regular};
            span {
              color: ${theme.color.text.text01};
              &:after {
                background: ${theme.color.interactive.primary};
              }
            }
          }
          .rdrSelected,
          .rdrStartEdge,
          .rdrEndEdge,
          .rdrInRange {
            background: ${theme.color.interactive.secondaryActive};
          }

          .rdrDayStartPreview,
          .rdrDayInPreview,
          .rdrDayEndPreview {
            border-color: ${theme.color.interactive.primary};
          }
          &.rdrDayPassive {
            .rdrDayNumber {
              span {
                color: ${theme.color.text.text03};
              }
            }
          }
        }
      }
    }
  }
  .rdrDateRangePickerWrapper {
    .rdrDefinedRangesWrapper {
      background: ${theme.color.background.ui03};
      border-color: ${theme.color.border.border01};

      .rdrStaticRanges {
        .rdrStaticRange {
          border-color: ${theme.color.border.border01};
          .rdrStaticRangeLabel {
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.sm};
            background: ${theme.color.background.ui03};
            color: ${theme.color.text.text01};
          }
          &:hover,
          &:focus {
            .rdrStaticRangeLabel {
              background: ${theme.color.interactive.secondary};
            }
          }
          &.rdrStaticRangeSelected {
            .rdrStaticRangeLabel {
              color: ${theme.color.text.text01};
              font-weight: ${theme.fontWeights.regular};
              background: ${theme.color.interactive.secondaryActive};
            }
          }
        }
      }
    }
    .rdrCalendarWrapper {
      box-shadow: ${theme.shadow.shadow00};

      .rdrDateDisplayWrapper {
        background: ${theme.color.background.ui03};
        border-bottom: 1px solid ${theme.color.border.border01};

        .rdrDateDisplay {
          padding: ${theme.spacing.spacing03};
          margin: 0;

          .rdrDateInput {
            color: ${theme.color.text.text02};
            box-shadow: ${theme.shadow.shadow00};
            border: 0;
            overflow: hidden;
            border-radius: ${theme.radius.sm};

            input {
              font-family: ${theme.fonts.body};
              font-size: ${theme.fontSizes.sm};
              background: ${theme.color.interactive.secondary};
              color: ${theme.color.text.text01};
            }

            &.rdrDateDisplayItemActive {
              border: 0;

              input {
                background: ${theme.color.interactive.secondaryActive};
              }
            }
          }
        }
      }
    }
  }
`;
