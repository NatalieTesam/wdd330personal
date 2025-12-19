import { renderListWithTemplate, getData } from "./utils.mjs";

function kitCardTemplate(kit) {
  return `
    <li class="kitCard">
        <a href="/kit/index.html?kit=${kit.id}">
            <img src="/images/Sample.png" alt="image of ${kit.name}">
            <h3>${kit.name ?? "Unnamed kit"}</h3>
            <h4>Price: ${kit.price_usd ?? "TBD"}</h4>
            <p>${kit.description ?? "kit Description"}</p>
            <p>${kit.difficulty ?? "kit difficulty"}</p>
        </a>
    </li>
  `;
}

export async function kitsList(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.error(`kitsList: element not found for selector "${selector}"`);
    return;
  }

  const patternsObj = await getData("../json/kits.json");

  const patterns = Object.entries(patternsObj).map(([id, kit]) => ({
    id,
    ...kit,
  }));

  renderListWithTemplate(kitCardTemplate, el, patterns);
}
