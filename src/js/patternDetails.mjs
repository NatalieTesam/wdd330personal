import { getData, renderHTMLWithTemplate } from "./utils.mjs";

function patternTemplate(pattern) {
    return `
    <img src="/images/Sample.png" alt="image of ${pattern.name}">
    <h2>${pattern.name}</h2>
    <p>${pattern.description}</p>
    `
}

export async function patternDetails(patternName) {
    const patternElement = qs(pattern);
    const patternsObj = await getData("../json/patterns.json");

    renderHTMLWithTemplate(patternTemplate, patternElement, patternData)
}