'use client'
import React, { useState } from "react";
import CustomSelector from "@/components/Common/CustomSelector/CustomSelector";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const Shipments = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const selectOptions = [
    { value: 'aaa', label: 'Aaa' },
    { value: 'bbb', label: 'Bbb' },
    { value: 'ccc', label: 'Ccc' },
  ];

  const handleItemSelect = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <div className='flex flex-col gap-6'>
      <h3 className="font-semibold Small-heading text-[#10103E]">
        Shipments
      </h3>
      <div className='p-5 bg-[#FFFFFF] rounded-[16px]'>
        <div className="flex flex-col gap-6">
          <div className='grid grid-cols-4 gap-4'>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Shipment ID</label>
              <input
                type='text'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Master AWB</label>
              <input
                type='text'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Origin</label>
              <CustomSelector
                placeholder="Select airport"
                options={selectOptions}
                selectedValue={selectedItem}
                onSelect={handleItemSelect}
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Destination</label>
              <CustomSelector
                placeholder="Select airport"
                options={selectOptions}
                selectedValue={selectedItem}
                onSelect={handleItemSelect}
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Carrier</label>
                <CustomSelector
                  placeholder="Any"
                  options={selectOptions}
                  selectedValue={selectedItem}
                  onSelect={handleItemSelect}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Depart within</label>
                <CustomSelector
                  placeholder="Any"
                  options={selectOptions}
                  selectedValue={selectedItem}
                  onSelect={handleItemSelect}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Status</label>
                <CustomSelector
                  placeholder="Any"
                  options={selectOptions}
                  selectedValue={selectedItem}
                  onSelect={handleItemSelect}
                />
              </div>
            </div>
            <div className="col-span-2 mt-6 flex gap-4 items-center justify-end">
              <button onClick={() => setShowAdvanced(prev => !prev)} className='w-fit flex gap-2 items-center font-semibold Small-text text-[#0D1119] hover:text-[#1739E5] Hover-effect whitespace-nowrap cursor-pointer'>
                <span>Advanced</span>
                <span><IoIosArrowDown className={`transition-transform duration-300 ease-in-out ${showAdvanced ? "rotate-180" : "rotate-0"}`} /></span>
              </button>
              <div className="flex gap-2 items-center">
                <button className="w-fit py-[9px] px-4 font-Rink font-medium Little-text Clear-button">
                  CLEAR FILTERS
                </button>
                <button className="w-fit py-2.5 px-4 font-Rink font-bold Little-text LD-button">
                  APPLY FILTERS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`border-t-[2px] border-[#E6EEF2] overflow-hidden transition-all duration-300 ease-in-out ${showAdvanced ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
          <div className="pt-6 grid grid-cols-6 gap-4">
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>House AWB</label>
              <input
                type='text'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Customer Reference</label>
              <input
                type='text'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Operator</label>
              <input
                type='text'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Date from</label>
              <input
                type='date'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Date to</label>
              <input
                type='date'
                className='Input-field'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Progress Status</label>
              <CustomSelector
                placeholder="Any"
                options={selectOptions}
                selectedValue={selectedItem}
                onSelect={handleItemSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full px-5 py-4 grid grid-cols-5 gap-4 font-semibold Small-text text-[#10103E] bg-[#CDE2F7] rounded-t-[16px]">
          <div>Shipment ID</div>
          <div>Flight</div>
          <div>Customer & Operator</div>
          <div>Pieces, Weight & Rate</div>
          <div className="flex justify-center">Status & Info</div>
        </div>
        <div className="w-full p-5 bg-[#FFFFFF] rounded-b-[16px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col gap-4">
                <p className="font-Rink font-semibold Large-text text-[#1739E5]">
                  0000003106
                </p>
                <div className="flex flex-col gap-2">
                  <p className="flex flex-col Small-text">
                    <span className="font-normal text-[#7A8799]">Last updated:</span>
                    <span className="font-semibold text-[#2D4059]">22/12/2025 09:00</span>
                  </p>
                  <p className="flex flex-col Small-text">
                    <span className="font-normal text-[#7A8799]">Created:</span>
                    <span className="font-semibold text-[#2D4059]">22/12/2025 09:00</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold Medium-text text-[#10103E]">
                  NCL → United Kingdom
                </p>
                <p className="flex flex-col Small-text">
                  <span className="font-normal text-[#7A8799]">Available:</span>
                  <span className="font-semibold text-[#2D4059]">22/12/2025</span>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="flex flex-col Small-text">
                  <span className="font-normal text-[#7A8799]">Company</span>
                  <span className="font-semibold text-[#2D4059]">HAE Group Ltd</span>
                </p>
                <p className="font-normal Small-text text-[#2D4059]">
                  Test Company
                </p>
                <p className="flex flex-col Small-text">
                  <span className="font-normal text-[#7A8799]">Operator Name:</span>
                  <span className="font-semibold text-[#2D4059]">Sahil Thazhvara</span>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="flex gap-3 items-center Small-text">
                  <span className="font-normal text-[#7A8799]">Pieces</span>
                  <span className="font-semibold text-[#2D4059]">10</span>
                </p>
                <p className="flex gap-3 items-center Small-text">
                  <span className="font-normal text-[#7A8799]">Gross</span>
                  <span className="font-semibold text-[#2D4059]">500 Kg</span>
                </p>
                <p className="flex gap-3 items-center Small-text">
                  <span className="font-normal text-[#7A8799]">Chargeable</span>
                  <span className="font-semibold text-[#2D4059]">500 Kg</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="w-fit py-1.5 px-4 font-semibold Small-text text-[#0D1119] bg-[#F1F6F8] rounded-[8px]">
                  Search
                </div>
                <p className="max-w-[130px] font-semibold Small-text text-[#0D1119] text-center">
                  Routes
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className='w-fit py-3 px-6 font-Rink font-semibold Small-text BD-button'>
                <FiSearch /> <span>FIND ROUTES</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipments