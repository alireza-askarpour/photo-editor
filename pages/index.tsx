import PageWrapper from "components/Layout/PageWrapper"
import DropFileInput from "components/DropFileInput"

const Home = () => {
  const handleFileChange = (value: any) => {
    console.log(value)
  }

  return (
    <PageWrapper>
      <section className="h-screen bg-gray-100 grid place-items-center">
        <DropFileInput onFileChange={handleFileChange} />
      </section>
    </PageWrapper>
  )
}

export default Home
