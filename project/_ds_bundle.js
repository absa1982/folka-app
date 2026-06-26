/* @ds-bundle: {"format":3,"namespace":"FolkaDesignSystem_019e18","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/core/FormField.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"CandidateCard","sourcePath":"components/hr/CandidateCard.jsx"},{"name":"ChecklistItem","sourcePath":"components/hr/ChecklistItem.jsx"},{"name":"EmployeeRow","sourcePath":"components/hr/EmployeeRow.jsx"},{"name":"EquipmentRow","sourcePath":"components/hr/EquipmentRow.jsx"},{"name":"TimeEntry","sourcePath":"components/hr/TimeEntry.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"CardHeader","sourcePath":"components/layout/Card.jsx"},{"name":"Dialog","sourcePath":"components/layout/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"2647fdb2f3cc","components/core/Checkbox.jsx":"fc3cdcd5074b","components/core/FormField.jsx":"3fb2f9e2b9de","components/core/IconButton.jsx":"fc5b848bd1d5","components/core/Input.jsx":"7132c36b8d68","components/core/Radio.jsx":"cd93b246f686","components/core/Select.jsx":"339cd5985084","components/core/Switch.jsx":"251c57c37638","components/core/Textarea.jsx":"a491636f19e5","components/feedback/Avatar.jsx":"135c36c64c84","components/feedback/Badge.jsx":"70d5bf68bc32","components/feedback/ProgressBar.jsx":"19b41752b5c8","components/feedback/StatusPill.jsx":"61fb590e65eb","components/feedback/Toast.jsx":"cdf9d2dbfff1","components/feedback/Tooltip.jsx":"079843ff6abb","components/hr/CandidateCard.jsx":"ea3a13262c4f","components/hr/ChecklistItem.jsx":"5f86305c7f00","components/hr/EmployeeRow.jsx":"3ffe85db28f2","components/hr/EquipmentRow.jsx":"85f65e49c46c","components/hr/TimeEntry.jsx":"c609f0ed5756","components/layout/Card.jsx":"0d636dac9d94","components/layout/Dialog.jsx":"edcc4edf6f2c","components/layout/Tabs.jsx":"20234a80d3b3","ui_kits/mobile-app/app.jsx":"d6348c3c6f78","ui_kits/web-app/App.jsx":"1e8a29ee2570","ui_kits/web-app/data.js":"23a1b97a6916","ui_kits/web-app/screens.jsx":"e7be4ceaf5ba","ui_kits/web-app/shell.jsx":"1dee6fb30c10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FolkaDesignSystem_019e18 = window.FolkaDesignSystem_019e18 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 13,
    padding: '7px 14px',
    height: 34,
    gap: 6
  },
  md: {
    fontSize: 15,
    padding: '10px 18px',
    height: 42,
    gap: 8
  },
  lg: {
    fontSize: 16,
    padding: '13px 24px',
    height: 50,
    gap: 9
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--green-600)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--green-600)',
    boxShadow: 'var(--shadow-brand)',
    '--hover-bg': 'var(--green-700)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'var(--shadow-xs)',
    '--hover-bg': 'var(--sand-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--sand-100)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: '1px solid var(--danger)',
    boxShadow: 'none',
    '--hover-bg': 'var(--clay-700)'
  }
};

/**
 * Folka primary button. Brand-green by default; sentence-case labels.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      minHeight: s.height,
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      background: hover && !disabled ? v['--hover-bg'] : v.background,
      color: v.color,
      border: v.border,
      boxShadow: v.boxShadow,
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Checkbox with brand-green checked state. Renders an optional label. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 6,
      background: checked ? 'var(--green-600)' : 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--green-600)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/FormField.jsx
try { (() => {
/** Field wrapper: label, optional hint, the control (children), and error text. */
function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-field)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      lineHeight: 1.3
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FormField.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 38,
  lg: 44
};

/**
 * Square icon-only button. Provide an aria-label for accessibility.
 */
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? 'var(--sand-100)' : 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--sand-100)' : 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    },
    brand: {
      background: hover ? 'var(--green-700)' : 'var(--green-600)',
      color: '#fff',
      border: '1px solid var(--green-600)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with brand focus ring. Supports left/right adornments and error state.
 */
function Input({
  size = 'md',
  leftIcon,
  rightIcon,
  invalid = false,
  disabled = false,
  style,
  value,
  onChange,
  type = 'text',
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 34,
    md: 42,
    lg: 48
  };
  const h = heights[size] || heights.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: `0 12px`,
      height: h,
      boxShadow: focus ? invalid ? '0 0 0 3px rgba(210,84,60,.22)' : 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      opacity: disabled ? 0.7 : 1,
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-heading)',
      height: '100%'
    }
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/** Radio button with brand-green selected state and optional label. */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--green-600)' : 'var(--border-strong)'}`,
      transition: 'border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--green-600)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Folka inputs, with a chevron. */
