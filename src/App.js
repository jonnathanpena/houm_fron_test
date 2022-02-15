import Router from './routes/Routes';

import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  return (
    <div>
      <Router />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
