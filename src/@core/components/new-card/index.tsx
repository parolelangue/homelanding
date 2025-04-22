import { WIDTH_MEDIUM } from '@/@core/configs';
import { DATE_FORMATS } from '@/@core/configs/general';
import { EArticleType, INews } from '@/@core/types/news';
import { replaceDomainURL } from '@/@core/utils/general';
import { genContentLang, transferFileName } from '@/@core/utils/transform';
import { Button, Stack, styled, Typography, useTheme } from '@mui/material';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties } from 'react';
import { HeroIcons } from '../icons/heroIcons';
import Image from '../image';
import Video from '../video';

const defaultThumbPath = '/images/pages/articles/default-thumb.jpg';
type Props = {
  data: INews;
  prefixPath?: string;
  smallCard?: boolean;
};

const NewCard = ({ data, prefixPath, smallCard }: Props) => {
  const {
    slug,
    articleInfo,
    memoInfo,
    articleCreatedAt,
    articlesThumbnail,
    articleId,
    type,
    certFileInfo,
    url,
  } = data || {};
  const { t, i18n } = useTranslation('common');
  const theme = useTheme();
  const pathname = usePathname();

  const renderTitle = () => genContentLang(articleInfo, i18n.language);
  const renderContent = () => genContentLang(memoInfo, i18n.language);

  const thumb = replaceDomainURL(
    !articlesThumbnail?.fileUrl || !articlesThumbnail?.fileUrl?.includes('http')
      ? defaultThumbPath
      : articlesThumbnail?.fileUrl,
  );

  const path =
    (prefixPath ? prefixPath : pathname) +
    '/' +
    slug +
    (articleId ? `-${articleId}` : '') +
    (type === EArticleType.Videos ? '?articleType=03' : '');

  const _onDownload = () => {
    if (!certFileInfo) return;
    const a = document.createElement('a');
    a.download = transferFileName(certFileInfo.fileUrl, renderTitle());
    a.href = certFileInfo.fileUrl;
    a.target = '_blank';
    a.click();
  };

  const smallThumbs: CSSProperties = smallCard
    ? {
        paddingBottom: '180px',
      }
    : {};

  const genContent = () => {
    if ([EArticleType.Certificate].includes(type as EArticleType))
      return (
        <>
          {[EArticleType.News, EArticleType.Certificate].includes(type as EArticleType) ? (
            <Image
              thumbDefaultType={
                type === EArticleType.News ? EArticleType.News : EArticleType.Certificate
              }
              imgUrl={thumb}
              alt={renderTitle()}
              thumbStyles={smallThumbs}
            />
          ) : (
            <Video
              imgUrl={thumb}
              alt={renderTitle()}
              isSmall={smallCard}
              thumbStyles={smallThumbs}
            />
          )}
          <Content className={clsx({ small: smallCard })}>
            <Typography className="date">
              {format(
                !articleCreatedAt ? new Date() : new Date(articleCreatedAt),
                DATE_FORMATS.DATE,
              )}
            </Typography>
            <p className="title truncate-text">{renderTitle()}</p>
            <Typography className="desc truncate-text">{renderContent()}</Typography>
            <ViewMore onClick={_onDownload}>
              {t('button.download')}
              <HeroIcons.Download size={16} color={theme.palette.primary.main} />
            </ViewMore>
          </Content>
        </>
      );
    return (
      <Link href={path}>
        {[EArticleType.News].includes(type as EArticleType) ? (
          <Image
            thumbDefaultType={
              type === EArticleType.News ? EArticleType.News : EArticleType.Certificate
            }
            imgUrl={thumb}
            alt={renderTitle()}
            thumbStyles={smallThumbs}
          />
        ) : (
          <Video imgUrl={thumb} alt={renderTitle()} isSmall={smallCard} thumbStyles={smallThumbs} />
        )}
        <Content className={clsx({ small: smallCard })}>
          <Typography className="date">
            {format(!articleCreatedAt ? new Date() : new Date(articleCreatedAt), DATE_FORMATS.DATE)}
          </Typography>
          <p className="title truncate-text">{renderTitle()}</p>
          <Typography className="desc truncate-text">{renderContent()}</Typography>
          <ViewMore>
            {t('button.viewMore')}
            <HeroIcons.ArrowRight size={16} color={theme.palette.primary.main} />
          </ViewMore>
        </Content>
      </Link>
    );
  };

  return <Card>{genContent()}</Card>;
};

const Content = styled(Stack)(({ theme }) => ({
  marginTop: '1rem',

  '.date': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.black400,
  },
  '.title': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    fontWeight: 700,
    color: theme.palette.text.cardTitle,
    margin: '0.5rem 0 0.25rem 0',
    minHeight: '84px',
  },
  '.desc': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.black400,
    minHeight: '72px',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Card = styled('div')(({ theme }) => ({
  borderRadius: '0.75rem',
  padding: '1rem',
  backgroundColor: theme.palette.background.card,
  border: `1px solid ${theme.palette.common.cardBorder}`,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const ViewMore = styled(Button)(({ theme }) => ({
  gap: '0 0.625rem',
  display: 'inline-flex',
  width: 'fit-content',
  fontWeight: 600,
  minWidth: '125px',
  transition: 'all .25s',
  '&:hover': {
    background: 'transparent',
    transform: 'translateX(0.5rem)',
    transition: 'all .25s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default NewCard;
