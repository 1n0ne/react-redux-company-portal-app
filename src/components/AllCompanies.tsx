import {  ChangeEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, dataDispatcherType } from '../types'
import { useDispatch } from 'react-redux'
import { fetchData, sortData } from './companySlice'


const Companies = () => {
  const { companies, error, isLoading } = useSelector((state: RootState) => state.companiesR);
  const dispatch: dataDispatcherType = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const handelSorting = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortData(event.target.value));   
}


  return (
    <div>
      <div>
      <div>
    <label htmlFor="sorting" >Sort By</label>
    <select id="sorting" name="sorting" onChange={handelSorting}>
     <option value="id" defaultValue="id">
          id
     </option>
     <option value="login">
          login
     </option>
    </select>
    </div>
        {companies.map((company) => (
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
    </div>
  )
}

export default Companies
