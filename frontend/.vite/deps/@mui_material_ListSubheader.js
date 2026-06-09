import { r as __toESM, t as require_react } from "./react-Ea1HnpA1.js";
import { D as require_prop_types, E as clsx, g as require_jsx_runtime, l as generateUtilityClass } from "./identifier-DwjwUySa.js";
import { t as composeClasses } from "./composeClasses-CuzF1wSb.js";
import { t as capitalize_default } from "./capitalize-DWxe5OcV.js";
import { r as styled, t as useDefaultProps } from "./DefaultPropsProvider-COhq23b0.js";
import { t as generateUtilityClasses } from "./generateUtilityClasses-f_oAAkFY.js";
import { t as memoTheme } from "./memoTheme-iwpuTymu.js";
//#region node_modules/@mui/material/ListSubheader/listSubheaderClasses.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1);
function getListSubheaderUtilityClass(slot) {
	return generateUtilityClass("MuiListSubheader", slot);
}
var listSubheaderClasses = generateUtilityClasses("MuiListSubheader", [
	"root",
	"colorPrimary",
	"colorInherit",
	"gutters",
	"inset",
	"sticky"
]);
//#endregion
//#region node_modules/@mui/material/ListSubheader/ListSubheader.mjs
var import_jsx_runtime = require_jsx_runtime();
var useUtilityClasses = (ownerState) => {
	const { classes, color, disableGutters, inset, disableSticky } = ownerState;
	return composeClasses({ root: [
		"root",
		color !== "default" && `color${capitalize_default(color)}`,
		!disableGutters && "gutters",
		inset && "inset",
		!disableSticky && "sticky"
	] }, getListSubheaderUtilityClass, classes);
};
var ListSubheaderRoot = styled("li", {
	name: "MuiListSubheader",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`],
			!ownerState.disableGutters && styles.gutters,
			ownerState.inset && styles.inset,
			!ownerState.disableSticky && styles.sticky
		];
	}
})(memoTheme(({ theme }) => ({
	boxSizing: "border-box",
	lineHeight: "48px",
	listStyle: "none",
	color: (theme.vars || theme).palette.text.secondary,
	fontFamily: theme.typography.fontFamily,
	fontWeight: theme.typography.fontWeightMedium,
	fontSize: theme.typography.pxToRem(14),
	variants: [
		{
			props: { color: "primary" },
			style: { color: (theme.vars || theme).palette.primary.main }
		},
		{
			props: { color: "inherit" },
			style: { color: "inherit" }
		},
		{
			props: ({ ownerState }) => !ownerState.disableGutters,
			style: {
				paddingLeft: 16,
				paddingRight: 16
			}
		},
		{
			props: ({ ownerState }) => ownerState.inset,
			style: { paddingLeft: 72 }
		},
		{
			props: ({ ownerState }) => !ownerState.disableSticky,
			style: {
				position: "sticky",
				top: 0,
				zIndex: 1,
				backgroundColor: (theme.vars || theme).palette.background.paper
			}
		}
	]
})));
var ListSubheader = /*#__PURE__*/ import_react.forwardRef(function ListSubheader(inProps, ref) {
	const props = useDefaultProps({
		props: inProps,
		name: "MuiListSubheader"
	});
	const { className, color = "default", component = "li", disableGutters = false, disableSticky = false, inset = false, ...other } = props;
	const ownerState = {
		...props,
		color,
		component,
		disableGutters,
		disableSticky,
		inset
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ListSubheaderRoot, {
		as: component,
		className: clsx(useUtilityClasses(ownerState).root, className),
		ref,
		ownerState,
		...other
	});
});
ListSubheader.propTypes = {
	/**
	* The content of the component.
	*/
	children: import_prop_types.default.node,
	/**
	* Override or extend the styles applied to the component.
	*/
	classes: import_prop_types.default.object,
	/**
	* @ignore
	*/
	className: import_prop_types.default.string,
	/**
	* The color of the component. It supports those theme colors that make sense for this component.
	* @default 'default'
	*/
	color: import_prop_types.default.oneOf([
		"default",
		"inherit",
		"primary"
	]),
	/**
	* The component used for the root node.
	* Either a string to use a HTML element or a component.
	*/
	component: import_prop_types.default.elementType,
	/**
	* If `true`, the List Subheader will not have gutters.
	* @default false
	*/
	disableGutters: import_prop_types.default.bool,
	/**
	* If `true`, the List Subheader will not stick to the top during scroll.
	* @default false
	*/
	disableSticky: import_prop_types.default.bool,
	/**
	* If `true`, the List Subheader is indented.
	* @default false
	*/
	inset: import_prop_types.default.bool,
	/**
	* The system prop that allows defining system overrides as well as additional CSS styles.
	*/
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	])
};
//#endregion
export { ListSubheader as default, getListSubheaderUtilityClass, listSubheaderClasses };

//# sourceMappingURL=@mui_material_ListSubheader.js.map