function Select({
  size = 'md',
  invalid = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 34,
    md: 42,
    lg: 48
  };
  const h = heights[size] || heights.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-heading)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 36px 0 12px',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Toggle switch — brand green when on. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 40,
      height: 24,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 40,
      height: 24,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: checked ? 'var(--green-600)' : 'var(--sand-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input matching Input styling. */
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--green-600)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-heading)',
      lineHeight: 'var(--lh-normal)',
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      outline: 'none',
      boxShadow: focus ? invalid ? '0 0 0 3px rgba(210,84,60,.22)' : 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56
};
// Warm, on-brand initial colors (no random hues)
const PALETTE = [['var(--green-100)', 'var(--green-700)'], ['var(--clay-100)', 'var(--clay-700)'], ['var(--info-bg)', 'var(--info)'], ['var(--warning-bg)', 'var(--warning)'], ['var(--sand-200)', 'var(--ink-700)']];
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/** Round avatar — shows photo if `src`, else initials on a warm tint. */
function Avatar({
  name = '',
  src,
  size = 'md',
  style
}) {
  const dim = SIZES[size] || SIZES.md;
  const idx = (name.charCodeAt(0) || 0) % PALETTE.length;
  const [bg, fg] = PALETTE[idx];
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      background: bg,
      color: fg,
      flex: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: dim * 0.4,
      lineHeight: 1,
      userSelect: 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--sand-100)',
    fg: 'var(--ink-700)'
  },
  brand: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)'
  },
  danger: {
    bg: 'var(--danger-bg)',
    fg: 'var(--danger)'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)'
  },
  accent: {
    bg: 'var(--clay-50)',
    fg: 'var(--clay-700)'
  }
};

/** Small rounded label for counts, categories and metadata. */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  icon,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: sm ? 11 : 12,
      fontWeight: 600,
      lineHeight: 1,
      padding: sm ? '3px 7px' : '4px 9px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Slim progress bar — used for onboarding completion, week progress, etc. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  showLabel = false,
  size = 'md',
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const colors = {
    brand: 'var(--green-500)',
    accent: 'var(--clay-500)',
    warning: 'var(--warning)',
    neutral: 'var(--ink-400)'
  };
  const h = size === 'sm' ? 6 : size === 'lg' ? 12 : 8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: h,
      background: 'var(--sand-200)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: colors[tone] || colors.brand,
      borderRadius: 999,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)',
      minWidth: 36,
      textAlign: 'right'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
const STATUS = {
  approved: {
    label: 'Approved',
    bg: 'var(--success-bg)',
    fg: 'var(--success)',
    dot: 'var(--success)'
  },
  pending: {
    label: 'Pending',
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)',
    dot: 'var(--warning)'
  },
  overdue: {
    label: 'Overdue',
    bg: 'var(--danger-bg)',
    fg: 'var(--danger)',
    dot: 'var(--danger)'
  },
  draft: {
    label: 'Draft',
    bg: 'var(--sand-100)',
    fg: 'var(--ink-500)',
    dot: 'var(--ink-400)'
  },
  active: {
    label: 'Active',
    bg: 'var(--green-50)',
    fg: 'var(--green-700)',
    dot: 'var(--green-500)'
  },
  invited: {
    label: 'Invited',
    bg: 'var(--info-bg)',
    fg: 'var(--info)',
    dot: 'var(--info)'
  }
};

/** Status pill with a leading dot — for time approval, employee and task states. */
function StatusPill({
  status = 'pending',
  label,
  style
}) {
  const s = STATUS[status] || STATUS.pending;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      padding: '5px 10px 5px 8px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: s.dot,
      flex: 'none'
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: {
    accent: 'var(--success)',
    icon: 'check-circle'
  },
  info: {
    accent: 'var(--info)',
    icon: 'info'
  },
  warning: {
    accent: 'var(--warning)',
    icon: 'alert-triangle'
  },
  danger: {
    accent: 'var(--danger)',
    icon: 'alert-circle'
  }
};

/**
 * Toast notification card. Presentational — render in a fixed corner stack.
 * Pass `iconNode` (e.g. a Lucide icon) or rely on text only.
 */
