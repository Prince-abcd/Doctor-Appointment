
import { Link } from 'react-router-dom';
import '../App.css';

const Homepage = () => {
    return (
        <div>

            <div className="hero-section d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="text-center text-white">
                    <h1 className="display-4">Welcome to Our Doctor Appointment Service</h1>
                    <p className="lead">Book an appointment with the best doctors in the city.</p>
                    <Link to="/doctors" className="btn btn-lg btn-info">See List of Doctors</Link>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className="row">
                    <div className="col-md-4 text-center">

                        <h4>Expert Doctors</h4>
                        <p>Our team consists of highly qualified professionals with decades of experience.</p>
                    </div>
                    <div className="col-md-4 text-center">

                        <h4>Convenient Appointments</h4>
                        <p>Book an appointment at your convenience with our easy-to-use platform.</p>
                    </div>
                    <div className="col-md-4 text-center">

                        <h4>Top Facilities</h4>
                        <p>We provide top-notch facilities to ensure you get the best care possible.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Ready to Book an Appointment?</h2>
                    <p>Our platform makes it easy to find a doctor, check their availability, and book an appointment.</p>
                    <Link to="/doctors" className="btn btn-lg btn-info">See List of Doctors</Link>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
