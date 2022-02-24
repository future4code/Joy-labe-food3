import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const Toast = () => {
  const notify = () => toast.success('Pedido Realizado', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div>
      <button onClick={notify}>Fazer pedido !</button>
      <ToastContainer theme='colored'/>
    </div>
  );
}