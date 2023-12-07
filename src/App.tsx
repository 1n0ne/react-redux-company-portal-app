import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllCompanies from './components/AllCompanies';
import SearchCompany from './components/SearchCompany';
import CompanyById from './components/CompanyById';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/companies" element={<AllCompanies />} />
        <Route path="/company" element={<CompanyById />} />
        <Route path="/search" element={<SearchCompany />} />
      </Routes>
    </BrowserRouter>
  )
  	
};

export default App;
