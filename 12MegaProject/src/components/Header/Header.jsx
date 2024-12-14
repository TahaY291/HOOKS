import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All post",
      slug: "/all-post",
      active: !authStatus
    },
    {
      name: "add post",
      slug: "/add-post",
      active: !authStatus
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500' >
      <Container>
        <nav className='flex' >
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto' >
            {
              navItems.map((item) =>
                item.active ? (
                  <li key={item.name}  >
                    <button onClick={() => navigate(item.slug)} >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            {authStatus && (
              <li> <LogoutBtn /> </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
