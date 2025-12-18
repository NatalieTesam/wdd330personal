import { loadHeaderFooter, getParam } from "./utils.mjs";
import { patternDetails } from "./patternDetails.mjs";

loadHeaderFooter();
const patternName = getParam("pattern");
patternDetails(patternName);
