import React from 'react'; 
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        if currentUser
        
        return(
            <>
                <h1>Welcome {this.props.currentUser.username}</h1>
                {/* <button onClick={}>Log Out</button> */}

                <Link to="/signup">Sign Up </Link>
                <Link to="/login">Log in </Link>
            </>
        )
    }
}

export default Greeting;