import type { MetadataRoute } from 'next';
import { homeService } from './services/home';
import { IHeadCategory } from '@/@core/types/home';
import { flattenSiteMapData } from '@/@core/utils/general';

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const [_, res] = await homeService.getHeadCategoriesForSiteMaps<{ data: IHeadCategory[] }>();
  // const [__, { data: dataArticles }] = await newsService.getNews<{ data: INews[] }>();
  const transferRootData = flattenSiteMapData(res?.data, process.env.NEXT_PUBLIC_FRONT_URL);
  return transferRootData?.map((item) => ({
    url: item.url,
    lastModified: new Date(),
  }));
}
