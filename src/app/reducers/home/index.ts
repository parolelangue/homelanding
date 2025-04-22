import { IBanner, IHeadCategory, IMainContent } from '@/@core/types/home';
import { homeService } from '@/app/services/home';
import { initialHomeState as initialState } from '@/app/states';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getHeadCategories = createAsyncThunk('appCommon/getHeadCategories', async () => {
  const res = await homeService.getHeadCategories<{ data: IHeadCategory[] }>();
  return res?.[1];
});

export const getMainContent = createAsyncThunk('appCommon/getMainContent', async () => {
  const res = await homeService.getMainContent<{ data: IMainContent }>();
  return res?.[1];
});

export const homeSlice = createSlice({
  name: 'appHome',
  initialState,
  reducers: {
    setSuggestPort: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getHeadCategories.fulfilled, (state, action) => {
      state.headCategories = action.payload.data;
    });
    builder.addCase(getHeadCategories.pending, (state, action) => {});
    builder.addCase(getHeadCategories.rejected, (state, action) => {
      state.headCategories = [];
    });

    // ----------------- BANNERS -----------------
    builder.addCase(getMainContent.fulfilled, (state, action) => {
      state.mainContent = action.payload.data;
    });
    builder.addCase(getMainContent.pending, (state, action) => {});
    builder.addCase(getMainContent.rejected, (state, action) => {
      state.mainContent = null;
    });
  },
});

export const homeActions = {
  ...homeSlice.actions,
  getHeadCategories,
  getMainContent,
};

export default homeSlice.reducer;
