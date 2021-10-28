import React from 'react';
import img from './image.jfif';
import img2 from './image2.jfif';
import { FaRegHeart} from 'react-icons/fa'
import { FaRegEdit} from 'react-icons/fa'
import { FaRegTrashAlt} from 'react-icons/fa'

function Card(props) {
   const iconStyle = {
    marginRight: "40px"
   }
    
   var arr =[];
   var index = 0;
   arr[0] = img;
   arr[1] = img2;
   index= Math.floor(Math.random() * arr.length);
    return (
        <>
            <div>
            <img src={arr[index]} alt="UserImage" style={{width: "390px", height: "260px"}}/>
            <div id="name" style={{fontWeight: "bold", fontSize: "20px"}}>{props.name}</div>
            <div style={{color:"grey", fontSize: "16px"}}>{props.email}</div>
            <div style={{color:"grey"}}>{props.phone}</div>
            <div style={{color:"grey", marginBottom:"5px"}}>{props.web}</div>
            <div>
                <span style={iconStyle}><FaRegHeart/></span>
                <span style={iconStyle}><FaRegEdit/></span>
                <span><FaRegTrashAlt/></span>
            </div>
            <br/><br/>
            </div>
        </>
    );
}

export default Card;