import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: payment,
    link: '/Home',
  },

  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: dashboard,
    link: '/',
  
  },
  
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  
];
