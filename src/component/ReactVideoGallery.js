import React, {useState} from 'react';

// video player
import { DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'


//media file
import img1 from '../videos/video1.jpg';
import video1 from '../videos/video1.mp4';
import img2 from '../videos/video2.jpg';
import video2 from '../videos/video2.mp4';
import img3 from '../videos/video3.jpg';
import video3 from '../videos/video3.mp4';

const ReactVideoGallery = () => {

    const [model, setModel] = useState(false);

    let data = [
        {
            id: 1,
            poster: img1,
            videoUri: video1,
        },
        {
            id: 2,
            poster: img2,
            videoUri: video2,
        },
        {
            id: 2,
            poster: img3,
            videoUri: video3,
        },
    ]
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Video Gallery</h1>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="video" key={index}>
                            <div className="video-container">
                                <Video
                                    style={{width: '100%'}}
                                    autoPlay={model}
                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster={item.poster}
                                >
                                    <source src={item.videoUri} type="video/webm"/>
                                </Video>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ReactVideoGallery;