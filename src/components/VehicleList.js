import React, { Component } from 'react'
import axios from "axios";


export default class VehicleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: [],
            value: '',
            pilot: ''
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/vehicles/').then((response) => {
            return response.json()
        }).then((data) => {
            let vehicles = data.results;
            console.log(vehicles)
            this.setState({ vehicles: vehicles })
        })
    }

    // componentDidMount() {
    //     axios.get('https://swapi.co/api/vehicles/')
    //         .then((response) => {
    //             console.log(response);
    //             let vehicles = this.data.results;
    //         }).then((data) => {
    //             console.log(this.vehicles)
    //             this.setState({ vehicles: this.vehicles })
    //         })
    // }




    render() {
        let vehicleArray = this.state.vehicles;
        let vehicles = vehicleArray.map((vehicles) => {
            return (
                <div key={vehicles.name} className="col-md-4" >
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Vehicle: {vehicles.name}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Model: {vehicles.model}</h5>
                            <div className="card">
                                <div className="card-block">
                                    <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Manufacturer: {vehicles.manufacturer}</li>
                                        <li className="list-group-item">Class: {vehicles.vehicle_class}</li>
                                        <li className="list-group-item">Passengers: {vehicles.passengers}</li>
                                        <li className="list-group-item">Crew: {vehicles.crew}</li>
                                        <li className="list-group-item">Length: {vehicles.length}</li>
                                        <li className="list-group-item">Max Speed: {vehicles.max_atmosphering_speed}</li>
                                        <li className="list-group-item">Cargo Capacity: {vehicles.cargo_capacity}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return ({ vehicles })
    }
}

