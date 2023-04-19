import React from "react";
import blogData from "../data/blog";

function ArticleList() {
  const { name, image, about, posts } = blogData;
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3> {title}</h3>
      <small>{date}</small>
      <p> {preview}</p>
    </article>
  );
}

export default ArticleList;
