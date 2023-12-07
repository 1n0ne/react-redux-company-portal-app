import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, dataDispatcherType } from '../types';
import { getCompanyById } from './companySlice';

const CompanyById = () => {
  const {error, isLoading, singleCompany } = useSelector((state: RootState) => state.companiesR);
  const dispatch: dataDispatcherType = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(getCompanyById(Number(inputValue)));
    
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="id">Enter ID</label>
        <input id="id" name="id" value={inputValue} onChange={handleChange}></input>
        <button type="submit">find</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!error && singleCompany && (
        <div>
          <img src={singleCompany.avatar_url} alt={singleCompany.login} />
          <h3>{singleCompany.login}</h3>
          <p>ID: {singleCompany.id}</p>
          <p>
            URL: <a href={singleCompany.url}>{singleCompany.url}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyById;