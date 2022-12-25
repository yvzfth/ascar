import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

interface NavbarLinksProps {
  options: string[];
  getClickedTabPath: (option: string) => string;
}

const ITEM_HEIGHT = 48;

export default function NavbarLinks({
  options,
  getClickedTabPath,
}: NavbarLinksProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    var element = document.getElementById('vert-dots');
    if (element) {
      element.style.rotate = '90deg';
      element.style.transition = ' .5s ease-out';
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
                  selected={
                    getClickedTabPath(option) === window.location.pathname
                  }
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
          let currentPage =
            getClickedTabPath(option) === window.location.pathname;
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
