'use client'
import React, { useState } from "react";
import CustomSelector from "@/components/Common/CustomSelector/CustomSelector";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import { Checkbox } from "@heroui/react";
import { FiSearch } from "react-icons/fi";

type Mode = {
  id: number;
  name: string;
  label: string;
  icon: string;
  selectedIcon: string; // Blue version of icon
  defaultIcon: string;  // Gray version of icon
};

const NewQuote = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMode, setSelectedMode] = useState<number>(1);
  const [isDG, setIsDG] = useState(false);

  const selectOptions = [
    { value: 'aaa', label: 'Aaa' },
    { value: 'bbb', label: 'Bbb' },
    { value: 'ccc', label: 'Ccc' },
  ];

  const modes: Mode[] = [
    {
      id: 1,
      name: "airport_to_airport",
      label: "Airport to Airport (A2A)",
      icon: "/QuoteForm-icon-one.svg",
      selectedIcon: "/QuoteForm-selected-icon-one.svg",
      defaultIcon: "/QuoteForm-icon-one.svg"
    },
    {
      id: 2,
      name: "airport_to_door",
      label: "Door to Door (D2D)",
      icon: "/QuoteForm-icon-two.svg",
      selectedIcon: "/QuoteForm-selected-icon-two.svg",
      defaultIcon: "/QuoteForm-icon-two.svg"
    },
    {
      id: 3,
      name: "door_to_airport",
      label: "Airport to Door (A2D)",
      icon: "/QuoteForm-icon-three.svg",
      selectedIcon: "/QuoteForm-selected-icon-three.svg",
      defaultIcon: "/QuoteForm-icon-three.svg"
    },
    {
      id: 4,
      name: "door_to_door",
      label: "Door to Airport (D2A)",
      icon: "/QuoteForm-icon-four.svg",
      selectedIcon: "/QuoteForm-selected-icon-four.svg",
      defaultIcon: "/QuoteForm-icon-four.svg"
    }
  ];

  const handleGenderSelect = (value: string) => {
    setSelectedGender(value);
  };

  return (
    <div className='flex flex-col gap-6'>
      <h3 className="font-semibold Small-heading text-[#10103E]">
        New Quote / Booking
      </h3>
      <div className='flex flex-col gap-4'>
        <div className='px-5 py-4 flex flex-col items-center bg-[#FFFFFF] rounded-[16px]'>
          <div className='w-[500px] flex gap-5 items-center justify-between'>
            <p className='w-fit flex gap-2 items-center'>
              <span className='py-[2px] px-2 font-normal Little-text text-[#10103E] bg-[#79CAF2] rounded-full'>1</span>
              <span className='font-semibold Medium-text text-[#10103E]'>Details</span>
            </p>
            <div className='w-full border-t-[1px] border-[#E6EEF2]'></div>
            <p className='w-fit flex gap-2 items-center'>
              <span className='py-[2px] px-2 font-normal Little-text text-[#7A8799] bg-[#F1F6F8] rounded-full'>2</span>
              <span className='font-normal Medium-text text-[#7A8799]'>Routes</span>
            </p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-10 bg-[#FFFFFF] rounded-[16px]">
          <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Company Name</label>
                <CustomSelector
                  placeholder="Select"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Reference</label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Preferred Carrier(s)</label>
                <input
                  type='text'
                  placeholder="Any"
                  className='Input-field'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Cargo Type</label>
                <CustomSelector
                  placeholder="Select"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Product</label>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {modes.map((mode) => (
                  <div key={mode.id} onClick={() => setSelectedMode(mode.id)} className={`w-full p-[10px] border-[2px] border-[#E6EEF2] flex gap-5 items-center justify-between rounded-[8px] transition-all duration-300 ${selectedMode === mode.id
                    ? 'bg-[#F1F6F8]'
                    : 'hover:bg-[#F1F6F8] cursor-pointer'
                    }`}
                  >
                    <div className='flex gap-2 items-center'>
                      <div className='shrink-0'>
                        <Image src={selectedMode === mode.id ? mode.selectedIcon : mode.defaultIcon} alt="Icon" width={24} height={24} className='w-[14px] md:w-[15px] xl:w-[16px]' />
                      </div>
                      <p className={`Small-text ${selectedMode === mode.id ? 'font-semibold text-[#10103E]' : 'font-normal text-[#2D4059]'}`}>
                        {mode.label}
                      </p>
                    </div>
                    <div className={`h-[13px] w-[13px] border-[2px] flex items-center justify-center rounded-full ${selectedMode === mode.id ? 'border-[#1739E5]' : 'border-[#ADBAC0]'}`}>
                      {selectedMode === mode.id && (
                        <div className='h-[6px] w-[6px] bg-[#1739E5] rounded-full'></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Origin <span className="Mandatory-icon">*</span></label>
                <CustomSelector
                  placeholder="Select airport"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Destination <span className="Mandatory-icon">*</span></label>
                <CustomSelector
                  placeholder="Select airport"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Consignor City</label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Consignee City</label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Consignor Country <span className="Mandatory-icon">*</span></label>
                <CustomSelector
                  placeholder="Select airport"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Consignee Country <span className="Mandatory-icon">*</span></label>
                <CustomSelector
                  placeholder="Select airport"
                  options={selectOptions}
                  selectedValue={selectedGender}
                  onSelect={handleGenderSelect}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='flex gap-3 items-center Label-text'>
                  <span>Consignor Postcode <span className="Mandatory-icon">*</span></span>
                  <span><AiFillInfoCircle className="text-[#7A8799]" /></span>
                </label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='flex gap-3 items-center Label-text'>
                  <span>Consignee Postcode <span className="Mandatory-icon">*</span></span>
                  <span><AiFillInfoCircle className="text-[#7A8799]" /></span>
                </label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Collect from</label>
                <input
                  type='text'
                  className='Input-field'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Cargo Ready</label>
                <input
                  type='date'
                  className='Input-field'
                />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              <Checkbox color="primary" size="sm">
                <p className='font-normal Small-text text-[#7A8799]'>
                  Screened Cargo (SPX)?
                </p>
              </Checkbox>
              <Checkbox color="primary" size="sm">
                <p className='font-normal Small-text text-[#7A8799]'>
                  Can the pieces be turned?
                </p>
              </Checkbox>
              <Checkbox color="primary" size="sm">
                <p className='font-normal Small-text text-[#7A8799]'>
                  Is cargo stackable?
                </p>
              </Checkbox>
            </div>
            <div>
              <div className={`transition-all duration-500 ease-in-out origin-top transform ${isDG ? 'scale-y-0 opacity-0 pointer-events-none h-0' : 'scale-y-100 opacity-100 h-auto'}`}>
                <div className="flex flex-col gap-6">
                  <div className="p-[11px] bg-[#F1F6F8] rounded-[8px]">
                    <Checkbox color="primary" size="sm" isSelected={isDG} onValueChange={(val) => setIsDG(val)}>
                      <p className='font-normal Small-text text-[#7A8799]'>
                        Is the cargo Dangerous Goods (DG)?
                      </p>
                    </Checkbox>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='Label-text'>Special Handling Requirements</label>
                    <div className="relative">
                      <input
                        type='text'
                        placeholder="Select code"
                        className='Input-field'
                      />
                      <div className="absolute top-[10px] right-2">
                        <button className="p-1 font-semibold Little-text text-[#2D4059] bg-[#79CAF2] rounded-[4px] cursor-pointer">SP</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-500 ease-in-out origin-top transform ${isDG ? 'scale-y-100 opacity-100 h-auto' : 'scale-y-0 opacity-0 pointer-events-none h-0'}`} >
                <div className="px-[11px] py-4 flex flex-col gap-6 bg-[#F1F6F8] rounded-[8px]">
                  <div className='grid grid-cols-2 gap-4'>
                    <Checkbox color="primary" size="sm" isSelected={isDG} onValueChange={(val) => setIsDG(val)}>
                      <p className='font-normal Small-text text-[#7A8799]'>
                        Is the cargo Dangerous Goods (DG)?
                      </p>
                    </Checkbox>
                    <Checkbox color="primary" size="sm">
                      <p className='font-normal Small-text text-[#7A8799]'>
                        Is shipment Cargo Aircraft only?
                      </p>
                    </Checkbox>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>UN Numbers <span className="Mandatory-icon">*</span></label>
                      <input type='text' className='Input-field' />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>UN Class <span className="Mandatory-icon">*</span></label>
                      <input type='text' className='Input-field' />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>Special Handling Requirements</label>
                      <div className="relative">
                        <input
                          type='text'
                          placeholder="Select code"
                          className='Input-field'
                        />
                        <div className="absolute top-[10px] right-2 flex gap-2 items-center">
                          <button className="p-1 font-semibold Little-text text-[#2D4059] bg-[#79CAF2] rounded-[4px] cursor-pointer">DG</button>
                          <button className="p-1 font-semibold Little-text text-[#2D4059] bg-[#79CAF2] rounded-[4px] cursor-pointer">SP</button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>Packing Instructions</label>
                      <input type='text' className='Input-field' />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>Packing Group</label>
                      <input type='text' className='Input-field' />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label className='Label-text'>Net Quantity</label>
                      <input type='text' className='Input-field' />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <Checkbox color="primary" size="sm">
                      <p className='font-normal Small-text text-[#7A8799]'>Excepted Quantities</p>
                    </Checkbox>
                    <Checkbox color="primary" size="sm">
                      <p className='font-normal Small-text text-[#7A8799]'>Limited Quantity</p>
                    </Checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Description <span className="Mandatory-icon">*</span></label>
              <textarea
                placeholder="This field has a 15 character limit..."
                className='h-[80px] Input-field' />
            </div>
            <div className='px-[11px] py-4 grid grid-cols-4 gap-4 bg-[#F1F6F8] rounded-[8px]'>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Total Pieces</label>
                <input
                  type='text'
                  placeholder="1"
                  className='Quote-input-field' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Volumetric Weight</label>
                <input
                  type='text'
                  placeholder="-"
                  className='Quote-input-field' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Gross Weight</label>
                <input
                  type='text'
                  placeholder="0"
                  className='Input-field' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='Label-text'>Chargeable Weight <span className="Mandatory-icon">*</span></label>
                <input
                  type='text'
                  placeholder="1"
                  className='Input-field' />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='Label-text'>Comments</label>
              <textarea
                placeholder="Is there anything else you would like us to know..."
                className='h-[80px] Input-field' />
            </div>
          </div>
          <div className="flex justify-end">
            <button className='w-fit py-3.5 px-7 font-Rink font-semibold Small-text BD-button'>
              <FiSearch /> <span>FIND ROUTES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewQuote