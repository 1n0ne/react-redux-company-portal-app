import { ThunkDispatch } from "@reduxjs/toolkit";
import companySlice, { fetchData, getCompanyById } from "./components/companySlice";


export type Company ={
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: null;
};

export type CompanyState = {
	companies: Company[];
	isLoading : boolean;
	error : string | null;
    singleCompany : Company | null;
    searchTerm: string;
};

export type RootState = {
	companiesR: ReturnType<typeof companySlice>;
};

type FechingIsPinding = ReturnType<typeof fetchData.pending>;
type FechingIsFulfilled = ReturnType<typeof fetchData.fulfilled>;
type FechingIsRejected = ReturnType<typeof fetchData.rejected>;

type FechingSingleCompanyIsPinding = ReturnType<typeof getCompanyById.pending>;
type FechingSingleCompanyIsFulfilled = ReturnType<typeof getCompanyById.fulfilled>;
type FechingSingleCompanyIsRejected = ReturnType<typeof getCompanyById.rejected>;

type sortDataAction = {
    type: 'companies/sortData';
    payload: string;
}

type searchDataAction = {
    type: 'companies/searchData';
    payload: string;
}

export type companiesAction = FechingIsPinding|
FechingIsFulfilled |
FechingIsRejected  |
FechingSingleCompanyIsPinding |
FechingSingleCompanyIsFulfilled |
FechingSingleCompanyIsRejected |
sortDataAction |
searchDataAction;



export type dataDispatcherType = ThunkDispatch<RootState, void, companiesAction>;       