import FacebookIcon from '@/@core/components/icons/FacebookIcon';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import ShareIcon from '@/@core/components/icons/ShareIcon';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { styled, Tooltip, useTheme } from '@mui/material';
import toast from 'react-hot-toast';
import { useTranslation } from 'next-i18next';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

const SocialShare = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const _onShareCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success(t('common.copyArticleLinkSuccess'));
      })
      .catch((error) => {
        toast.error(t('common.copyArticleLinkFailed'));
      });
  };

  const socialList = [
    { label: t('common.share'), onClick: _onShareCopy, icon: <ShareIcon /> },
    {
      label: t('common.facebook'),
      icon: <FacebookIcon />,
      type: 'FB',
    },
    {
      label: t('common.twitter'),
      icon: (
        <HeroIcons.Twitter
          size={16}
          fill={theme.palette.common.white}
          stroke={theme.palette.common.white}
        />
      ),
      type: 'TW',
    },
    {
      label: t('common.linkedin'),
      icon: (
        <HeroIcons.LinkedIn
          size={16}
          fill={theme.palette.common.white}
          stroke={theme.palette.common.white}
        />
      ),
      type: 'LK',
    },
  ];

  return (
    <SocialList>
      {socialList.map((item, index) => (
        <Tooltip key={index} title={item.label}>
          {item.type === 'FB' ? (
            <SocialItem key={index}>
              <FacebookShareButton
                url={process.env.NEXT_PUBLIC_FRONT_URL + window.location.pathname}
              >
                {item.icon}
              </FacebookShareButton>
            </SocialItem>
          ) : item.type === 'TW' ? (
            <SocialItem key={index}>
              <TwitterShareButton
                url={process.env.NEXT_PUBLIC_FRONT_URL + window.location.pathname}
              >
                {item.icon}
              </TwitterShareButton>
            </SocialItem>
          ) : item.type === 'LK' ? (
            <SocialItem key={index}>
              <LinkedinShareButton
                url={process.env.NEXT_PUBLIC_FRONT_URL + window.location.pathname}
              >
                {item.icon}
              </LinkedinShareButton>
            </SocialItem>
          ) : (
            <SocialItem onClick={item.onClick} key={index}>
              {item.icon}
            </SocialItem>
          )}
        </Tooltip>
      ))}
    </SocialList>
  );
};

const SocialList = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 0.5rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const SocialItem = styled('li')(({ theme }) => ({
  width: '2rem',
  height: '2rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  button: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '&:after': {
    borderRadius: '50%',
    content: `''`,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.text.black900,
    transition: 'all .25s',
  },
  svg: {
    position: 'relative',
    zIndex: 2,
  },
  '&:hover': {
    '&:after': {
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.5),
      transform: 'scale(1.2)',
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default SocialShare;
