import { Fragment, useMemo, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Box, Button, useTheme } from '@mui/material';

import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Stack } from '@mui/material';
import { HeroIcons } from '../icons/heroIcons';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
const CloseBtn = styled(Button)(({ theme }) => ({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  minWidth: '2.5rem',
  backgroundColor: 'transparent',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const ErrMsg = styled('p')(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 400,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Hint = styled('p')(({ theme }) => ({
  color: '#D4D5D9',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 400,
  span: {
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Wrap = styled('div')(({ theme }) => ({
  backgroundColor: '#080808',
  borderRadius: '0.325rem',
  width: '100%',
  overflow: 'hidden',
  minHeight: '140px',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const UploadContent = styled(Stack)(({ theme }) => ({
  cursor: 'pointer',
  height: '100%',
  '.base': {
    borderRadius: '0.325rem',

    border: '1px dashed ' + theme.palette.text.black800,
    padding: '1.5rem',
    backgroundColor: '#080808',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: '0.625rem 0',
    height: '100%',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const FileContent = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '0 0.75rem',
  flexDirection: 'row',
  height: '100%',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type FileUploaderProps = {
  onChange: (file: File | null) => void;
  multiple?: boolean;
  errMsg?: string;
  error?: boolean;
};

const FileUploader = ({ onChange, multiple = false, errMsg, error }: FileUploaderProps) => {
  // ** State
  const [files, setFiles] = useState<File[]>([]);

  const { t } = useTranslation();

  const theme = useTheme();

  // ** Hooks
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    multiple: multiple,
    maxFiles: 2,
    maxSize: 5000000, // 5MB
    accept: {
      'application/pdf': ['.pdf'],
    },
    onDrop: async (acceptedFiles: File[]) => {
      //   setFiles(acceptedFiles.map((file: any) => Object.assign(file)));
      //   const result = await dispatch(uploadCVProfile(acceptedFiles[0]));
      //   const { payload } = result;
      //   if (payload) {
      //     setValue('cvFile', payload?.data?.id);
      //   }
      onChange(acceptedFiles[0]);
      setFiles(acceptedFiles);
    },
    onDropRejected: () => {
      toast.error(t('messages.fileUploadFailed'), {
        duration: 2000,
      });
    },
  });

  const _onRemoveFile = () => {
    setFiles([]);
    onChange(null);
  };

  const focusedStyle = {
    borderColor: theme.palette.primary.main,
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.3),
  };

  const acceptStyle = {
    borderColor: theme.palette.primary.main,
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.3),
  };

  const rejectStyle = {
    borderColor: theme.palette.error.main,
    backgroundColor: hexToRGBA(theme.palette.error.main, 0.3),
  };

  const style: any = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <Fragment>
      <Wrap>
        {!!!files?.length && (
          <UploadContent>
            <div className="base" {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <HeroIcons.Upload size={24} color={theme.palette.common.white} />
              <Hint dangerouslySetInnerHTML={{ __html: t('careerPage.addOrDraggbleFile') }} />
            </div>
          </UploadContent>
        )}
        {!!files?.length && (
          <FileContent>
            <Hint>{files?.[0]?.name}</Hint>
            <CloseBtn onClick={_onRemoveFile}>
              <HeroIcons.Close
                size={12}
                style={{ minWidth: '0.75rem' }}
                color={theme.palette.common.white}
              />
            </CloseBtn>
          </FileContent>
        )}
      </Wrap>
      {error && <ErrMsg>{errMsg}</ErrMsg>}
    </Fragment>
  );
};

export default FileUploader;
