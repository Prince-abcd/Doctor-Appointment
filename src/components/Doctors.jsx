// Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist' },
        { id: 3, name: 'Dr. Emily White', specialty: 'Pediatrician' },
        { id: 4, name: 'Dr. Michael Brown', specialty: 'Orthopedic' },
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Doctors List</h2>
            <ul className="list-group">
                {doctors.map((doctor) => (
                    <li key={doctor.id} className="list-group-item d-flex justify-content-between align-items-center text-primary">
                        <span>{doctor.name} - {doctor.specialty}</span>
                        <Link to={`/appointment/${doctor.id}`} className="btn btn-success">
                            Book Appointment
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
