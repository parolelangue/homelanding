// import { DEFAULT_THUMB } from '@/@core/constants/general';
// import { IHeadCategory } from '@/@core/types/home';
// import { findNodeByKey } from '@/@core/utils/general';
// import { sharedMetadata } from '@/app/shared-metadata';

// import RenderPage from '@/views/category/RenderPage';
// import { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//   params: Promise<{ category: string; page: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

// export const revalidate = 60;

// export const dynamicParams = true;

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const { category, page } = await params;
//   const previousImages = (await parent).openGraph?.images || [];
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_IN_SERVER}/pub/category/articles`, {
//     headers: { 'Content-Type': 'application/json' },
//     cache: 'no-store',
//     next: { revalidate: 60 },
//   });

//   const resData = await res?.json();
//   const data = resData?.data as IHeadCategory[];
//   const nodeData = findNodeByKey(data, page);

//   return {
//     title: nodeData?.titleInfo?.vi || 'ASAM',
//     description: sharedMetadata?.description,
//     openGraph: {
//       title: nodeData?.titleInfo?.vi || 'ASAM',
//       description: sharedMetadata?.description,
//       url: `${process.env.NEXT_PUBLIC_FRONT_URL}/${category}/${page}`,
//       type: 'website',
//       locale: 'en_US',
//       siteName: 'ASAM',
//       images: [DEFAULT_THUMB, ...previousImages],
//     },
//   };
// }

// const Page = () => {
//   return <RenderPage />;
// };

// export default Page;
