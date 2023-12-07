import {configureStore} from "@reduxjs/toolkit";
import companiesSlice from "./components/companySlice";


export const store = configureStore({
	reducer: {
		companiesR: companiesSlice
	},
});