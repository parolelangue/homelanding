import { Box, Button, styled, TextField } from '@mui/material';
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import DatePickerBase, {
  ReactDatePicker,
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';
import { StrictModifierNames } from 'react-popper';
import { HiMiniCalendar } from 'react-icons/hi2';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import DatePickerWrapper from '@/@core/style-libs/react-datepicker';
import { HeroIcons } from '../icons/heroIcons';

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem',
  borderBottom: `1px solid ${theme.palette.common.gray}`,
  marginBottom: '0.5rem',
  '& .modify-date': {
    width: '1rem',
    height: '1rem',
    cursor: 'pointer',
    userSelect: 'none',
  },
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('md')]: {},
}));
const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('md')]: {},
}));
const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  span: {
    color: theme.palette.common.black,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 600,
  },
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('md')]: {},
}));
const Footer = styled(Box)(({ theme }) => ({
  '&:after': {
    content: `""`,
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.common.gray,
    bottom: '2.025rem',
    left: 0,
    position: 'absolute',
  },
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('md')]: {},
}));
const TodayButton = styled(Button)(({ theme }) => ({
  marginBottom: '0.25rem',
  transform: 'translateX(5.938rem)',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('md')]: {},
}));

type Props = {
  selected: Date | string | null;
  dateFormat?: string;
  placeholder?: string;
  name?: string;
  onChange: (data: Date) => void;
  selectsStart?: boolean;
} & ReactDatePickerProps;

const DatePicker: React.FC<Props> = ({
  selected,
  dateFormat,
  placeholder,
  name,
  onChange,
  selectsStart,
  ...rest
}) => {
  const datePickerRef = useRef<ReactDatePicker<StrictModifierNames, undefined>>(null);

  const renderCalendarContainer = useCallback(
    ({ children }: { children: ReactNode }) => {
      return (
        <div className="react-datepicker">
          {children}
          <Footer>
            {/* <TodayButton
              onClick={() => {
                onChange(new Date());
                datePickerRef.current?.setOpen(false);
              }}
              size="small"
              variant="text"
            >
              Today
            </TodayButton> */}
          </Footer>
        </div>
      );
    },
    [selected, datePickerRef.current],
  );
  const renderCalendarHeader = useCallback(
    ({
      date,
      decreaseMonth,
      increaseMonth,
      increaseYear,
      decreaseYear,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled,
    }: ReactDatePickerCustomHeaderProps) => {
      const iconProps = {
        className: 'modify-date',
        color: '#949699',
      };
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return (
        <Header>
          <IconBox>
            <MdKeyboardDoubleArrowLeft onClick={decreaseYear} {...iconProps} />
            <MdOutlineKeyboardArrowLeft onClick={decreaseMonth} {...iconProps} />
          </IconBox>
          <DateBox>
            <span>{month}</span>
            <span> {year}</span>
          </DateBox>
          <IconBox>
            <MdOutlineKeyboardArrowRight onClick={increaseMonth} {...iconProps} />
            <MdKeyboardDoubleArrowRight onClick={increaseYear} {...iconProps} />
          </IconBox>
        </Header>
      );
    },
    [],
  );

  return (
    <DatePickerWrapper>
      <DatePickerBase
        popperPlacement="bottom-start"
        ref={datePickerRef}
        selectsStart={selectsStart || true}
        selected={selected ? new Date(selected as string) : null}
        dateFormat={dateFormat || 'yyyy-MM-dd'}
        dropdownMode="select"
        className="datepicker"
        calendarContainer={renderCalendarContainer}
        renderCustomHeader={renderCalendarHeader}
        placeholderText={placeholder}
        customInput={
          <PickersComponent
            placeholder={placeholder as string}
            registername={name as string}
            showIcon={rest.showIcon}
          />
        }
        onChange={onChange}
        {...rest}
      />
    </DatePickerWrapper>
  );
};

const PickersComponent = forwardRef(
  (
    {
      showIcon = true,
      ...props
    }: { placeholder?: string; registername: string; showIcon?: boolean },
    ref,
  ) => {
    return (
      <TextField
        inputRef={ref}
        fullWidth
        placeholder={props?.placeholder}
        {...props}
        sx={{ width: '100%' }}
        error={(props as any).error}
        InputProps={{
          startAdornment: showIcon ? <HeroIcons.Date /> : undefined,
        }}
      />
    );
  },
);

PickersComponent.displayName = 'PickersComponent';

export default DatePicker;
