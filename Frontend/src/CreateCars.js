import React, { Component } from 'react';
import axios from 'axios';
import ShowCars from './ShowCars';

class CreateCars extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      vehicleType: '',
      brand: '',
      model: '',
      year: '',
      gearbox: '',
      dailyFee: '',
      comments: '',
      status: ''
    }
  this.createCar = this.createCar.bind(this);
  this.fordontype = this.fordontype.bind(this);
  this.handleBrand = this.handleBrand.bind(this);
  this.handleModel = this.handleModel.bind(this);
  this.handleStatus = this.handleStatus.bind(this);
  this.handleGearbox = this.handleGearbox.bind(this);
  this.handleDailyFee = this.handleDailyFee.bind(this);
  this.handleComment = this.handleComment.bind(this);
  this.handleYear = this.handleYear.bind(this);
  }
  fordontype(ev){

    this.setState({
      vehicleType: ev.target.value
    },()=>{})

  }
  handleBrand(ev){
    this.setState({
      brand: ev.target.value
    },()=>{})
  }
  handleModel(ev){
    this.setState({
      model: ev.target.value
    },()=>{})
  }
  handleGearbox(ev){
    this.setState({
      gearbox: ev.target.value
    },()=>{})
  }
  handleStatus(ev){
    this.setState({
      status: ev.target.value
    },()=>{})
  }
  handleDailyFee(ev){
    this.setState({
      dailyFee: ev.target.value
    },()=>{})
  }
  handleComment(ev){
    this.setState({
      comments: ev.target.value
    },()=>{})
  }
  handleYear(ev){
    this.setState({
      year: ev.target.value
    },()=>{})
  }
  createCar(){

    axios({
      method: 'post',
      url: 'http://localhost:3000/vehicles',
      data: {
        vehicleType: this.state.vehicleType,
        brand: this.state.brand,
        model: this.state.model,
        year: this.state.year,
        gearbox: this.state.gearbox,
        dailyFee: this.state.dailyFee,
        status: this.state.status,
        comments: this.state.comment
      }
    })
    .then(function (response) {

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return <div className='form'>
      <div className="createForm1">
        <select value={this.state.vehicleType}  onChange={this.fordontype}>
          <option value='' disabled defaultValue hidden>Please Choose fordontype</option>
          <option value="personbil">personbil</option>
          <option value="lätt lastbil">lätt lastbil</option>
          <option value="Trehjuling">Trehjuling</option>
          <option value="motorcykel">motorcykel</option>
          <option value="ATV">ATV</option>
        </select>
         <input type="text" value={this.state.brand} onChange={this.handleBrand} placeholder='brand'/>
         <input type="text" value={this.state.model} onChange={this.handleModel} placeholder='model'/>
      </div>
      <div className="createForm2">
        <input type="text" value={this.state.year} onChange={this.handleYear} placeholder='yyyymmdd'/>
        <input type="text" value={this.state.gearbox} onChange={this.handleGearbox} placeholder='gearbox'/>
        <input type="text" value={this.state.dailyFee} onChange={this.handleDailyFee} placeholder='dailyFee'/>
      </div>
      <div className="createForm2">
        <select required value={this.state.status}  onChange={this.handleStatus}>
          <option value='' disabled defaultValue hidden>Please Choose status</option>
          <option value="available">available</option>
          <option value="unavailable">unavailable</option>
        </select>
        <textarea type="text" value={this.state.comments} onChange={this.handleComment} placeholder='comments'/>
        <button className='addButton' onClick={this.createCar}>Add</button>
      </div>
    </div>
  }
}
export default CreateCars;
