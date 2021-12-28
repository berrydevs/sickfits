import NProgress from 'nprogress'
import Page from './../components/Page'
import Router from 'next/router'

import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }) {
  return <Page><Component {...pageProps}></Component></Page>
}

export default MyApp