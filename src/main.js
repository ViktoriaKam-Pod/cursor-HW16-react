
import {AiFillHeart,AiFillMessage,AiOutlineCheckCircle,AiOutlineCloudUpload,AiFillEye} from "react-icons/ai";
export function Main_Content (props){
    return(
        <div className="main-content">
            <div key={props.id} className="main-card">
                <div className="info-up">
                    <p className="name">{props.name}</p>
                    <AiOutlineCheckCircle className={"iconCheckCircle"}/>
                    <p className="nickname">{props.nickname}</p>
                    <p className="date">{props.date}</p>
                </div>
                <p className="info-text">{props.content}</p>
                <div className="main-info">
                    <img src={props.photo} alt="photo" className="main-image"></img>
                    <div className="info-down">
                        <div className="icon-info">
                            <AiFillMessage />
                            <p className="icon-info-p">482</p>
                        </div>
                        <div className="icon-info">
                            <AiFillEye />
                            <p className="icon-info-p">958</p>
                        </div>
                        <div className="icon-info">
                            <AiFillHeart />
                            <p className="icon-info-p">586</p>
                        </div>
                        
                        <AiOutlineCloudUpload className={"iconCloudUpLoad"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}