import React from 'react'
export default function MobileHeader({icons, handleBurcumb, setttingMenuMood, handleSettingsClick, settingsMoodState, handleMobileSearchBtn, handlelogoClick, location}) {
    return (
        <div className="mobile-header">
            <div className="mobile-left">
                <div className="mobile-logo-bar">
                    <div className="mobile-burcumb-icon" onClick={handleBurcumb}>
                        {icons.HiOutlineBars3}
                    </div>
                    <div className="mobile-logo"
                        onClick={handlelogoClick}
                    >
                        <img className="mobile-logo-img" src="./assets/logo-dark.png" alt="Youtube Home" />
                        <div className="mobile-country">{location}</div>
                        <div className="logo-tooltip">YouTube Home</div>
                    </div>
                </div>
            </div>
            <div className="mobile-right">
                    <button className="search-btn">
                        <div className="icon" onClick={handleMobileSearchBtn}>
                            {icons.IoIosSearch}
                        </div>
                        <div className="search-btn-tooltip">Search</div>
                    </button>
                    <button className="voice">
                        {icons.BsFillMicFill}
                        <div className="voice-search-tooltip">Search with your voice</div>
                    </button>
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