import { qs, renderListWithTemplate, getData } from "./utils.mjs";

function commentTemplate(comment) {
    return `
        <li>
            <h4>${comment.username}</h4>
            <p>${comment.date ?? "comment date"}</p>
            <p>${comment.content ?? "comment content"}</p>
        </li>
    `
}
export async function commentList(name) {
    const blogElement = qs(".commentsList");
    if (!blogElement) {
        console.error('Missing container element: ".commentsList"');
        return;
    }

    const commentsObj = await getData(`../json/reactions.json`);
    const comments = commentsObj[name];

    await renderListWithTemplate(commentTemplate, blogElement, comments);
}

