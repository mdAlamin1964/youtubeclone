import React from 'react'
export default function VideoPlayReg({regFunc}) {
    return (
        <div className="videoReg-main">
            <div className="videoReg-saction">
                <div className="videoReg-item 1080p"
                    onClick={regFunc}
                >
                    1080p
                </div>
                <div className="videoReg-item 720p"
                    onClick={regFunc}
                >
                    720p
                </div>
                <div className="videoReg-item 480p"
                    onClick={regFunc}
                >
                    480p
                </div>
                <div className="videoReg-item 144p"
                    onClick={regFunc}
                >
                    144p
                </div>
            </div>
        </div>
    )
}