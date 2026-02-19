'use client'
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const all = [
    { id: "481494", carrier: "GLS", route: "0000003092", status: "Arrived" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
    { id: "275063", carrier: "UPS", route: "0000002977", status: "In Customs" },
    { id: "481494", carrier: "GLS", route: "0000003092", status: "Arrived" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
    { id: "275063", carrier: "UPS", route: "0000002977", status: "In Customs" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
];

const notPresented = [
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "275063", carrier: "UPS", route: "0000002977", status: "In Customs" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
];

const inTransit = [
    { id: "275063", carrier: "UPS", route: "0000002977", status: "In Customs" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "423344", carrier: "DHL", route: "0000002990", status: "In Customs" },
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
];

const delivered = [
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
    { id: "481494", carrier: "GLS", route: "0000003092", status: "Arrived" },
    { id: "271962", carrier: "FedEx", route: "0000002980", status: "Arrived" },
];

const ShipmentStatus = () => {

    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', label: 'All', count: 10 },
        { id: 'notPresented', label: 'Not Presented', count: 3, textColor: '#4B86EB' },
        { id: 'inTransit', label: 'In Transit', count: 4, textColor: '#F2A100' },
        { id: 'delivered', label: 'Delivered', count: 3, textColor: '#1EA556' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {

            case 'all':
                return (
                    <div className='flex flex-col gap-3'>
                        <div className='grid grid-cols-4 gap-3 font-normal Little-text text-[#7A8799]'>
                            <div>Shipment ID:</div>
                            <div>Carrier:</div>
                            <div>Route:</div>
                            <div>Status:</div>
                        </div>
                        {all.map((item, index) => (
                            <div key={index} className='grid grid-cols-4 gap-3 font-semibold Small-text'>
                                <div className='text-[#1739E5]'>{item.id}</div>
                                <div className='text-[#10103E]'>{item.carrier}</div>
                                <div className='font-normal text-[#2D4059]'>{item.route}</div>
                                <div className='flex gap-2 items-center text-[#2D4059]'>
                                    <span className='w-[5px] h-[5px] bg-[#2D4059] rounded-full'></span> <span>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'notPresented':
                return (
                    <div className='flex flex-col gap-3'>
                        <div className='grid grid-cols-4 gap-3 font-normal Little-text text-[#7A8799]'>
                            <div>Shipment ID:</div>
                            <div>Carrier:</div>
                            <div>Route:</div>
                            <div>Status:</div>
                        </div>
                        {notPresented.map((item, index) => (
                            <div key={index} className='grid grid-cols-4 gap-3 font-semibold Small-text'>
                                <div className='text-[#1739E5]'>{item.id}</div>
                                <div className='text-[#10103E]'>{item.carrier}</div>
                                <div className='font-normal text-[#2D4059]'>{item.route}</div>
                                <div className='flex gap-2 items-center text-[#2D4059]'>
                                    <span className='w-[5px] h-[5px] bg-[#2D4059] rounded-full'></span> <span>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'inTransit':
                return (
                    <div className='flex flex-col gap-3'>
                        <div className='grid grid-cols-4 gap-3 font-normal Little-text text-[#7A8799]'>
                            <div>Shipment ID:</div>
                            <div>Carrier:</div>
                            <div>Route:</div>
                            <div>Status:</div>
                        </div>
                        {inTransit.map((item, index) => (
                            <div key={index} className='grid grid-cols-4 gap-3 font-semibold Small-text'>
                                <div className='text-[#1739E5]'>{item.id}</div>
                                <div className='text-[#10103E]'>{item.carrier}</div>
                                <div className='font-normal text-[#2D4059]'>{item.route}</div>
                                <div className='flex gap-2 items-center text-[#2D4059]'>
                                    <span className='w-[5px] h-[5px] bg-[#2D4059] rounded-full'></span> <span>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'delivered':
                return (
                    <div className='flex flex-col gap-3'>
                        <div className='grid grid-cols-4 gap-3 font-normal Little-text text-[#7A8799]'>
                            <div>Shipment ID:</div>
                            <div>Carrier:</div>
                            <div>Route:</div>
                            <div>Status:</div>
                        </div>
                        {delivered.map((item, index) => (
                            <div key={index} className='grid grid-cols-4 gap-3 font-semibold Small-text'>
                                <div className='text-[#1739E5]'>{item.id}</div>
                                <div className='text-[#10103E]'>{item.carrier}</div>
                                <div className='font-normal text-[#2D4059]'>{item.route}</div>
                                <div className='flex gap-2 items-center text-[#2D4059]'>
                                    <span className='w-[5px] h-[5px] bg-[#2D4059] rounded-full'></span> <span>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className='h-full w-full flex flex-col gap-6'>
            <div className='flex gap-5 items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <p className='font-Rink font-semibold Small-text tracking-[1px] text-[#10103E]'>
                        SHIPMENT STATUS
                    </p>
                    <div className='py-[2px] px-2 font-normal Small-text text-[#7A8799] bg-[#F1F6F8] rounded-[4px]'>
                        10
                    </div>
                </div>
                <button className='w-fit flex gap-2 items-center font-semibold Small-text text-[#0D1119] hover:text-[#1739E5] Hover-effect cursor-not-allowed'>
                    <span>Filters</span> <IoIosArrowUp />
                </button>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-full flex gap-2 items-center'>
                    <button onClick={() => setActiveTab('all')} className={`w-fit py-[5px] px-2 rounded-[8px] cursor-pointer Small-text text-[#7A8799] ${activeTab === 'all' ? 'border-[1px] border-[#2D4059] font-semibold' : 'border-[2px] border-[#E6EEF2] font-normal'}`}>
                        All
                    </button>
                    <div className='w-full grid grid-cols-3 gap-2'>
                        {tabs.slice(1).map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full py-[5px] px-2 flex gap-5 items-center justify-between rounded-[8px] cursor-pointer ${activeTab === tab.id ? 'border-[1px] border-[#2D4059] font-semibold' : 'border-[2px] border-[#E6EEF2] font-normal'}`}>
                                <span className='Small-text' style={{ color: tab.textColor }}>
                                    {tab.label}
                                </span>
                                <span className='py-[2px] px-2 Tiny-text text-[#7A8799] bg-[#F1F6F8] rounded-[4px]'>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className='w-full border-t-[2px] border-[#E6EEF2]'></div>
                <div className='h-[155px] w-full pb-5 overflow-hidden overflow-y-scroll Hide-scrollBar'>
                    {renderTabContent()}
                </div>
            </div>
        </div>
    )
}

export default ShipmentStatus