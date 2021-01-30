import { useEffect } from "react"
import Card from "../components/Card"
import Ring from "../components/Ring"

function Home() {
  const selectTheme = (value) => {
    localStorage.setItem('theme', value)
    const html = document.querySelector('html')
    html.classList.add(localStorage.getItem('theme'))

    if (value == 'dark') {
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.removeItem('theme')
  }, [])

  return (
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-800 dark:text-white">Switcher</div>
          <div>
            <button onClick={() => selectTheme('light')} className="w-4 h-4 focus:outline-none bg-gray-200 rounded-full mr-2"></button>
            <button onClick={() => selectTheme('dark')} className="w-4 h-4 focus:outline-none bg-black rounded-full"></button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Lorem ipsum dolor sit amet.</h1>
            <div className="leading-relaxed text-gray-500 dark:text-gray-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores magni tempore consequuntur voluptas voluptate numquam? Odio iure temporibus optio quasi aperiam magnam architecto cum!
            </div>
          </div>
          <div className="px-10 py-6 border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-900 dark:text-gray-200">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
