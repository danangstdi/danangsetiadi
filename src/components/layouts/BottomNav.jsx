import Link from "next/link"
import { Book, Boxes, ChatSquareDots, House, Person } from "react-bootstrap-icons"

export default function BottomNav() {
  const menuLists = [
    {url: '/', label: 'Home', icon: <House size={18}/>},
    {url: '/blog', label: 'Blog', icon: <Book size={18}/>},
    {url: '/forum', label: 'Forum', icon: <ChatSquareDots size={18}/>},
    {url: '/project', label: 'Project', icon: <Boxes size={18}/>},
    {url: '/profile/danangsetiadi', label: 'Profile', icon: <Person size={18}/>},
  ]

  return (
    <nav className='fixed z-30 bottom-nav-animate inset-x-0 bottom-0 h-[3.7rem] border-t bg-white bg-opacity-90 backdrop-blur-md md:hidden'>
      <ul className="flex items-center justify-between h-full">
        {menuLists.map((menu) => (
          <li key={menu.url} className="w-full">
            <Link href={menu.url} className="text-gray-700 flex flex-col justify-center items-center gap-1 hover:text-indigo-600">
              {menu.icon}
              <p className="text-[.65rem]">{menu.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
