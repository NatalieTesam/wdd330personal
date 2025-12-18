import { renderListWithTemplate, getData } from "./utils.mjs";

function patternCardTemplate(pattern) {
  return `
    <li class="patternCard">
        <a href="/pattern/index.html?pattern=${pattern.id}">
            <img src="/images/Sample.png" alt="image of ${pattern.name}">
            <h3>${pattern.name ?? "Unnamed Pattern"}</h3>
            <h4>Price: ${pattern.price ?? "TBD"}</h4>
            <p>${pattern.description ?? "Pattern Description"}</p>
        </a>
    </li>
  `;
}

// DEFAULT export (so import without curly braces)
export async function patternsList(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.error(`patternsList: element not found for selector "${selector}"`);
    return;
  }

  // Load the JSON object (keyed by unique ids)
  const patternsObj = await getData("../json/patterns.json");

  // Convert { id: patternObj, ... } into an array and keep the id
  const patterns = Object.entries(patternsObj).map(([id, pattern]) => ({
    id,
    ...pattern,
  }));

  renderListWithTemplate(patternCardTemplate, el, patterns);
}
