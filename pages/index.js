import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Exlexer | Home</title>
      </Head>
      <h1 className="font-extrabold text-4xl mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-0">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <h4 className="px-4 pt-4">{frontmatter.title}</h4>
                <h6 className="px-4 pb-4 text-slate-400">{frontmatter.date}</h6>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
