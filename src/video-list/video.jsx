import React from "react";
import DateTimePretty from "./date-time-pretty";
import {v4 as uuidV4} from "uuid";

function Video(props) {
    return (
        <>
            <iframe title={uuidV4()} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
            <DateTimePretty date={props.date}/>
        </>
    )
}

export default Video;