import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages } from '../../../actions/messages';
import { signalrConnection } from '../../../api';
import WorkerLayout from '../../../components/WorkerLayout/WorkerLayout';
import MessageTable from './MessageTable';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';

const MessagesFromClient = () => {
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    // const recievedMessages = useSelector(state => state.messages);
    const role = localStorage.getItem('role');

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
      }, [dispatch])

  return (
    role === 'Worker'
    ?
    <WorkerLayout>
        <MessageTable message={message}/>
    </WorkerLayout>
    :
    <AdminLayout>
      <MessageTable message={message}/>
    </AdminLayout>
  )
}

export default MessagesFromClient;