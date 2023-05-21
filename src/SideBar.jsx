import React from "react"
export default function SideBar({icons, className}){
    return (
        <div className={className}>
            <div className="user-saction saction">
                <div className="user-saction-item item active">
                    {icons.MdHomeFilled} <span className="item-name">Home</span> 
                </div>
                <div className="user-saction-item item">
                    {icons.BsFilePlay} 
                    <span className="item-name">Shorts</span> 
                </div>
                <div className="user-saction-item item">
                    {icons.BsCollectionPlay} 
                    <span className="item-name">Subscription</span> 
                </div>
            </div>

            <div className="browser-saction saction">
                <div className="browser-saction-item item">
                    {icons.MdVideoLibrary} 
                    <span className="item-name">Library</span> 
                </div>
                <div className="browser-saction-item item">
                    {icons.MdOutlineHistory} 
                    <span className="item-name">History</span> 
                </div>
            </div>

            <div className="signin-saction saction">
                <div className="text">
                    Sign in to like videos, comment, and subscribe.
                </div>
                <div className="signup">
                    {icons.BsPerson} Sign in
                </div>
            </div>

            <div className="explor-saction saction">
                <div className="title">Explore</div>
                <div className="explor-saction-item item">
                    {icons.AiFillFire} 
                    <span className="item-name">Trending</span> 
                </div>
                <div className="explor-saction-item item">
                    {icons.MdOutlineMusicNote} 
                    <span className="item-name">Music</span> 
                </div>
                <div className="explor-saction-item item">
                    {icons.IoLogoGameControllerB} 
                    <span className="item-name">Gamin</span> 
                </div>
                <div className="explor-saction-item item">
                    {icons.BsTrophy} 
                    <span className="item-name">Sports</span>
                </div>
            </div>
        </div>
    )
}