import { Nunito } from '@next/font/google';
import { Cinzel } from '@next/font/google';
import styles from '../styles/Home.module.css';
import IconButton from '@mui/material/IconButton';
import Login from '@mui/icons-material/Login';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { UserContext, useAuth } from '../context';
import Image from 'next/image';
import firebaseClient from '../firebaseClient';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from 'next/router';
const options = ['ARAÇLAR', 'HAKKIMIZDA', 'İLETİŞİM'];

const getClickedTabPath = (option: string): string => {
  if (option === 'İLETİŞİM') {
    return '/contact';
  } else if (option === 'HAKKIMIZDA') {
    return '/about';
  } else if (option === 'ARAÇLAR') {
    return '/cars';
  }
  return '/';
};
const nunito = Nunito({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'] });
export function AccountMenu() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    const provider = new firebaseClient.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signOut()
      .then(function (result) {
        setUser(null);

        router.push('/');
      });
  };

  if (user === null)
    return (
      <Link href={'/login'}>
        <Button
          variant='outlined'
          color='error'
          className={nunito.className + ' capitalize text-lg text-gray-100'}
          children={'Login'}
          endIcon={<Login />}
        />
      </Link>
    );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <React.Fragment>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
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
                <Image
                  src={user.photoUrl}
                  width={32}
                  height={32}
                  alt={'userImg'}
                />
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
            <Avatar>
              <Image
                src={user.photoUrl}
                width={32}
                height={32}
                alt={'userImg'}
              />
            </Avatar>{' '}
            {user.name}
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <Settings fontSize='small' />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </UserContext.Provider>
  );
}

const Navbar = () => {
  const NavbarLinks = dynamic(() => import('./NavbarLinks'), {
    ssr: false,
  });
  return (
    <div
      className={
        'flex p-4 w-screen items-center justify-center  md:px-6 lg:px-8 xl:px-12 gap-24 md:gap-48 lg:gap-28 xl:gap-48'
      }
    >
      <div className='max-lg:hidden'>
        <Link href={'/'}>
          <div
            className={
              styles.thirteen + ' ' + cinzel.className + ' text-red-500'
            }
          >
            AsCar
          </div>
        </Link>
      </div>

      <NavbarLinks options={options} getClickedTabPath={getClickedTabPath} />
      <div className='lg:hidden'>
        <Link href={'/'}>
          <div
            className={
              styles.thirteen + ' ' + cinzel.className + ' text-red-500'
            }
          >
            AsCar
          </div>
        </Link>
      </div>
      <AccountMenu />
    </div>
  );
};

export default Navbar;
