import Alert from "react-bootstrap/Alert";
import * as React from 'react';
import Spinner from "react-bootstrap/Spinner";

import useInsumos from "./hooks/useInsumos";

const InsumosTable = React.lazy(() => import('./components/InsumosTable'));

const Admin: React.FC = () => {
    //Utils
    const {data, error, loading} = useInsumos();

    //Render
    if (error){
        return (
            <Alert variant="danger">
                {error?.message || 'Algo salio mal buscando productos'}
            </Alert>
        );
    }

    return loading
        ? (
            <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100wh' }}>
                <Spinner animation="border" />
            </div>
        )
        : (
            <React.Suspense fallback={<Spinner animation="border" />}>
                <InsumosTable insumos={data} />
            </React.Suspense>
        )
};

export default Admin;