function Toast({
  title,
  message,
  tone = 'success',
  iconNode,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)',
      borderLeft: `3px solid ${t.accent}`,
      padding: '14px 16px',
      minWidth: 280,
      maxWidth: 400,
      ...style
    }
  }, iconNode && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      display: 'flex',
      flex: 'none',
      marginTop: 1
    }
  }, iconNode), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: title ? 2 : 0
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      flex: 'none'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover/focus tooltip. Wraps its child trigger; shows `label` on a dark bubble. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      ...pos[placement],
      background: 'var(--ink-900)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.3,
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/hr/CandidateCard.jsx
try { (() => {
/** Draggable-looking candidate card for the recruitment board. */
function CandidateCard({
  name,
  role,
  appliedFor,
  tags = [],
  rating,
  isNew = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, role)), isNew && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    size: "sm"
  }, "New")), appliedFor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: tags.length ? 10 : 0
    }
  }, "Applied for ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 600
    }
  }, appliedFor)), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: "neutral",
    size: "sm"
  }, t))), rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginTop: 10
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      color: n <= rating ? 'var(--clay-500)' : 'var(--sand-300)',
      fontSize: 14
    }
  }, "\u2605"))));
}
Object.assign(__ds_scope, { CandidateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hr/CandidateCard.jsx", error: String((e && e.message) || e) }); }

// components/hr/ChecklistItem.jsx
try { (() => {
/** Onboarding/offboarding checklist item — checkbox, task, assignee, due date. */
function ChecklistItem({
  label,
  done = false,
  onToggle,
  assignee,
  due,
  overdue = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 4px',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": done,
    onClick: onToggle,
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: done ? 'var(--green-600)' : 'var(--surface-card)',
      border: `1.5px solid ${done ? 'var(--green-600)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, done && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 14,
      color: done ? 'var(--text-subtle)' : 'var(--text-heading)',
      textDecoration: done ? 'line-through' : 'none'
    }
  }, label), due && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--font-mono)',
      color: overdue && !done ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, due), assignee && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: assignee,
    size: "xs"
  }));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hr/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/hr/EmployeeRow.jsx
try { (() => {
/** A row in the employee list — avatar, name, role, department, status, actions. */
function EmployeeRow({
  name,
  role,
  department,
  status = 'active',
  avatarSrc,
  actions,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      background: hover ? 'var(--sand-50)' : 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatarSrc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, role)), department && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 120,
      flex: 'none'
    }
  }, department), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: status
  })), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      gap: 4
    }
  }, actions));
}
Object.assign(__ds_scope, { EmployeeRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hr/EmployeeRow.jsx", error: String((e && e.message) || e) }); }

// components/hr/EquipmentRow.jsx
try { (() => {
/** Equipment register row — item, type, serial, assigned employee. */
function EquipmentRow({
  name,
  category,
  serial,
  assignedTo,
  iconNode,
  status = 'assigned',
  actions,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const statusMeta = {
    assigned: {
      label: 'Assigned',
      color: 'var(--green-700)',
      bg: 'var(--green-50)'
    },
    available: {
      label: 'Available',
      color: 'var(--ink-500)',
      bg: 'var(--sand-100)'
    },
    repair: {
      label: 'Repair',
      color: 'var(--warning)',
      bg: 'var(--warning-bg)'
    }
  }[status] || {};
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      background: hover ? 'var(--sand-50)' : 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--sand-100)',
      color: 'var(--text-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, iconNode), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, category, serial && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      marginLeft: 8
    }
  }, serial))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, assignedTo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: assignedTo,
    size: "xs"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, assignedTo)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "Unassigned")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      color: statusMeta.color,
      background: statusMeta.bg
    }
  }, statusMeta.label), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, actions));
}
Object.assign(__ds_scope, { EquipmentRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hr/EquipmentRow.jsx", error: String((e && e.message) || e) }); }

// components/hr/TimeEntry.jsx
try { (() => {
/**
 * One day's time entry — weekday, clock range, total hours, type & status.
 * `type`: 'work' | 'holiday' | 'sick' | 'absence'.
 */
const TYPE_META = {
  work: {
    label: 'Work',
    color: 'var(--text-heading)',
    tint: 'transparent'
  },
  holiday: {
    label: 'Ferie',
    color: 'var(--info)',
    tint: 'var(--info-bg)'
  },
  sick: {
    label: 'Syg',
    color: 'var(--warning)',
    tint: 'var(--warning-bg)'
  },
  absence: {
    label: 'Fravær',
    color: 'var(--ink-500)',
    tint: 'var(--sand-100)'
  }
};
function TimeEntry({
  day,
  date,
  clockIn,
  clockOut,
  hours,
  type = 'work',
  note,
  style
}) {
  const meta = TYPE_META[type] || TYPE_META.work;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      background: meta.tint === 'transparent' ? 'var(--surface-card)' : meta.tint,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, day), date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, type === 'work' ? /*#__PURE__*/React.createElement("span", null, clockIn, " \u2013 ", clockOut) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      color: meta.color
    }
  }, meta.label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginLeft: 10
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-heading)'
    }
  }, hours));
}
Object.assign(__ds_scope, { TimeEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hr/TimeEntry.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** White surface card — the primary container in Folka. Optional hover-lift. */
function Card({
  children,
  padding = 'var(--gap-card)',
  interactive = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      cursor: interactive ? 'pointer' : 'default',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}

/** Optional header row for a Card: title + optional action node. */
function CardHeader({
  title,
  subtitle,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Dialog.jsx
try { (() => {
/** Centered modal dialog with scrim. Controlled via `open`/`onClose`. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,33,29,0.4)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      animation: 'folkaFade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 22,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--sand-50)',
      borderRadius: '0 0 var(--radius-xl) var(--radius-xl)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes folkaFade { from { opacity: 0 } to { opacity: 1 } }`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
/**
 * Underline tab bar. `tabs` = [{id, label, badge?}]. Controlled via value/onChange.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--text-heading)' : 'var(--text-muted)',
        padding: '11px 12px 13px',
        marginBottom: -1,
        borderBottom: `2px solid ${active ? 'var(--green-600)' : 'transparent'}`,
        transition: 'color var(--dur-fast)'
      }
    }, t.label, t.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        background: active ? 'var(--green-50)' : 'var(--sand-100)',
        color: active ? 'var(--green-700)' : 'var(--text-muted)',
        borderRadius: 999,
        padding: '1px 7px'
      }
    }, t.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/app.jsx
try { (() => {
// Folka mobile time-tracking app (employee side). Single-file app.
const M = window.FolkaDesignSystem_019e18;
const WEEK = [{
  day: 'Mandag',
  date: '24. feb',
  clockIn: '08:30',
  clockOut: '16:15',
  hours: '7,5',
  type: 'work'
}, {
  day: 'Tirsdag',
  date: '25. feb',
  clockIn: '08:00',
  clockOut: '16:00',
  hours: '8,0',
  type: 'work'
}, {
  day: 'Onsdag',
  date: '26. feb',
  clockIn: '08:15',
  clockOut: '16:00',
  hours: '7,75',
  type: 'work'
}, {
  day: 'Torsdag',
  date: '27. feb',
  type: 'sick',
  hours: '—',
  note: 'Sygt barn'
}, {
  day: 'Fredag',
  date: '28. feb',
  clockIn: '08:00',
  clockOut: '14:15',
  hours: '6,25',
  type: 'work'
}];
function MIcon({
  name,
  size = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  });
}
const TYPE = {
  work: {
    color: 'var(--text-heading)'
  },
  sick: {
    label: 'Syg',
    color: 'var(--warning)',
    bg: 'var(--warning-bg)'
  },
  holiday: {
    label: 'Ferie',
    color: 'var(--info)',
    bg: 'var(--info-bg)'
  }
};
function DayRow({
  d
}) {
  const t = TYPE[d.type] || TYPE.work;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, d.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, d.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, d.type === 'work' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, d.clockIn, " \u2013 ", d.clockOut) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: t.color,
      background: t.bg,
      padding: '3px 9px',
      borderRadius: 999
    }
  }, t.label, d.note ? ` · ${d.note}` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, d.hours, d.type === 'work' ? ' t' : ''));
}
function MobileApp() {
  const {
    Button,
    Avatar,
    ProgressBar,
    StatusPill
  } = M;
  const [tab, setTab] = React.useState('tid');
  const [approved, setApproved] = React.useState(false);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 24px 4px',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-900)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "signal",
    size: 15
  }), /*#__PURE__*/React.createElement(MIcon, {
    name: "wifi",
    size: 15
  }), /*#__PURE__*/React.createElement(MIcon, {
    name: "battery-full",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/folka-mark.svg",
    width: "32",
    height: "32",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "God morgen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Anna")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Anna Mortensen",
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 18px 18px'
    }
  }, tab === 'tid' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-700)',
      color: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      marginBottom: 16,
      boxShadow: 'var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--green-200)',
      fontWeight: 600
    }
  }, "Uge 9 \xB7 24\u201328 feb"), approved ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "approved"
  }) : /*#__PURE__*/React.createElement(StatusPill, {
    status: "pending",
    label: "Ikke godkendt"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      fontFamily: 'var(--font-mono)',
      letterSpacing: '-0.02em'
    }
  }, "29,5 t"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--green-100)'
    }
  }, "registreret denne uge")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '4px 16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, WEEK.map(d => /*#__PURE__*/React.createElement(DayRow, {
    key: d.day,
    d: d
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, approved ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--success)',
      fontWeight: 600,
      fontSize: 15,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "check-circle",
    size: 18
  }), " Ugen er godkendt") : /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => setApproved(true),
    leftIcon: /*#__PURE__*/React.createElement(MIcon, {
      name: "check",
      size: 18
    })
  }, "Godkend min uge")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 12
    }
  }, "Tager under 1 minut. Du overholder reglerne om tidsregistrering.")), tab === 'fravaer' && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Registrer frav\xE6r"), [{
    icon: 'palmtree',
    label: 'Ferie',
    sub: '18 dage tilbage'
  }, {
    icon: 'thermometer',
    label: 'Sygdom',
    sub: 'Meld dig syg i dag'
  }, {
    icon: 'baby',
    label: 'Barns 1. sygedag',
    sub: '2 dage tilbage'
  }, {
    icon: 'clock',
    label: 'Afspadsering',
    sub: '+4,5 t optjent'
  }].map(o => /*#__PURE__*/React.createElement("div", {
    key: o.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      marginBottom: 12,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: o.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, o.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, o.sub)), /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--text-subtle)'
    }
  })))), tab === 'profil' && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      margin: '12px auto'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Anna Mortensen",
    size: "lg"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Anna Mortensen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, "Designer \xB7 Rotpunkt ApS"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textAlign: 'left',
      boxShadow: 'var(--shadow-sm)'
    }
  }, ['Mine oplysninger', 'Notifikationer', 'Hjælp & support', 'Log ud'].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, r, /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      padding: '8px 0 22px'
    }
  }, [{
    id: 'tid',
    icon: 'clock',
    label: 'Tid'
  }, {
    id: 'fravaer',
    icon: 'calendar-off',
    label: 'Fravær'
  }, {
    id: 'profil',
    icon: 'user',
    label: 'Profil'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: tab === t.id ? 'var(--green-700)' : 'var(--text-subtle)',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: t.icon,
    size: 22
  }), " ", t.label))));
}
function PhoneFrame() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--sand-100)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: 'var(--surface-page)',
      borderRadius: 46,
      border: '11px solid var(--ink-900)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MobileApp, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PhoneFrame, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/App.jsx
