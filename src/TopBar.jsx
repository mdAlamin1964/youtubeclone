import React from "react"
export default function TopBar({icons, className,topBarMenuItems}) {
    return (
        <div className={className}>
            <div className="left-arrow arrow item">
                {icons.AiOutlineLeft}
            </div>
            <div className="filter-item item active">All</div>
            {topBarMenuItems}
            <div className="right-arrow arrow item">
                {icons.AiOutlineRight}
            </div>
        </div>
    )
}