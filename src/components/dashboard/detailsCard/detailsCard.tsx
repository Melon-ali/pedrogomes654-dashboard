"use client"

import Image from "next/image"
import { MapPin, Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DetailsCard() {
  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Details</h1>
        <div className="flex items-center gap-2">
          <span>Allison Mat</span>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <Image src="/dPerson.png" alt="Profile" width={32} height={32} />
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/dPerson.png"
              alt="Memorial Photo"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 mb-1">In Treasured Memory of</p>
          <h2 className="text-xl font-bold mb-1">Shane Watson</h2>
          <p className="text-gray-600 mb-2">12 Jan 1990 to 19 Mar 2025</p>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Biography</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet to as a bew Ut scelerisque turpis at bibendum nulla nullam tristique. Et pharetra
            maurisnibh sollicitudin ac. Egestas auctor non suspendisse consequat venenatis. At a sed id tortor nunc
            mauris ultrices. Lore Lorem ipsum dolor sit amet to as a bew Ut scelerisque turpis at bibendum nulla nullam
            tristique. Et pharetra maurisnibh sollicitudin ac. Egestas auctor non suspendisse consequat venenatis.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Video</h3>
          <div className="relative rounded-lg overflow-hidden bg-gray-200 aspect-video flex items-center justify-center">
            <Image
              src="/video.png"
              alt="Video thumbnail"
              width={250}
              height={150}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                <Play className="w-6 h-6 text-gray-800" />
              </div>
            </div>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Audio</h3>
          <div className="bg-gray-100 rounded-lg p-3 flex items-center">
            <Volume2 className="w-5 h-5 mr-2 text-gray-600" />
            <div className="w-full h-6">
              <Image
                src="/audio.png"
                alt="Audio waveform"
                width={200}
                height={10}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Add social account <span className="text-xs font-normal text-gray-500">(not necessary)</span>
          </h3>
          <div className="space-y-3">
            <Input placeholder="Facebook link" className="text-sm" />
            <Input placeholder="Instagram link" className="text-sm" />
            <Input placeholder="Tiktok link" className="text-sm" />
            <Input placeholder="X link" className="text-sm" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h3 className="font-semibold mr-4">Privacy</h3>
          <span className="text-green-600">Public</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
        <Button variant="outline">Decline</Button>
      </div>
    </div>
  )
}
