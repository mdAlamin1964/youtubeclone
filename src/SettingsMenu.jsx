import React from "react"
export default function SettingsMenu({icons}) {
    return (
        <div className="settings-saction">
                <div className="settings-menu" >
                    <div className="settings-menu-item your-data">
                        {icons.BsPerson} <span className="item-name">Your data in YouTube</span> 
                    </div>
                    <div className="settings-menu-item">
                        {icons.MdOutlineDarkMode} 
                        <span className="item-name">Appearance: <span className="setting-menu-appearance">Device theme</span></span> 
                    </div>
                    <div className="settings-menu-item">
                        {icons.HiLanguage} 
                        <span className="item-name">Language: <span className="setting-menu-language">English</span></span> 
                    </div>
                    <div className="settings-menu-item">
                        {icons.FaUserShield} 
                        <span className="item-name">Restricted Mode: <span className="setting-menu-restricted">Off</span></span> 
                    </div>
                    <div className="settings-menu-item">
                        {icons.BsGlobe2} 
                        <span className="item-name">Location: <span className="setting-menu-location">Bangladesh</span></span> 
                    </div>
                    <div className="settings-menu-item settings-settings">
                        {icons.RxGear} 
                        <span className="item-name">Settings</span> 
                    </div>
                </div>
        </div>
    )
}