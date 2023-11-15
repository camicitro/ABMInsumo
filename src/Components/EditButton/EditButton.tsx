import { PencilFill } from 'react-bootstrap-icons/dist';

interface EditButtonProps {
    onClick: () => void;
}

export const EditButton = ({onClick} : EditButtonProps) => {

    return (
    <PencilFill 
        color="#0000"
        size={24}
        onClick={onClick}
        onMouseEnter={() => { document.body.style.cursor = 'pointer'}}
        onMouseLeave={() => { document.body.style.cursor = 'default'}}
    />
    )
}

export default EditButton