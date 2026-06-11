import { l as generateUtilityClass } from "./identifier-DwjwUySa.js";
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

//# sourceMappingURL=generateUtilityClasses-f_oAAkFY.js.map