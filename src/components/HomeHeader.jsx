
import Link from 'next/link'
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 item-center">
            <Link href={"http://mail.google.com"} className="hover:underline">
                gmail

            </Link>

            <Link href={"http://Image.google.com"} className="hover:underline">
                Image

            </Link>
            <TbGridDots className='bg-transparent hover:bg-gray rounded-full text-4xl p-2'/>
            <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">sign in</button>

        </div>
      
    </header>
  )
}
