import { Citys } from '../const';
import { Offer } from '../mocks/offer';

type State = {
  city: Citys,
  offers: Offer[] | null,
};

export type { State };
