import React, { useState }from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

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
    const handleFirstName = (e) => {
        if(e.target.value.length < 1){
            setFirstNameError("First name is required!")
        } else if(e.target.value.length < 2 ){
            setFirstNameError("First name should be more than two characters")
        } else {
            setFirstNameError("")
            setFirstName(e.target.value);
        }
    }
    const handleLastName = (e) => {
        if(e.target.value.length < 1){
            setLastNameError("Last name is required!")
        } else if(e.target.value.length < 2 ){
            setLastNameError("Last name should be more than two characters")
        } else {
            setLastNameError("")
            setLastName(e.target.value);
        }
    }
    const handleEmail = (e) => {
        if(e.target.value.length < 1){
            setEmailError("Email is required!")
        } else if(e.target.value.length < 5 ){
            setEmailError("Email should be more than five characters")
        } else {
            setEmailError("")
            setEmail(e.target.value);
        }
    }
    const handlePassword = (e) => {
        if(e.target.value.length < 1){
            setPasswordError("Password is required!")
        } else if(e.target.value.length < 8 ){
            setPasswordError("Password should be more than eight characters")
        } else {
            setPasswordError("")
            setPassword(e.target.value);
        }
    }
    const handleConfirmPassword = (e) => {
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is required!")
        } else if(e.target.value.length < 8 ){
            setConfirmPasswordError("Confirm Password should be more than eight characters")
        }else if(e.target.value != password ){
            setConfirmPasswordError("Passwords should match!")
        } else {
            setConfirmPasswordError("")
            setConfirmPassword(e.target.value);
        }
    }
    return (
    <div>
        {/* <form onSubmit={ createUser }> */}
        <form style={{margin: '2% 2%', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>
            <div style={{ padding: '2% 4%', margin: '0 20% 1%', backgroundColor: 'grey', color: '#fff',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <div style={{color:'red'}}>{ firstNameError }</div> :
                    ''
                }
            </div>
            <div style={{ padding: '2% 4%', margin: '0 20% 1%', backgroundColor: 'grey', color: '#fff',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName }/>
                {
                    lastNameError ?
                    <div style={{color:'red'}}>{ lastNameError }</div> :
                    ''
                }
            </div>
            <div style={{ padding: '2% 4%', margin: '0 20% 1%', backgroundColor: 'grey', color: '#fff',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>
                <label>Email: </label> 
                <input type="email" onChange={ handleEmail }/>
                {
                    emailError ?
                    <div style={{color:'red'}}>{ emailError }</div> :
                    ''
                }
            </div>
            <div style={{ padding: '2% 4%', margin: '0 20% 1%', backgroundColor: 'grey', color: '#fff',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>
                <label>Password: </label> 
                <input type="password" onChange={ handlePassword }/>
                {
                    passwordError ?
                    <div style={{color:'red'}}>{ passwordError }</div> :
                    ''
                }
            </div>
            <div style={{ padding: '2% 4%', margin: '0 20% 1%', backgroundColor: 'grey', color: '#fff',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>
                <label>Confirm Password: </label> 
                <input type="password" onChange={ handleConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <div style={{color:'red'}}>{ confirmPasswordError }</div> :
                    ''
                }
            </div>
            {/* <input type="submit" value="Create!"/> */}
        </form>
        <hr></hr>
        
        <ul>
            <h4>Your Form Data</h4> 
            {
                firstName ? 
                <li style={{ padding: '2% 4%', margin: '0 25% 1%', backgroundColor: 'white', color: '#999',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>First Name: { firstName }</li>:
                <p></p>
            } 
            {
                lastName ? 
                <li style={{ padding: '2% 4%', margin: '0 25% 1%', backgroundColor: 'white', color: '#999',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>Last Name: { lastName }</li>:
                <p></p>
            } 
            {
                email ? 
                <li style={{ padding: '2% 4%', margin: '0 25% 1%', backgroundColor: 'white', color: '#999',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>Email: { email }</li>:
                <p></p>
            } 
            {
                password ? 
                <li style={{ padding: '2% 4%', margin: '0 25% 1%', backgroundColor: 'white', color: '#999',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>Password: { password }</li>:
                <p></p>
            } 
            {
                confirmPassword ? 
                <li style={{ padding: '2% 4%', margin: '0 25% 1%', backgroundColor: 'white', color: '#999',border: 'solid 2px black',boxShadow: '5px 5px 5px'}}>Confirm Password: { confirmPassword }</li>:
                <p></p>
            }
        </ul>
    </div>
    )
}

export default UserForm;