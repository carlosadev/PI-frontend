import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Usuario = ({ user }) => {

    /*
        mutation{
            activeUser(identificacion:224465)
        }
    /*/
    const ACTIVAR_USUARIO = gql`
        mutation activeUser($identificacion:Int){
            activeUser(identificacion:$identificacion)
        }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [activar] = useMutation(ACTIVAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO)


    const activarUser = () => {
        activar({ variables: { identificacion: user.identificacion } })
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
    }

    return <tr>
        <td>{user.name}</td>
        
        <td>{user.estado}</td>
        <td>{user.email}</td>
        <td>{user.perfil}</td>
        <td><button className="btn btn-primary btn-sm" onClick={activarUser}>Autorizar</button>
            <button className="btn btn-danger btn-sm" onClick={eliminarUser}>Rechazar</button></td>
    </tr>
}

export default Usuario