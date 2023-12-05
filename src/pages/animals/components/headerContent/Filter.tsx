import {FC, memo, useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import {FaFilter} from "react-icons/fa";

export interface IFilterProps {

}
const Filter: FC<IFilterProps> = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <>
        <Button
            aria-expanded={true}
            className="text-nowrap"
            variant="dark"
            onClick={handleShow}
        >
            <FaFilter />
            Фильтр
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Фильтрация</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>какие-то категории</Offcanvas.Body>
        </Offcanvas>
    </>)

}

export default memo(Filter);
