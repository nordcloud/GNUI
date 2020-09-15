"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
exports.__esModule = true;
exports.Flex = exports.Container = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var styled_system_1 = require("styled-system");
var StyledContainer = styled_components_1["default"].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  box-sizing: border-box;\n  font-family: ",
        ";\n  font-weight: ",
        ";\n  font-size: ",
        ";\n  border-radius: ",
        ";\n  width: ",
        ";\n  ",
        ";\n",
      ],
      [
        "\n  box-sizing: border-box;\n  font-family: ",
        ";\n  font-weight: ",
        ";\n  font-size: ",
        ";\n  border-radius: ",
        ";\n  width: ",
        ";\n  ",
        ";\n",
      ]
    )),
  theme_1["default"].fonts.body,
  theme_1["default"].fontWeights.regular,
  theme_1["default"].fontSizes.md,
  theme_1["default"].radiusDefault,
  function (props) {
    return props.width || "100%";
  },
  styled_system_1.space
);
exports.Container = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
exports.Flex = styled_components_1["default"](exports.Container)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ["\n  display: flex;\n  ", "\n  ", "\n"],
      ["\n  display: flex;\n  ", "\n  ", "\n"]
    )),
  function (props) {
    return styled_components_1.css(
      templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
          [
            "\n    align-items: ",
            ";\n    justify-content: ",
            ";\n    margin: ",
            ";\n  ",
          ],
          [
            "\n    align-items: ",
            ";\n    justify-content: ",
            ";\n    margin: ",
            ";\n  ",
          ]
        )),
      props.alignItems || "center",
      props.justifyContent || "flex-start",
      props.margin
    );
  },
  styled_system_1.space
);
var templateObject_1, templateObject_2, templateObject_3;
