import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import  menuAPI from '../service/editMenu.api'

const initialState = {
  restaurantDetails : {
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
  },
  edit: false,
  error: false,
  loading: false
}


export const fetchMenu = createAsyncThunk('menu/menuRequest' , async (menuID, {rejectWithValue}) => {
  try {
    let menu = await menuAPI.fetchMenuFromServer(menuID) 
    return menu
  }catch(err) {
    rejectWithValue(err.message)
  }
  
})

export const setMenu = createAsyncThunk('menu/menuUpdate', async ({newMenu, hash, menuId, isEdit}, {rejectWithValue}) => {
  try {
    let resp = await menuAPI.setMenu({menu: newMenu,hash,menuId, isEdit })
    return newMenu;
  }catch(err) {
    rejectWithValue(err.message)
  }
})

export const drafttMenu = createAsyncThunk('menu/draftMenu' , async(payload) => {
  menuAPI.saveDraft(payload)
  return payload
})

let editMenuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    updateMenu : (state, payload) => {
      state.restaurantDetails = {...payload}
    }
  },
  extraReducers : {
    [fetchMenu.pending]: (state, action)=>  {
      state.loading = true;
    },
    [fetchMenu.fulfilled]: (state,action) =>  {
      state.error = false
      state.loading = false;
      state = {...state, restaurantDetails: action.payload}
    },
    [fetchMenu.rejected]: (state, action) => {
      state.error = true
      state.loading = false;
    },
    [setMenu.pending]: (state, action) => {
      state.loading = true;
    },
    [setMenu.fulfilled]:(state, action) => {
      state.error = false;
      state.loading = false;
      state = {...state,...action.payload}
    },
    [setMenu.rejected]:(state, action) => {
      state.error = true;
      state.loading = false;

    }
  }
})

export const {updateMenu} = editMenuSlice.actions

export default editMenuSlice.reducer