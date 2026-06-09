import { r as __toESM, t as require_react } from "./react-Ea1HnpA1.js";
import { T as require_prop_types, c as generateUtilityClass, h as require_jsx_runtime, w as clsx } from "./identifier-BPUk3SFh.js";
import { t as composeClasses } from "./composeClasses-CuzF1wSb.js";
import { r as styled, t as useDefaultProps } from "./DefaultPropsProvider-CC3qZuJh.js";
import { t as generateUtilityClasses } from "./generateUtilityClasses-BUtvJayk.js";
import { t as memoTheme } from "./memoTheme-BUL97PKI.js";
import { t as ListContext } from "./ListContext-CZkYTCK2.js";
//#region node_modules/@mui/material/ListItemIcon/listItemIconClasses.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1);
function getListItemIconUtilityClass(slot) {
	return generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
//#endregion
//#region node_modules/@mui/material/ListItemIcon/ListItemIcon.mjs
var import_jsx_runtime = require_jsx_runtime();
var useUtilityClasses = (ownerState) => {
	const { alignItems, classes } = ownerState;
	return composeClasses({ root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"] }, getListItemIconUtilityClass, classes);
};
var ListItemIconRoot = styled("div", {
	name: "MuiListItemIcon",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
	}
})(memoTheme(({ theme }) => ({
	minWidth: theme.spacing(4.5),
	color: (theme.vars || theme).palette.action.active,
	flexShrink: 0,
	display: "inline-flex",
	variants: [{
		props: { alignItems: "flex-start" },
		style: { marginTop: 8 }
	}]
})));
/**
* A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
*/
var ListItemIcon = /*#__PURE__*/ import_react.forwardRef(function ListItemIcon(inProps, ref) {
	const props = useDefaultProps({
		props: inProps,
		name: "MuiListItemIcon"
	});
	const { className, ...other } = props;
	const context = import_react.useContext(ListContext);
	const ownerState = {
		...props,
		alignItems: context.alignItems
	};
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ListItemIconRoot, {
		className: clsx(useUtilityClasses(ownerState).root, className),
		ownerState,
		ref,
		...other
	});
});
ListItemIcon.propTypes = {
	/**
	* The content of the component, normally `Icon`, `SvgIcon`,
	* or a `@mui/icons-material` SVG icon element.
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
export { ListItemIcon as default, getListItemIconUtilityClass, listItemIconClasses };

//# sourceMappingURL=@mui_material_ListItemIcon.js.map