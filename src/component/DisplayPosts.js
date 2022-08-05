import React from "react";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

class DisplayPosts extends React.Component{
    render(){
        return(
            <div>
                {this.props.post.map((image) => (
                    <Button color="primary" variant="outlined" endIcon={<ThumbUpIcon />}>LIKE</Button>
                ))
    }
            </div>
        )
    }
}
export default DisplayPosts