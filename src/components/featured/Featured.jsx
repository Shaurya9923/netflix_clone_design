import React from 'react';
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className = "category">
                    <span>{type === 'movie' ? "Movies" : "Series"}</span>
                    <select name='genre' id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>

                    </select>
                </div>
            )}
            <img src="https://media.distractify.com/brand-img/9uX9MQ6ZV/0x0/cobra-kai-season-6-release-date-1662990306562.jpg" alt=""/>
            <div className="info">
                <img src="https://goodmenproject.com/wp-content/uploads/2022/01/cobra-kai-s3-logo.png" alt="" />
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum quasi ex quos exercitationem tempore neque sunt commodi! Cumque optio, magni voluptatem doloribus nihil voluptatum molestias iusto expedita tenetur eaque.</span>
                <div className="buttons">
                    <button className="play">
                        <Link to='/watch' className='linkback'>
                            <PlayArrow/>
                            <span>Play</span>
                        </Link>
                    </button>
                    <button className="more">
                        <InfoOutlined/> 
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
