import React from 'react'

function Button() {
    return (
        <div className="flex">
            <div className="mr-2">
                <button className="btn btn-secondary">
                    Secondary
                </button>
            </div>

            <div className="mr-2">
                <button className="btn btn-primary">
                    Primary
                </button>
            </div>

            <div className="mr-2">
                <button className="btn btn-success">
                    Success
                </button>
            </div>
        </div>
    )
}

export default Button
