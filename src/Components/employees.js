import React, {Component} from 'react'
import {fire2} from './login/firebase'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./employees.css"

class Employees extends Component {
    state={
        data: [],
        modalInsertar: false,
        modalEditar: false,
        form:{
            codigo: '',
            nombre: '',
            fecha: '',
            cargo: '',
            dui: ''
        },
        id: 0,
    }

    peticionGet = () => {
        fire2.child("empleados").on("value", (empleado) => {
            if (empleado.val() !== null) {
                this.setState({ ...this.state.data, data: empleado.val() })
            } else {
                this.setState({ data: []})
            }
        })
    }

    peticionPost = () => {
        fire2.child("empleados").push(this.state.form,
            error => {
                if (error) {
                    console.log(error)
                }
            })
        this.setState({modalInsertar: false})
    }

    peticionPut = () => {
        fire2.child(`empleados/${this.state.id}`).set(
            this.state.form,
            error => {
                if(error) console.log(error)
            }
        )
        this.setState({modalEditar: false})
    }

    peticionDelete = () => {
        if(window.confirm(`Estas seguro de querer eliminar el empleado ${this.state.form && this.state.form.nombre}?`)){
            fire2.child(`empleados/${this.state.id}`).remove(
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
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Fecha de ingreso</th>
                            <th>Cargo</th>
                            <th>DUI</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.data).map(i =>{
                            return <tr key={i}>
                                <td>{this.state.data[i].codigo}</td>
                                <td>{this.state.data[i].nombre}</td>
                                <td>{this.state.data[i].fecha}</td>
                                <td>{this.state.data[i].cargo}</td>
                                <td>{this.state.data[i].dui}</td>
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
                            <label>Codigo: </label>
                            <br/>
                            <input type="text" className="form-control" name="codigo" onChange={this.handleChange}></input>
                            <br/>
                            <label>Nombre: </label>
                            <br/>
                            <input type="text" className="form-control" name="nombre" onChange={this.handleChange}></input>
                            <br/>
                            <label>Fecha de ingreso: </label>
                            <br/>
                            <input type="text" className="form-control" name="fecha" onChange={this.handleChange}></input>
                            <br/>
                            <label>Cargo: </label>
                            <br/>
                            <input type="text" className="form-control" name="cargo" onChange={this.handleChange}></input>
                            <br/>
                            <label>DUI: </label>
                            <br/>
                            <input type="text" className="form-control" name="dui" onChange={this.handleChange}></input>
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
                            <label>Codigo: </label>
                            <br/>
                            <input type="text" className="form-control" name="codigo" onChange={this.handleChange} value={this.state.form && this.state.form.codigo}></input>
                            <br/>
                            <label>Nombre: </label>
                            <br/>
                            <input type="text" className="form-control" name="nombre" onChange={this.handleChange} value={this.state.form && this.state.form.nombre}></input>
                            <br/>
                            <label>Fecha de ingreso: </label>
                            <br/>
                            <input type="text" className="form-control" name="fecha" onChange={this.handleChange} value={this.state.form && this.state.form.fecha}></input>
                            <br/>
                            <label>Cargo: </label>
                            <br/>
                            <input type="text" className="form-control" name="cargo" onChange={this.handleChange} value={this.state.form && this.state.form.cargo}></input>
                            <br/>
                            <label>DUI: </label>
                            <br/>
                            <input type="text" className="form-control" name="dui" onChange={this.handleChange} value={this.state.form && this.state.form.dui}></input>
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

export default Employees