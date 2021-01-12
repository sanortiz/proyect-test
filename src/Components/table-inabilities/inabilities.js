import React, {Component} from 'react'
import {fire2} from '../login/firebase'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./inabilities.css"
import "react-datepicker/dist/react-datepicker.css"
import ReactDatePicker from 'react-datepicker';

class inabilities extends Component {

    state={
        data: [],
        modalInsertar: false,
        modalEditar: false,
        form:{
            fechaIngreso: new Date(),
            empleado: '',
            unidad: '',
            doctor: '',
            fechaInc: '',
            fechaFin: '',
            cantDias: ''
        },
        id: 0,
    }

    peticionGet = () => {
        fire2.child("incapacidades").on("value", (empleado) => {
            if (empleado.val() !== null) {
                this.setState({ ...this.state.data, data: empleado.val() })
            } else {
                this.setState({ data: []})
            }
        })
    }

    peticionPost = () => {
        fire2.child("incapacidades").push(this.state.form,
            error => {
                if (error) {
                    console.log(error)
                }
            })
        this.setState({modalInsertar: false})
    }

    peticionPut = () => {
        fire2.child(`incapacidades/${this.state.id}`).set(
            this.state.form,
            error => {
                if(error) console.log(error)
            }
        )
        this.setState({modalEditar: false})
    }

    peticionDelete = () => {
        if(window.confirm(`Estas seguro de querer eliminar la incapacidad de ${this.state.form && this.state.form.empleado}?`)){
            fire2.child(`incapacidades/${this.state.id}`).remove(
                error=>{
                    if(error) console.log(error)
                }
            )
        }
    }
    

    handleChange = e => {
        this.setState({form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }})
    }

    seleccionarEmpleado = async (empleado, id, caso) => {
        await this.setState({form: empleado, id: id});

        (caso === "Edit") 
            ? this.setState({modalEditar: true}) 
            : this.peticionDelete();
    }

    componentDidMount(){
        this.peticionGet()
    }

    
    render(){
        return (
            <div className="Employees">
                <table className="table table-responsive table table-hover table-lg d-inline">
                    <thead className="thead-dark">
                        <tr>
                            <th>Fecha de ingreso</th>
                            <th>Empleado</th>
                            <th>Unidad medica</th>
                            <th>Doctor</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Cantidad de dias</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.data).map(i =>{
                            return <tr key={i}>
                                <td>{this.state.data[i].fechaIngreso}</td>
                                <td>{this.state.data[i].empleado}</td>
                                <td>{this.state.data[i].unidad}</td>
                                <td>{this.state.data[i].doctor}</td>
                                <td>{this.state.data[i].fechaInc}</td>
                                <td>{this.state.data[i].fechaFin}</td>
                                <td>{this.state.data[i].cantDias}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm btn-insertar" onClick={() => this.seleccionarEmpleado(this.state.data[i], i, "Edit" )}>Edit</button>{"  "}
                                    <button className="btn btn-danger btn-sm btn-insertar" onClick={() => this.seleccionarEmpleado(this.state.data[i], i, "Delete")}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <br/><br/>
                <button className="btn btn-success btn-insertar" onClick={() =>this.setState({modalInsertar: true})}>Insert</button>
                <br/><br/>

                <Modal isOpen={this.state.modalInsertar} className="Modal">
                    <ModalHeader>Insertar Registro</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Fecha de ingreso: </label>
                            <br/>
                            <ReactDatePicker className="form-control" selected={this.state.form.fechaIngreso} name="fechaIngreso" onChange={this.handleChange}/>
                            <br/>
                            <label>Empleado: </label>
                            <br/>
                            <input className="form-control" name="empleado" onChange={this.handleChange}></input>
                            <br/>
                            <label>Unidad medica: </label>
                            <br/>
                            <input type="text" className="form-control" name="unidad" onChange={this.handleChange}></input>
                            <br/>
                            <label>Doctor: </label>
                            <br/>
                            <input type="text" className="form-control" name="doctor" onChange={this.handleChange}></input>
                            <br/>
                            <label>Fecha de inicio: </label>
                            <br/>
                            <input type="text" className="form-control" name="fechaInc" onChange={this.handleChange}></input>
                            <br/>
                            <label>Fecha de fin: </label>
                            <br/>
                            <input type="text" className="form-control" name="fechaFin" onChange={this.handleChange}></input>
                            <br/>
                            <label>Cantidad de dias: </label>
                            <br/>
                            <input type="text" className="form-control" name="cantDias" onChange={this.handleChange}></input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary btn-sm btn-form" onClick={() =>this.peticionPost()}>Insert</button>{"  "}
                        <button className="btn btn-danger btn-sm btn-form" onClick={() => this.setState({modalInsertar: false})}>Cancel</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEditar} className="Modal">
                    <ModalHeader>Editar Registro</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Fecha de ingreso: </label>
                            <br/>
                            <input type="text" className="form-control" name="fechaIngreso" onChange={this.handleChange} value={this.state.form && this.state.form.fechaIngreso}></input>
                            <br/>
                            <label>Empleado: </label>
                            <br/>
                            <select className="form-control" name="empleado" onChange={this.handleChange} value={this.state.form && this.state.form.empleado}>
                                <option>{}</option>
                            </select>
                            <br/>
                            <label>Unidad medica: </label>
                            <br/>
                            <input type="text" className="form-control" name="unidad" onChange={this.handleChange} value={this.state.form && this.state.form.unidad}></input>
                            <br/>
                            <label>Doctor: </label>
                            <br/>
                            <input type="text" className="form-control" name="doctor" onChange={this.handleChange} value={this.state.form && this.state.form.doctor}></input>
                            <br/>
                            <label>Fecha de inicio: </label>
                            <br/>
                            <input type="text" className="form-control" name="fechaInc" onChange={this.handleChange} value={this.state.form && this.state.form.fechaInc}></input>
                            <label>Fecha de fin: </label>
                            <br/>
                            <input type="text" className="form-control" name="fechaFin" onChange={this.handleChange} value={this.state.form && this.state.form.fechaFin}></input>
                            <label>Cantidad de dias: </label>
                            <br/>
                            <input type="text" className="form-control" name="cantDias" onChange={this.handleChange} value={this.state.form && this.state.form.cantDias}></input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary btn-sm btn-form" onClick={() =>this.peticionPut()}>Edit</button>{"  "}
                        <button className="btn btn-danger btn-sm btn-form" onClick={() => this.setState({modalEditar: false})}>Cancel</button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default inabilities