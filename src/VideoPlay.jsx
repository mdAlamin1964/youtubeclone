import React from 'react'
import ReactPlayer from 'react-player'
export default function VideoPlay({icons, videoUrl, channelImage, videoTitle, channelName, views, upload, handleBackbtnPlayVideo, relatedVideoItems}){
    return (
        <div className="playarea">
            <div className="playarea-right">
                <div className="back-btn"
                    onClick={handleBackbtnPlayVideo}
                >
                    {icons.MdOutlineArrowBack}
                </div>
                <div className="playarea-video-box">
                    <ReactPlayer
                        className="video-play-box"
                        url={videoUrl}
                        playing={true}
                        
                    />
                    <div className="icon-exclamation">
                        {icons.AiFillExclamationCircle}
                    </div>
                    <div className="icons-on-left">
                        <div className="icon-BsFillPlayFill">
                            {icons.BsFillPlayFill}
                        </div>
                        <div className="icon-MdSkipNext">
                            {icons.MdSkipNext}
                        </div>
                        <div className="icon-BsFillVolumeUpFill">
                            {icons.BsFillVolumeUpFill}
                        </div>
                        <div className="duration">
                            <span className='start'>0:01</span> / <span className="end">5:00</span>
                        </div>
                    </div>
                    <div className="icons-on-right">
                        <div className="icon-auto-play">
                            {icons.BsFillPlayFill}
                        </div>
                        <div className="icon-MdClosedCaption">
                            {icons.MdClosedCaption}
                        </div>
                        <div className="icon-RxGear">
                            {icons.RxGear}
                        </div>
                        <div className="icon-TbBoxAlignBottomRight">
                            {icons.TbBoxAlignBottomRight}
                        </div>
                        <div className="icon-TbRectangle">
                            {icons.TbRectangle}
                        </div>
                        <div className="icon-FaChromecast">
                            {icons.FaChromecast}
                        </div>
                        <div className="icon-BiFullscreen">
                            {icons.MdFullscreen}
                        </div>
                    </div>
                </div>
                <div className="playarea-details">
                    <div className="playarea-title">
                        {videoTitle}
                    </div>
                    <div className="playarea-datails-text">
                        <div className="video-detail-left">
                            <div className="playarea-channel-thumb">
                                <img src={channelImage} alt="" />
                            </div>
                            <div className="player-text">
                                <div className="player-text-left">
                                    <div className="playarea-channel-name">
                                        {channelName} {icons.AiFillCheckCircle}
                                    </div>
                                    <div className="playarea-suscribers">
                                        <div className="view">{views} Subscribers</div>
                                    </div>
                                </div>
                                <div className="play-area-subcribe">
                                    Subscribe
                                </div>
                            </div>
                        </div>
                        <div className="video-detail-right">
                            <div className="like-area detail-btn"> {icons.AiOutlineLike} 3M | {icons.AiOutlineDislike}</div>
                            <div className="share-area detail-btn">
                                {icons.TbShare3} Share
                            </div>
                            <div className="save-area detail-btn">
                                {icons.MdPlaylistAdd} Save
                            </div>
                            <div className="play-menu detail-btn">
                                {icons.BsThreeDots}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="playarea-left">
                {relatedVideoItems}
            </div>
        </div>
    )
}