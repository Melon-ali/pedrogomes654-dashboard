"use client"
import Image from "next/image"
import { MapPin, Phone, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfileCard() {
    return (
        <div className="max-w-8xl mx-auto p-4 font-sans">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>

            {/* Profile Banner */}
            <div className="bg-green-600 text-white rounded-lg px-8 p-4 mb-6 flex justify-between items-center">
                <div className="flex justify-between items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0">
                        <Image
                            src="/dPerson.png"
                            alt="Profile"
                            width={48}
                            height={48}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Johan Smith</h2>

                    </div>

                </div>
                <div>
                    <div className="flex items-center text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>27 Oak Street, Manchester</span>
                    </div>
                    <div className="flex items-center text-sm mt-1">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>+09 3454 346 46</span>
                    </div>
                </div>
                <Link href={'./profileEdit'}>
                    <Button className="bg-white w-20 text-black hover:bg-gray-100">Edit</Button>
                </Link>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <div className="bg-green-50 p-3 rounded-md">Johan</div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <div className="bg-green-50 p-3 rounded-md">smith</div>
                    </div>

                    {/* Your Location */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Your Location</label>
                        <div className="bg-green-50 p-3 rounded-md flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                            27 Oak Street, Manchester
                        </div>
                    </div>

                    {/* Your phone number */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Your phone number</label>
                        <div className="bg-green-50 p-3 rounded-md flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-gray-600" />
                            +09 3454 346 46
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Profile Picture</label>
                        <div className="bg-green-50 p-6 rounded-md flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Upload className="w-5 h-5 text-blue-500" />
                                </div>
                                <p className="text-blue-500 font-medium">
                                    <span className="cursor-pointer hover:underline">Click to upload</span> or drag & drop
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Max resolution 200×200px</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
