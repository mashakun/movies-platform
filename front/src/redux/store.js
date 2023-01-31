import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth.js';
import { listsReducer } from './slices/lists.js';


const store = configureStore({
    reducer: {
        lists: listsReducer,
        auth: authReducer,
    },
});

export default store;