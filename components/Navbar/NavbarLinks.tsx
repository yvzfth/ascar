import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import Link from 'next/link';
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

function NavbarLinks() {
  const router = useRouter();
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
    setPathname(router.pathname);
  }, [router.pathname]);
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
              maxHeight: 48 * 4.5,
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

export default memo(NavbarLinks);
