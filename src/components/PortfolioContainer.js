import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header'
import Footer from './Footer'
import "../styles/Section.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="h-100 w-100 d-inline-block" style={{backgroundImage: "url(./pexels-roberto-nickson-2775196.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", overflow: "scroll"}}>
      <header>
        <Header/>
      </header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='d-flex w-100 makeCenter flex-wrap'>
      {renderPage()}
      </div>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
