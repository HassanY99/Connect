import React from 'react'

const Navbar = () => {
  return (

<nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    {/* Logo */}
    <a href="/home" class="flex items-center">
        <span class="self-center text-2xl font-opensans whitespace-nowrap dark:text-white"><i className='fas fa-code'></i> Connect</span>
    </a>
    
    {/* Links */}
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-yellow md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/developers" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Developers</a>
        </li>
        <li>
          <a href="/register" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
        </li>
        <li>
          <a href="/login" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>  
      </ul>
    </div>

  </div>
</nav>


  )
}

export default Navbar
