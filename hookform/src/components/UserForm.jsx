import React, { useState }from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = {firstName, lastName, email, password, confirmPassword};
    //     console.log("Welcome", newUser);
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    // }
    return (
    <div>
        {/* <form onSubmit={ createUser }> */}
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }/>
            </div>
            <div>
                <label>last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) }  value={ lastName }/>
            </div>
            <div>
                <label>Email: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) }  value={ email }/>
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" onChange={ (e) => setPassword(e.target.value) }  value={ password }/>
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }  value={ confirmPassword }/>
            </div>
            {/* <input type="submit" value="Create!"/> */}
        </form>
        <hr></hr>
        <ul>
            <h4>Your Form Data</h4>
            <li>First Name: { firstName }</li>
            <li>Last Name: { lastName }</li>
            <li>Email: { email }</li>
            <li>Password: { password }</li>
            <li>Confirm Password: { confirmPassword }</li>
        </ul>
    </div>
    )
}

export default UserForm;