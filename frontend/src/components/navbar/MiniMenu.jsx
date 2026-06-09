import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


import { Link, useLocation } from 'react-router';


export default function MiniMenu() {

  const id = 1; // Replace with actual ID when needed
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
                <ListItemButton
          component={Link}
          to="/"
          selected={path === '/'}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/create"
          selected={path === '/create'}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/Edit{id}"
          selected={path === `/Edit${id}`}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemIcon>
            <EditDocumentIcon />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/Delete{id}"
          selected={path === `/Delete${id}`}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ListItemIcon>
            <DeleteSweepIcon fontSize="large" />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </>
  );
}
