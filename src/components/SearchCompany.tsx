import { ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, dataDispatcherType } from '../types';
import { useDispatch } from 'react-redux';
import { fetchData, searchData } from './companySlice';

const SearchCompany = () => {
  const { companies, error, isLoading, searchTerm } = useSelector((state: RootState) => state.companiesR);
  const dispatch: dataDispatcherType = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchData(event.target.value));
  };

  const filteredCompanies = searchTerm
    ? companies.filter((company) => company.login.toLowerCase().includes(searchTerm.toLowerCase()))
    : companies;

  return (
    <div>
      <form>
        <label htmlFor="id">Enter ID</label>
        <input id="id" name="id" onChange={handleChange} />
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {filteredCompanies.map((company) => (
        <div key={company.id}>
          <img src={company.avatar_url} alt={company.login} />
          <h3>{company.login}</h3>
          <p>ID: {company.id}</p>
          <p>
            URL: <a href={company.url}>{company.url}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchCompany;