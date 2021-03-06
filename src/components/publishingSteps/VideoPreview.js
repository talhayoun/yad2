import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const VideoPreview = (props) => {

    const [video, setVideo] = useState("");
    // const [videoPreview, setVideoPreview] = useState("");

    useEffect(() => {
        if (video.length > 0) {
            let [file] = video;
            file['id'] = nanoid();
            if (props.setVideo) {
                props.setVideo(video);
            }
            // setVideoPreview(URL.createObjectURL(file));
        }
    }, [video])

    const deleteImage = () => {
        setVideo("")
        props.setVideo("");
        // setVideoPreview("");
    }


    return (
        <div className="stepfive-video">
            <div className="stepfive-video-container">
                <div></div>
                <p>העלאת סרטון</p>
            </div>
            <input type="file" onChange={(e) => setVideo(e.target.files)} accept="video/*" />
            {video &&
                <div className="stepfive-video-img-container">
                    {/* <div>
                        <img src={videoPreview} alt={""} />
                    </div> */}
                    <div className="stepfive-video-deleteContainer">
                        <div className="stepfive-video-deleteContainer-first">
                            <div onClick={deleteImage}></div>
                        </div>
                        <div className="stepfive-video-deleteContainer-second">
                            <div></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default VideoPreview;