import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as React from 'react';
import ArticuloInsumo from '../../../Types/articuloInsumo';

type DeleteInsumoModalProps = {
    onDelete: () => void;
    onHide: () => void;
    insumo: ArticuloInsumo | null;
    show: boolean;
};

const DeleteProductModal: React.FC<DeleteInsumoModalProps> = ({onDelete, onHide, insumo, show}) => (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Borrar insumo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            ¿Estas seguro de que quieres borrar el siguiente producto: {insumo?.denominacion}? 
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cerrar
            </Button>
            <Button variant="danger" onClick={onDelete}>
                Borrar
            </Button>
        </Modal.Footer>
    </Modal>
);

export default DeleteProductModal;