function Ring() {
    return (
        <div className="bg-white p-10 rounded-lg shadow flex justify-between">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2">
                Primary
            </button>
            <button type="button" className="bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-gray-200">
                Secondary
            </button>
            <button type="button" className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-red-200">
                Danger
            </button>
            <button type="button" className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-green-300">
                Success
            </button>
        </div>
    )
}

export default Ring