try { (() => {
// Folka web-app — root App with routing, add-employee dialog, and toasts.
const APP_NS = window.FolkaDesignSystem_019e18;
function App() {
  const [route, setRoute] = React.useState('dashboard');
  const [addOpen, setAddOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  // Re-scan Lucide icons after every render.
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);
  const titles = {
    dashboard: ['Overblik', `God morgen, ${window.FolkaData.user.name.split(' ')[0]}`],
    time: ['Tidsregistrering', 'Godkend medarbejdernes uge'],
    employees: ['Medarbejdere', `${window.FolkaData.employees.length} ansatte hos ${window.FolkaData.company}`],
    onboarding: ['Onboarding', '2 forløb i gang'],
    recruitment: ['Rekruttering', '7 kandidater i pipeline'],
    equipment: ['Udstyr', 'Hvem har hvad']
  };
  const [title, subtitle] = titles[route];
  const {
    Button,
    IconButton,
    Dialog,
    Input,
    Select,
    FormField,
    Toast
  } = APP_NS;
  const screens = {
    dashboard: /*#__PURE__*/React.createElement(DashboardScreen, null),
    time: /*#__PURE__*/React.createElement(TimeApprovalScreen, {
      onToast: setToast
    }),
    employees: /*#__PURE__*/React.createElement(EmployeesScreen, {
      onAdd: () => setAddOpen(true)
    }),
    onboarding: /*#__PURE__*/React.createElement(OnboardingScreen, null),
    recruitment: /*#__PURE__*/React.createElement(RecruitmentScreen, null),
    equipment: /*#__PURE__*/React.createElement(EquipmentScreen, null)
  };
  const topActions = route === 'dashboard' ? /*#__PURE__*/React.createElement(Button, {
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: () => setAddOpen(true)
  }, "Tilf\xF8j medarbejder") : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    subtitle: subtitle,
    actions: topActions
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, screens[route])), /*#__PURE__*/React.createElement(Dialog, {
    open: addOpen,
    onClose: () => setAddOpen(false),
    title: "Tilf\xF8j medarbejder",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAddOpen(false)
    }, "Annuller"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setAddOpen(false);
        setToast('Invitation sendt til den nye medarbejder');
      }
    }, "Send invitation"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Fulde navn",
    htmlFor: "n",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "F.eks. Mette Bjerg"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Arbejdsmail",
    htmlFor: "m",
    required: true,
    hint: "Vi sender velkomstlinket hertil."
  }, /*#__PURE__*/React.createElement(Input, {
    id: "m",
    type: "email",
    placeholder: "navn@firma.dk"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Afdeling",
    htmlFor: "d"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "d"
  }, /*#__PURE__*/React.createElement("option", null, "Udvikling"), /*#__PURE__*/React.createElement("option", null, "Salg"), /*#__PURE__*/React.createElement("option", null, "Marketing"), /*#__PURE__*/React.createElement("option", null, "Drift"))), /*#__PURE__*/React.createElement(FormField, {
    label: "Startdato",
    htmlFor: "s"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "s",
    type: "date"
  }))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    iconNode: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18
    }),
    title: toast,
    onClose: () => setToast(null)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/data.js
