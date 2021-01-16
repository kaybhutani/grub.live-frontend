import {createSlice , createAsyncThunk,current} from '@reduxjs/toolkit'
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
  edit: null,
  error: false,
  loading: false,
  hash: null,
  menuId: null
}

/**
 * TODO: Test async methods as well
 */
export const fetchMenu = createAsyncThunk('menu/menuRequest' , async ({menuId, hash, edit}, {rejectWithValue,getState}) => {
  try {
    let menu =await menuAPI.fetchMenuFromServer(menuId)
    return {
      restaurantDetails: menu,
      hash:hash,
      menuId:menuId
    }
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
  await menuAPI.saveDraft(payload)
  return payload
})

export const fetchMenuFromLocalStorage = createAsyncThunk('menu/menuRequestLocal', async(payload) => {
  let menuState = await menuAPI.fetchMenuFromLocalStorage()
  return menuState
})



let editMenuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    updateMenu : (state, action) => {
      state.restaurantDetails = {...action.payload}

    }
  },
  extraReducers : {
    [fetchMenu.pending]: (state, action)=>  {
      state.loading = true;
      state.error = null
    },
    [fetchMenu.fulfilled]: (state,action) =>  {

      let {restaurantDetails, hash,menuId} = action.payload;
  
      return {
        ...state,
        error: null,
        loading:false,
        restaurantDetails: restaurantDetails,
        hash:hash,
        menuId:menuId,
        edit:true
      }
    },
    [fetchMenu.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false;
    },
    [setMenu.pending]: (state, action) => {
      state.loading = true;
      state.error = null
    },
    [setMenu.fulfilled]:(state, action) => {
      return {
        ...state,
        ...action.payload
      }
    
    },
    [setMenu.rejected]:(state, action) => {
      state.error = action.error.message
      state.loading = false;

    },
    [drafttMenu.pending] :(state, action) => {
      state.loading = true;
      state.error = null
    },
    [drafttMenu.fulfilled]: (state,action) => {
      state.restaurantDetails = action.payload
      state.error=  null
      state.loading = false;
    },
    [drafttMenu.rejected]: (state,action) => {
      state.error=  action.error.message
      state.loading = false;
    },
    [fetchMenuFromLocalStorage.pending]  :(state, action) => {
      state.loading = true;
      state.error = null
    },
    [fetchMenuFromLocalStorage.fulfilled]  :(state, action) => {
      state.restaurantDetails = action.payload
      state.error=  null
      state.loading = false;
    },
    [fetchMenuFromLocalStorage.rejected]: (state,action) => {
      state.error=  action.error.message
      state.loading = false;
    },
  }

})

export const {updateMenu} = editMenuSlice.actions

export default editMenuSlice.reducer