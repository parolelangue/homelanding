import { Box } from '@mui/material';
import { AppBarContentProps } from '@/domains/types/app-bar-content.type';

const AppBarContentHorizontal = (props: AppBarContentProps) => {
  const { settings, saveSettings, children } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <ModeToggler settings={settings} saveSettings={saveSettings} />
      <NotificationDropdown settings={settings} />
      <UserDropdown settings={settings} /> */}
    </Box>
  );
};

export default AppBarContentHorizontal;
