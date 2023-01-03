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
import Image from 'next/image';
// import firebaseClient from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSession, signOut, signIn } from 'next-auth/react';
import { userAgent } from 'next/server';
const options = ['ARAÇLAR', 'HAKKIMIZDA', 'İLETİŞİM'];
interface NavbarLinksProps {
  options: string[];
  getClickedTabPath: (option: string) => string;
}
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

const ITEM_HEIGHT = 48;

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function NavbarLinks({ options, getClickedTabPath }: NavbarLinksProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [pathname, setPathname] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    var element = document.getElementById('vert-dots');
    if (element) {
      element.style.rotate = '90deg';
      element.style.transition = ' .3s ease-out';
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    var element = document.getElementById('vert-dots');
    if (element) {
      element.style.rotate = '0deg';
      element.style.transition = ' .5s ease-out';
    }
    setAnchorEl(null);
  };
  React.useEffect(() => {
    if (isBrowser()) setPathname(window.location.pathname);
  }, [setPathname]);
  return (
    <>
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
          <MoreVertIcon id='vert-dots' className='text-4xl' />
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
              <Link key={option} href={getClickedTabPath(option)}>
                <MenuItem
                  selected={getClickedTabPath(option) === pathname}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              </Link>
            );
          })}
        </Menu>
      </div>
      <div className='max-lg:hidden space-x-4'>
        {options.map((option) => {
          let currentPage = getClickedTabPath(option) === pathname;
          if (currentPage)
            return (
              <Link key={option} href={getClickedTabPath(option)}>
                <Button color='inherit'>{option}</Button>
              </Link>
            );
          else
            return (
              <Link key={option} href={getClickedTabPath(option)}>
                <Button color='error'>{option}</Button>
              </Link>
            );
        })}
      </div>
    </>
  );
}

export function AccountMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    signOut();
  };

  if (session === null)
    return (
      <div>
        <Button
          variant='outlined'
          color='error'
          className={
            nunito.className +
            ' capitalize text-md text-gray-100 hidden md:flex'
          }
          endIcon={<Login />}
          onClick={() => signIn()}
        >
          Login
        </Button>
        <Button
          variant='outlined'
          color='error'
          className={
            nunito.className +
            ' text-gray-100 px-0 py-2 w-10 max-w-[52px] min-w-[52px] md:hidden'
          }
          onClick={() => signIn()}
        >
          <Login className='m-0 p-0' />
        </Button>
      </div>
    );
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
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
              {session?.user?.image ? (
                <Image
                  src={String(session!.user!.image)}
                  width={32}
                  height={32}
                  alt={'userImg'}
                />
              ) : (
                session?.user?.name?.charAt(0) ?? 'A'
              )}
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
            {session?.user?.image ? (
              <Image
                src={String(session?.user?.image)}
                width={32}
                height={32}
                alt={'userImg'}
              />
            ) : (
              session?.user?.name?.charAt(0) ?? 'A'
            )}
          </Avatar>{' '}
          {session?.user?.name}
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
  );
}

const Navbar = () => {
  return (
    <div
      className={
        'sticky backdrop-blur-3xl top-0 left-0 z-50  flex py-4 px-8 w-screen items-center justify-between '
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
