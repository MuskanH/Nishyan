import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
   
      <div className="w-full h-16 px-8 py-3 bg-white border-b border-zinc-300 items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-4 flex">
          <div className="justify-start items-center gap-4 flex">
            <p className="text-start text-zinc-900 text-[15px] font-normal font-['Inter'] leading-snug">Payments</p>
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <img src='/img/Help.svg'/>
            <p className="text-start text-neutral-600 text-xs font-normal font-['Inter'] leading-none">How it works</p>
          </div>
        </div>
        <form>
        <div className="text-start w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex text-zinc-500 text-[15px] font-normal font-['Inter']"><img src='/img/search.svg' className='mb-[2px]'/>Search features, tutorials, etc.</div>
        </form>
        <div className="grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
          <div className="justify-start items-start gap-3 flex">
            <div className="w-10 h-10 rounded-full relative bg-neutral-200">
              <img src='/img/speaker.svg' className='absolute top-[10px] left-[10px]'/>
            </div>
            <div className="w-10 h-10 rounded-full relative bg-neutral-200">
              <ArrowDropDownIcon sx={{ '@media (min-width:960px)': { fontSize: '36px', }, }} className="absolute top-[2px] left-[2px] text-[#4d4d4d]"></ArrowDropDownIcon>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Header


