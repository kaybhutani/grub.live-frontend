import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  emailId: "",
  restaurantName: "",
  logo: "",
  bio: "",
  offers: [],
  social: {},
  menu: {
    categories: [],
    theme: {},
  },
  edit: false,
  error: false,
  loading: false
}


export const fetchMenu = createAsyncThunk('menu/menuRequest' , async () => {
  // TODO: fetch menu
  let menu = {}
  return menu
})

export const updateMenu = createAsyncThunk('menu/menuUpdate', async (newMenu) => {
  return {...newMenu}
})

let editMenuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
  },
  extraReducers : {
    [fetchMenu.pending]: (state, action)=>  {
      state.loading = true;
    },
    [fetchMenu.fulfilled]: (state,action) =>  {
      state.error = false
      state.loading = false;
      state = {...state, ...action.payload}
      return;
    },
    [fetchMenu.rejected]: (state, action) => {
      state.error = true
      state.loading = false;
    },
    [updateMenu.pending]: (state, action) => {
      state.loading = true;
    },
    [updateMenu.fulfilled]:(state, action) => {
      state.error = false;
      state.loading = false;
      state = {...state,...action.payload}
    },
    [updateMenu.rejected]:(state, action) => {
      state.error = true;
      state.loading = false;

    }
  }
})
export default editMenuSlice.reducer