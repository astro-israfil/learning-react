import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div class="relative w-full bg-white">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div class="inline-flex items-center space-x-2">
                <span className='text-slate-800 text-2xl font-bold'>
                    YourApp
                </span>
                <span class="font-bold">Logo</span>
                </div>
                <div class="hidden lg:block">
                <ul class="inline-flex space-x-8">
                    <li>
                    <NavLink
                        to="/"
                        className={({isActive}) => `text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}  hover:text-gray-900`}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) => `text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}  hover:text-gray-900`}
                    >
                        About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) => `text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}  hover:text-gray-900`}
                    >
                        Contact
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/github"
                        className={({isActive}) => `text-sm font-semibold ${isActive ? 'text-green-700' : 'text-gray-800'}  hover:text-gray-900`}
                    >
                        Github
                    </NavLink>
                    </li>
                </ul>
                </div>
                <div class="hidden lg:block">
                <button
                    type="button"
                    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Button text
                </button>
                </div>
                <div class="lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 cursor-pointer"
                >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
                </div>
            </div>
        </div>

    )
}