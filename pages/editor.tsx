import Sidebar from "components/Layout/Sidebar"
import Navbar from "components/Layout/Navbar"
import Content from "components/Layout/Content"
import Footer from "components/Layout/Footer"

const Editor = () => {
  return (
    <section className="h-screen w-full">
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </section>
  )
}

export default Editor
