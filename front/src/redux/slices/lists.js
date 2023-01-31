import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

//
export const fetchCreateList = createAsyncThunk('lists/fetchCreate', async (params) => {
    const { data } = await axios.post('/lists/', params);
    return data;
});

export const fetchGetAllLists = createAsyncThunk('lists/fetchGetAll', async () => {
    const { data } = await axios.get('/lists/');
    return data;
});

export const fetchUpdateList = createAsyncThunk('lists/fetchUpdate', async (params) => {
    // console.log("fbgkj,dfg.d            ", params);
    const { data } = await axios.patch(`/lists/${params.id}`, {listName: params.listName});
    return data;
});

export const fetchDeleteList = createAsyncThunk('lists/fetchDelete', async (params) => {
    const { data } = await axios.delete(`/lists/${params.id}`);
    return data;
});

export const fetchGetList = createAsyncThunk('lists/fetchGet', async (params) => {
    const { data } = await axios.get(`/lists/${params.id}`);
    return data;
});

//=============================================================================================
export const fetchCreateElement = createAsyncThunk('movies/fetchCreate', async (params) => {
    console.log("params ", params);
    const { data } = await axios.post('/movies/', params);
    return data;
});

// export const fetchGetElement = createAsyncThunk('movies/fetchGet', async (id) => {
//     const { data } = await axios.get(`/movies/${id}`);
//     return data;
// });

export const fetchUpdateElement = createAsyncThunk('movies/fetchUpdate', async (params) => {
    // console.log("params: ", params);
    const { data } = await axios.patch(`/movies/${params.id}`, 
    {checked: params.checked, movieName: params.movieName, heart: params.heart});
    return data;
});

export const fetchDeleteElement = createAsyncThunk('movies/fetchDelete', async (params) => {
    const { data } = await axios.delete(`/movies/${params.id}`);
    return data;
});


const initialState = {
    lists: {
        curr: null,
        all: [],
    },
    items: {
        curr: null,
        all: [],
    },
    status: 'loading',
}

const listsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setCurrList: (state, param) => {
            const {payload} = param;
            state.lists.curr = payload;
        },
        setCurrItem: (state, param) => {
            const {payload} = param;
            state.items.curr = payload;
        },
    },
    extraReducers: {
        [fetchCreateList.pending] : (state) => {
            state.lists.curr = null;
            state.items.curr = null;
            state.items.all = [];
            state.status = 'loading';
        },
        [fetchCreateList.fulfilled] : (state, action) => {
            state.lists.curr = action.payload;
            state.lists.all.push(action.payload);
            state.items.curr = null;
            state.items.all = [];
            state.status = 'loaded';
        },
        [fetchCreateList.rejected] : (state) => {
            state.lists.curr = null;
            state.items.curr = null;
            state.items.all = [];
            state.status = 'error';
        },
        [fetchGetAllLists.pending] : (state) => {
            state.lists.curr = null;
            state.lists.all = [];
            state.items.curr = null;
            state.items.all = [];
            state.status = 'loading';
        },
        [fetchGetAllLists.fulfilled] : (state, action) => {
            state.lists.all = action.payload;
            state.status = 'loaded';
        },
        [fetchGetAllLists.rejected] : (state) => {
            state.lists.curr = null;
            state.lists.all = [];
            state.items.curr = null;
            state.items.all = [];
            state.status = 'error';
        },
        [fetchUpdateList.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchUpdateList.fulfilled] : (state, action) => {
            let id = state.lists.all.findIndex((el) => el._id === state.lists.curr._id);
            console.log(action.payload);
            state.lists.all[id] = action.payload;
            state.lists.curr = action.payload;
            state.status = 'loaded';
        },
        [fetchUpdateList.rejected] : (state) => {
            state.status = 'error';
        },
        [fetchDeleteList.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchDeleteList.fulfilled] : (state, action) => {
            let id = state.lists.all.findIndex((el) => el._id === state.lists.curr._id);
            state.lists.all.splice(id, 1);
            state.lists.curr = null;
            state.items.curr = null;
            state.items.all = [];
            state.status = 'loaded';
        },
        [fetchDeleteList.rejected] : (state) => {
            state.status = 'error';
        },
        [fetchGetList.pending] : (state) => {
            state.items.curr = null;
            state.items.all = [];
            state.status = 'loading';
        },
        [fetchGetList.fulfilled] : (state, action) => {
            state.items.all = action.payload.elements;
            state.status = 'loaded';
        },
        [fetchGetList.rejected] : (state) => {
            state.lists.curr = null;
            state.items.curr = null;
            state.items.all = [];
            state.status = 'error';
        },
        [fetchCreateElement.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchCreateElement.fulfilled] : (state, action) => {
            state.items.curr = action.payload;
            state.items.all.push(action.payload);
            state.status = 'loaded';
        },
        [fetchCreateElement.rejected] : (state) => {
            state.status = 'error';
        },
        [fetchUpdateElement.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchUpdateElement.fulfilled] : (state, action) => {
            let id = state.items.all.findIndex((el) => el._id === state.items.curr._id);
            console.log(action.payload);
            state.items.all[id] = action.payload;
            state.items.curr = action.payload;
            state.status = 'loaded';
        },
        [fetchUpdateElement.rejected] : (state) => {
            state.status = 'error';
        },
        [fetchDeleteElement.pending] : (state) => {
            state.status = 'loading';
        },
        [fetchDeleteElement.fulfilled] : (state, action) => {
            let id = state.items.all.findIndex((el) => el._id === state.items.curr._id);
            state.items.all.splice(id, 1);
            state.items.curr = null;
            state.status = 'loaded';
        },
        [fetchDeleteElement.rejected] : (state) => {
            state.status = 'error';
        },
    },
});

export const listsReducer = listsSlice.reducer;

export const { setCurrList, setCurrItem } = listsSlice.actions;
