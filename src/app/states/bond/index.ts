import { IBond, IBondHistory } from '@/@core/types/bond';
import { TMeta } from '@/@core/types/general';

type BondState = {
  bonds: IBond[] | [];
  bondsHistory: IBondHistory[] | [];
  bondDetail: IBond | null;
  bondsMeta: TMeta | null;
  bonsLoading: boolean;
};

const initialBondState: BondState = {
  bonds: [],
  bondsHistory: [],
  bondDetail: null,
  bondsMeta: null,
  bonsLoading: false,
};

export default initialBondState;
