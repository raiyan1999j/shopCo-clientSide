import { FaBell } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

export default function Topbar(){
    return(
        <>
            <div className="w-[1180px] h-24 flex justify-end items-center border border-[#23232133] border-t-transparent border-r-transparent border-l-transparent">
                <div className='mr-10 hover:cursor-pointer'>
                    <span>
                    <IoSearchSharp />
                    </span>
                </div>

                <div className='mr-10 hover:cursor-pointer'>
                    <span>
                    <FaBell />
                    </span>
                </div>

                <div className='mr-[60px]'>
                    <div className='flex flex-row items-center py-2 px-4 rounded-lg border border-[#1C1C1A]'>
                        <h4 className='mx-1 text-sm font-medium leading-normal tracking-tighter'>Admin</h4>
                        <span>
                        <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}