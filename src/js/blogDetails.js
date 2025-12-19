import { commentList } from "./comments.mjs";
import { getData, renderHTMLWithTemplate, qs, renderListWithTemplate } from "./utils.mjs";

import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

function blogTemplate(blog) {
    return `
    <section class="introduction">
    <img src="/images/Sample.png" alt="image of ${blog.slug}">
    <h2>${blog.title}</h2>
    <p>${blog.content ?? "blog content"}</p>
    </section>
    `
}

async function blogDetails(blogName) {
    const blogElement = qs(".blog");
    if (!blogElement) {
        console.error('Missing container element: ".blog"');
        return;
    }
    const blogsObj = await getData("../json/blog.json");
    const blog = blogsObj.find((b) => b.slug === blogName);
    console.log(blog);
    
    await renderHTMLWithTemplate(blogTemplate, blogElement, blog);
}

const blogSlug = getParam("blog");
blogDetails(blogSlug);
commentList(blogSlug);