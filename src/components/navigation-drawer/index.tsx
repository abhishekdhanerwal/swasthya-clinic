import React, { Fragment, useState } from 'react';
import Image from "next/image";

import { useRouter } from 'next/router';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Collapse, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { useNavItems } from '@/hooks/useNavItems';

import css from './index.module.css';
import { useFonts } from '@/hooks/useFonts';

interface Props {
  open: boolean;
  onClose: () => void;
}

const NavigationDrawer = ({ open, onClose }: Props) => {
  const router = useRouter();
  const { navList } = useNavItems();

  const { robotoBold, playpenSans } = useFonts();

  const [openServices, setOpenServices] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setOpenServices(!openServices);
    e.stopPropagation();
  };

  const goToPage = (path: string) => {
    router.push(path)
  }

  const selectedPath = router.query.type ? `/${router.pathname.split('/')[1]}` : router.pathname ?? "";

  return (
    <Drawer open={open} onClose={onClose} anchor='right' classes={{paper: css.drawer}}>
      <Box sx={{width: 275, mt: 2, position: 'relative', height: 'calc(100vh - 16px)' }} role="presentation" onClick={onClose}>
        <div className={css.logoTitle}>
          <div>
          <Image className={css.logo} alt='logo' width={48} height={40} src={'/logo.png'} />
          </div>
          <div className={css.title}>
            <span className={robotoBold.className}>Dr. Sonia Malik</span>
            <span className={playpenSans.className}>Gynaecologist</span>
          </div>
        </div>
        <List
          sx={{ width: '100%', maxWidth: 360}}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {navList.map(({ name, route, navIcon, child }) => (<Fragment key={route}><ListItemButton className={`${selectedPath === route ? css.activeNavItem : (route === "/" && !selectedPath) ? css.activeNavItem : ''} `} onClick={child ? handleClick : () => goToPage(route)}>
            <ListItemIcon className={`${selectedPath === route ? css.activeNavItemIcon : (route === "/" && !selectedPath) ? css.activeNavItemIcon : ''} `}>
              {navIcon}
            </ListItemIcon>
            <ListItemText primary={name} />
            {child ? (openServices ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
            <Collapse in={openServices} timeout="auto" unmountOnExit>
              {child?.length ? <List component="div" disablePadding>
                <ListItemButton className={router.pathname === '/services' ? css.activeNavItem : ''} sx={{ pl: 4 }} onClick={() => goToPage(`/services`)}>
                  <ListItemIcon sx={{minWidth: 32}} className={router.pathname === '/services' ? css.activeNavItemIcon : ''}>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Services List"} />
                </ListItemButton>
                {child?.map(childItem => (
                  <ListItemButton key={childItem.route} className={router.query.type === childItem.route ? css.activeNavItem : ''} sx={{ pl: 4 }} onClick={() => goToPage(`/services/${childItem.route}`)}>
                    <ListItemIcon sx={{minWidth: 32}} className={router.query.type === childItem.route ? css.activeNavItemIcon : ''}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={childItem.label} />
                  </ListItemButton>))}
              </List> : null}
            </Collapse>
          </Fragment>))}
        </List>
        <Divider className={css.divider} />
        <div className={css.socialMediaContainer}>
          <FacebookIcon style={{ color: '#316FF6' }} />
          <InstagramIcon style={{ color: '#962fbf' }} />
          <TwitterIcon style={{ color: '#1DA1F2' }} />
        </div>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;