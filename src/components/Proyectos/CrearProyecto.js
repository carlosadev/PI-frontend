import MenuPrincipal from "../Menu";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";

import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
mutation CreateProject($nombre: String, $descripcion: String, $objetivosGenerales: String, $objetivosEspecificos: [String], $presupuesto: Int, $fechaInicio: String, $fechaTerminacion: String, $estado: EstadoStatus, $fase: FaseStatus, $lider: ID) {
    createProject( nombre: $nombre, descripcion: $descripcion, objetivosGenerales: $objetivosGenerales, objetivosEspecificos: $objetivosEspecificos, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaTerminacion: $fechaTerminacion, estado: $estado, fase: $fase, lider: $lider)
    }
`;

const CreateProject = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombre: "",
        descripcion:"",
        objetivosGenerales: "",
        objetivosEspecificos:"",
        presupuesto: 0,
        fechaInicio: "",
        fechaTerminacion: "",
        estado:"",
        fase:"",
        lider: "",
        
    }

    return (<div><MenuPrincipal/>
        
        <form onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                //identificador: project.identificador.value,
                nombre: project.nombre.value,
                descripcion:project.descripcion.value,
                objetivosGenerales: project.objetivosGenerales.value,
                objetivosEspecificos: project.objetivosEspecificos.value,
                fechaInicio:project.fechaInicio.value,
                fechaTerminacion:project.fechaTerminacion.value,
                estado:project.estado.value,
                fase:project.fase.value,
                presupuesto: parseInt(project.presupuesto.value),
                lider: project.lider.value
            }})
        }} >
            
            <Container>
            <h1>Crear Proyecto</h1>
            <Form.Group>
                <Form.Label>Nombre Proyecto</Form.Label>
                <Form.Control input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Objetivos</Form.Label>
                <Form.Control input ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Objetivos Especificos</Form.Label>
                <Form.Control input ref={objetivosEspecificos => project.objetivosEspecificos = objetivosEspecificos} placeholder="Objetivos Especificos" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Lider</Form.Label>
                <Form.Control input ref={lider => project.lider = lider} placeholder="Lider" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Presupuesto</Form.Label>
                <Form.Control input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </Form.Group>
            <div><button className="btn btn-primary" type="submit">Registrar Proyecto</button></div>
            </Container>
        </form>
    </div>)
}

export default CreateProject