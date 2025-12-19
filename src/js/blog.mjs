import { renderListWithTemplate, getData } from "./utils.mjs";

function blogCardTemplate(blog) {
  return `
    <li class="blogCard">
        <a href="/blog/index.html?blog=${blog.slug}">
            <img src="/images/Sample.png" alt="image of ${blog.name}">
            <div class="blogInfo">
                <h3>${blog.title ?? "Unnamed Post"}</h3>
                <h4>${blog.date ?? "Unknown Date"}</h4>
            </div>
        </a>
    </li>
  `;
}

export async function blogList(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.error(`blogsList: element not found for selector "${selector}"`);
    return;
  }

  const blogsObj = await getData("../json/blog.json");

  renderListWithTemplate(blogCardTemplate, el, blogsObj);
}
