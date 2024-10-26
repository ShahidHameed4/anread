import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "ANREAD - Taking You Ahead" }: Props) => (
  <div className="min-h-screen flex flex-col font-mulish">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="flex-grow text-voodoo-700 mt-10">{children}</main>
  </div>
);

export default Layout;
