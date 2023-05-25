import React from "react";
export default function Videos({icons ,className, videoItems, shortsItem}) {
    return(
        <div className={className}>
            <div className="video-main">
                {videoItems}
            </div>

            
            {/* Shorts area */}
            <div className="video-shorts">
                <div className="saction-title">
                    <div className="title-icon">
                        {icons.BsFilePlay} <h2 className="title">
                            Shorts
                        </h2>
                    </div>
                </div>

                <div className="video-shorts-saction">
                    {shortsItem}
                </div>
                <div className="shorts-more-saction">
                    {icons.MdKeyboardArrowDown}
                </div>
            </div>
        </div>
    )
}