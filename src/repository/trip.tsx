import { Trip } from '../Trip';

const ENTITY_NAME = 'trips';

const fetchAllTrips = () => {
  const data = localStorage.getItem(ENTITY_NAME) || '[]';
  return JSON.parse(data);
};

const saveTrip = (trip: Trip) => {
  const trips = fetchAllTrips();
  trips.push(trip);
  localStorage.setItem(ENTITY_NAME, JSON.stringify(trips));
};

export { fetchAllTrips, saveTrip };
