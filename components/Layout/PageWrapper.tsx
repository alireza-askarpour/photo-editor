import Head from "next/head"
import { IPageWrapper } from "types/components/PageWrapper"

const PageWrapper = ({ title, children }: IPageWrapper) => {
  return (
    <>
      <Head>
        <title>Photo Editor{title && ` | ${title}`}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {children}
    </>
  )
}

export default PageWrapper
