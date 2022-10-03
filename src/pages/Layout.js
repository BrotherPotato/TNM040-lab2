import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='detailDiv'>
      <nav style={{ margin: 'auto' }}>
        <ul>
          <Link to='/'><h1>Go home</h1></Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
