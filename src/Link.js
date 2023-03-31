import React from "react";

const Link = ({mouseOverEvent, mouseOutEvent, src}) => {
    return (

        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={src} />
    )
}

export default Link;