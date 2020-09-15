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
exports.Dropdown = exports.DropdownIcon = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var icon_1 = require("../icon");
var SVGIcon_1 = require("../svgicon/SVGIcon");
var container_1 = require("../container");
var styled_system_1 = require("styled-system");
var input_1 = require("../input");
var DropdownWrapper = styled_components_1["default"](container_1.Container)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  position: relative;\n  ", "\n"],
      ["\n  position: relative;\n  ", "\n"]
    )),
  styled_system_1.space
);
var DropdownButton = styled_components_1["default"].button(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: transparent;\n  border: ",
        ";\n  border-radius: ",
        ";\n  line-height: 1.5em;\n  padding-right: 1.5rem;\n  font-size: inherit;\n  color: ",
        ";\n  padding: ",
        ";\n  cursor: pointer;\n  transition: ",
        ";\n  &:hover {\n    background: ",
        ";\n    color: ",
        ";\n  }\n  &:active {\n    background: ",
        ";\n    color: ",
        ";\n  }\n  ",
        "\n",
      ],
      [
        "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: transparent;\n  border: ",
        ";\n  border-radius: ",
        ";\n  line-height: 1.5em;\n  padding-right: 1.5rem;\n  font-size: inherit;\n  color: ",
        ";\n  padding: ",
        ";\n  cursor: pointer;\n  transition: ",
        ";\n  &:hover {\n    background: ",
        ";\n    color: ",
        ";\n  }\n  &:active {\n    background: ",
        ";\n    color: ",
        ";\n  }\n  ",
        "\n",
      ]
    )),
  theme_1["default"].borderInput,
  theme_1["default"].radiusDefault,
  theme_1["default"].colors.primary,
  theme_1["default"].spacing.spacing03,
  theme_1["default"].transition,
  theme_1["default"].colors.lights[1],
  theme_1["default"].colors.primary,
  theme_1["default"].colors.lights[2],
  theme_1["default"].colors.primary,
  function (_a) {
    var disabled = _a.disabled;
    return (
      disabled &&
      styled_components_1.css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            [
              "\n      background: transparent;\n      border: ",
              ";\n      color: ",
              ";\n      cursor: not-allowed;\n      &:hover {\n        background: transparent;\n        color: ",
              ";\n      }\n    ",
            ],
            [
              "\n      background: transparent;\n      border: ",
              ";\n      color: ",
              ";\n      cursor: not-allowed;\n      &:hover {\n        background: transparent;\n        color: ",
              ";\n      }\n    ",
            ]
          )),
        theme_1["default"].borderInput,
        theme_1["default"].colors.lights[4],
        theme_1["default"].colors.lights[4]
      )
    );
  }
);
exports.DropdownIcon = styled_components_1["default"](icon_1.Icon)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  transition: ", ";\n  ", "\n"],
      ["\n  transition: ", ";\n  ", "\n"]
    )),
  theme_1["default"].transition,
  function (_a) {
    var animate = _a.animate;
    return (
      animate &&
      styled_components_1.css(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            [
              "\n      transform: rotate(180deg);\n      transition: ",
              ";\n    ",
            ],
            [
              "\n      transform: rotate(180deg);\n      transition: ",
              ";\n    ",
            ]
          )),
        theme_1["default"].transition
      )
    );
  }
);
var DropdownMenu = styled_components_1["default"](container_1.Container)(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  text-align: left;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  border: ",
        ";\n  color: ",
        ";\n  font-weight: ",
        ";\n  border-radius: ",
        ";\n  background: ",
        ";\n  z-index: 1;\n  transition: ",
        ";\n  box-shadow: ",
        ";\n",
      ],
      [
        "\n  text-align: left;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  border: ",
        ";\n  color: ",
        ";\n  font-weight: ",
        ";\n  border-radius: ",
        ";\n  background: ",
        ";\n  z-index: 1;\n  transition: ",
        ";\n  box-shadow: ",
        ";\n",
      ]
    )),
  theme_1["default"].borderInput,
  theme_1["default"].colors.primary,
  theme_1["default"].fontWeights.regular,
  theme_1["default"].radiusDefault,
  theme_1["default"].colors.white,
  theme_1["default"].transition,
  theme_1["default"].shadow.shadow02
);
var Inner = styled_components_1["default"].span(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      ["\n  margin-right: 1rem;\n"],
      ["\n  margin-right: 1rem;\n"]
    ))
);
var Clear = styled_components_1["default"].button(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2rem;\n  display: inline-block;\n  padding: ",
        " ",
        ";\n  background: none;\n  border: none;\n  margin-left: auto;\n",
      ],
      [
        "\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2rem;\n  display: inline-block;\n  padding: ",
        " ",
        ";\n  background: none;\n  border: none;\n  margin-left: auto;\n",
      ]
    )),
  theme_1["default"].spacing.spacing02,
  theme_1["default"].spacing.spacing03
);
var DropdownItem = styled_components_1["default"].button(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: left;\n  background: transparent;\n  font-size: inherit;\n  transition: ",
        ";\n  padding: ",
        " 0 ",
        " 1rem;\n\n  list-style: none;\n\n  transition: ",
        ";\n  &:hover {\n    cursor: pointer;\n    background: ",
        ";\n  }\n",
      ],
      [
        "\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: left;\n  background: transparent;\n  font-size: inherit;\n  transition: ",
        ";\n  padding: ",
        " 0 ",
        " 1rem;\n\n  list-style: none;\n\n  transition: ",
        ";\n  &:hover {\n    cursor: pointer;\n    background: ",
        ";\n  }\n",
      ]
    )),
  theme_1["default"].transition,
  theme_1["default"].spacing.spacing01,
  theme_1["default"].spacing.spacing01,
  theme_1["default"].transition,
  theme_1["default"].colors.lights[3]
);
exports.Dropdown = function (_a) {
  var _b = _a.value,
    value = _b === void 0 ? "" : _b,
    name = _a.name,
    options = _a.options,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    title = _a.title,
    onChange = _a.onChange,
    onClear = _a.onClear,
    props = __rest(_a, [
      "value",
      "name",
      "options",
      "disabled",
      "title",
      "onChange",
      "onClear",
    ]);
  var _d = react_1.useState(false),
    isOpen = _d[0],
    setIsOpen = _d[1];
  var _e = react_1.useState(""),
    search = _e[0],
    setSearch = _e[1];
  var displayValue = options.find(function (option) {
    if (typeof option === "string") {
      return option === value;
    }
    return option.value === value;
  });
  return (
    <DropdownWrapper
      value={value}
      {...props}
      onMouseLeave={function () {
        return isOpen && setIsOpen(!isOpen);
      }}
    >
      <DropdownButton
        name={name}
        onClick={function () {
          return !disabled && setIsOpen(!isOpen);
        }}
        disabled={disabled && disabled}
        title={title}
        type="button"
      >
        <Inner>
          {!displayValue
            ? name
            : typeof displayValue === "string"
            ? displayValue
            : displayValue.label || displayValue.value}
        </Inner>
        {onClear && displayValue && (
          <Clear
            onClick={function () {
              return onClear && onClear();
            }}
            title={"Clear " + name + " value"}
          >
            <SVGIcon_1.SVGIcon size="sm" name="close" />
          </Clear>
        )}
        <exports.DropdownIcon
          width="0.75rem"
          height="0.75rem"
          image="ARROW_BOTTOM"
          animate={isOpen && true}
        />
      </DropdownButton>
      {isOpen && !disabled && (
        <DropdownMenu>
          {options && options.length > 3 && (
            <input_1.Input
              type="search"
              name="filter"
              autoFocus
              noBorder
              small
              value={search}
              onChange={function (e) {
                return setSearch(e.target.value);
              }}
            />
          )}
          {options &&
            options
              .filter(function (option) {
                return JSON.stringify(option)
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map(function (option) {
                return (
                  <DropdownItem
                    title={typeof option === "string" ? option : option.value}
                    value={typeof option === "string" ? option : option.value}
                    key={typeof option === "string" ? option : option.value}
                    onClick={function () {
                      onChange &&
                        onChange(
                          typeof option === "string" ? option : option.value
                        );
                      setIsOpen(!isOpen);
                      setSearch("");
                    }}
                    type="button"
                  >
                    {typeof option === "string"
                      ? option
                      : option.label || option.value}
                  </DropdownItem>
                );
              })}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9;
