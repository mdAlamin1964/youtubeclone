import React from "react"
import "./src/styles/main.css"
import Header from "./src/Header"
import { nanoid } from "nanoid"
import TopBar from "./src/TopBar"
import SideBar from "./src/SideBar"
import Videos from "./src/Videos"
import SettingsMenu from "./src/SettingsMenu"
import MobileHeader from "./src/MobileHeader"
import { createClient } from "pexels"
import VideoData from "./src/VideoData"
import VideoPlay from "./src/VideoPlay"
import VideoPlayReg from "./src/VideoPlayRez"


// icons
import { BsPerson, BsFillMicFill, BsFilePlay, BsCollectionPlay, BsTrophy, BsFillVolumeUpFill, BsDot, BsGlobe2, BsFillPlayFill, BsThreeDots, BsPauseFill} from "react-icons/bs"
import { IoIosSearch, IoLogoGameControllerB } from "react-icons/io"
import { HiOutlineBars3, HiLanguage } from "react-icons/hi2"
import { RxDotsVertical } from "react-icons/rx"
import { AiOutlineLeft, AiOutlineRight, AiFillFire,AiFillCheckCircle, AiFillExclamationCircle, AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { MdHomeFilled, MdVideoLibrary, MdOutlineHistory, MdOutlineMusicNote, MdClosedCaption,MdKeyboardArrowDown, MdOutlineDarkMode, MdClose, MdOutlineArrowBack, MdSkipNext,MdFullscreen, MdPlaylistAdd } from "react-icons/md"
import {FaUserShield, FaChromecast} from "react-icons/fa"
import {RxGear} from "react-icons/rx"
import {TbBoxAlignBottomRight, TbRectangle, TbShare3, TbVolumeOff} from "react-icons/tb"


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
        TbVolumeOff : <TbVolumeOff className="icon"/>,
        BsPauseFill : <BsPauseFill className="icon"/>,
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
   const [searchVideo, setSearchVideo] = React.useState("hill")
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
    const[topBarCount, setTopBarCount] = React.useState({
        start: 0,
        end: 8
    })

    let videoCataegory = videos.map(n => n.user.name? n.user.name.split(" ")[0] : "")

    let newVideoCategory = [] 
    
    videoCataegory.forEach(n => {
        if(!newVideoCategory.includes(n)) {
            newVideoCategory.push(n)
        }
    }) 
    
    
    let topBarMenuItems = newVideoCategory.slice(topBarCount.start, topBarCount.end).map(n => {

        let category = n? n : "Design"

        return (
        <div className="filter-item item" key={nanoid()}>{category}</div>
        )

    })

    // function for move category left arrow
    function moveTopCategoryLeftArow() {
        if(topBarCount.end < newVideoCategory.length) {
            setTopBarCount(prevBarCount => ({
                ...prevBarCount,
                start:prevBarCount.start + 1,
                end: prevBarCount.end + 1
            }))
        }
    }

    // function for move category left arrow
    function moveTopCategoryRightArow() {
        if(topBarCount.start >= 1 ) {
            setTopBarCount(prevBarCount => ({
                ...prevBarCount,
                start:prevBarCount.start - 1,
                end: prevBarCount.end - 1
            }))
        }
    }


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

    function handlePlayVideo(videoThubmnail, runTime, channelImage, videoTitle, channelName, views, upload, url, show, resulation, index) {
        setPlayVideo({
            videoThubmnail: videoThubmnail,
            runTime: runTime, 
            channelImage: channelImage, 
            videoTitle: videoTitle,
            channelName: channelName, 
            views: views,
            upload: upload,
            url: url,
            resulation: resulation,
            quality: "hd",
            index: index,
            show: show,
        })

        setSideBarClass("fixed-bar")
    }

    console.log(playVideo.resulation)

    // playvidoe backbtn
    function handleBackbtnPlayVideo() {
        setPlayVideo({
            show: false
        })

        setSideBarClass("")
        setSearchVideo("feature")
    }


    // playvidoe backbtn
    function handlehHeaderSearch() {
        setPlayVideo({
            show: false
        })

        setSideBarClass("")

        //geitting input value
        let headerInput =  document.querySelector(".input-bar").value
        setSearchVideo(headerInput)
    }
    
    // formate durain time
    function fixDurationTime(time) {
       return time.toString().length > 2? time.toString() : "0:" + time.toString()
    }

    //  vidos to the main page
    const videoItems = videos.slice(0,8).map((n, i) => {
        let videoThubmnail = n.image
        let runTime =  fixDurationTime(n.duration)
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 5)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"
        let resulation = n.video_files
        let index = i
        return (
            <div className="video-items items" key={nanoid()}>
                <div className="video-thumbnail">
                    <img src={videoThubmnail} alt="" 
                        onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, generateTitle(n.url, 10), channelName, views, upload, n.video_files[0].link, true, resulation, index)}
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
    const shortsdata = videos.slice(8).map((n, i) => {
        let videoThubmnail = n.image
        let runTime =  fixDurationTime(n.duration)
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 5)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"
        let resulation = n.video_files
        let index = i

        return (
            <div className="shorts-item" key={nanoid()}
                onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, generateTitle(n.url, 10), channelName, views, upload, n.video_files[2].link, true, resulation, index)}
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

    const relatedVideoItems = videos.map((n, i) => {
        let videoThubmnail = n.image
        let runTime =  fixDurationTime(n.duration)
        let channelImage = n.video_pictures[10].picture
        let videoTitle = generateTitle(n.url, 5)
        let channelName = n.user.name
        let views = viewCount(n.height)
        let upload =  "1 day ago"
        let resulation = n.video_files
        let index = i

        return (
            <div className="playarea-related-item"
                key={nanoid()}
                onClick={()=> handlePlayVideo(videoThubmnail, runTime, channelImage, generateTitle(n.url, 10), channelName, views, upload, n.video_files[2].link, true, resulation, index)}
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


    // video resolution setting
    const [videoReg, setVideoReg] = React.useState(false)







    // fucntion playvideo control buttons
    const [videoControls, setVideoControls] = React.useState({
            playpause: true,
            handleNext: false,
            handleMute: true,
            autoPlay: false,
            caption: false,
            settings:false,
            pictuerInPicture: false,
            wideScreen:false,
            cast:false,
            fullScreen: false,
            controls: false,
        })

        // play button
    function handlePlayVidoePlay(event){
        let currentItem = event.currentTarget.className

        // playPause handleing
        if (currentItem == "icon-BsFillPlayFill" || currentItem ==  "playarea-video-box") {
            setVideoControls(prevControls => (
                {
                    ...prevControls,
                    playpause: !prevControls.playpause,
                } 
            ))
        }


        //Mute handeling
        if(currentItem == "icon-BsFillVolumeUpFill") {
            setVideoControls(prevControls => ({
                ...prevControls,
                handleMute: !prevControls.handleMute
            }))
        }

        // picture in picture mode setup
        if(currentItem == "icon-TbBoxAlignBottomRight"){
            setVideoControls(prevControls => ({
                ...prevControls,
                pictuerInPicture: !prevControls.pictuerInPicture
            }))
        }

        // Fullscreen request
        if (currentItem == "icon-BiFullscreen"){
            let elem = document.querySelector(".video-play-box")
            elem.requestFullscreen()

        }


        //wide video
        if (currentItem == "icon-TbRectangle") {
            let playarea = document.querySelector(".playarea")
            let playAreaLeft =  document.querySelector(".playarea-left")

            if(!playarea.className.includes("wide-video")) {
                playarea.classList.add("wide-video")
                playAreaLeft.classList.add("go-none")
            } else {
                playarea.classList.remove("wide-video")
                playAreaLeft.classList.remove("go-none")
            }

        }


        if (currentItem == "icon-RxGear") {
            setVideoReg(!videoReg)
        }
    } 


    //resulation fix function help
    function fixResulation(videoId, quality) {
        setPlayVideo(prevPlayVideo=> ({
            ...prevPlayVideo,
            url: prevPlayVideo.resulation[videoId].link,
            quality: quality
        }))
    }


    // video regClickFunction
    function regFunc(event){
        let currentItem = event.target.className
        console.log(playVideo.resulation.length, "resulation")
        if(currentItem.includes("1080p")){
            fixResulation(2, "fhd")
        }

        if(currentItem.includes("720p") && playVideo.resulation.length > 3) {
            fixResulation(3, "hd")
        }

        if(currentItem.includes("480p") && playVideo.resulation.length > 4) {
            fixResulation(4, "sd")
        }

        if(currentItem.includes("144p")) {
            fixResulation(1, "lo")
        }
    }


    // next video play
    function playNextVideo(){

        if(playVideo.index < videos.length) {
            let currentIndex = playVideo.index + 1
            let n = videos[currentIndex]


            let videoThubmnail = n.image
            let runTime =  fixDurationTime(n.duration)
            let channelImage = n.video_pictures[10].picture
            let videoTitle = generateTitle(n.url, 5)
            let channelName = n.user.name
            let views = viewCount(n.height)
            let upload =  "1 day ago"
            let resulation = n.video_files
            let newUrl =  n.video_files[3].link

            setPlayVideo({
                videoThubmnail: videoThubmnail,
                runTime: runTime, 
                channelImage: channelImage, 
                videoTitle: videoTitle,
                channelName: channelName, 
                views: views,
                upload: upload,
                url: newUrl,
                resulation: resulation,
                quality: "hd",
                index: currentIndex,
                show: true,
            })


        }
        
    }




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
                            handlelogoClick = {handleBackbtnPlayVideo}

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

                            handleInputSearchBtn = {handlehHeaderSearch}
                            handlelogoClick = {handleBackbtnPlayVideo}
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
                            runTime ={playVideo.runTime}
                            sidebarVideo={videoItems}
                            relatedVideoItems={relatedVideoItems}
                            videoReg={videoReg && <VideoPlayReg regFunc={regFunc} />}
                            quality={playVideo.quality}
                            
                            // play video controls
                            handlePlayVidoePlay={(event)=> handlePlayVidoePlay(event)}
                            handlePlay={videoControls.playpause}
                            handleMute= {videoControls.handleMute}
                            handlePip= {videoControls.pictuerInPicture}
                            controls= {videoControls.controls}
                            playNextVideo = {playNextVideo}
                        />
                    </div>
                }
            </div>
           
                <div className="slide">
                    <SideBar
                        icons={icons}
                        className= "slide-sidebar"
                        handlelogoClick = {handleBackbtnPlayVideo}
                    />
                    <div className="rest-area"  onClick={goDisplayNone}>
                    </div>
                </div>



                
                    <div className="main-saction">
                            <div className="main-left">
                                <SideBar 
                                    className={`side-bar side-bar-fixed ${sideBarClass}`}
                                    icons={icons}
                                    handlelogoClick = {handleBackbtnPlayVideo}
                                />
                            </div>
                            {!playVideo.show &&
                                <div className="main-right">
                                    <TopBar 
                                        className="top-bar"
                                        icons={icons}
                                        topBarMenuItems={topBarMenuItems}
                                        leftArroFunc= {moveTopCategoryLeftArow}
                                        RightArroFunc= {moveTopCategoryRightArow}
                                    />
                                    <Videos
                                        className={"video-area"}
                                        icons = {icons}
                                        videoItems={videoItems}
                                        shortsItem = {shortsdata}
                                    />
                                </div>
                                }
                    </div>
        </div>
    )
}