try { (() => {
// Sample data for the Folka web-app UI kit (fake, illustrative).
window.FolkaData = {
  company: 'Rotpunkt ApS',
  user: {
    name: 'Sine Halkjær',
    role: 'HR Manager'
  },
  nav: [{
    id: 'dashboard',
    label: 'Overblik',
    icon: 'layout-dashboard'
  }, {
    id: 'time',
    label: 'Tidsregistrering',
    icon: 'clock',
    badge: 6
  }, {
    id: 'employees',
    label: 'Medarbejdere',
    icon: 'users'
  }, {
    id: 'onboarding',
    label: 'Onboarding',
    icon: 'list-checks'
  }, {
    id: 'recruitment',
    label: 'Rekruttering',
    icon: 'user-search',
    badge: 3
  }, {
    id: 'equipment',
    label: 'Udstyr',
    icon: 'laptop'
  }],
  employees: [{
    name: 'Anna Mortensen',
    role: 'Designer',
    dept: 'Udvikling',
    status: 'active',
    hours: '37,5 t',
    time: 'pending'
  }, {
    name: 'Lars Frank',
    role: 'Sales lead',
    dept: 'Salg',
    status: 'active',
    hours: '40,0 t',
    time: 'approved'
  }, {
    name: 'Mikkel Sørensen',
    role: 'Developer',
    dept: 'Udvikling',
    status: 'active',
    hours: '38,0 t',
    time: 'pending'
  }, {
    name: 'Camilla Holt',
    role: 'Bookkeeper',
    dept: 'Økonomi',
    status: 'active',
    hours: '30,0 t',
    time: 'approved'
  }, {
    name: 'Sofie Holm',
    role: 'Marketing intern',
    dept: 'Marketing',
    status: 'invited',
    hours: '—',
    time: 'draft'
  }, {
    name: 'Jonas Bek',
    role: 'Support',
    dept: 'Drift',
    status: 'active',
    hours: '37,0 t',
    time: 'pending'
  }, {
    name: 'Rune Therkildsen',
    role: 'Developer',
    dept: 'Udvikling',
    status: 'active',
    hours: '39,5 t',
    time: 'pending'
  }, {
    name: 'Diana Rank',
    role: 'Office manager',
    dept: 'Drift',
    status: 'active',
    hours: '32,0 t',
    time: 'approved'
  }],
  week: [{
    day: 'Man',
    date: '24/2',
    clockIn: '08:30',
    clockOut: '16:15',
    hours: '7,5 t',
    type: 'work'
  }, {
    day: 'Tir',
    date: '25/2',
    clockIn: '08:00',
    clockOut: '16:00',
    hours: '8,0 t',
    type: 'work'
  }, {
    day: 'Ons',
    date: '26/2',
    clockIn: '08:15',
    clockOut: '16:00',
    hours: '7,75 t',
    type: 'work'
  }, {
    day: 'Tor',
    date: '27/2',
    type: 'sick',
    hours: '—',
    note: 'Sygt barn'
  }, {
    day: 'Fre',
    date: '28/2',
    clockIn: '08:00',
    clockOut: '14:15',
    hours: '6,25 t',
    type: 'work'
  }],
  onboarding: [{
    label: 'Underskriv kontrakt',
    done: true,
    due: '20/2',
    who: 'Anna M'
  }, {
    label: 'Bestil computer',
    done: true,
    due: '24/2',
    who: 'Lars F'
  }, {
    label: 'Opret IT-konti',
    done: false,
    due: '1/3',
    who: 'Sine H',
    overdue: true
  }, {
    label: 'Send velkomstmail',
    done: false,
    due: '1/3',
    who: 'Sine H'
  }, {
    label: 'Book intro med team',
    done: false,
    due: '3/3',
    who: 'Anna M'
  }, {
    label: 'Udlever adgangskort',
    done: false,
    due: '3/3',
    who: 'Diana R'
  }, {
    label: 'Tilmeld lønsystem',
    done: false,
    due: '5/3',
    who: 'Camilla H'
  }, {
    label: 'Første 1:1 samtale',
    done: false,
    due: '10/3',
    who: 'Sine H'
  }],
  candidates: {
    new: [{
      name: 'Mette Bjerg',
      role: 'Frontend dev',
      applied: 'Designer',
      tags: ['Figma', 'React'],
      rating: 4,
      isNew: true
    }, {
      name: 'Karl Boysen',
      role: 'Student',
      applied: 'Designer',
      tags: ['UI'],
      rating: 3,
      isNew: true
    }],
    screening: [{
      name: 'Jesper Nielsen',
      role: 'Account mgr',
      applied: 'Sales lead',
      tags: ['B2B', 'CRM'],
      rating: 4
    }],
    interview: [{
      name: 'Emilie Vindahl',
      role: 'Ops lead',
      applied: 'Operations',
      tags: ['Finance'],
      rating: 5
    }],
    offer: [{
      name: 'Cliff Morgen',
      role: 'Developer',
      applied: 'Backend',
      tags: ['Go', 'AWS'],
      rating: 5
    }]
  },
  equipment: [{
    name: 'MacBook Pro 14"',
    category: 'Laptop',
    serial: 'C02XL0FT',
    who: 'Anna Mortensen',
    status: 'assigned',
    icon: 'laptop'
  }, {
    name: 'iPhone 15',
    category: 'Telefon',
    serial: 'F2LXK91',
    who: 'Lars Frank',
    status: 'assigned',
    icon: 'smartphone'
  }, {
    name: 'Dell U2723',
    category: 'Skærm',
    serial: 'CN-0A2',
    who: null,
    status: 'available',
    icon: 'monitor'
  }, {
    name: 'Kontornøgle #12',
    category: 'Nøgle',
    serial: 'K-12',
    who: 'Diana Rank',
    status: 'assigned',
    icon: 'key-round'
  }, {
    name: 'MacBook Air',
    category: 'Laptop',
    serial: 'C02Z9KL',
    who: null,
    status: 'repair',
    icon: 'laptop'
  }],
  metrics: [{
    label: 'Medarbejdere',
    value: '42',
    delta: '+3',
    icon: 'users',
    tone: 'brand'
  }, {
    label: 'Uger til godkendelse',
    value: '6',
    delta: 'denne uge',
    icon: 'clock',
    tone: 'warning'
  }, {
    label: 'Onboarding i gang',
    value: '2',
    delta: 'aktive',
    icon: 'list-checks',
    tone: 'info'
  }, {
    label: 'Compliance',
    value: '100%',
    delta: 'tidsregistrering',
    icon: 'shield-check',
    tone: 'success'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web-app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Folka web-app screens. Exports each screen to window.
const NS = window.FolkaDesignSystem_019e18;
const {
  Card,
  CardHeader,
  Button,
  IconButton,
  Tabs,
  Badge,
  StatusPill,
  Avatar,
  ProgressBar,
  EmployeeRow,
  TimeEntry,
  ChecklistItem,
  CandidateCard,
  EquipmentRow,
  Dialog,
  Input,
  Select,
  FormField,
  Toast
} = NS;
const TONE_BG = {
  brand: 'var(--green-50)',
  warning: 'var(--warning-bg)',
  info: 'var(--info-bg)',
  success: 'var(--success-bg)'
};
const TONE_FG = {
  brand: 'var(--green-700)',
  warning: 'var(--warning)',
  info: 'var(--info)',
  success: 'var(--success)'
};

/* ---------------------------- Dashboard ---------------------------- */
function DashboardScreen() {
  const D = window.FolkaData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, D.metrics.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.label,
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: TONE_BG[m.tone],
      color: TONE_FG[m.tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, m.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: 'var(--text-heading)',
      marginTop: 12,
      fontVariantNumeric: 'tabular-nums'
    }
  }, m.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, m.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Tidsregistrering denne uge",
    subtitle: "6 uger afventer godkendelse",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Se alle")
  })), /*#__PURE__*/React.createElement("div", null, D.employees.filter(e => e.time !== 'draft').slice(0, 5).map(e => /*#__PURE__*/React.createElement(EmployeeRow, {
    key: e.name,
    name: e.name,
    role: `${e.hours} · ${e.dept}`,
    status: e.time,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 16
      }),
      "aria-label": "\xC5bn"
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Onboarding \xB7 Sofie Holm",
    subtitle: "Starter 1. mar 2026"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 2,
    max: 8,
    showLabel: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 12
    }
  }, "2 af 8 opgaver klar. N\xE6ste: opret IT-konti."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 14
    },
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Forts\xE6t")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Hj\xE6lp lige ved h\xE5nden"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Stine Halkj\xE6r"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Book en HR-konsulent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Gratis indledende samtale")), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Book"))))));
}

