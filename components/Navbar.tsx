import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Link from 'next/link';

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}

        <Tooltip title='Account settings'>
          <IconButton
            className='ml-2'
            onClick={handleClick}
            size='small'
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className='bg-red-500' sx={{ width: 32, height: 32 }}>
              M
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        className='ml-0'
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        marginThreshold={0}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },

            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 16,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const options = ['Kirala', 'Satın Al', 'Araçlarımız', 'İletişim'];

const getClickedTabPath = (option: string): string => {
  let path = '/';
  if (option === 'İletişim') {
    path = '/contact';
  } else if (option === 'Kirala') {
    path = '/rent';
  } else if (option === 'Satın Al') {
    path = '/buy';
  } else if (option === 'Araçlarımız') {
    path = '/gallery';
  }
  return path;
};

const ITEM_HEIGHT = 48;

export function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='lg:hidden'>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
        color='error'
      >
        <MoreVertIcon className='text-4xl' />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              key={option}
              selected={option === 'Anasayfa'}
              onClick={handleClose}
            >
              <Link href={getClickedTabPath(option)}>{option}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

const Navbar = () => {
  return (
    <div
      className={
        'flex p-4 w-screen items-center justify-center  md:px-6 lg:px-8 xl:px-12 gap-24 md:gap-48 lg:gap-28 xl:gap-48'
      }
    >
      <div className='max-lg:hidden'>
        <Link href={'/'}>
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
      <div className='max-lg:hidden'>
        {options.map((option) => {
          return (
            <Button key={option} color='error'>
              <Link href={getClickedTabPath(option)}>{option}</Link>
            </Button>
          );
        })}
      </div>
      <LongMenu />
      <div className='lg:hidden'>
        <Link href={'/'}>
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
      <AccountMenu />
    </div>
  );
};

export default Navbar;
