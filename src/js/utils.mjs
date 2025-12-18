function qs(selector) {
  return document.querySelector(selector);
}

// Returns a function that returns a promise that resolves to the HTML string of the template 
function loadTemplate(path) {
    return async function () {
        const res = await fetch(path);
        if (res.ok) {
          const html = await res.text();
          return html;
        }
    };
} 

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function getData(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return response.json();
}

export async function renderHTMLWithTemplate(templateFn, parentElement, data, callback, position="afterbegin", clear=true) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if(callback) {
        callback(data);
    }
}

export async function loadHeaderFooter() {
  const headerTemplateFn = loadTemplate("/partials/header.html");
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  const header = qs("header");
  const footer = qs("footer");
  
  await renderHTMLWithTemplate(headerTemplateFn, header);
  await renderHTMLWithTemplate(footerTemplateFn, footer);
}
