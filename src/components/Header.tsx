export const Header = () => {
  return (
    <header className='navbar lg:px-36 lg:py-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Features</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>SHIVON AI</a>
      </div>
      {/* <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
      </div> */}
      <div className='navbar-end'>
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
        <a className='link no-underline hover:underline'>Login</a>
        <div className='divider divider-horizontal py-1' />
        <a className='link no-underline hover:underline'>Signup</a>
      </div>
    </header>
  );
};
