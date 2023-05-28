import React from "react"
export default function TopBar({icons, className,topBarMenuItems, leftArroFunc, RightArroFunc}) {
    return (
        <div className={className}>
            <div className="left-arrow arrow item"
                onClick={leftArroFunc}
            >
                {icons.AiOutlineLeft}
            </div>
            <div className="filter-item item active">All</div>
            {topBarMenuItems}
            <div className="right-arrow arrow item"
                onClick={RightArroFunc}
            >
                {icons.AiOutlineRight}
            </div>
        </div>
    )
}