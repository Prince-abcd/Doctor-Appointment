// Appointment.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {notifyAppointmentSuccess} from '../components/Message.jsx'
const Appointment = () => {
    const { doctorId } = useParams(); // Get doctorId from URL
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const Details={
            name:name,
            doctorId:doctorId,
            date:DataTransfer,
        }
        notifyAppointmentSuccess(Details)
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Appointment Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Confirm Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;
