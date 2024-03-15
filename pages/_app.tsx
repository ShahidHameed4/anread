import React from 'react'
import { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
return <Component {...pageProps} />
}
