import { IBond, IBondHistory } from '@/@core/types/bond';
import { TMeta, TQueryPagination } from '@/@core/types/general';
import { bondService } from '@/app/services/bond';
import { initialBondState as initialState } from '@/app/states';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBonds = createAsyncThunk('appCommon/getBonds', async (params: TQueryPagination) => {
  const res = await bondService.getBonds<{ data: IBond[]; meta: TMeta }>(params);
  return res?.[1];
});

export const getBondDetail = createAsyncThunk('appCommon/getBondDetail', async (id: string) => {
  const res = await bondService.getBondDetail<{ data: IBond }>(id);
  return res?.[1];
});
export const getBondsHistory = createAsyncThunk('appCommon/getBondsHistory', async (id: string) => {
  const res = await bondService.getBondsHistory<{ data: IBondHistory[] }>(id);
  return res?.[1];
});

export const bondSlice = createSlice({
  name: 'appBond',
  initialState,
  reducers: {
    setSuggestPort: (state, action) => {},
  },
  extraReducers: (builder) => {
    // ----------------- BOND LIST -----------------
    builder.addCase(getBonds.fulfilled, (state, action) => {
      state.bonds = action.payload.data;
      state.bondsMeta = action.payload.meta;
      state.bonsLoading = false;
    });
    builder.addCase(getBonds.pending, (state, action) => {
      state.bonsLoading = true;
    });
    builder.addCase(getBonds.rejected, (state, action) => {
      state.bonds = [];
      state.bondsMeta = null;
      state.bonsLoading = false;
    });

    // ----------------- BOND DETAIL -----------------
    builder.addCase(getBondDetail.fulfilled, (state, action) => {
      state.bondDetail = action.payload.data;
    });
    builder.addCase(getBondDetail.pending, (state, action) => {});
    builder.addCase(getBondDetail.rejected, (state, action) => {
      state.bondDetail = null;
    });
    // ----------------- BOND HISTORY -----------------
    builder.addCase(getBondsHistory.fulfilled, (state, action) => {
      state.bondsHistory = action.payload.data;
    });
    builder.addCase(getBondsHistory.pending, (state, action) => {});
    builder.addCase(getBondsHistory.rejected, (state, action) => {
      state.bondsHistory = [];
    });
  },
});

export const bondActions = {
  ...bondSlice.actions,
  getBonds,
  getBondDetail,
  getBondsHistory,
};

export default bondSlice.reducer;
