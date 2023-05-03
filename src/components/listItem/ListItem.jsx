import React from 'react';
import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [link,setLink] = React.useState(0);
    const trailer = "https://player.vimeo.com/external/543490996.hd.mp4?s=fe4d152889229f78a94fbc93fdb0e47b81f2f777&profile_id=172&oauth2_token_id=57447761";
    const getVideo = async () => {
        await fetch(`https://api.pexels.com/videos/videos/857251`,{
            headers:{
                Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH',
            },

        })
        .then((res)=>res.json()).then((data)=>{
        //  let data1 = JSON.stringify(data.video_files[0].link);   
         setLink((data.video_files[1].link));
        })
        // .then((data)=>setLink(data.video_files[0].link));
        // .then((data)=>data.video_files[0].link);
    }
    React.useEffect(() => {
        getVideo();
      }, [])
    
    return (
        <div className='listItem' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} 
        style={{left:isHovered && index * 225 -50 + index * 2.5}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQsJRH73QaONwT-8buVcyBQ7p2jMsAMA4JQ&usqp=CAU' alt='movie_series'></img>
            {isHovered && (

            <>
            <video src={link} autoPlay={true} loop></video>
            <div className='itemInfo'>
                <div className="icons">
                    <Link to='/watch' className='link'>
                        <PlayArrow className='icon linkback'/>
                    </Link>
                    <Add className='icon'/>
                    <ThumbUpAltOutlined className='icon'/>
                    <ThumbDownOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 56 min</span>
                    <span className='limit'>13+</span>
                    <span>2023</span>
                </div>
                <div className="desc">
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>

                <div className="genre">
                    Action
                </div>
                
            </div>
            </>
            )}
        </div>
    );
}

export default ListItem;
