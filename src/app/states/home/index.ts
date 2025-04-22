import { IHeadCategory, IMainContent } from '@/@core/types/home';

type HomeState = {
  mainContent: IMainContent | null;
  headCategories: IHeadCategory[] | [];
};

const initialHomeState: HomeState = {
  mainContent: null,
  headCategories: [],
};

export default initialHomeState;
