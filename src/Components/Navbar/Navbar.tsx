import { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="flex items-center justify-between px-5 h-[60px] bg-gray-900 text-[#fff]">
      <div className="">
        <div>
          <a href="/" className="text-[#00df9a] font-bold text-lg">
            SAYF
          </a>
        </div>
      </div>

      <ul className="hidden md:flex justify-center items-center text-sm ">
        <li className="h-[60px] m-1 ">
          <a
            className=" w-[80px] h-full flex items-center justify-center hover:bg-[#dad5d595] "
            href="/">
            Home
          </a>
        </li>
        <li className="h-[60px] m-1">
          <a
            className="w-[80px] h-full flex items-center justify-center hover:bg-[#dad5d595]"
            href="students">
            Student
          </a>
        </li>
        <li className="h-[60px] m-1">
          <a
            className="w-[80px] h-full flex items-center justify-center hover:bg-[#dad5d595]"
            href="/ziyara">
            Ziyara
          </a>
        </li>
        <li className="h-[60px]">
          <a
            className="w-[80px] h-full flex items-center justify-center hover:bg-[#dad5d595]"
            href="/committees">
            Committees
          </a>
        </li>
      </ul>

      <ul
        className={
          isOpen
            ? 'fixed top-0 pt-4 left-0 w-[70%] h-full bg-[black] border-r border-gray-dark text-sm ease-in-out duration-500 md:hidden'
            : 'fixed left-[-100%]'
        }>
        <li className=" p-3 my-3 ">
          <a
            href="/"
            className="hover:bg-[#00df98aa] hover:text-[#000] block p-4 rounded-r-md ease-in-out duration-500">
            Home
          </a>
        </li>
        <li className=" p-3 my-3 ">
          <a
            href="students"
            className="hover:bg-[#00df98aa] hover:text-[#000] block p-4 rounded-r-md ease-in-out duration-500">
            Student
          </a>
        </li>
        <li className=" p-3 my-3 ">
          <a
            href="/ziyara"
            className="hover:bg-[#00df98aa] hover:text-[#000] block p-4 rounded-r-md ease-in-out duration-500">
            Ziyara
          </a>
        </li>
        <li className=" p-3 my-3 ">
          <a
            href="/committees"
            className="hover:bg-[#00df98aa] hover:text-[#000] block p-4 rounded-r-md ease-in-out duration-500">
            Committees
          </a>
        </li>
      </ul>

      <div className="block md:hidden" onClick={toggle}>
        {!isOpen ? <MenuOutlined size={24} /> : <CloseOutlined size={24} />}
      </div>
    </div>
  );
}

export default Navbar;