/* -------------------------- Time approval -------------------------- */
function TimeApprovalScreen({
  onToast
}) {
  const D = window.FolkaData;
  const pending = D.employees.filter(e => e.time !== 'draft');
  const [sel, setSel] = React.useState(pending[0].name);
  const [statuses, setStatuses] = React.useState(() => Object.fromEntries(pending.map(e => [e.name, e.time])));
  const cur = pending.find(e => e.name === sel);
  const approve = () => {
    setStatuses(s => ({
      ...s,
      [sel]: 'approved'
    }));
    onToast && onToast(`${sel}s uge er godkendt`);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Uge 9 \xB7 24\u201328 feb")), pending.map(e => /*#__PURE__*/React.createElement("button", {
    key: e.name,
    onClick: () => setSel(e.name),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      padding: '11px 16px',
      border: 'none',
      borderLeft: `3px solid ${sel === e.name ? 'var(--green-600)' : 'transparent'}`,
      background: sel === e.name ? 'var(--green-50)' : 'transparent',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: e.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, e.hours)), /*#__PURE__*/React.createElement(StatusPill, {
    status: statuses[e.name]
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: cur.name,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, cur.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, cur.role, " \xB7 ", cur.dept)), /*#__PURE__*/React.createElement(StatusPill, {
    status: statuses[sel]
  })), /*#__PURE__*/React.createElement("div", null, D.week.map(d => /*#__PURE__*/React.createElement(TimeEntry, _extends({
    key: d.day
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: 'var(--sand-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "I alt denne uge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, cur.hours)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-square",
      size: 15
    })
  }, "Bed om rettelse"), /*#__PURE__*/React.createElement(Button, {
    onClick: approve,
    disabled: statuses[sel] === 'approved',
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    })
  }, statuses[sel] === 'approved' ? 'Godkendt' : 'Godkend uge'))));
}

