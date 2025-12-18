import { loadHeaderFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";
import { patternDetails } from "./patternDetails.mjs";

loadHeaderFooter();
const patternName = getParam("pattern");
patternDetails(patternName);
