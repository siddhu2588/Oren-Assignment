import React, { Component } from 'react';
import axios from 'axios'
import Card from './card';

class userProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            this.setState({list: response.data})
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const divStyle={
            display : "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
        }


        const {list} = this.state;
        return (
            
             <React.Fragment>
            <h1 style={{fontSize: "45px", backgroundColor: "lightcyan"}}>PROFILE DISPLAY</h1>
            <div  style={divStyle} >
                {
                    list.map(item =>  <Card style={{marginLeft: "50%"}} key={item.id} name={item.name} email={item.email} phone={item.phone} web={item.website}/>)
                }
        
            </div>
            </React.Fragment>
        );
    }
}

export default userProfile;