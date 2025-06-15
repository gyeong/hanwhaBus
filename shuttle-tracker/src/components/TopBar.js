import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function TopBar({ onSelectRoute }) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h6" style={{ marginRight: '20px' }}>
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onSelectRoute('yeouinaru')}>
          여의나루행
        </Button>
        <Button variant="outlined" color="primary" onClick={() => onSelectRoute('saetgang')} style={{ marginLeft: '10px' }}>
          샛강행
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
