import { c as generateUtilityClass } from "./identifier-BPUk3SFh.js";
//#region node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
	const result = {};
	slots.forEach((slot) => {
		result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
	});
	return result;
}
//#endregion
export { generateUtilityClasses as t };

//# sourceMappingURL=generateUtilityClasses-BUtvJayk.js.map