import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

const List = () => {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const [isMoved, setIsMoved] = React.useState(false);
    const listRef = useRef();
    console.log(isMoved);
    const handleClick = (direction) => {
        setIsMoved(true);
        console.log("H" + slideNumber);
        // if(slideNumber ===0){
        //     setIsMoved(false);
        // }
        
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if(direction === 'right' && slideNumber < 4){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;            
        }

        console.log(distance);
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to Watch</span>
            <div className='wrapper'>
                <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left") } style={{display:!isMoved && "none"}}/>
                    <div className='container' ref = {listRef}>
                        <ListItem index={0}/>
                        <ListItem index={1}/>
                        <ListItem index={2}/>
                        <ListItem index={3}/>
                        <ListItem index={4}/>
                        <ListItem index={5}/>
                        <ListItem index={6}/>
                        <ListItem index={7}/>
                        <ListItem index={8}/>
                        <ListItem index={9}/>
                    </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right") }/>
            </div>

        </div>
    );
}

export default List;
