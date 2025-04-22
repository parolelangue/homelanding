import { WIDTH_MEDIUM } from '@/@core/configs';
import { IHeadCategory } from '@/@core/types/home';
import { useAppSelector } from '@/infra/store';
import { Divider, Grid, Stack, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import GridPolygon from '../../icons/GridPolygon';
import GridPolygonTop from '../../icons/GridPolygonTop';
import LogoMain from '../../icons/LogoMain';
import SocialFacebook from '../../icons/SocialFacebook';
import SocialLinked from '../../icons/SocialLinked';
import SocialYoutube from '../../icons/SocialYoutube';
import MainWrapper from '../sections/main-wrapper';
import { EHomePageContactInfoKey, ETemplateDisplay, IHomeInfo } from '@/@core/types/general';
import { genContentLang } from '@/@core/utils/transform';

const Wrap = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.text.black900,
  overflow: 'hidden',
  position: 'relative',
  padding: '70px 0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '70px 0.5rem',
  },
}));
const Top = styled(Stack)(({ theme }) => ({
  gap: '0 1.5rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const Head = styled(Stack)(({ theme }) => ({
  minWidth: 200,
  marginBottom: '1rem',
  '.label': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.neutral950,
    marginBottom: '0.325rem',
  },
  '.follow': {
    marginTop: '1.5rem',
    marginBottom: '0.625rem',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const Label = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  color: theme.palette.text.neutral950,
  marginBottom: '0.5rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
  },
}));
const List = styled('ul')(({ theme }) => ({
  marginTop: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  gap: '0.5rem 0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
  },
}));
const ListItem = styled('li')(({ theme }) => ({
  padding: '0.25rem 0',
  fontSize: '1rem',
  lineHeight: '1.25rem',
  width: 'fit-content',
  position: 'relative',
  fontWeight: 400,
  color: theme.palette.text.neutral950,
  transition: 'all .25s',
  '&:after': {
    content: `''`,
    width: '0%',
    height: '1px',
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: 0,
    left: 'auto',
    right: 0,
    transition: 'all .25s',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    transition: 'all .25s',
    '&:after': {
      width: '100%',
      left: 0,
      right: 'auto',
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    textAlign: 'left',
  },
}));
const Body = styled(Grid)(({ theme }) => ({
  marginTop: '1.5rem',
  '.title': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 600,
    color: theme.palette.text.neutral900,
    marginBottom: '0.5rem',
  },
  '.item': {
    width: '100%',
  },
  '.link': {
    fontSize: '1rem',
    lineHeight: '1.75rem',
    fontWeight: 600,
    color: theme.palette.text.black800,
    marginBottom: '0.5rem',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '.item': {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}));
const SocialItem = styled(Link)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  margin: '1.5rem 0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Bottom = styled(Grid)(({ theme }) => ({
  '.text': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.neutral950,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const GridOverlayBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const GridOverlayTop = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type FooterProps = {
  footerContent?: any;
};

const Footer = (props: FooterProps) => {
  const headCategories = useAppSelector((state) => state.home.headCategories);
  const { t, i18n } = useTranslation('common');
  const homeInfo = useAppSelector((state) => state.category.homeInfo) as IHomeInfo[];

  const fbUrlData = homeInfo?.find((item) => item.dictCode === EHomePageContactInfoKey.FBUrl);
  const linkedUrlData = homeInfo?.find(
    (item) => item.dictCode === EHomePageContactInfoKey.LinkedUrl,
  );
  const youtubeUrlData = homeInfo?.find(
    (item) => item.dictCode === EHomePageContactInfoKey.YoutubeUrl,
  );

  const phone01Data = homeInfo?.find((item) => item.dictCode === EHomePageContactInfoKey.Phone01);
  const phone02Data = homeInfo?.find((item) => item.dictCode === EHomePageContactInfoKey.Phone02);
  const phone03Data = homeInfo?.find((item) => item.dictCode === EHomePageContactInfoKey.Phone03);
  const phone04Data = homeInfo?.find((item) => item.dictCode === EHomePageContactInfoKey.Phone04);

  const socials = [
    {
      label: 'Facebook',
      Icon: SocialFacebook,
      href: genContentLang(fbUrlData?.dictLabelInfo, i18n.language),
    },
    {
      label: 'Youtube',
      Icon: SocialYoutube,
      href: genContentLang(youtubeUrlData?.dictLabelInfo, i18n.language),
    },
    {
      label: 'Linked',
      Icon: SocialLinked,
      href: genContentLang(linkedUrlData?.dictLabelInfo, i18n.language),
    },
  ];

  return (
    <Wrap>
      <MainWrapper sxProps={{ zIndex: 2, position: 'relative' }}>
        <Top direction={{ xs: 'column', sm: 'column', md: 'row' }}>
          <Head
            direction={{ xs: 'row', sm: 'row', md: 'column' }}
            alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'space-between', sm: 'space-between', md: 'flex-start' }}
          >
            <LogoMain />
            <Stack className="follow">
              <p className="label">{t('common.followUs')}</p>
              <Stack direction={'row'} alignItems={'center'} gap={4} className="socials">
                {socials.map(({ Icon, label, href }, index) => (
                  <SocialItem title={label} href={href || ''} key={index} target="_blank">
                    <Icon />
                  </SocialItem>
                ))}
              </Stack>
            </Stack>
          </Head>
          <Body container rowSpacing={{ xs: 6, sm: 46 }} columnSpacing={4}>
            {headCategories?.map((x: IHeadCategory, index) => (
              <Grid className="item" xs={6} sm={6} md={6} lg={3} item key={index}>
                <Label>
                  {i18n.language === 'kr' ? x?.titleInfo?.ko : x?.titleInfo?.[i18n.language]}
                </Label>
                <List>
                  {x?.subs?.map((nav, index) => {
                    const ancestor = x?.ancestor;
                    const genPath = {
                      [ETemplateDisplay.DetailPageArticle]:
                        '/' +
                        ancestor +
                        '/' +
                        nav?.ancestorPath +
                        '/' +
                        nav?.ancestorPath +
                        '-' +
                        nav?.id +
                        '?articlePage=CATEGORY',
                      [ETemplateDisplay.Link]: nav?.url,
                    };
                    const defaultPath = '/' + ancestor + '/' + nav?.ancestorPath;
                    return (
                      <ListItem key={index}>
                        <Link href={genPath?.[nav.templateDisplay] || defaultPath}>
                          {i18n.language === 'kr'
                            ? nav?.titleInfo?.ko
                            : nav?.titleInfo?.[i18n.language]}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            ))}
          </Body>
        </Top>
        <DividerWrapper />
        <Bottom container justifyContent={'space-between'} spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <p className="text">{t('common.addressAsam')}</p>
          </Grid>
          <Grid item xs={12} md={4} lg={4} marginBottom={{ xs: '1rem', sm: '1rem', md: 0 }}>
            <Stack
              direction={{ xs: 'column', sm: 'column', md: 'row' }}
              alignItems={'flex-start'}
              justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'center' }}
              gap={2}
            >
              <p className="text">{t('common.hotline')}:</p>
              <Stack gap={1}>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <a
                    className="text"
                    href={'tel:' + genContentLang(phone01Data?.dictLabelInfo, i18n.language)}
                  >
                    {genContentLang(phone01Data?.dictLabelInfo, i18n.language)}
                  </a>
                  <p className="text">|</p>
                  <a
                    className="text"
                    href={'tel:' + genContentLang(phone02Data?.dictLabelInfo, i18n.language)}
                  >
                    {genContentLang(phone02Data?.dictLabelInfo, i18n.language)}
                  </a>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <a
                    className="text"
                    href={'tel:' + genContentLang(phone03Data?.dictLabelInfo, i18n.language)}
                  >
                    {genContentLang(phone03Data?.dictLabelInfo, i18n.language)}
                  </a>
                  <p className="text" style={{ margin: '0 0.125rem' }}>
                    |
                  </p>
                  <a
                    className="text"
                    href={'tel:' + genContentLang(phone04Data?.dictLabelInfo, i18n.language)}
                  >
                    {genContentLang(phone04Data?.dictLabelInfo, i18n.language)}
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <p className="text">{t('common.copyright')}</p>
          </Grid>
        </Bottom>
      </MainWrapper>
      <GridOverlayBottom>
        <GridPolygon />
      </GridOverlayBottom>
      <GridOverlayTop>
        <GridPolygonTop />
      </GridOverlayTop>
    </Wrap>
  );
};

export default Footer;
