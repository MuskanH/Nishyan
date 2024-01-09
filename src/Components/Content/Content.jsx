import React from 'react'
import Select from 'react-select';

const Content = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <p className="text-zinc-900 text-start text-xl font-mediumoptio font-['Inter'] leading-7 pt-[36px] pl-[32px]">Overview</p>
                <Select placeholder="Last Month" className="text-start text-neutral-600 text-base font-normal mt-[32px] mr-[32px] font-['Inter'] leading-normal w-[190px] bg-white rounded border-zinc-300" />
            </div>

            <div className='flex justify-between'>
                <div className="w-[566px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex mt-[28px] ml-[32px]">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <p className="text-start text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Online orders</p>
                        </div>
                        <p className="text-start text-zinc-900 text-[32px] font-medium font-['Inter'] leading-[38px]">231</p>
                    </div>
                </div>

                <div className="w-[566px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex mr-[32px] mt-[28px]">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <p className="text-neutral-600 text-start text-base font-normal font-['Inter'] leading-normal">Amount received</p>
                        </div>
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                            <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
                                <p className="text-zinc-900 text-start text-[32px] font-medium font-['Inter'] leading-[38px]">₹23,92,312.19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-zinc-900 text-start text-xl font-medium  leading-7 pt-[32px] pl-[32px]">Transactions | This Month</p>

        </div>
    )
}

export default Content
