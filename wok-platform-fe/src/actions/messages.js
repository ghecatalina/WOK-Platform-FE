import { getMessages, signalrConnection } from "../api";
import { GET_MESSAGES } from "../constants/actionTypes";

export const setConnection = async () => {
    signalrConnection.on("ReceiveMessage", formData => {
        console.log(formData);
    });

    await signalrConnection.start();
  
      return () => {
        if (signalrConnection) {
          signalrConnection.stop();
        }
      };
}

export const sendClientMessage = async (formData) => {
    await signalrConnection.invoke("SendMessage", formData);
};

export const getAllMessages = () => async (dispatch) => {
  try {
      const { data } = await getMessages();

      dispatch({ type: GET_MESSAGES, payload: data });
  } 
  catch(err) {
      console.log(err.message);
  }
}