// Places
export const destinationOptions: string[] = [
  'India',
  'Germany',
  'United Kingdom',
  'United States',
  'Australia',
];

// Interests
export const interestOptions: string[] = [
  'Adventures & Outdoors',
  'Heritage & Culture',
  'Nature & Landscapes',
  'Wildlife & Safaris',
  'Wine & Food',
  'Beaches',
];

// Travel Group Size
export const travelSizeOptions: string[] = [
  '1 traveler',
  '2 travelers',
  '3 travelers',
  '4 travelers',
  '5 travelers',
  '6 travelers',
  '6+ travelers',
];

// Budget Options
export const budgetOptions: string[] = [
  '$4000 - $5000',
  '$5000 - $6000',
  '$6000 - $7000',
  '$7000 - $8000',
  '$8000 - $10000',
  '$10000+',
];

// Travel Dates
export const whenOptions: string[] = ['October 2023', 'November 2023'];

// Travel Stages
export const stagesOptions: string[] = [
  'Still dreaming / researching',
  'Definitely traveling, need destination expertise',
  'I want to book a trip',
];

interface User {
  username: string;
  password: string;
}

//Admin config
export const adminConfig: User = {
  username: 'admin',
  password: 'admin',
};
