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
exports.Upload = exports.Input = exports.Description = exports.Label = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../../theme");
var container_1 = require("../container");
var icon_1 = require("../icon");
var styled_system_1 = require("styled-system");
var spinner_1 = require("../spinner");
var StyledLabel = styled_components_1["default"].label(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  line-height: ",
        ";\n  color: ",
        ";\n  margin-bottom: ",
        ";\n  ",
        "\n",
      ],
      [
        "\n  line-height: ",
        ";\n  color: ",
        ";\n  margin-bottom: ",
        ";\n  ",
        "\n",
      ]
    )),
  theme_1["default"].lineHeight,
  theme_1["default"].colors.primary,
  theme_1["default"].spacing.spacing02,
  function (_a) {
    var required = _a.required;
    return (
      required &&
      styled_components_1.css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              '\n      &:after {\n        content: "*";\n        color: ',
              ";\n      }\n    ",
            ],
            [
              '\n      &:after {\n        content: "*";\n        color: ',
              ";\n      }\n    ",
            ]
          )),
        theme_1["default"].colors.danger
      )
    );
  }
);
exports.Label = function (_a) {
  var _b = _a.name,
    name = _b === void 0 ? "Label" : _b,
    required = _a.required;
  return (
    <container_1.Flex>
      <StyledLabel htmlFor={name} required={required}>
        {name}
      </StyledLabel>
    </container_1.Flex>
  );
};
var setStatusColor = function (status) {
  if (status === "error") {
    return styled_components_1.css(
      templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
          ["\n      border: ", ";\n    "],
          ["\n      border: ", ";\n    "]
        )),
      theme_1["default"].borders.danger
    );
  } else if (status === "success") {
    return styled_components_1.css(
      templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
          ["\n      border: ", ";\n    "],
          ["\n      border: ", ";\n    "]
        )),
      theme_1["default"].borders.success
    );
  }
};
var InputGroup = styled_components_1["default"](container_1.Flex)(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        "\n  align-items: center;\n  border: ",
        ";\n  padding: ",
        ";\n  border-radius: ",
        ";\n  color: ",
        ";\n  background: ",
        ";\n  transition: ",
        ";\n  overflow: hidden;\n  &:hover {\n    border: ",
        ";\n  }\n  &:focus {\n    outline: 0;\n    border: 1px solid ",
        ";\n  }\n  &:disabled {\n    color: ",
        ";\n    background: ",
        ";\n    border: ",
        ";\n    cursor: not-allowed;\n  }\n  border-width: ",
        "\n    ",
        "\n    ",
        "\n    ",
        ";\n",
      ],
      [
        "\n  align-items: center;\n  border: ",
        ";\n  padding: ",
        ";\n  border-radius: ",
        ";\n  color: ",
        ";\n  background: ",
        ";\n  transition: ",
        ";\n  overflow: hidden;\n  &:hover {\n    border: ",
        ";\n  }\n  &:focus {\n    outline: 0;\n    border: 1px solid ",
        ";\n  }\n  &:disabled {\n    color: ",
        ";\n    background: ",
        ";\n    border: ",
        ";\n    cursor: not-allowed;\n  }\n  border-width: ",
        "\n    ",
        "\n    ",
        "\n    ",
        ";\n",
      ]
    )),
  theme_1["default"].borders.disabled,
  theme_1["default"].spacing.spacing02,
  theme_1["default"].radiusDefault,
  theme_1["default"].colors.primary,
  theme_1["default"].colors.white,
  theme_1["default"].transition,
  theme_1["default"].borders.darkenGray,
  theme_1["default"].colors.darks[4],
  theme_1["default"].colors.lights[4],
  theme_1["default"].colors.white,
  theme_1["default"].borders.grey,
  function (props) {
    return props.noBorder && "0px";
  },
  function (_a) {
    var status = _a.status;
    return (
      status &&
      styled_components_1.css(
        templateObject_5 ||
          (templateObject_5 = __makeTemplateObject(
            ["\n        ", "\n      "],
            ["\n        ", "\n      "]
          )),
        setStatusColor(status)
      )
    );
  },
  function (_a) {
    var popup = _a.popup;
    return (
      popup &&
      styled_components_1.css(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            ["\n        cursor: pointer;\n      "],
            ["\n        cursor: pointer;\n      "]
          ))
      )
    );
  },
  styled_system_1.space
);
var StyledInput = styled_components_1["default"].input(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      [
        "\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n  font-family: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  padding: 0;\n  margin: 0;\n  transition: ",
        ";\n\n  &:placeholder {\n    color: ",
        ";\n  }\n  &:hover,\n  &:focus {\n    outline: 0;\n    border: 0;\n  }\n  &:disabled {\n    color: ",
        ";\n    background: ",
        ";\n    border: 0;\n    cursor: not-allowed;\n  }\n\n  ",
        "\n\n  ",
        "\n",
      ],
      [
        "\n  border: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n  font-family: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  padding: 0;\n  margin: 0;\n  transition: ",
        ";\n\n  &:placeholder {\n    color: ",
        ";\n  }\n  &:hover,\n  &:focus {\n    outline: 0;\n    border: 0;\n  }\n  &:disabled {\n    color: ",
        ";\n    background: ",
        ";\n    border: 0;\n    cursor: not-allowed;\n  }\n\n  ",
        "\n\n  ",
        "\n",
      ]
    )),
  theme_1["default"].typography.fonts.body,
  function (props) {
    return props.small
      ? theme_1["default"].fontSizes.sm
      : theme_1["default"].fontSizes.md;
  },
  function (props) {
    return props.small ? "1rem" : theme_1["default"].lineHeight;
  },
  theme_1["default"].transition,
  theme_1["default"].colors.darks[4],
  theme_1["default"].colors.lights[4],
  theme_1["default"].colors.white,
  function (_a) {
    var type = _a.type;
    return (
      type === "search" &&
      styled_components_1.css(
        templateObject_8 ||
          (templateObject_8 = __makeTemplateObject(
            ["\n      margin-left: ", ";\n    "],
            ["\n      margin-left: ", ";\n    "]
          )),
        theme_1["default"].spacing.spacing02
      )
    );
  },
  function (_a) {
    var popup = _a.popup;
    return (
      popup &&
      styled_components_1.css(
        templateObject_9 ||
          (templateObject_9 = __makeTemplateObject(
            ["\n      cursor: pointer;\n    "],
            ["\n      cursor: pointer;\n    "]
          ))
      )
    );
  }
);
var StyledDescription = styled_components_1["default"](container_1.Container)(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      [
        "\n  font-size: ",
        ";\n  color: ",
        ";\n  margin: ",
        " 0;\n  width: 100%;\n",
      ],
      [
        "\n  font-size: ",
        ";\n  color: ",
        ";\n  margin: ",
        " 0;\n  width: 100%;\n",
      ]
    )),
  theme_1["default"].fontSizes[1],
  theme_1["default"].colors.darks[3],
  theme_1["default"].spacing.spacing02
);
var StyledUpload = styled_components_1["default"].div(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(
      [
        '\n  input[type="file"] {\n    display: none;\n  }\n  color: ',
        ";\n  background: ",
        ";\n  transition: ",
        ";\n  line-height: ",
        ";\n  label {\n    border: ",
        ";\n    border-radius: ",
        ";\n    padding-left: ",
        ";\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    span {\n      margin: -1px 0 -1px auto;\n      border-top-right-radius: ",
        ";\n      border-bottom-right-radius: ",
        ";\n      background-color: ",
        ";\n      color: ",
        ";\n      padding: ",
        " ",
        ";\n    }\n  }\n",
      ],
      [
        '\n  input[type="file"] {\n    display: none;\n  }\n  color: ',
        ";\n  background: ",
        ";\n  transition: ",
        ";\n  line-height: ",
        ";\n  label {\n    border: ",
        ";\n    border-radius: ",
        ";\n    padding-left: ",
        ";\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    span {\n      margin: -1px 0 -1px auto;\n      border-top-right-radius: ",
        ";\n      border-bottom-right-radius: ",
        ";\n      background-color: ",
        ";\n      color: ",
        ";\n      padding: ",
        " ",
        ";\n    }\n  }\n",
      ]
    )),
  theme_1["default"].colors.primary,
  theme_1["default"].colors.white,
  theme_1["default"].transition,
  theme_1["default"].lineHeight,
  theme_1["default"].borders.disabled,
  theme_1["default"].radiusDefault,
  theme_1["default"].spacing.spacing03,
  theme_1["default"].radiusDefault,
  theme_1["default"].radiusDefault,
  theme_1["default"].colors.primary,
  theme_1["default"].colors.white,
  theme_1["default"].spacing.spacing02,
  theme_1["default"].spacing.spacing03
);
exports.Description = function (_a) {
  var children = _a.children;
  return <StyledDescription>{children}</StyledDescription>;
};
exports.Input = react_1["default"].forwardRef(function (_a, ref) {
  var noBorder = _a.noBorder,
    type = _a.type,
    popup = _a.popup,
    status = _a.status,
    loading = _a.loading,
    small = _a.small,
    props = __rest(_a, [
      "noBorder",
      "type",
      "popup",
      "status",
      "loading",
      "small",
    ]);
  return (
    <InputGroup status={status} noBorder={noBorder} popup={popup}>
      {type === "search" && !loading && (
        <icon_1.Icon image="SEARCH" width="1.2rem" height="1.2rem" />
      )}
      {type === "search" && loading && <spinner_1.Spinner />}
      <StyledInput
        type={type}
        popup={popup}
        small={small}
        ref={ref}
        {...props}
      />
      {status && (
        <icon_1.Icon
          image={"INPUT_" + status.toUpperCase()}
          width="1.2rem"
          height="1.2rem"
        />
      )}
      {popup && <icon_1.Icon image={"MENU"} width="1.2rem" height="1.2rem" />}
    </InputGroup>
  );
});
exports.Upload = function (_a) {
  var placeholder = _a.placeholder,
    title = _a.title,
    _b = _a.id,
    id = _b === void 0 ? "upload-file" : _b,
    props = __rest(_a, ["placeholder", "title", "id"]);
  return (
    <StyledUpload>
      <label htmlFor={id}>
        {placeholder}
        <span>{title}</span>
      </label>
      <StyledInput type="file" id={id} {...props} />
    </StyledUpload>
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
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12;
