import React from "react";
import Card from 'react-bootstrap/Card';

const UserList = ({listOfUsers}) => {

    return (
     <div className="container" >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{listOfUsers.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{listOfUsers.username}</Card.Subtitle>
          <Card.Text>
          
           <p1> <span>Address :</span> {listOfUsers.address.street}, {listOfUsers.address.suite}, {listOfUsers.address.city},{listOfUsers.address.street} </p1>
          
          </Card.Text>
        </Card.Body>
      </Card>
      </div> 
    );

}

export default UserList ;

