
import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from './Card';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function ModalMovie (props) {


    return(
        <Modal id = "modal-n"
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Card movie = {props.movie}></Card>
                <div id = "expanded">
                    <p>
                    <b>Main actors: </b><br></br>{props.movie.Actors}<br></br><br></br>
                    <b>Genre: </b><br></br>{props.movie.Genre}<br></br><br></br>
                    <b>Director: </b><br></br>{props.movie.Director}<br></br><br></br>
                    <b>Released Year: </b><br></br>{props.movie.Released}<br></br><br></br>
                    <b>Awards: </b><br></br>{props.movie.Awards}<br></br><br></br>
                    <b>Duration: </b><br></br>{props.movie.Runtime}<br></br><br></br>
                    </p>
                     
                </div>
            </Box>
        </Modal>
    )
}

export default ModalMovie;