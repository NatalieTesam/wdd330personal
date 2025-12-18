import { getData, renderHTMLWithTemplate, qs } from "./utils.mjs";

function patternTemplate(pattern) {
    return `
    <section class="introduction">
        <img src="/images/Sample.png" alt="image of ${pattern.name}">
        <h2>${pattern.name}</h2>
        <p>${pattern.description ?? "Pattern Description"}</p>
        <p>Hook Size: ${pattern.materials.hook_size_mm} mm</p>
        <ul class="colors"></ul>
        <ul class="materials"></ul>
    </section>
    <section class="instructions">
        <h3>Instructions</h2>
    </section>
    `
}

function partTemplate(partName, part) {
    return `
        <h4>${partName}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>Instructions</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    ${(part.rounds ?? []).map(rowTemplate).join("")}
                </tbody>
            </table>
    `
}

function rowTemplate(row) {
    return `
        <tr>
            <td>${row.round}</td>
            <td>${row.instruction}</td>
            <td>${row.stitch_count}</td>
        </tr>
    `
}

export async function patternDetails(patternName) {
    const patternElement = qs(".pattern");
    if (!patternElement) {
        console.error('Missing container element: ".pattern"');
        return;
    }
    const patternsObj = await getData("../json/patterns.json");
    const pattern = patternsObj[patternName];
    console.log(pattern);

    await renderHTMLWithTemplate(patternTemplate, patternElement, pattern);

    const parts = Object.entries(pattern.parts)
    const partsHtml = parts.map(([partName, part]) => 
        partTemplate(partName, part)).join("");
    
    const instructionsElement = qs(".instructions");
    if (!instructionsElement) {
        console.error('Could not find ".instructions" after rendering.');
        return;
    }

    instructionsElement.innerHTML += partsHtml;
}

