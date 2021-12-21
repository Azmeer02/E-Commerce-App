import React , {useEffect, useState} from 'react'
import { Navbar,Container,Nav,Form,FormControl } from 'react-bootstrap';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import { getDatabase , update , ref } from 'firebase/database';
import { useLocation } from "react-router-dom";

function Update(){
    const [updatedValues , setupdatedValues] = useState({description: "", price: "", photos: [], address: ""});
    const [open , setOpen] = useState(false);
    const router = useLocation();
    const { product , productId } = router?.state;
        //console.log(product);

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
            setupdatedValues({ ...updatedValues, [name]: value });
    }

    useEffect(()=>{
        setupdatedValues({description: product?.description, price: product?.price , photos: product?.photos , address: product?.address})
    },[product])
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function updateAd(e){
        e.preventDefault();
        // console.log(updatedValues)
        const db = getDatabase();
        update(ref(db, 'userAds/' + productId),updatedValues)
            .then(() => {
                console.log("Succeed")
            })
            .catch((error) => {
                console.log("Error")
        })
    }
    function dontupdateTheData(){
        setupdatedValues({description: "" , price: "" , phone: [] , address: ""});
        handleClose();
    }
    return (
        <>
            <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Ad Posting</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/home">Back To Home</Nav.Link>
                            <Button variant="outlined" onClick={handleClickOpen}>Click Here!</Button>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outlined" color="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar><br/>
            </div>
            <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To update the product, please fill the form below.
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="description" label="Description" name="description"
                        type="text" fullWidth variant="standard" value={updatedValues.description} onChange={handleUpdateChange}></TextField>
                    <TextField autoFocus margin="dense" id="price" label="Price" name="price"
                        type="number" fullWidth variant="standard" value={updatedValues.price} onChange={handleUpdateChange}></TextField><br/>
                    {/* <TextField autoFocus margin="dense" id="photos" label="Photos" name="photos"
                        type="file" fullWidth variant="standard" value={updatedValues.photos} multiple></TextField> */}
                    <TextField autoFocus margin="dense" id="address" label="Address" name="address"
                        type="text" fullWidth variant="standard" value={updatedValues.address} onChange={handleUpdateChange}></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={dontupdateTheData}>Cancel</Button>
                    <Button onClick={updateAd}>Update</Button>
                </DialogActions>
            </Dialog>
            </div>
        </>
    )
}

export default Update;