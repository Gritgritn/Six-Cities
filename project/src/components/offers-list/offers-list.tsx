import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offer';

type OffersListProps = {
  offers: Offer[],
  handleActiveOfferSelect: (offer: Offer | null) => void,
}

function OffersList({ offers, handleActiveOfferSelect }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onPlaceCardSelect={handleActiveOfferSelect}
        />
      ))}
    </>
  );
}

export default OffersList;
