import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContactName,
  editContactNumber,
} from "./operations";

import { logout } from "../auth/operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(editContactName.fulfilled, (state, action) => {
        const contactIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[contactIndex] = action.payload;
      })
      .addCase(editContactNumber.fulfilled, (state, action) => {
        const contactIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[contactIndex] = action.payload;
      }),
});

export const contactsReducer = slice.reducer;
