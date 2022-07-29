import React, { Component } from "react";

class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            mail:"",
            gender:"",
            dob:"",
            phone:"",
            deg:"",
            branch:"",
            pass:"",
            newpass:""
        }
        //this.state.pass = this.state.newpass.bind(this)
    }
    handleChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    changeMail = (event) =>{
        this.setState({
            mail:event.target.value
        })
    }

    changeGender = (event) =>{
        this.setState({
            gender:event.target.value
        })
    }
    changeDOB = (event) =>{
        this.setState({
            dob:event.target.value
        })
    }
    changePhone = (event) =>{
        this.setState({
            phone:event.target.value
        })
    }
    changeDeg = (event) =>{
        this.setState({
            deg:event.target.value
        })
    }
    changeBranch = (event) =>{
        this.setState({
            branch:event.target.value
        })
    }
    changePass = (event) =>{
        this.setState({
            pass:event.target.value
        })
    }
    changeNewPass = (event) =>{
        this.setState({
            newpass:event.target.value
        })
    }
    
    render(){
        const {pass, newpass} = this.state;
        return(
            <div>
                <h1>LOGIN PAGE</h1>
            <form>
                
                <div>
                    <label>Full Name</label>
                    <input type="text" 
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </div>
                <br/>
                <div>
                <label>Email</label>
                    <input type="email"
                    value={this.state.mail}
                    onChange={this.changeMail}
                    />
                </div>
                <br />
                <div>
                <label>Gender : </label>
                <div value={this.state.gender} onChange={this.changeGender}>
                    <input type="radio"

                    /> Male
                    <input type="radio"
                    
                    /> Female
                    <input type="radio"
                
                    /> Transgender 
                    </div>             
                    </div>
                    <br />
                    <div>
                <label>DOB </label>
                    <input type="date"
                    value={this.state.dob}
                    onChange={this.changeDOB}
                    />
                </div>
                <br />
                <div>
                <label>Mobile Number </label>
                    <input type="text"
                    value={this.state.phone}
                    onChange={this.changePhone}
                    />
                </div>
                <br />
                <div >
                <label>Degree </label>
                    <select value={this.state.deg} onChange={this.changeDeg}>
                        <option value="B.E.">B.E.</option>
                        <option value="B.Tech">B.Tech</option>
                    </select>
                </div>
                <br />
                <div >
                <label>Branch </label>
                    <select value={this.state.branch} onChange={this.changeBranch}>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                    </select>
                </div>
                <br />
                <div>
                <label>New Password </label>
                    <input type="password"
                    value={this.state.pass}
                    onChange={this.changePass}
                    name="p1"
                    />
                </div>
                <br />
                <div>
                <label>Confirm Password </label>
                    <input type="password"
                    value={this.state.newpass}
                    onChange={this.changeNewPass}
                    name="p2"
                    />
                </div>
                <br />
                    <button type="submit">Submit</button>
                    {/* {pass && newpass && pass !== newpass && <p>Password dont match</p>} */}
            </form>
            </div>
        )
    }
}
export default Forms