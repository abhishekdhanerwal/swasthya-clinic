import React from 'react';

import { useRouter } from 'next/router';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import LetterIcon from '../letter-icon';
import { NavList, RouteOptions } from '../navigation-buttons';

import css from './index.module.css';

interface Props {
    open: boolean;
    onClose: () => void;
}

const NavigationDrawer = ({open, onClose}: Props) => {
    const router = useRouter();

    const goToPage = (path: RouteOptions) => {
        router.push(path)
    }

    const selectedPath = router.query.subPage ?? router.pathname.split("/")?.[1] ?? "";

  return (
    <Drawer open={open} onClose={onClose} anchor='right'>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List className={css.listContainer}>
        {NavList.map(({name, route}) => (
          <ListItem key={route} disablePadding onClick={() => goToPage(route)}>
            <ListItemButton>
              <LetterIcon active={selectedPath === route || (route === "/" && !selectedPath)}>{name[0].toUpperCase()}</LetterIcon>
              <ListItemText className={`${css.navItemLabel} ${selectedPath === route || (route === "/" && !selectedPath) ? css.activeNavItem : ''}`} primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className={css.socialMediaContainer}>
        <FacebookIcon style={{color: '#316FF6'}} />
        <InstagramIcon style={{color: '#962fbf'}} />
        <TwitterIcon style={{color: '#1DA1F2'}} />
      </div>
    </Box>
    </Drawer>
  );
};

export default NavigationDrawer;