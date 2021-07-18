import React from 'react'
import './Sidebar.css'
import 'react-pro-sidebar/dist/css/styles.css'
import {Container} from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent,} from 'react-pro-sidebar'
import { Link, useHistory } from 'react-router-dom'

const Sidebar = () => {
  const history = useHistory()
  
  return(
    <ProSidebar
      
      style={{position:"fixed",breakPoint:"md"}}
      
    >
      <SidebarHeader>
        <div
          onClick={()=>{history.push('/')}}
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}
        >
          Welcome
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <p>
            Sidebar1
          </p>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  )
}

export default Sidebar