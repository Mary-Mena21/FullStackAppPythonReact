import { r as __toESM, t as require_react } from "./react-Ea1HnpA1.js";
import { i as useEnhancedEffect } from "./useReducedMotion-1rDYsiu9.js";
//#region node_modules/@mui/utils/useEventCallback/useEventCallback.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
* See RFC in https://github.com/reactjs/rfcs/pull/220
*/
function useEventCallback(fn) {
	const ref = import_react.useRef(fn);
	useEnhancedEffect(() => {
		ref.current = fn;
	});
	return import_react.useRef((...args) => (0, ref.current)(...args)).current;
}
//#endregion
export { useEventCallback as t };

//# sourceMappingURL=useEventCallback-BWgaHb0Z.js.map