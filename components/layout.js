import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-700 text-white mb-8 py-4">
        <div className="container mx-auto flex">
          <Link href="/">
            <a className="mr-4">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-4">About</a>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-indigo-700 text-white mt-8 py-4">
        <div className="container mx-auto flex justify-end">
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
