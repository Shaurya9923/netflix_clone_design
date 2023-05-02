import React from 'react';
import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Watch = () => {
    const [link,setLink] = React.useState(0);
    const getVideo = async () => {
        await fetch(`https://api.pexels.com/videos/videos/857251`,{
            headers:{
                Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH',
            },

        })
        .then((res)=>res.json()).then((data)=>{
        //  let data1 = JSON.stringify(data.video_files[0].link);   
         setLink((data.video_files[0].link));
        })
        // .then((data)=>setLink(data.video_files[0].link));
        // .then((data)=>data.video_files[0].link);
    }
    React.useEffect(() => {
        getVideo();
      }, [])
    return (
        <div className="watch">
            <div className="back">
                <Link to="/" className='linkback'>
                    <ArrowBackOutlined/>
                </Link>
                Home
            </div>
            <video classname = "video" src={link} autoPlay={true} progress controls></video>
        </div>
    );
}

export default Watch;
