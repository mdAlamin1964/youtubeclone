import React from "react"
import "./src/styles/main.css"
import Header from "./src/Header"
import { nanoid } from "nanoid"
import TopBar from "./src/TopBar"
import SideBar from "./src/SideBar"
import Videos from "./src/Videos"
import SettingsMenu from "./src/SettingsMenu"
import MobileHeader from "./src/MobileHeader"


// icons
import { BsPerson, BsFillMicFill, BsFilePlay, BsCollectionPlay, BsTrophy, BsFillVolumeUpFill, BsDot, BsGlobe2 } from "react-icons/bs"
import { IoIosSearch, IoLogoGameControllerB } from "react-icons/io"
import { HiOutlineBars3, HiLanguage } from "react-icons/hi2"
import { RxDotsVertical } from "react-icons/rx"
import { AiOutlineLeft, AiOutlineRight, AiFillFire,AiFillCheckCircle } from "react-icons/ai"
import { MdHomeFilled, MdVideoLibrary, MdOutlineHistory, MdOutlineMusicNote, MdClosedCaption,MdKeyboardArrowDown, MdOutlineDarkMode, MdClose, MdOutlineArrowBack } from "react-icons/md"
import {FaUserShield} from "react-icons/fa"
import {RxGear} from "react-icons/rx"


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
function handleMobileSearchBtn() {
    setMobileMood(false)
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
                        />
                        

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
                    />
                    <Videos
                        className={"video-area"}
                        icons = {icons}
                    />
                </div>
                
            </div>
            


        </div>
    )
}