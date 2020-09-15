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
exports.Form = exports.SubmitButton = exports.CancelButton = exports.FormButtons = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var container_1 = require("../container");
var button_1 = require("../button");
var StyledSubmit = styled_components_1["default"].input(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background: ",
        ";\n  font-family: ",
        ";\n  color: ",
        ";\n  border: ",
        ";\n  font-weight: ",
        ";\n  padding: ",
        " ",
        ";\n  border-radius: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  margin: 0 ",
        ";\n  transition: ",
        ";\n  &:focus {\n    outline: 0;\n  }\n  &:hover {\n    cursor: pointer;\n    color: ",
        ";\n  }\n  &:active {\n    color: ",
        ";\n  }\n  &:disabled {\n    background: ",
        ";\n    border: ",
        ";\n    color: ",
        ";\n    &:hover {\n      color: ",
        ";\n      cursor: not-allowed;\n    }\n  }\n",
      ],
      [
        "\n  background: ",
        ";\n  font-family: ",
        ";\n  color: ",
        ";\n  border: ",
        ";\n  font-weight: ",
        ";\n  padding: ",
        " ",
        ";\n  border-radius: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  margin: 0 ",
        ";\n  transition: ",
        ";\n  &:focus {\n    outline: 0;\n  }\n  &:hover {\n    cursor: pointer;\n    color: ",
        ";\n  }\n  &:active {\n    color: ",
        ";\n  }\n  &:disabled {\n    background: ",
        ";\n    border: ",
        ";\n    color: ",
        ";\n    &:hover {\n      color: ",
        ";\n      cursor: not-allowed;\n    }\n  }\n",
      ]
    )),
  theme_1["default"].colors.primary,
  theme_1["default"].fonts.body,
  theme_1["default"].colors.white,
  theme_1["default"].borderDefault,
  theme_1["default"].fontWeights.regular,
  theme_1["default"].spacing.spacing02,
  theme_1["default"].spacing.spacing04,
  theme_1["default"].radiusDefault,
  theme_1["default"].fontSizes.md,
  theme_1["default"].lineHeight,
  theme_1["default"].spacing.spacing02,
  theme_1["default"].transition,
  theme_1["default"].colors.lights[4],
  theme_1["default"].colors.darks[4],
  theme_1["default"].colors.lights[3],
  theme_1["default"].borders.disabled,
  theme_1["default"].colors.darks[4],
  theme_1["default"].colors.darks[4]
);
exports.FormButtons = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  return (
    <container_1.Flex margin="1rem 0" justifyContent="flex-end" {...props}>
      {children}
    </container_1.Flex>
  );
};
exports.CancelButton = function (_a) {
  var name = _a.name,
    props = __rest(_a, ["name"]);
  return (
    <button_1.Button color="danger" {...props}>
      {name || "Cancel"}
    </button_1.Button>
  );
};
exports.SubmitButton = function (_a) {
  var name = _a.name,
    props = __rest(_a, ["name"]);
  return (
    <StyledSubmit
      name={name || "Submit"}
      {...props}
      {...(!props.type && { type: "submit" })}
    />
  );
};
exports.Form = function (_a) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  return <container_1.Container {...props}>{children}</container_1.Container>;
};
var templateObject_1;
