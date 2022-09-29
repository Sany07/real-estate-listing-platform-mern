import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/NavBar/Nav';
import Search from './components/SearchSection/Search';
import Listings from './features/Listings/Listings';



function App() {
  return (
<>
          <Nav/>
          <Search/>
        <Routes>
          <Route path="/listings" element={<Listings />} />

        {/* 
          <Route path='/' element={<Home />} />
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
