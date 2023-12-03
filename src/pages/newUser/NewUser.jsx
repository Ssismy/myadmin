import "./newUser.css"

const NewUser = () => {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <div className="newUserInfoContainer">
            <div className="newUserInfoItem">
                <div className="newUserLabel">Username</div>
                <input type="text" className="newUserInput" placeholder="Username" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Company Name</div>
                <input type="text" className="newUserInput" placeholder="Company Name" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Email</div>
                <input type="text" className="newUserInput" placeholder="Email" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Password</div>
                <input type="text" className="newUserInput" placeholder="Password" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Phone</div>
                <input type="text" className="newUserInput" placeholder="Phone Number" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Address</div>
                <input type="text" className="newUserInput" placeholder="Address" />
            </div>
            <div className="newUserInfoItem">
                <div className="newUserLabel">Active</div>
                <select className="newUserInput">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
        </div>
        <button className="newUserButton">Create</button>
    </div>
  )
}

export default NewUser