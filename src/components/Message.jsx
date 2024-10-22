import { toast } from 'react-toastify';

export const notifyLoginSuccess = () => {
  toast.success('Login successful!', {
    position: 'top-right', 
    autoClose: 3000,
  });
};

export const notifyAppointmentSuccess = (details) => {
  toast.success(`Appointment successful with ${details} `, {
    position: 'top-right', 
    autoClose: 3000,
  });
};
