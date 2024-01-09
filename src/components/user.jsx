/*styles*/
import "./user.scss";
/*images*/
import user_picture from "../assets/images/image-avatar.webp";
const User = ({user_name}) => {
    return(
        <div className="user">
            <img src={user_picture}/>
            <strong>{user_name}</strong>
        </div>
    )
}

export default User;