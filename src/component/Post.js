import React from "react";
import Button from "@mui/material/Button";

class Post extends React.Component{
    constructor(){
        super();
        this.state={
            posts : [],
            newPost : ""
        }
    }
    
    handleChange(e){
        e.preventDefault();
        this.setState({
            newPost : e.target.value
        })

    }

    addPost(e){
        e.preventDefault();
        this.setState({
            posts : [...this.state.posts,this.state.newPost],
            newPost : ""
           
        })
        console.log(this.state.posts)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addPost}>
                <h2> Add a new post</h2>
                <br />
                <br />
                <input type="file" onChange={this.handleChange}/>
                <Button color="secondary" variant="outlined" onClick={this.addPost}>ADD</Button>
                </form>
            </div>
        )
    }
}
export default Post