import Card from "../components/Card"
import Ring from "../components/Ring"

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-5/12">
        <Card/>
        <div className="my-20"></div>
        <Ring/>
      </div>
    </div>
  )
}

export default Home
