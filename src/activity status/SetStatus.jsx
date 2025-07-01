'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../components/ui/dropdown-menu';
import { Button } from '../components/ui/button';
import { useChangeStatusStore } from '../store/useChangeStatusStore';

export default function SetStatus({handleSelect, duration, selectedLabel}) {
//   const { status, setExpiresAt, newStatus } = useChangeStatusStore();
//   const [selectedLabel, setselectedLabel] = useState('Set Status Time');
//   const duration = [
//      { label: "Don't Clear", ms: null },
//     { label: '30 minutes', ms: 30 * 60 * 1000 },
//     { label: '1 hour', ms: 60 * 60 * 1000 },
//     { label: '4 hours', ms: 72 * 60 * 60 * 1000 },
//     { label: 'Today', ms: 24 * 60 * 60 * 1000 },
//   ];

//   const handleSelect = duration => {
//     console.log(duration);
//     let endTime = Date.now() + duration.ms;
//     setstatusTime(endTime);
//     setselectedLabel(duration.label);
//   };
  return (
    <div className="w-full max-w-sm mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-94 justify-between bg-white text-black border">
            {selectedLabel}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="bottom"
          align="start"
          className="w-full min-w-[100%]"
          sideOffset={0} // ⬅ removes spacing between button and dropdown
        >
          {duration.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleSelect(item)}
              className="w-full hover:bg-gray-800 min-w-90"
            >
              {item.label}
            </DropdownMenuItem>
          ))}

          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
