import { NavLink } from 'react-router-dom';

import { HeaderWrapper, Container, LogoWrapper, MenuList, MenuElement } from '../styles';

const Header = () => {
  const menu = [
    {
      link: 'Все заявки',
      href: '/'
    },
    {
      link: 'Создание заявки',
      href: '/create'
    }
  ];

  const menuList = <MenuList>
    { menu.map((menuItem) => (
      <MenuElement key={menuItem.link}>
        <NavLink
          to={ menuItem.href }
          className={ ({ isActive }) => (isActive ? 'active' : '') }
        >
          {menuItem.link}
        </NavLink>
      </MenuElement>
    ))}
  </MenuList>;

  return (
    <HeaderWrapper>
      <Container $flex $alignCenter $spaceBetween>
        <NavLink to="/">
          <LogoWrapper/>
        </NavLink>
        {menuList}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
