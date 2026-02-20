'use client'
import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";

interface SelectorOption {
    value: string;
    label: string;
}

interface CustomSelectorProps {
    placeholder: string;
    options: SelectorOption[];
    selectedValue: string;
    onSelect: (value: string) => void;
    disabled?: boolean;
    className?: string;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
    placeholder,
    options,
    selectedValue,
    onSelect,
    disabled = false,
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            setSearchTerm("");
        }
    };

    const handleSelect = (value: string, label: string) => {
        onSelect(value);
        setIsOpen(false);
        setSearchTerm("");
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
            setSearchTerm("");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectedLabel = options.find(opt => opt.value === selectedValue)?.label || '';

    return (
        <div className={`relative w-full ${className}`} ref={dropdownRef}>
            <div onClick={toggleDropdown} className={`w-full p-[11px] flex gap-3 items-center justify-between bg-[#FFFFFF] transform transition-all duration-300 rounded-[8px] cursor-pointer ${isOpen ? 'border-[1px] border-[#1739E5]' : 'border-[2px] border-[#E6EEF2]'}`}>
                <span className={`font-normal Small-text ${selectedValue ? 'text-[#606D80]' : 'text-[#ADBAC0]'}`}>
                    {selectedLabel || placeholder}
                </span>
                <div className={`shrink-0 Small-text transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ADBAC0]' : 'text-[#2D4059]'}`}>
                    <IoIosArrowDown />
                </div>
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full border-[2px] border-[#E6EEF2] bg-[#FFFFFF] shadow-md rounded-[8px] z-10">
                    <div className="p-2 flex flex-col gap-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 border-[1px] border-[#E6EEF2] font-normal Small-text text-[#000000] placeholder:text-[#807E79] focus:outline-none bg-transparent rounded-[6px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className="max-h-[140px] overflow-hidden overflow-y-scroll Hide-scrollBar">
                            {filteredOptions.length > 0 ? (filteredOptions.map((option) => (
                                <li onClick={() => handleSelect(option.value, option.label)} key={option.value} className="px-3 py-2 cursor-pointer font-normal Small-text text-[#7A8799] hover:bg-[#E6E6E6] rounded-[6px]">
                                    {option.label}
                                </li>
                            ))
                            ) : (
                                <li className="px-3 py-2 font-normal Normal-text text-[#7A8799] text-center">No results found</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomSelector
