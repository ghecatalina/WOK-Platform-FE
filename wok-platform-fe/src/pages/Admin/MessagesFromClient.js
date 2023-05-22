import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages } from '../../actions/messages';
import { signalrConnection } from '../../api';
import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import WorkerLayout from '../../components/WorkerLayout';

const MessagesFromClient = () => {
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const recievedMessages = useSelector(state => state.messages);

    useEffect(() => {
        signalrConnection.on("ReceiveMessage", message => {
            setMessage(message);
        });
    
        signalrConnection.start();
        
        return () => {
            if (signalrConnection) {
                signalrConnection.stop();
            }
        };
      }, []);

      useEffect(() => {
        dispatch(getAllMessages());
      }, [dispatch, message])

      console.log(recievedMessages);
  return (
    <WorkerLayout>
        <div>MessagesFromClient</div>
        <Box
        sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100vh',
            padding: '5vh 4vh 0vh 5vh'
          }}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Table&nbsp;Number</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Paying Method</TableCell>
                <TableCell align="center">Tip</TableCell>
              </TableRow>
            </TableHead>
            {
              !recievedMessages ?
              <CircularProgress /> :
              <TableBody>
                {
                  recievedMessages.map((message) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                      <TableCell component="th" scope="row">{message.tableNo}</TableCell>
                      <TableCell align="center">{message.type}</TableCell>
                      <TableCell align="center">{message.pay}</TableCell>
                      <TableCell align="center">{message.tip} %</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            }
            </Table>
            </TableContainer>
        </Box>
    </WorkerLayout>
  )
}

export default MessagesFromClient;