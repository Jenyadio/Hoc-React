import {v4 as uuidV4} from "uuid";
import React from "react";
import Video from "./video";

function VideoList(props) {
    return props.list.map(item =>
        <div key={uuidV4()} className="video">
            <Video url={item.url} date={item.date}/>
        </div>
    );
}

export default VideoList;