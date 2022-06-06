import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Content from "./content"
import Footer from "./Footer"

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
