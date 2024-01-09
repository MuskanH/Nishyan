import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const data = [
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amt: 1278.23,
        fees: 22
    },
]
const Table = () => {
    return (
        <div className='pt-[20px] pl-[32px] pr-[32px]'>
            <div className='w-full h-[1096px] px-3 pt-3 pb-6 bg-white rounded-lg shadow flex-col justify-start inline-flex'>
                <div className='flex justify-between'>
                    <form>
                        <div className="bg-white w-[248px] h-10 text-start rounded border border-zinc-300 px-4 py-2.5 mt-[12px] ml-[12px] grow shrink basis-0 text-neutral-400 flex  items-center text-sm font-normal font-['Inter']"><img src='/img/Search2.svg' className='mr-[6px]'/>Search by order ID...</div>
                    </form>
                    <div className='flex'>
                        <div className="w-[79px] h-9 px-3 py-1.5 mt-[12px] mr-[12px] bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 inline-flex">
                            <p className="text-neutral-600 text-base text-start font-normal font-['Inter']">Sort</p>
                            <img src='/img/Sort.svg' />
                        </div>
                        <div className="w-9 h-9 mt-[12px] mr-[12px] rounded border border-zinc-300 p-[8px]">
                            <img src='/img/download.svg' />
                        </div>
                    </div>
                </div>
                <div className='px-[12px] pt-[12px]'>
                    <div className='w-full h-10 px-3 py-2.5 bg-zinc-100 rounded justify-between items-center  inline-flex'>
                        <p className="text-neutral-600 text-start text-sm font-medium font-['Inter']">Order ID</p>
                        <p className="text-neutral-600 text-start text-sm font-medium font-['Inter']">Order date<ArrowDropDownIcon sx={{ '@media (min-width:960px)': { fontSize: '24px', }, }} className=" text-neutral-600 mb-[2px]" /></p>
                        <p className="text-neutral-600 text-start text-sm font-medium font-['Inter']">Order amount</p>
                        <p className="text-neutral-600 text-start text-sm font-medium font-['Inter']">Transaction fees&nbsp;<InfoOutlinedIcon sx={{ '@media (min-width:960px)': { fontSize: '14px', }, }} /></p>
                    </div>
                </div>


                {data.map(({ id, date, amt, fees }, index) => {
                    return (
                        <div className='px-[12px]'>
                            <div className='w-full justify-between items-center inline-flex h-[48px] border-b-2 bg-white' key={index}>
                                <p className="text-sky-700 w-[246px] pl-[12px] text-start text-sm font-medium font-['Inter']">{id}</p>
                                <p className="text-zinc-900 w-[246px] pl-[24px] text-start text-sm  font-normal font-['Inter']">{date}</p>
                                <p className=" text-zinc-900 w-[246px] pl-[94px] text-start text-sm  font-normal font-['Inter']">&#8377;{amt}</p>
                                <p className="text-zinc-900 w-[246px] text-start text-sm pl-[210px] font-normal font-['Inter']">&#8377;{fees}</p>
                            </div>

                        </div>
                    )

                })}


                <div className="w-[610px] h-8 gap-6 pt-[32px] mx-auto items-center justify-center inline-flex">
                    <button className="w-[100px] h-8  bg-white rounded border border-zinc-300 flex text-center items-center justify-center text-neutral-600 text-sm font-medium font-['Inter']">
                        <ArrowBackIosIcon sx={{ '@media (min-width:960px)': { fontSize: '14px', }, }} /> Previous
                    </button>

                    <div className="justify-start items-start gap-2 flex">
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">1</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">...</p>
                        </div>
                        <div className="w-7 h-7 px-2 py-1.5 bg-sky-700 rounded flex-col justify-center items-center gap-1.5 inline-flex">
                            <p className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">10</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">11</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">12</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">13</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">14</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">15</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">16</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">17</p>
                        </div>
                        <div className="w-7 h-7 py-0.5 rounded flex-col justify-center items-center gap-2 inline-flex">
                            <p className=" text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">18</p>
                        </div>
                    </div>

                    <button className="w-[74px] h-8 bg-white rounded border border-zinc-300 items-center justify-center  flex text-center text-neutral-600 text-sm font-medium font-['Inter']">
                        Next <ArrowForwardIosIcon sx={{ '@media (min-width:960px)': { fontSize: '14px', }, }} />
                    </button>

                </div>


            </div>

        </div>
    )
}

export default Table
