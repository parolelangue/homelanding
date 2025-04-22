import { IArticle } from '@/@core/types/category';
import { EDictDataKey, IHomeInfo } from '@/@core/types/general';
import { categoryService } from '@/app/services/category';
import { initialCategoryState as initialState } from '@/app/states';
import { TContactFormData } from '@/views/category/templates/contactTemplate';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getContentDetailByArticleId = createAsyncThunk(
  'appCategory/getContentDetailByArticleId',
  async (payload: string) => {
    const res = await categoryService.getDetailData<{ data: IArticle }>(payload);
    return res?.[1];
  },
);

export const getContentDetailByCategoryId = createAsyncThunk(
  'appCategory/getContentDetailByCategoryId',
  async (payload: string) => {
    const res = await categoryService.getDetailDataByCategoryId<{ data: IArticle }>(payload);
    return res?.[1];
  },
);

export const contact = createAsyncThunk(
  'appCategory/contact',
  async (payload: TContactFormData) => {
    const res = await categoryService.contact<{ data: IArticle }>(payload);
    return res?.[1];
  },
);

export const getContactInfo = createAsyncThunk(
  'appCategory/getContactInfo',
  async (payload: EDictDataKey) => {
    const res = await categoryService.getContactInfo<{ data: IHomeInfo[] }>(payload);
    return res?.[1];
  },
);

export const categorySlice = createSlice({
  name: 'appCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ----------------- CATEGORY DETAIL ----------------- //
    builder.addCase(getContentDetailByArticleId.fulfilled, (state, action) => {
      state.detailData = action.payload.data;
    });
    builder.addCase(getContentDetailByArticleId.pending, (state, action) => {});
    builder.addCase(getContentDetailByArticleId.rejected, (state, action) => {
      state.detailData = null;
    });
    builder.addCase(getContentDetailByCategoryId.fulfilled, (state, action) => {
      state.detailData = action.payload.data;
    });
    builder.addCase(getContentDetailByCategoryId.pending, (state, action) => {});
    builder.addCase(getContentDetailByCategoryId.rejected, (state, action) => {
      state.detailData = null;
    });

    // ----------------- CONTACT INFO ----------------- //
    builder.addCase(getContactInfo.fulfilled, (state, action) => {
      state.homeInfo = action.payload.data;
    });
  },
});

export const categoryActions = {
  ...categorySlice.actions,
  getContentDetailByArticleId,
  getContentDetailByCategoryId,
  contact,
  getContactInfo,
};

export default categorySlice.reducer;
