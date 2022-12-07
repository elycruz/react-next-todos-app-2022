import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<React.Fragment>
    <header>
      <div>
        <h1><a href="/">Intake Form</a></h1>
      </div>
    </header>
    <main>
      <Component {...pageProps} />
    </main>
    <footer>
      <div>
        <p>&copy; 2022 Edlc</p>
      </div>
    </footer>
  </React.Fragment>)
}
