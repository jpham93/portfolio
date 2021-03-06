import React from 'react';
import {
  Sidebar,
  Menu,
  Icon,
} from 'semantic-ui-react';
import './Components.css';

/**
 * Sidebar style
 *
 * @type {{color: string, background: string}}
 */
const sidebarStyle = {
  background: 'var(--mainGradient)',
  color: 'var(--lightShade)',
};

/**
 *  Sidebar sub component
 *
 *  A sidebar component to be added to the main Navbar component
 *
 * @param visible - boolean to render sidebar visible
 * @param setVisible - toggles visible variable
 * @param setActive - function that toggles active link
 * @param selectPage - function that pushes route name to history
 * @returns {*}
 */
export default function ({visible, setVisible, activeItem, setActive, selectPage}) {
  return (
    <Sidebar
      id='sidebar-menu'
      as={Menu}
      animation='overlay'
      icon='labeled'
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width='thin'
      direction='top'
      style={sidebarStyle}
      inverted
    >
      <Menu.Item
        active={activeItem === '/'}
        onClick={() => {
          setActive('/');
          selectPage('/');
        }}
        className='sidebar-item'
      >
        <Icon name='address card outline'/>
        Resume
      </Menu.Item>
      <Menu.Item
        active={activeItem === '/projects'}
        onClick={() => {
          setActive('/projects');
          selectPage('/projects');
        }}
        className='sidebar-item'
      >
        <Icon name='code'/>
        Projects
      </Menu.Item>
      <Menu.Item
        active={activeItem === '/about'}
        onClick={() => {
          setActive('/about');
          selectPage('/about');
        }}
        className='sidebar-item'
      >
        <Icon name='user'/>
        About
      </Menu.Item>
      <Menu.Item
        active={activeItem === '/contact'}
        onClick={() => {
          setActive('/contact');
          selectPage('/contact');
        }}
        className='sidebar-item'
      >
        <Icon name='mail'/>
        Contact
      </Menu.Item>
      <Menu.Item
        onClick={() => setVisible(false)}
        style={{position: 'absolute', top: 0, right: 0}}
      >
        <Icon name='window close'/>
      </Menu.Item>
    </Sidebar>
  );
}
