import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className="prose mx-auto">
      <Head>
        <title>Exlexer | {frontmatter.title}</title>
      </Head>
      <h1 className="mb-0">{frontmatter.title}</h1>
      <h6 className="text-slate-400">{frontmatter.date}</h6>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
