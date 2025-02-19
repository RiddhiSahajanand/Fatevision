// import './App.css';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Layout from './Components/Layout/Layout';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Astrologer from './Pages/Astrologer/Astrologer';
import AstrologerDetails from './Pages/Astrologer-Details/AstrologerDetails';
import BookingForm from './Pages/Booking-Form/BookingForm';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetails from './Pages/Blog-Details/BlogDetails';
import Events from './Pages/Events/Events';
import EventDetails from './Pages/Event-Details/EventDetails';

function App() {

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/register' element={<Register />} />

                    {/* Home */}
                    <Route path='/' element={<Home />} />
                    {/* Astrologer */}
                    <Route path='/astrologer' element={<Astrologer />} />
                    {/* Astrologer-Details */}
                    <Route path='/astrologer-details' element={<AstrologerDetails />} />
                    {/* Booking */}
                    <Route path='/booking' element={<BookingForm />} />
                    {/* Blogs */}
                    <Route path='/blogs' element={<Blogs />} />
                    {/* Blog-Details */}
                    <Route path='/blog-details/:id' element={<BlogDetails />} />
                    {/* Events */}
                    <Route path='/events' element={<Events />} />
                    {/* Event-Details */}
                    <Route path='/event-details' element={<EventDetails />} />
                </Route>
            </Routes>

        </>
    )
}

export default App;