/* ---------------------------- Employees ---------------------------- */
function EmployeesScreen({
  onAdd
}) {
  const D = window.FolkaData;
  const [q, setQ] = React.useState('');
  const [dept, setDept] = React.useState('');
  const depts = [...new Set(D.employees.map(e => e.dept))];
  const list = D.employees.filter(e => (!q || e.name.toLowerCase().includes(q.toLowerCase())) && (!dept || e.dept === dept));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "S\xF8g medarbejder",
    value: q,
    onChange: e => setQ(e.target.value),
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: dept,
    onChange: e => setDept(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle afdelinger"), depts.map(d => /*#__PURE__*/React.createElement("option", {
    key: d,
    value: d
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: onAdd,
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "Tilf\xF8j medarbejder")), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      padding: '10px 16px',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      paddingLeft: 54
    }
  }, "Navn"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120
    }
  }, "Afdeling"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 110
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40
    }
  })), list.map(e => /*#__PURE__*/React.createElement(EmployeeRow, {
    key: e.name,
    name: e.name,
    role: e.role,
    department: e.dept,
    status: e.status,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      }),
      "aria-label": "Mere"
    })
  })), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, "Ingen medarbejdere matcher s\xF8gningen.")));
}

/* ---------------------------- Onboarding --------------------------- */
function OnboardingScreen() {
  const D = window.FolkaData;
  const [items, setItems] = React.useState(D.onboarding);
  const done = items.filter(i => i.done).length;
  const toggle = idx => setItems(its => its.map((it, i) => i === idx ? {
    ...it,
    done: !it.done
  } : it));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Sofie Holm \xB7 Marketing intern",
    subtitle: "Starter 1. mar 2026"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: done,
    max: items.length,
    showLabel: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 12px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ChecklistItem, {
    key: it.label,
    label: it.label,
    done: it.done,
    due: it.due,
    overdue: it.overdue,
    assignee: it.who,
    onToggle: () => toggle(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginBottom: 10
    }
  }, "Skabelon"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Standard onboarding"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 12
    }
  }, "8 opgaver fordelt p\xE5 4 ansvarlige. Tilpas til denne medarbejder."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 8
    },
    fullWidth: true
  }, "Rediger skabelon")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginBottom: 10
    }
  }, "Ansvarlige"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['Anna M', 'Lars F', 'Sine H', 'Diana R'].map(n => /*#__PURE__*/React.createElement(Avatar, {
    key: n,
    name: n,
    size: "sm"
  }))))));
}

