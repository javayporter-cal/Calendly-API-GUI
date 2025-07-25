import { Box } from '@mui/material';
import SidebarButtonWithModal from './SidebarButtonWithModal';

const Sidebar = () => {
  return (
    <Box p={2} flex={1} borderRight="1px solid #ccc">
      <SidebarButtonWithModal
        buttonLabel="Create Event Type"
        requestUrl="https://api.calendly.com/event_types"
        title="Create Event Type"
      />

      <SidebarButtonWithModal
        buttonLabel="Create Single-Use Link"
        requestUrl="https://api.calendly.com/scheduling_links"
        title="Create Scheduling Link"
        fields={[{ label: 'Event Type URI', key: 'event_type', required: true }]}
        buildBody={(owner, fieldValues) => ({
          owner,
          event_type: fieldValues.event_type,
        })}
      />
    </Box>
  );
};

export default Sidebar;
