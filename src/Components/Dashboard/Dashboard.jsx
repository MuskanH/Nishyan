import React from 'react'
import "./dashboard.css"
import Header from '../Header/Header'
import Content from '../Content/content'
import Table from '../Table/Table'

const Dashboard = () => {
  return (
    <>
    <div>
    <div className='flex'>

      <div className="w-56 h-[1482px] px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
          <div className="w-48 justify-start items-center gap-3 inline-flex">
            <div className="w-10 h-10 bg-white rounded">
              <img className="w-[39px] h-[39px] rounded" src="/img/Image.png" />
            </div>

            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <p className=" text-white text-[15px] font-medium font-['Inter']">Nishyan</p>
              <p className="opacity-80 text-white text-[13px] font-normal font-['Inter'] underline">Visit store</p>
            </div>
            <div className="w-5 h-5 relative">
              <img src='/img/down.svg' />
            </div>
          </div>
          <ul className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/home.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Home</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/orders.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Orders</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/products.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Products</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/truck.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Delivery</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/products.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Marketing</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/products.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Analytics</a>
            </li>
            <li className="w-52 px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex">
              <img src='/img/payments.svg'></img>
              <a href='' className="opacity-80  text-white text-start text-sm font-medium font-['Inter'] leading-tight">Payments</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/tools.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Tools</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/discounts.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Discounts</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/audience.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Audience</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/appearance.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Appearance</a>
            </li>
            <li className="px-4 py-2 justify-start items-start gap-3 inline-flex">
              <img src='/img/plugins.svg'></img>
              <a href='' className="opacity-80 text-start text-white text-sm font-medium font-['Inter']">Plugins</a>
            </li>
          </ul>
        </div>
        <div className="h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute" src="/img/wallet.svg" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-0.5 inline-flex pt-[6px]">
              <p className="opacity-80 text-start text-white text-[13px] font-normal font-['Inter'] leading-none">Available credits</p>
              <p className="text-white text-start text-base font-medium font-['Inter'] leading-normal">222.10</p>
            </div>
          </div>
        </div>
      </div>
     
     <div className='w-full flex flex-col'>
      <Header />
      <Content/>
      <Table/>
      </div>
     

    </div>
   
  </div>
    </>

  )
}

export default Dashboard
