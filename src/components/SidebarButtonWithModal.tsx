import React, { useState } from 'react';
import { Button } from '@mui/material';
import ReusablePostModal from './PostEventModal';

type SidebarButtonWithModalProps = {
  buttonLabel: string;
  requestUrl: string;
  title: string;
  fields?: { label: string; key: string; required?: boolean }[];
  buildBody?: (owner: string, fieldValues: Record<string, string>) => Record<string, any>;
};

const SidebarButtonWithModal: React.FC<SidebarButtonWithModalProps> = ({
  buttonLabel,
  requestUrl,
  title,
  fields,
  buildBody,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setModalOpen(true)} sx={{ mb: 1, display: 'block' }}>
        {buttonLabel}
      </Button>

      <ReusablePostModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        requestUrl={requestUrl}
        title={title}
        fields={fields}
        buildBody={buildBody}
      />
    </>
  );
};

export default SidebarButtonWithModal;
