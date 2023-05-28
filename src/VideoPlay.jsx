import React from 'react'
import ReactPlayer from 'react-player'
export default function VideoPlay({icons, videoUrl, channelImage, videoTitle, channelName, views, handleBackbtnPlayVideo, relatedVideoItems, handlePlayVidoePlay, handlePlay, handleMute, handlePip, runTime, controls, videoReg, quality, playNextVideo}){
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
                        playing={handlePlay}
                        volume={0.5}
                        muted={handleMute}
                        controls={false}
                        pip={handlePip}
                    />
                    <div className="icon-exclamation">
                        {icons.AiFillExclamationCircle}
                    </div>
                    <div className="icons-on-left">
                        <div className="icon-BsFillPlayFill"
                            onClick={handlePlayVidoePlay}
                        >  
                           {handlePlay?
                                icons.BsPauseFill :
                                
                                icons.BsFillPlayFill
                            }
                            <div className="icon-BsFillPlayFill-tooltip">{
                                handlePlay?
                                "Puse" :
                                
                                "Play"
                            }
                            </div>
                        </div>
                        <div className="icon-MdSkipNext"
                            onClick={playNextVideo}
                            >
                            {icons.MdSkipNext}
                            <div className="icon-MdSkipNext-tooltip">Next</div>
                        </div>
                        <div className="icon-BsFillVolumeUpFill"
                            onClick={handlePlayVidoePlay}
                        >
                            {   handleMute? 
                                icons.TbVolumeOff:
                                icons.BsFillVolumeUpFill 
                                
                            }

                            <div className="icon-BsFillVolumeUpFill-tooltip">
                            {   
                                handleMute? 
                                "Unmute":
                                "Mute"
                                
                            }

                            </div>


                        </div>
                        <div className="duration">
                            <span className='start'></span>  <span className="end">{runTime}</span>
                        </div>
                    </div>
                    <div className="icons-on-right">
                        <div className="icon-auto-play"
                            onClick={handlePlayVidoePlay}
                        >
                            {icons.BsFillPlayFill}
                        </div>
                        <div className="icon-MdClosedCaption"
                            onClick={handlePlayVidoePlay}
                        >
                            {icons.MdClosedCaption}
                        </div>
                        <div className="icon-RxGear"
                            onClick={handlePlayVidoePlay}
                        >   
                                <span className='regulation-id'>{quality}</span>
                                {icons.RxGear}
                                {videoReg}
                                <div className="icon-RxGear-tooltip">Resulation</div>
                        </div>
                        <div className="icon-TbRectangle"
                            onClick={handlePlayVidoePlay}
                        >
                            {icons.TbRectangle}
                            <div className="icon-TbRectangle-tooltip">Wide view</div>
                        </div>
                        <div className="icon-FaChromecast"
                            onClick={handlePlayVidoePlay}
                        >
                            {icons.FaChromecast}

                            <div className="icon-FaChromecast-tooltip">Picture in picture</div>
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