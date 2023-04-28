import React, { useContext } from 'react'
import { GiConsoleController } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import GameContext from '../context/GameContext'

function NavBar({ title }) {
  const {
    login,
    landing,
    setSearch,
    search,
    setLogin,
    setLanding,
  } = useContext(GameContext)

  const handleLogout = () => {
    setLanding(false)
    setLogin(true)
  }

  const handleClick = (e) => {
    setSearch(!search)
  }

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none">
          <GiConsoleController className="inline pr-2 mr-1 text-4xl" />
          <Link to={'/'} className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              onClick={handleClick}
              to={'/search'}
              className="btn btn-ghost  btn-sm rounded-btn font-bold text-2xl"
            >
              <FaSearch />
            </Link>

            {landing && (
              <>
                <Link
                  to={'/home'}
                  className="btn btn-ghost btn-sm rounded-btn font-bold "
                >
                  Home
                </Link>
                {/* <Link to={'/profile'} className="btn btn-ghost btn-sm rounded-btn font-bold text-3xl">
                        <CgProfile/>
                    </Link> */}
                <Link
                  to={'/'}
                  onClick={handleLogout}
                  className="btn btn-ghost btn-sm rounded-btn font-bold "
                >
                  Logout
                </Link>
              </>
            )}
            {login && (
              <>
                <Link
                  to={'/signin'}
                  className="btn btn-ghost btn-sm rounded-btn font-bold "
                >
                  SignIn
                </Link>
                <Link
                  to={'/signup'}
                  className="btn btn-ghost btn-sm rounded-btn font-bold "
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.defaultProps = {
  title: 'Game Sensei',
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar
