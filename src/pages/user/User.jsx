import { Link } from "react-router-dom";
import "./user.css";
import {CalendarToday, Email, LocationSearching, Person, PhoneAndroid} from '@mui/icons-material';

const User = () => {

  return (
    <div className="user">
      <div className="createUser">
      <h1 className="userTitle">Edit User</h1>
      <Link to="/new-user">
      <button className="createButton">Create</button>
      </Link>
      </div> 
        <div className="userInfoWrapper">
            <div className="userInfo">
                <div className="userInfoDetail">
                    <img className="userImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" />
                    <span className="userName">Anna Becker</span>
                </div>
                <div className="accountDetails">
                    <h3 className="accountDetailsTitle">Account Details</h3>
                    <ul className="detailList">
                        <li className="detailListItem">
                          <Person className="userIcon" />
                          annabeck99
                        </li>
                        <li className="detailListItem">
                          <CalendarToday className="userIcon" />
                          11.20.2023
                        </li>
                    </ul>
                </div>
                <div className="accountDetails">
                    <h3 className="accountDetailsTitle">Account Details</h3>
                    <ul className="detailList">
                        <li className="detailListItem">
                          <PhoneAndroid className="userIcon" />
                          +1 9162135624
                        </li>
                        <li className="detailListItem">
                          <Email className="userIcon" />
                          annabeck@gmail.com
                        </li>
                        <li className="detailListItem">
                          <LocationSearching className="userIcon" />
                          New York
                        </li>
                    </ul>
                </div>
            </div>
            <div className="editUserInfo">
                <h3 className="editUserInfoTitle">Edit</h3>
                <div className="editInfoConainer">
                    <div className="editInfoItem">
                        <span className="label">Username</span>
                        <input type="text" className="editInfoInput" />
                    </div>
                    <div className="editInfoItem">
                        <span className="label">Email</span>
                        <input type="text" className="editInfoInput" />
                    </div>
                    <div className="editInfoItem">
                        <span className="label">Phone</span>
                        <input type="text" className="editInfoInput" />
                    </div>
                    <div className="editInfoItem">
                        <span className="label">Address</span>
                        <input type="text" className="editInfoInput" />
                    </div>
                    <button className="editInfoButton">Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User