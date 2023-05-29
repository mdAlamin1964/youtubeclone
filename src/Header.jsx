import React from "react"
export default function Header({icons, handleBurcumb, inputBarEvent, inputBarOutEvent, setttingMenuMood, handleSettingsClick, settingsMoodState, handleBackClick, handleSearch, handleInputSearchBtn, handlelogoClick, location}) {
  
    return(
    
        <div className="header">

            <div className="header-logo-bar">
                <div className="burcumb-icon" onClick={handleBurcumb}>
                    {icons.HiOutlineBars3}
                </div>
                <div className="logo" 
                    onClick={handlelogoClick}
                >
                    <img className="logo-img" src="./assets/logo-dark.png" alt="Youtube Home" />
                    <div className="country">{location}</div>
                    <div className="logo-tooltip">YouTube Home</div>
                </div>
            </div>


            <div className="header-search">
                <div className="search">
                    {/* Back icons */}
                    <div className="back-icon" onClick={handleBackClick}>
                        {icons.MdOutlineArrowBack}
                    </div>
                    <div className="search-input">
                        <div className="search-input-icon">
                            {icons.IoIosSearch}
                        </div>
                        <input type="text" className="input-bar" id="seach-input-bar" placeholder="Search"
                        onFocus={inputBarEvent}
                        onBlur={inputBarOutEvent}
                        //onChange={handleSearch}
                        
                        />
                    </div>
                    <button className="search-btn"
                        onClick={handleInputSearchBtn}
                    >
                        {icons.IoIosSearch}
                        <div className="search-btn-tooltip">Search</div>
                    </button>
                </div>
                <div className="voice-search">
                    <button className="voice">
                        {icons.BsFillMicFill}
                        <div className="voice-search-tooltip">Search with your voice</div>
                    </button>
                </div>
            </div>


            <div className="header-singup">
                <button className="more">
                    <div className="icon" onClick={handleSettingsClick}>
                        {
                            !settingsMoodState?
                                icons.RxDotsVertical
                            :
                                icons.MdClose
                        }
                    </div>
                    <div className="header-singup-more-tooltip">Settings</div>
                    {setttingMenuMood}
                </button>
                
                <div className="signup">
                    {icons.BsPerson} Sign in
                </div>
            </div>

        </div>
    )
}