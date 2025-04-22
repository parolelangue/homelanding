import { TMeta } from '@/@core/types/general';
import { ICareer, INews } from '@/@core/types/news';
import { newsService, NewsServicePayloadType } from '@/app/services/news';
import { initialNewsState as initialState } from '@/app/states';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk(
  'appNews/getNews',
  async (params: NewsServicePayloadType['getNews']) => {
    const res = await newsService.getNews<{ data: INews[]; meta: TMeta }>(params);
    return res?.[1];
  },
);
export const getNewsByOrder = createAsyncThunk(
  'appNews/getNewsByOrder',
  async (payload: { params: Partial<NewsServicePayloadType['getNews']>; key: string }) => {
    const res = await newsService.getNews<{ data: INews[]; meta: TMeta }>(payload.params);
    return { data: res?.[1], key: payload.key };
  },
);
export const getNewDetail = createAsyncThunk('appNews/getNewDetail', async (payload: string) => {
  const res = await newsService.getNewDetail<{ data: INews }>(payload);
  return res?.[1];
});

export const getCareers = createAsyncThunk(
  'appCategory/getCareers',
  async (payload: NewsServicePayloadType['getCareers']) => {
    const res = await newsService.getCareers<{ data: ICareer[]; meta: TMeta }>(payload);
    return res?.[1];
  },
);
export const getJobDetail = createAsyncThunk(
  'appCategory/getJobDetail',
  async (payload: string) => {
    const res = await newsService.getJobDetail<{ data: ICareer }>(payload);
    return res?.[1];
  },
);
export const newsSlice = createSlice({
  name: 'appNews',
  initialState,
  reducers: {
    setNewsParams: (state, action) => {
      state.newsParams = action.payload;
    },
    setCareerParams: (state, action) => {
      state.careerParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload?.data;
      state.meta = action.payload.meta;
      state.isLoading = false;
    });
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.news = [];
      state.meta = null;
      state.isLoading = false;
    });
    // ----------------- NEW DETAIL ----------------- //
    builder.addCase(getNewDetail.fulfilled, (state, action) => {
      state.newsDetail = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getNewDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNewDetail.rejected, (state, action) => {
      state.newsDetail = null;
      state.isLoading = false;
    });
    // ----------------- CAREERS ----------------- //
    builder.addCase(getCareers.fulfilled, (state, action) => {
      state.careers = action.payload.data;
      state.careerMeta = action.payload.meta;
      state.isLoading = false;
    });
    builder.addCase(getCareers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCareers.rejected, (state, action) => {
      state.careers = [];
      state.careerMeta = null;
      state.isLoading = false;
    });
    // ----------------- NEWS BY ORDER ----------------- //
    builder.addCase(getNewsByOrder.fulfilled, (state, action) => {
      state[action.payload.key] = action.payload.data.data;
    });
    builder.addCase(getNewsByOrder.pending, (state, action) => {});
    builder.addCase(getNewsByOrder.rejected, (state, action) => {
      state.eventNews = [];
      state.inforClosureNews = [];
    });

    // ----------------- JOB DETAIL ----------------- //
    builder.addCase(getJobDetail.fulfilled, (state, action) => {
      state.jobDetail = action.payload.data;
    });
    builder.addCase(getJobDetail.pending, (state, action) => {});
    builder.addCase(getJobDetail.rejected, (state, action) => {
      state.jobDetail = null;
    });
  },
});

export const newsActions = {
  ...newsSlice.actions,
  getNews,
  getNewDetail,
  getCareers,
  getNewsByOrder,
  getJobDetail,
};

export default newsSlice.reducer;
