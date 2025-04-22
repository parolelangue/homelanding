import HomePage from '@/views/home';
import { Metadata } from 'next';
import { sharedMetadata } from './shared-metadata';

export const metadata: Metadata = {
  ...sharedMetadata,
  // title: 'ASAM | Home',
};
export const revalidate = 60;

export default async function Home() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_IN_SERVER}/pub/main-content`, {
  //   cache: 'no-store',
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to fetch content on server!');
  // }
  // const data = await res?.json();

  return <HomePage />;
}