/* --------------------------- Recruitment --------------------------- */
function RecruitmentScreen() {
  const D = window.FolkaData;
  const cols = [{
    id: 'new',
    label: 'Nye',
    items: D.candidates.new
  }, {
    id: 'screening',
    label: 'Screening',
    items: D.candidates.screening
  }, {
    id: 'interview',
    label: 'Samtale',
    items: D.candidates.interview
  }, {
    id: 'offer',
    label: 'Tilbud',
    items: D.candidates.offer
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      alignItems: 'start'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 6px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, c.items.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(cand => /*#__PURE__*/React.createElement(CandidateCard, _extends({
    key: cand.name
  }, cand))))))));
}

/* ---------------------------- Equipment ---------------------------- */
function EquipmentScreen() {
  const D = window.FolkaData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "Registrer udstyr")), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, D.equipment.map(it => /*#__PURE__*/React.createElement(EquipmentRow, {
    key: it.name,
    name: it.name,
    category: it.category,
    serial: it.serial,
    assignedTo: it.who,
    status: it.status,
    iconNode: /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 18
    }),
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      }),
      "aria-label": "Mere"
    })
  }))));
}
Object.assign(window, {
  DashboardScreen,
  TimeApprovalScreen,
  EmployeesScreen,
  OnboardingScreen,
  RecruitmentScreen,
  EquipmentScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/shell.jsx
try { (() => {
// Folka web-app shell — Icon helper, Sidebar, Topbar. Exports to window.
const {
  Avatar,
  IconButton,
  Input
} = window.FolkaDesignSystem_019e18;
function Icon({
  name,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  });
}
function Sidebar({
  route,
  setRoute
}) {
  const D = window.FolkaData;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      height: '100vh',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/folka-mark.svg",
    width: "30",
    height: "30",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, "Folka")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, D.nav.map(n => {
    const active = n.id === route;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setRoute(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '9px 12px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        textAlign: 'left',
        background: active ? 'var(--green-50)' : 'transparent',
        color: active ? 'var(--green-700)' : 'var(--text-body)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        transition: 'background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        background: active ? 'var(--green-600)' : 'var(--clay-500)',
        color: '#fff',
        borderRadius: 999,
        padding: '1px 7px',
        minWidth: 20,
        textAlign: 'center'
      }
    }, n.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 8px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.user.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, D.user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, D.user.role)), /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 16,
    style: {
      color: 'var(--text-muted)'
    }
  })));
}
function Topbar({
  title,
  subtitle,
  actions
}) {
  const D = window.FolkaData;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '20px 32px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(250,248,243,0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 23,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "S\xF8g\u2026",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    size: "sm"
  })), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }),
    variant: "ghost",
    "aria-label": "Notifikationer"
  }));
}
Object.assign(window, {
  Icon,
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.CandidateCard = __ds_scope.CandidateCard;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.EmployeeRow = __ds_scope.EmployeeRow;

__ds_ns.EquipmentRow = __ds_scope.EquipmentRow;

__ds_ns.TimeEntry = __ds_scope.TimeEntry;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
