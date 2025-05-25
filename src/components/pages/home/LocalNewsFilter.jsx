"use client";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data - replace with your actual data
const divisions = [
  { value: "dhaka", label: "Dhaka" },
  { value: "chittagong", label: "Chittagong" },
  { value: "rajshahi", label: "Rajshahi" },
  { value: "khulna", label: "Khulna" },
  { value: "sylhet", label: "Sylhet" },
  { value: "barisal", label: "Barisal" },
  { value: "rangpur", label: "Rangpur" },
  { value: "mymensingh", label: "Mymensingh" },
];

const districts = {
  dhaka: [
    { value: "dhaka-metro", label: "Dhaka Metro" },
    { value: "gazipur", label: "Gazipur" },
    { value: "narayanganj", label: "Narayanganj" },
    { value: "manikganj", label: "Manikganj" },
    { value: "munshiganj", label: "Munshiganj" },
  ],
  chittagong: [
    { value: "chittagong-metro", label: "Chittagong Metro" },
    { value: "coxs-bazar", label: "Cox's Bazar" },
    { value: "comilla", label: "Comilla" },
    { value: "feni", label: "Feni" },
    { value: "noakhali", label: "Noakhali" },
  ],
  rajshahi: [
    { value: "rajshahi-metro", label: "Rajshahi Metro" },
    { value: "bogra", label: "Bogra" },
    { value: "pabna", label: "Pabna" },
    { value: "sirajganj", label: "Sirajganj" },
    { value: "natore", label: "Natore" },
  ],
  // Add more districts for other divisions as needed
};

const areas = {
  "dhaka-metro": [
    { value: "dhanmondi", label: "Dhanmondi" },
    { value: "gulshan", label: "Gulshan" },
    { value: "banani", label: "Banani" },
    { value: "uttara", label: "Uttara" },
    { value: "old-dhaka", label: "Old Dhaka" },
  ],
  gazipur: [
    { value: "gazipur-sadar", label: "Gazipur Sadar" },
    { value: "tongi", label: "Tongi" },
    { value: "kaliakair", label: "Kaliakair" },
    { value: "kapasia", label: "Kapasia" },
  ],
  "chittagong-metro": [
    { value: "agrabad", label: "Agrabad" },
    { value: "nasirabad", label: "Nasirabad" },
    { value: "panchlaish", label: "Panchlaish" },
    { value: "halishahar", label: "Halishahar" },
  ],
  // Add more areas for other districts as needed
};

export default function LocalNewsFilter() {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");

  const handleDivisionChange = (value) => {
    setDivision(value);
    setDistrict("");
    setArea("");
  };

  const handleDistrictChange = (value) => {
    setDistrict(value);
    setArea("");
  };

  const handleAreaChange = async (value) => {
    setArea(value);

    // Make API call when area is selected
    if (division && district && value) {
      console.log("Fetching news for:", {
        division,
        district,
        area: value,
      });
    }
  };

  const availableDistricts = division ? districts[division] || [] : [];
  const availableAreas = district ? areas[district] || [] : [];

  return (
    <div className="bg-[#EDEDED] p-2 w-[300px]">
      <h2 className="text-md font-bold">আমার এলাকার সংবাদ</h2>
      <div className="flex flex-col gap-4 mt-2">
        {/* Division Select */}
        <div className="space-y-2 bg-white">
          <Select value={division} onValueChange={handleDivisionChange}>
            <SelectTrigger className="w-full bg-white rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="বিভাগ" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white rounded-none">
              <SelectGroup>
                <SelectLabel>বিভাগ</SelectLabel>
                {divisions.map((div) => (
                  <SelectItem
                    key={div.value}
                    value={div.value}
                    className="focus:ring-0 focus:outline-none focus-visible:ring-0"
                  >
                    {div.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* District Select */}
        <div className="space-y-2 bg-white">
          <Select
            value={district}
            onValueChange={handleDistrictChange}
            disabled={!division}
          >
            <SelectTrigger className="w-full bg-white rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="জেলা" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white rounded-none">
              <SelectGroup>
                <SelectLabel>জেলা</SelectLabel>
                {availableDistricts.map((dist) => (
                  <SelectItem
                    key={dist.value}
                    value={dist.value}
                    className="focus:ring-0 focus:outline-none focus-visible:ring-0"
                  >
                    {dist.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Area Select */}
        <div className="space-y-2 bg-white">
          <Select
            value={area}
            onValueChange={handleAreaChange}
            disabled={!district}
          >
            <SelectTrigger className="w-full bg-white rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="উপজেলা" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white rounded-none">
              <SelectGroup>
                <SelectLabel>উপজেলা</SelectLabel>
                {availableAreas.map((ar) => (
                  <SelectItem
                    key={ar.value}
                    value={ar.value}
                    className="focus:ring-0 focus:outline-none focus-visible:ring-0"
                  >
                    {ar.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
