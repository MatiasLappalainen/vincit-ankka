import AsyncRouteComponent from './AsyncRouteComponent';

export const Home = AsyncRouteComponent(() => import('./Home'));
export const Form = AsyncRouteComponent(() => import('./FormPage'));