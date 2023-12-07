import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CompanyState } from '../types';

const initialState: CompanyState = {
  companies: [],
  isLoading: false,
  error: null,
  singleCompany: null,
  searchTerm: '',

};

export const fetchData = createAsyncThunk('companies/fetchData', async () => {
  const res = await fetch('https://api.github.com/organizations');
  if (!res.ok) {
    throw new Error('No response');
  }
  const data = await res.json();
  return data;
});

export const getCompanyById = createAsyncThunk(
  'companies/getCompanyById',
  async (companyId: number) => {
    const res = await fetch(`https://api.github.com/organizations/${companyId}`);
    if (!res.ok) {
      throw new Error('No response');
    }
    const data = await res.json();
    return data;
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {

    sortData: (state, action) => {
      const sortingElment = action.payload;
      if(sortingElment === 'id'){
          state.companies.sort((a,b) => a.id - b.id);
      }
      else if (sortingElment === 'login'){
          state.companies.sort((a,b)=> a.login.localeCompare(b.login) );
      }
    },

    searchData: (state, action) => {
      state.searchTerm = action.payload;
    },
    
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong :(';
      })
      .addCase(getCompanyById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.singleCompany = action.payload;

      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong :(';
      });
  },
});

export const { sortData, searchData} = companiesSlice.actions;
export default companiesSlice.reducer;