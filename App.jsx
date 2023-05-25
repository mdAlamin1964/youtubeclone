import React from "react"
import "./src/styles/main.css"
import Header from "./src/Header"
import { nanoid } from "nanoid"
import TopBar from "./src/TopBar"
import SideBar from "./src/SideBar"
import Videos from "./src/Videos"
import SettingsMenu from "./src/SettingsMenu"
import MobileHeader from "./src/MobileHeader"
import Data from "./src/Data"
import { createClient } from "pexels"
import VideoData from "./src/VideoData"
import VideoPlay from "./src/VideoPlay"
import ReactPlayer from "react-player"

// icons
import { BsPerson, BsFillMicFill, BsFilePlay, BsCollectionPlay, BsTrophy, BsFillVolumeUpFill, BsDot, BsGlobe2, BsFillPlayFill, BsThreeDots} from "react-icons/bs"
import { IoIosSearch, IoLogoGameControllerB } from "react-icons/io"
import { HiOutlineBars3, HiLanguage } from "react-icons/hi2"
import { RxDotsVertical } from "react-icons/rx"
import { AiOutlineLeft, AiOutlineRight, AiFillFire,AiFillCheckCircle, AiFillExclamationCircle, AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { MdHomeFilled, MdVideoLibrary, MdOutlineHistory, MdOutlineMusicNote, MdClosedCaption,MdKeyboardArrowDown, MdOutlineDarkMode, MdClose, MdOutlineArrowBack, MdSkipNext,MdFullscreen, MdPlaylistAdd } from "react-icons/md"
import {FaUserShield, FaChromecast} from "react-icons/fa"
import {RxGear} from "react-icons/rx"
import {TbBoxAlignBottomRight, TbRectangle, TbShare3} from "react-icons/tb"


export default function App() {
    // icons pack
    const icons = {
        BsPerson: <BsPerson className="icon"/>,  
        BsFillMicFill: <BsFillMicFill className="icon"/>, 
        BsFilePlay: <BsFilePlay className="icon"/>, 
        BsCollectionPlay: <BsCollectionPlay className="icon"/>, 
        BsTrophy: <BsTrophy className="icon"/>, 
        IoIosSearch: <IoIosSearch className="icon"/>, 
        IoLogoGameControllerB: <IoLogoGameControllerB className="icon"/>, HiOutlineBars3: <HiOutlineBars3 className="icon"/> ,
        RxDotsVertical: <RxDotsVertical className="icon"/>, 
        AiOutlineLeft: <AiOutlineLeft className="icon"/>, 
        AiOutlineRight: <AiOutlineRight className="icon"/>, 
        AiFillFire: <AiFillFire className="icon"/>, 
        MdHomeFilled: <MdHomeFilled className="icon"/>, 
        MdVideoLibrary: <MdVideoLibrary className="icon"/>, 
        MdOutlineHistory: <MdOutlineHistory className="icon"/>, 
        MdOutlineMusicNote : <MdOutlineMusicNote className="icon"/>,
        MdOutlineHistory: <MdOutlineHistory className="icon"/>, 
        BsFillVolumeUpFill : <BsFillVolumeUpFill className="icon"/>,
        MdClosedCaption : <MdClosedCaption className="icon"/>,
        AiFillCheckCircle : <AiFillCheckCircle className="icon"/>,
        BsDot : <BsDot className="icon"/>,
        MdKeyboardArrowDown : <MdKeyboardArrowDown className="icon"/>,
        MdOutlineDarkMode : <MdOutlineDarkMode className="icon"/>,
        FaUserShield : <FaUserShield className="icon"/>,
        HiLanguage : <HiLanguage className="icon"/>,
        BsGlobe2 : <BsGlobe2 className="icon"/>,
        RxGear : <RxGear className="icon"/>,
        MdClose : <MdClose className="icon"/>,
        MdOutlineArrowBack : <MdOutlineArrowBack className="icon"/>,
        AiFillExclamationCircle : <AiFillExclamationCircle className="icon"/>,
        BsFillPlayFill : <BsFillPlayFill className="icon"/>,
        MdSkipNext : <MdSkipNext className="icon"/>,
        TbBoxAlignBottomRight : <TbBoxAlignBottomRight className="icon"/>,
        TbRectangle : <TbRectangle className="icon"/>,
        FaChromecast : <FaChromecast className="icon"/>,
        MdFullscreen : <MdFullscreen className="icon"/>,
        AiOutlineLike : <AiOutlineLike className="icon"/>,
        AiOutlineDislike : <AiOutlineDislike className="icon"/>,
        TbShare3 : <TbShare3 className="icon"/>,
        MdPlaylistAdd : <MdPlaylistAdd className="icon"/>,
        BsThreeDots : <BsThreeDots className="icon"/>,
    }

    // header burcumb for side bar view
    function handeBurcumb(){
        let item= document.querySelector(".side-bar-fixed")
        let slidebar = document.querySelector(".slide")
        let mainSaction = document.querySelector(".main-saction")
        let container = document.querySelector(".container")
        if(!item.className.includes("mini-side-bar")){
            item.classList.add("mini-side-bar")
            mainSaction.classList.add("main-saction-mini-side-bar")
        } else {
            item.classList.remove("mini-side-bar")
            mainSaction.classList.remove("main-saction-mini-side-bar")
        }


        if(item.className.includes("fixed-bar")){
            if(!item.className.includes("slide-bar-show")){
                item.classList.add("slide-bar-show")
                slidebar.style= "display:block"
                container.classList.add("container-lock")
            } else {
                item.classList.remove("slide-bar-show")
                slidebar.style= "display:none"
                container.classList.remove("container-lock")
            }

        }
    } 
    




    // adding class to side bar
    const [sideBarClass, setSideBarClass] = React.useState(defaultSideBarClass)
    
    function defaultSideBarClass() {
        return window.innerWidth <= 1300? "fixed-bar" : ""
    }

    function addClassWhileResize() {
        if (window.innerWidth <= 1300) {
            setSideBarClass("fixed-bar")
        } else {
            setSideBarClass("")
        }
    }
    addEventListener('resize', addClassWhileResize)




    // sliderbar diable
    function goDisplayNone(){
        let item = document.querySelector(".side-bar-fixed")
        let slidebar = document.querySelector(".slide")
        let container = document.querySelector(".container")
        item.classList.remove("slide-bar-show")
        slidebar.style= "display:none"
        container.classList.remove("container-lock")
    }

   // input bar icon
   function inputBarTriger() {
        let item = document.querySelector(".search-input-icon")
        item.style = "opacity: 1"
        
        let inputBar = document.querySelector(".search .input-bar")
        inputBar.style = "padding-left: 40px"
   }

   function inputBarOutTriger() {
        let item = document.querySelector(".search-input-icon")
        item.style = "opacity: 0"
        
        let inputBar = document.querySelector(".search .input-bar")
        inputBar.style = "padding-left: 15px"
   }


   // settings menubar
   const [settingsMood, setSettingsMood] = React.useState(false)

   function handleSettingsClick(){
        setSettingsMood(!settingsMood)
   }


   // mobile menu moode
   const [mobileMood, setMobileMood] = React.useState(false)
   function setmobile() {
        if(window.innerWidth < 780){
            setMobileMood(true)
        } else {
            setMobileMood(false)
        }
   }

   addEventListener('resize', setmobile)





//    Back click function
    function handleBackClick() {
        setMobileMood(true)
    }

    // Mobiel search btn
    function handleMobileSearchBtn() {
        setMobileMood(false)
    }



   // Video search funtion
   const [searchVideo, setSearchVideo] = React.useState("nature")
    function handleSearchInput(event) {
        setSearchVideo(event.target.value)
    }



// Api data images text etc
    const[videos, setVideos] = React.useState(VideoData.videos)
    React.useEffect(() => {
        const client = createClient("aV9niIcdta77XpanS47B88MjS9t8DxbsmCmBpQxu6WbS3kmQBH6Ikzj8")
        const query = searchVideo
        client.videos.search({query, per_page: 16}).then(videos => {
            videos.videos.length > 0? 
            setVideos(videos.videos) : ""
        })
    },[searchVideo])

    //Topbar menus
    let topBarMenuItems = videos.slice(0,8).map(n => {
        let category = n.user.name? n.user.name : "Design"
        return (
        <div className="filter-item item" key={nanoid()}>{category}</div>
        )
    })
    // slicing topmenu options to mobilemood
    topBarMenuItems = mobileMood? topBarMenuItems.slice(0,4) : topBarMenuItems

         // Generate Title
         function generateTitle(str, limitLenth){
            str = str.split("/")
            let newStr = str[4].split("-").slice(0,-1)
            let result = ""
            if(newStr.length > limitLenth ) {
                for (let x = 0; x < limitLenth ; x++){
                    result += newStr[x] + " "
                }
                result += " ..."
            } else {
                result = newStr.join(" ")
            }
            return result
        }


        // funciton view count
        function viewCount(views) {
            if (views > 1000 && views < 1000000) {
                return (views.toString().slice(0,-3) + "K")
            } else if(views > 1000000) {
                return (views.toString().slice(0,-6) + "M")
            } else {
                return views
            }
            
        }

        // when uploaded
        function uploadTime(date) {
            let dateArr = date.split("T")
            let [year, month, days] = dateArr[0].split("-")
            let currentDate = new Date()

            if (currentDate.getFullYear() > Number(year)) {
                return (currentDate.getFullYear() - Number(year)).toString() + " years ago"
            } else if(currentDate.getMonth() > Number(month)) {
                return (currentDate.getMonth() - Number(month)).toString() + " months ago"
            } else{
                return (currentDate.getDate() - Number(days)).toString() + " days ago"
            }
        }



    // playvideo fucntion
    const [playVideo, setPlayVideo] = React.useState({})
    function handlePlayVideo(videoThubmnail, runTime, channelImage, videoTitle, channelName, views, upload, url, show) {
        setPlayVideo({
            videoThubmnail: videoThubmnail,
            runTime: runTime, 
            channelImage: channelImage, 
            videoTitle: videoTitle,
            channelName: channelName, 
            views: views,
            upload: upload,
            url: url,
            show: show,
        })
    }

    // playvidoe backbtn
    function handleBackbtnPlayVideo() {
        setPlayVideo({
            show: false
        })
    }

    console.log(playVideo)

    //  vidos to the main page
    const videoItems = videos.slice(0,8).map(n => {
        let videoThubmnail = n.image
        let runTime = "0:"+ n.duration
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 5)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"
        return (
            <div className="video-items items" key={nanoid()}>
                <div className="video-thumbnail">
                    <img src={videoThubmnail} alt="" 
                        onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, videoTitle, channelName, views, upload, n.video_files[2].link, true)}
                    />
                    <span className="video-run-time">{runTime}</span>
                    <div className="video-top-left">
                        {icons.BsFillVolumeUpFill}| 
                        {icons.MdClosedCaption}
                    </div>
                </div>
                <div className="video-details">
                    <div className="video-channel-thumb">
                        <img src={channelImage} alt="" />
                    </div>
                    <div className="video-datails-text">
                        <div className="title">
                            {videoTitle}
                        </div>
                        <div className="channel">
                            {channelName} {icons.AiFillCheckCircle}
                        </div>
                        <div className="time-views">
                            <div className="view">{views} views</div> {icons.BsDot} <span className="time">{upload}</span>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    })



    // shorts api call
    const shortsdata = videos.slice(8).map(n => {
        // for play video
        let videoThubmnail = n.image
        let runTime = "0:"+ n.duration
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 2)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"
        return (
            <div className="shorts-item" key={nanoid()}
                onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, videoTitle, channelName, views, upload, n.video_files[2].link, true)}
            >
                <div className="shorts-thumb">
                    <img src={videoThubmnail} alt="" />
                </div>
                <div className="shorts-details">
                    <h3 className="shorts-title">
                        {videoTitle}
                        {icons.RxDotsVertical}
                    </h3>
                    <div className="shorts-views">
                        <span className="view-count">{views}</span> Views
                    </div>
                </div>
            </div>
        )
    })

    const relatedVideoItems = videos.map(n => {
        let videoThubmnail = n.image
        let runTime = "0:"+ n.duration
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 5)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"

        return (
            <div className="playarea-related-item"
                onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, videoTitle, channelName, views, upload, n.video_files[2].link, true)}
            >
                <div className="related-video-thumb">
                    <img src={channelImage} alt="" />
                    <span className="related-video-run-time">{runTime}</span>
                </div>
                <div className="realted-video-details">
                    <div className="related-video-title">
                        {videoTitle}
                    </div>
                    <div className="related-video-channel">
                        {channelName}
                    </div>
                    <div className="related-video-views">
                        {views} views
                    </div>
                </div>
            </div>
    )
    })





    console.log(videos)
    return(
        <div className="container">

           <div className="main-header">
                {
                    mobileMood?
                        <MobileHeader 
                            icons={icons}
                            handleBurcumb={handeBurcumb}
                            inputBarEvent = {inputBarTriger}
                            inputBarOutEvent = {inputBarOutTriger}
                            setttingMenuMood = {settingsMood && <SettingsMenu icons={icons}/>}
                            settingsMoodState= {settingsMood}
                            handleSettingsClick = {handleSettingsClick}
                            handleMobileSearchBtn= {handleMobileSearchBtn}
                            />
                    :
                        <Header
                            icons={icons}
                            handleBurcumb={handeBurcumb}
                            inputBarEvent = {inputBarTriger}
                            inputBarOutEvent = {inputBarOutTriger}
                            setttingMenuMood = {settingsMood && <SettingsMenu icons={icons}/>}
                            settingsMoodState= {settingsMood}
                            handleSettingsClick = {handleSettingsClick}
                            handleBackClick = {handleBackClick}
                            handleSearch = {(event) => handleSearchInput(event)}

                            handleInputSearchBtn = {handleBackbtnPlayVideo}
                        />
                        

                }
           </div>


            <div className="video-main">
                {playVideo.show &&
                    <div className="playvideo-main">
                        <VideoPlay 
                            icons={icons}
                            videoUrl={playVideo.url}
                            handleBackbtnPlayVideo={handleBackbtnPlayVideo}
                            channelImage={playVideo.channelImage}
                            videoTitle={playVideo.videoTitle}
                            channelName={playVideo.channelName}
                            views={playVideo.views}
                            upload={playVideo.upload}

                            sidebarVideo={videoItems}
                            relatedVideoItems={relatedVideoItems}
                            
                        />
                    </div>
                }
            </div>
           

            <div className="slide">
                <SideBar
                    icons={icons}
                    className= "slide-sidebar"
                />
                <div className="rest-area"  onClick={goDisplayNone}>
                </div>
            </div>



            <div className="main-saction">
                <div className="main-left">
                    <SideBar 
                        className={`side-bar side-bar-fixed ${sideBarClass}`}
                        icons={icons}
                    />
                </div>
                <div className="main-right">
                    <TopBar 
                        className="top-bar"
                        icons={icons}
                        topBarMenuItems={topBarMenuItems}
                    />
                    <Videos
                        className={"video-area"}
                        icons = {icons}
                        videoItems={videoItems}
                        shortsItem = {shortsdata}
                    />
                </div>
                
            </div>
            
        </div>
    )
}