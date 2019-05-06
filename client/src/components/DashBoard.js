import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function bubbleSort(arr, key) {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j][key] > arr[j+1][key]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
    }

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets:[]
        }
    }
    Petsranking=() =>{
        let pets = [...this.state.pets];
        pets = bubbleSort(pets, "type");
        this.setState({pets: pets});
        }
    getPets = () =>{
        axios.get("/pets")
        .then(res => {
        this.setState({pets: res.data.pets}, () => {
            this.rankPets();
        });
        }).catch(err => {
        console.log(err);
        });
    }

    componentDidMount = () => {
        axios.get("/pets")
        .then(res => {
            this.setState({pets: res.data.pets})
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <div>
                <h2>These pets are looking for a home!</h2>
                <Link to='/pets/new'>Add a pet to the shelter</Link>
                <fieldset>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pets.map(pet => 
                                    <tr key={pet._id}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                        <Link to={"/pet/" + pet._id}><button>Details</button></Link>
                                        <Link to={"/pet/"+ pet._id+"/edit"}>
                                        <button>Edit</button></Link>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </fieldset>
            </div>
        );
    }
    }

export default DashBoard;