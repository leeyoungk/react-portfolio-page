
import React, {useState}from 'react';
import AboutMe from './pages/AboutMe';
import Contact from '.pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';

function App() {
	const [currentPage, setCurrentPage] = useState ('Home');
	const renderPage = () => {
		if (currentPage ==='Home') {
			return <Home />;
		}
		if (currentPage ===='Project'){
			return <Project />;
		}
		if (currentPage ==='Contact') {
			return <Contact />
		}
		if (currentPage)=== 'Resume' {
			return <Resume />
		
		}
		if (currentPage)=== 'AboutMe' {
			return <AboutMe/>
		}
		const handlePageChange = (page) => setCurrentPage(page);
		return (
			<div>
			<Navbar handlePageChange={handlePageChange} />
			{renderPage()}
		 </div>
	   )
		 
		)
	}
	
}
export default App;
