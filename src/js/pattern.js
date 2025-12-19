import { loadHeaderFooter, getParam } from "./utils.mjs";
import { patternDetails } from "./patternDetails.mjs";
import { commentList } from "./comments.mjs";

loadHeaderFooter();
const patternName = getParam("pattern");
patternDetails(patternName);
commentList(patternName);
