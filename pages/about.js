import Head from "next/head";
import md from "markdown-it";

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/exlexer/exlexer/main/README.md"
  );
  let content = await res.text();

  content = content.replace(/<!--(.|\n)*-->/g, "");

  return {
    props: {
      content,
    },
  };
}

export default function About({ content }) {
  return (
    <div className="prose mx-auto">
      <Head>
        <title>Exlexer | About</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
