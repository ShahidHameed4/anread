import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="min-h-screen flex flex-col font-mulish">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="flex-grow text-teal-700">{children}</main>
    <footer className="bg-gradient-to-r from-teal-800 to-teal-500 text-white py-4">
      <div className="container mx-auto px-4">
        <Footer />
      </div>
    </footer>
  </div>
);

export default Layout;
