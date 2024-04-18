import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLeadsContent = createAsyncThunk("/leads/content", async () => {
 const response = await axios.get("/api/users?page=2", {});
 return response.data;
});

export const leadsSlice = createSlice({
 name: "leads",
 initialState: {
  isLoading: false,
  leads: [
   {
    first_name: "Oluwole",
    last_name: "Faith",
    email: "oluwolefaith@noun.edu.ng",
    avatar: "https://i.pravatar.cc/150?img=1",
    documents_uploaded: 5
   },
   {
    first_name: "Adewale",
    last_name: "Adeyemi",
    email: "adewale.adeyemi01@noun.edu.ng",
    avatar: "https://i.pravatar.cc/150?img=2",
    documents_uploaded: 3
   },
   {
    first_name: "David",
    last_name: "Soyinka",
    email: "davidsoyinks@noun.edu.ng",
    avatar: "https://i.pravatar.cc/150?img=3",
    documents_uploaded: 5
   },
   {
    first_name: "Moses",
    last_name: "Femi",
    email: "moses.femi@noun.edu.ng",
    avatar: "https://i.pravatar.cc/150?img=5",
    documents_uploaded: 3
   }
  ]
 },
 reducers: {
  addNewLead: (state, action) => {
   let { newLeadObj } = action.payload;
   state.leads = [...state.leads, newLeadObj];
  },

  deleteLead: (state, action) => {
   let { index } = action.payload;
   state.leads.splice(index, 1);
  }
 },

 extraReducers: {
  [getLeadsContent.pending]: (state) => {
   state.isLoading = true;
  },
  [getLeadsContent.fulfilled]: (state, action) => {
   state.leads = action.payload.data;
   state.isLoading = false;
  },
  [getLeadsContent.rejected]: (state) => {
   state.isLoading = false;
  }
 }
});

export const { addNewLead, deleteLead } = leadsSlice.actions;

export default leadsSlice.reducer;
