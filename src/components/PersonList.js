import axios from 'axios'
import React, { Component } from 'react'

export default class PersonList extends Component {

    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }


  render() {

    const { persons } = this.state;

    return (
      <div>
        <div class="header">
            <h1>Person List</h1>
        </div>
        <div >
            {persons.map((person, index) => (
              <div key={index}>
                <div className='person-card' >
                    <div className='person-card-header'>
                        {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                    </div>
                    <hr />
                    <div className='person-body'>
                        <div className='person-body-img'>
                            <div>
                                <img src={person.picture.large} alt="person-image" />
                            </div>
                            <div>
                                <button>Details</button>
                            </div>
                        </div>

                        <div className='person-body-attr'>
                            <div>User Name: </div>
                            <div>Gender: </div>
                            <div>Time Zone Description: </div>
                            <div>Address: </div>
                            <div>Email: </div>
                            <div>Birth Date and Age: </div>
                            <div>Register Date: </div>
                            <div>Phone#: </div>
                            <div>Cell#: </div>
                        </div>

                        <div className='person-body-value'>
                            <div id='username'>{person.login.username}</div>
                            <div>{person.gender}</div>
                            <div>{person.location.timezone.description}</div>
                            <div id='address'>
                                <span>{person.location.street.number} {person.location.street.name}, </span>
                                <span>{person.location.city}, {person.location.state}, </span>
                                <span>{person.location.country} - {person.location.postcode} </span>
                            </div>
                            <div>{person.email}</div>
                            <div>{person.dob.date} ({person.dob.age})</div>
                            <div>{person.registered.date}</div>
                            <div>{person.phone}</div>
                            <div>{person.cell}</div>
                        </div>
                    
                    </div>
                </div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
