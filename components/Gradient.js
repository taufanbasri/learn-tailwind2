import React from 'react'

function Gradient() {
    return (
        <div className="flex items-center justify-center min-h-screen antialiased bg-gray-200">
            <div className="w-full lg:w-3/4">
                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <div className="inline font-black text-transparent text-8xl bg-gradient-to-br from-blue-500 via-red-500 to-teal-500 bg-clip-text">
                        TAUFAN
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gradient
