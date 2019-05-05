import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class EditPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: "",
                likes: 0,
            },
            errors:{}
        }
    }



    componentDidMount = () => {
        axios.get(`http://localhost:8000/pets/${this.props.match.params._id}`)
        .then(res => {
            this.setState({pet: res.data.pet});
        }).catch(err => {
            console.log(err);
        });
    }

    changeName = (e) =>{
        this.setState({pet: {...this.state.pet, name: e.target.value}});
    }
    changeType = (e) =>{
        this.setState({pet: {...this.state.pet, type: e.target.value}});
    }
    changeDescription = (e) =>{
        this.setState({pet: {...this.state.pet, description: e.target.value}});
    }
    changeSkill1 = (e) =>{
        this.setState({pet: {...this.state.pet, skill1: e.target.value}});
    }
    changeSkill2 = (e) =>{
        this.setState({pet: {...this.state.pet, skill2: e.target.value}});
    }
    changeSkill3 = (e) =>{
        this.setState({pet: {...this.state.pet, skill3: e.target.value}});
    }

    update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/pets/${this.props.match.params._id}`, this.state.pet)
        .then(res => {
            console.log(res);
            if(res.data.errors) {
                this.setState({errors: res.data.errors.errors});
            }
            else{
                this.props.history.push('/');
            }
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
    return (
        <fieldset>
            <legend>Edit this pet</legend>
            <form onSubmit = {this.update}>
                <p>
                    Name: &nbsp; &nbsp; 
                    <input type= "text" 
                    value={this.state.pet.name} 
                    onChange ={this.changeName}/>
                    {
                        (this.state.errors.name) ?
                    <span>{this.state.errors.name.message}</span> :
                    <span></span>
                    }
                </p>
                <p>
                    Type: &nbsp; &nbsp; 
                    <input type= "text" 
                    value={this.state.pet.type} 
                    onChange ={this.changeType}/>
                    {
                        (this.state.errors.type) ?
                    <span>{this.state.errors.type.message}</span> :
                    <span></span>
                    }
                </p>
                <p>
                    Description: &nbsp; &nbsp; 
                    <input type= "text" 
                    value={this.state.pet.description} 
                    onChange ={this.changeDescription}/>
                    {
                        (this.state.errors.description) ?
                    <span> &nbsp; {this.state.errors.description.message}</span> :
                    <span></span>
                    }
                </p>
                <p>Skills:</p>
                <p>
                    Skill1: &nbsp; &nbsp; 
                    <input type= "text"
                    value={this.state.pet.skill1} 
                    onChange ={this.changeSkill1}/>
                    {
                        (this.state.errors.skill1) ?
                    <span>&nbsp; {this.state.errors.skill1.message}</span> :
                    <span></span>
                    }
                </p>
                <p>
                    Skill2: &nbsp; &nbsp; 
                    <input type= "text" 
                    value={this.state.pet.skill2} 
                    onChange ={this.changeSkill2}/>
                    {
                        (this.state.errors.skill2) ?
                    <span> &nbsp; {this.state.errors.skill2.message}</span> :
                    <span></span>
                    }
                </p>
                <p>
                    Skill3: &nbsp; &nbsp; 
                    <input type= "text" 
                    value={this.state.pet.skill3} 
                    onChange ={this.changeSkill3}/>
                    {
                        (this.state.errors.skill3) ?
                    <span>{this.state.errors.skill3.message}</span> :
                    <span></span>
                    }
                </p>
                <button type="submit">Edit pet</button> &nbsp;&nbsp;
            </form>
            <Link to="/"><button>Cancel</button></Link>
        </fieldset>
    )
    }
}

export default EditPet;