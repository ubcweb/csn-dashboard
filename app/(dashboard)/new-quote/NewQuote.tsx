'use client'
import React, { useState } from "react";
import CustomSelector from "@/components/Common/CustomSelector/CustomSelector";
import Image from "next/image";
import { Checkbox } from "@heroui/react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FiSearch, FiBookmark, FiCheck } from "react-icons/fi";
import { IoMdAdd, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { HiArrowLeft } from "react-icons/hi";

type Mode = {
  id: number;
  name: string;
  label: string;
  icon: string;
  selectedIcon: string; // Blue version of icon
  defaultIcon: string;  // Gray version of icon
};

const chargeDetails = [
  { charge: "Airfreight Rate", amount: "£ 174.00", currency: "GBP" },
  { charge: "Aviation Charge", amount: "£ 3.00", currency: "GBP" },
  { charge: "FWB Processing", amount: "£ 2.00", currency: "GBP" },
  { charge: "Handling", amount: "£ 33.00", currency: "GBP" },
];

const distanceDetails = [
  { from: "LHR", to: "HKG", type: "Boeing XYZ", distance: "9645.27" },
  { from: "LHR", to: "HKG", type: "Boeing XYZ", distance: "9645.27" },
];

const NewQuote = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'routes'>('details');
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMode, setSelectedMode] = useState<number>(1);
  const [isDG, setIsDG] = useState(false);
  const [dimensionRows, setDimensionRows] = useState<number[]>([0]);
  const [activeRouteIndex, setActiveRouteIndex] = useState<number | null>(null);

  const handleFindRoutes = () => {
    setActiveTab('routes');
  };

  const handleEditDetails = () => {
    setActiveTab('details');
  };

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

  const handleAddRow = () => {
    setDimensionRows(prev => [...prev, prev.length]);
  };

  const handleRemoveRow = (index: number) => {
    setDimensionRows(prev => prev.filter((_, i) => i !== index));
  };

  const handleRouteToggle = (index: number) => {
    setActiveRouteIndex(prev => prev === index ? null : index);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className="w-full flex gap-5 items-center justify-between">
        <h3 className="font-semibold Small-heading text-[#10103E]">
          {activeTab === 'details' ? 'New Quote / Booking' : 'Showing # routes:'}
        </h3>
        {activeTab === 'routes' && (
          <button onClick={handleEditDetails} className="w-fit py-2.5 px-4 font-Rink font-bold Little-text LD-button">
            <HiArrowLeft /> <span>EDIT DETAILS</span>
          </button>
        )}
      </div>
      <div className='flex flex-col gap-4'>
        <div className='px-5 py-4 flex flex-col items-center bg-[#FFFFFF] rounded-[16px]'>
          <div className='w-[500px] flex gap-5 items-center justify-between'>
            <p className='w-fit flex gap-2 items-center'>
              <span className={`py-[2px] px-2 font-normal Little-text rounded-full ${activeTab === 'details' ? 'text-[#10103E] bg-[#79CAF2]' : 'text-[#7A8799] bg-[#F1F6F8]'}`}>1</span>
              <span className={`Medium-text ${activeTab === 'details' ? 'font-semibold text-[#10103E]' : 'font-normal text-[#7A8799]'}`}>Details</span>
            </p>
            <div className='w-full border-t-[1px] border-[#E6EEF2]'></div>
            <p className='w-fit flex gap-2 items-center'>
              <span className={`py-[2px] px-1.5 font-normal Little-text rounded-full ${activeTab === 'routes' ? 'text-[#10103E] bg-[#79CAF2]' : 'text-[#7A8799] bg-[#F1F6F8]'}`}>2</span>
              <span className={`Medium-text ${activeTab === 'routes' ? 'font-semibold text-[#10103E]' : 'font-normal text-[#7A8799]'}`}>Routes</span>
            </p>
          </div>
        </div>
        <div>
          {activeTab === 'details' && (
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
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <div className="w-full pr-[53px] grid grid-cols-3 gap-4">
                      <p className='Label-text'>
                        No. of Pieces <span className="Mandatory-icon">*</span>
                      </p>
                      <div className="flex gap-5 items-end justify-between">
                        <p className='Label-text'>Dimensions</p>
                        <button className="w-fit py-1 px-2 flex gap-2 items-center border-[2px] border-[#E6EEF2] font-normal Little-text text-[#2D4059] rounded-[8px] cursor-not-allowed">
                          <span>cm</span> <IoIosArrowDown />
                        </button>
                      </div>
                      <div className="flex gap-5 items-end justify-between">
                        <p className='Label-text'>Total Weight</p>
                        <button className="w-fit py-1 px-2 flex gap-2 items-center border-[2px] border-[#E6EEF2] font-normal Little-text text-[#2D4059] rounded-[8px] cursor-not-allowed">
                          <span>kg</span> <IoIosArrowDown />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      {dimensionRows.map((_, index) => (
                        <div key={index} className="flex gap-4 items-center">
                          <div className="w-full grid grid-cols-3 gap-4">
                            <div className='flex flex-col gap-1.5'>
                              <input
                                type='number'
                                className='Input-field'
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <input
                                type='number'
                                placeholder="L"
                                className='Input-field'
                              />
                              <input
                                type='number'
                                placeholder="W"
                                className='Input-field'
                              />
                              <input
                                type='number'
                                placeholder="H"
                                className='Input-field'
                              />
                            </div>
                            <div className='flex flex-col gap-1.5'>
                              <input
                                type='number'
                                className='Input-field'
                              />
                            </div>
                          </div>
                          <div className="w-fit">
                            {index === 0 ? (
                              <button type="button" onClick={handleAddRow} className="p-[11px] Medium-text text-[#2D4059] hover:text-[#FFFFFF] bg-[#79CAF2] hover:bg-[#10103E] Hover-effect rounded-full cursor-pointer">
                                <IoMdAdd />
                              </button>
                            ) : (
                              <button type="button" onClick={() => handleRemoveRow(index)} className="p-[11px] Medium-text text-[#2D4059] hover:text-[#FFFFFF] bg-[#ADBAC0] hover:bg-[#10103E] Hover-effect rounded-full cursor-pointer">
                                <IoMdClose />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-normal Tiny-text tracking-[0.5px] text-[#7A8799]">
                    If dimensions are not known, leave them blank. Note that volumetric weight will be calculated based on what is provided.
                  </p>
                </div>
                <div className='px-[11px] py-4 grid grid-cols-4 gap-4 bg-[#F1F6F8] rounded-[8px]'>
                  <div className='flex flex-col gap-1.5'>
                    <label className='Label-text'>Total Pieces</label>
                    <div className="p-[11px] border-[2px] border-[#E6EEF2] font-normal Small-text text-[#ADBAC0] bg-[#F1F6F8] rounded-[8px]">
                      -
                    </div>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='Label-text'>Volumetric Weight</label>
                    <div className="p-[11px] border-[2px] border-[#E6EEF2] font-normal Small-text text-[#ADBAC0] bg-[#F1F6F8] rounded-[8px]">
                      -
                    </div>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='Label-text'>Gross Weight</label>
                    <input
                      type='number'
                      className='Input-field' />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='Label-text'>Chargeable Weight <span className="Mandatory-icon">*</span></label>
                    <input
                      type='number'
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
                <button onClick={handleFindRoutes} className='w-fit py-3.5 px-7 font-Rink font-semibold Small-text BD-button'>
                  <FiSearch /> <span>FIND ROUTES</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'routes' && (
            <div className="flex flex-col gap-5">
              <div className="p-5 flex flex-col gap-8 bg-[#FFFFFF] rounded-[16px]">
                <div className="grid grid-cols-8 gap-10">
                  <div className="col-span-6 flex gap-7 items-start">
                    <div className="w-fit">
                      <Image src="/Route-image.svg" alt="Image" width={160} height={160} className='w-[105px]' />
                    </div>
                    <div className="w-full flex flex-col gap-6">
                      <div className="w-full flex gap-10 items-start">
                        <p className="w-fit flex flex-col gap-1">
                          <span className="font-semibold Large-text text-[#1739E5] whitespace-nowrap">DHL Aviation</span>
                          <span className="font-Rink font-semibold Little-text tracking-[0.5px] text-[#0D1119] whitespace-nowrap">ACP GENERAL CARGO</span>
                        </p>
                        <p className="w-full flex justify-center font-semibold Little-text text-[#7A8799]">
                          ACP : EXPRESS PRIORITY
                        </p>
                      </div>
                      <div className="w-full flex gap-6 items-start justify-between">
                        <p className="w-fit flex flex-col items-start">
                          <span className="font-Rink font-semibold Little-text tracking-[0.5px] text-[#2D4059] whitespace-nowrap">LHR</span>
                          <span className="font-Rink font-semibold Large-text text-[#10103E] whitespace-nowrap">00:00</span>
                          <span className="font-normal Little-text text-[#7A8799] whitespace-nowrap">Thu, 1 Jan</span>
                        </p>
                        <div className="w-full flex gap-3 items-center">
                          <div className="h-2 w-2 bg-[#79CAF2] rounded-full"></div>
                          <div className="w-full border-t-[1px] border-[#79CAF2]"></div>
                          <div className="h-2 w-2 bg-[#79CAF2] rounded-full"></div>
                        </div>
                        <p className="w-fit flex flex-col items-end">
                          <span className="font-Rink font-semibold Little-text tracking-[0.5px] text-[#2D4059] whitespace-nowrap">HKG</span>
                          <span className="font-Rink font-semibold Large-text text-[#10103E] whitespace-nowrap">08:00</span>
                          <span className="font-normal Little-text text-[#7A8799] whitespace-nowrap">Thu, 1 Jan</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <div className="h-full flex flex-col gap-6 justify-between">
                      <p className="flex flex-col gap-1 items-end font-Rink font-semibold">
                        <span className="Medium-heading text-[#1739E5]">$ 283.95</span>
                        <span className="Small-text text-[#2D4059]">$ 2.84 / kg</span>
                      </p>
                      <p className="flex flex-col items-end">
                        <span className="font-normal Little-text text-[#7A8799]">Total Distance</span>
                        <span className="font-Rink font-semibold Small-text text-[#2D4059]">9,645 KM</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="pb-3 font-normal Little-text tracking-[0.5px] text-[#7A8799]">
                    Total includes additional sub-charges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-fit py-2 px-4 border-[2px] border-[#E6EEF2] flex flex-col gap-1 items-start bg-[#F1F6F8] rounded-[8px]">
                      <span className="font-Rink font-semibold Small-text text-[#10103E]">LHR → HKG</span>
                      <span className="font-normal Little-text text-[#7A8799]">Cargo Solutions Network (CSN)</span>
                    </div>
                    <button onClick={() => handleRouteToggle(0)} className="group w-fit py-2 px-4 border-[2px] border-[#E6EEF2] hover:border-[#10103E] flex gap-3 items-center bg-[#F1F6F8] hover:bg-[#10103E] Hover-effect rounded-[8px] cursor-pointer">
                      <p className="flex flex-col gap-1 items-start">
                        <span className="font-Rink font-semibold Small-text text-[#10103E] group-hover:text-[#FFFFFF]">LHR → HKG</span>
                        <span className="font-normal Little-text text-[#7A8799] group-hover:text-[#CDE2F7]">DHL Aviation</span>
                      </p>
                      <div className={`shrink-0 Small-text text-[#2D4059] group-hover:text-[#CDE2F7] transition-transform duration-300 ease-in-out ${activeRouteIndex === 0 ? "rotate-180" : "rotate-0"}`}>
                        <IoIosArrowDown />
                      </div>
                    </button>
                  </div>
                  <div className={`w-full bg-[#F1F6F8] rounded-[8px] overflow-hidden transition-all duration-300 ease-in-out ${activeRouteIndex === 0 ? "max-h-[500px] opacity-100 mt-3 p-5" : "max-h-0 opacity-0 p-0"}`}>
                    <div className="grid grid-cols-2">
                      <div className="w-full pr-5 flex flex-col gap-2.5">
                        <div className="grid grid-cols-4 gap-5 font-normal Little-text text-[#7A8799]">
                          <div className="col-span-2">Charge</div>
                          <div className="col-span-1">Amount</div>
                          <div className="col-span-1">Currency</div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {chargeDetails.map((item, index) => (
                            <div key={index} className="grid grid-cols-4 gap-5 font-normal Small-text text-[#2D4059]">
                              <div className="col-span-2 font-semibold tracking-[0.5px]">{item.charge}</div>
                              <div className="col-span-1">{item.amount}</div>
                              <div className="col-span-1">{item.currency}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full pl-10 border-l-[2px] border-[#E6EEF2] flex flex-col gap-5">
                        <div className="flex gap-10 items-start">
                          <p className="flex flex-col">
                            <span className="font-normal Little-text text-[#7A8799]">Min. Weight</span>
                            <span className="font-semibold Small-text tracking-[0.5px] text-[#2D4059]">45 KG</span>
                          </p>
                          <p className="flex flex-col">
                            <span className="font-normal Little-text text-[#7A8799]">Service Type</span>
                            <span className="font-semibold Small-text tracking-[0.5px] text-[#2D4059]">ACP : Express Priority</span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-5">
                          {distanceDetails.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1">
                              <p className="font-Rink font-semibold Small-text text-[#10103E]">
                                {item.from} → {item.to}
                              </p>
                              <div className="grid grid-cols-2 gap-5">
                                <p className="flex flex-col">
                                  <span className="font-normal Little-text text-[#7A8799]">Aircraft Type</span>
                                  <span className="font-semibold Small-text tracking-[0.5px] text-[#2D4059]">{item.type}</span>
                                </p>
                                <p className="flex flex-col">
                                  <span className="font-normal Little-text text-[#7A8799]">Distance</span>
                                  <span className="font-semibold Small-text tracking-[0.5px] text-[#2D4059]">{item.distance} KM</span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-end">
                  <button className='w-fit p-[11px] font-Rink font-semibold Normal-text Border-button'>
                    <FiBookmark />
                  </button>
                  <button className='w-fit py-[11px] px-6 font-Rink font-medium Small-text Border-button'>
                    RATE REQUEST
                  </button>
                  <button className='w-fit py-3 px-6 font-Rink font-semibold Small-text BD-button'>
                    <FiCheck /> <span>BOOK</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewQuote