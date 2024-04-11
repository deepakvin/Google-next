import CountryLookup from "./CountryLookup"

export default function Footer() {
  return (
    <footer className=" w-full h-16  bg-gray-900 static bottom-0">
        <div className="">
        <CountryLookup />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className="flex items-center space-x-6">
                <li className="hover:underline cursor-pointer">about</li>
                <li className="hover:underline cursor-pointer">home</li>
                 <li className="hover:underline cursor-pointer">advertising</li>
                 <li className="hover:underline cursor-pointer">how it works</li>
            </ul>
            <ul className="flex items-center space-x-6">
                <li className="hover:underline cursor-pointer">privacy</li>
                <li className="hover:underline cursor-pointer">term</li>
                 <li className="hover:underline cursor-pointer">settings</li>
                 
            </ul>
           
        </div>
      

    </footer>
  )
}
