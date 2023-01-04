import React, { memo, useState } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';

import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';

import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

function AccountButton() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
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
                session?.user?.name?.charAt(0)
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
              session?.user?.name?.charAt(0)
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

export default memo(AccountButton);
