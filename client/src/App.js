import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/NavBar/Nav';
import About from './features/About/About';
import Login from './features/Account/Login/Login';
import Register from './features/Account/Register/Register';
import Home from './features/Home/Home';
import Listings from './features/Listings/Listings';
import SingleListing from './features/Listings/SingleListing';
import SearchResult from './features/Search/SearchResult';



function App() {
  return (
<>
          <Nav/>
        <Routes>
          <Route path="listings" element={<Listings />} />
          <Route path="listings/:id" element={<SingleListing />} />
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='about' element={<About />} />
          <Route path='search' element={<SearchResult />} />

        {/* 
          <Route path="/about" element={<About />} />
          <Route path="/donor/:id" element={<SingleDonor />}/>
          <Route path="/search/:slug" element={<SearchResult />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/donor" element={<ApplyDonor />} />
          <Route path="*" element={<NotFound />} />
        */}
          </Routes>
        <Footer/> 
    </>

  );
}

export default App;
