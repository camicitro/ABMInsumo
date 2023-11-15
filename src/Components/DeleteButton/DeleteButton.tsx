import { TrashFill } from 'react-bootstrap-icons/dist';


interface DeleteButtonProps {
    onClick: () => void;
}


export const DeleteButton = ({onClick}:DeleteButtonProps) => {
    return (
    <TrashFill 
        color="#0000"
        size={24}
        onClick={onClick}
        onMouseEnter={() => { document.body.style.cursor = 'pointer'}}
        onMouseLeave={() => { document.body.style.cursor = 'default'}}
    />
    )
}

export default DeleteButton;