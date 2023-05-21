import React from "react"
export default function TopBar({icons, className}) {
    return (
        <div className={className}>
            <div className="left-arrow arrow item">
                {icons.AiOutlineLeft}
            </div>
            <div className="filter-item item active">All</div>
            <div className="filter-item item">Live</div>
            <div className="filter-item item">Music</div>
            <div className="filter-item item">All</div>
            <div className="filter-item item">All</div>
            <div className="filter-item item">All</div>
            <div className="filter-item item">All</div>
            <div className="filter-item item">All</div>
            <div className="filter-item item">All</div>

            <div className="right-arrow arrow item">
                {icons.AiOutlineRight}
            </div>
        </div>
    )
}