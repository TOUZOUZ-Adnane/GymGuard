"use client";

import { useState } from "react";
import CameraDashboard from "../components/CameraDashboard";

export default function Home() {
  const [selectedCameraId, setSelectedCameraId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {selectedCameraId === null ? (
        <>
          {/* Top Banner */}
          <header className="bg-neutral-950">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-5xl font-bold text-cyan-400">GymGuard</h1>
            </div>
          </header>

          <CameraDashboard selectedCameraId={selectedCameraId} onSelectCamera={setSelectedCameraId} />

          {/* Privacy Section */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Client Privacy Protection</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                At GymGuard, we prioritize the privacy of our clients. Our advanced AI technology automatically blurs faces in all video feeds to ensure that individuals remain anonymous while maintaining full surveillance capabilities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This feature allows us to monitor gym activities without compromising personal privacy, giving you peace of mind during your workout.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <video className="w-full h-64 object-cover" src="videos/blur1.mp4" autoPlay muted loop playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surveillance Section */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Intelligent Surveillance</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Our system continuously monitors gym equipment and materials. If any item is detected out of place, GymGuard immediately sends a warning to staff for quick resolution.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This proactive approach ensures a safe and organized environment for all gym members.
              </p>
            </div>
            <div className="lg:w-1/2 lg:order-1">
              <div className="rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <video className="w-full h-64 object-cover" src="videos/equipment.mp4" autoPlay muted loop playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">Exercise Tracking & Performance Analysis</h2>
          <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed">
            GymGuard tracks users performing various exercises, ensuring proper form and technique for both strength training and bodyweight exercises. Our AI analyzes movements to provide real-time feedback and prevent injuries.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <div className="bg-neutral-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition"> */}
              <div className="rounded-lg overflow-hidden mb-4 border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <video className="w-full h-48 object-cover" src="videos/hamer1.mp4" autoPlay muted loop playsInline />
              </div>
            {/* </div> */}
            {/* <div className="bg-neutral-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition"> */}
              <div className="rounded-lg overflow-hidden mb-4 border-2 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <video className="w-full h-48 object-cover" src="videos/planch1.mp4" autoPlay muted loop playsInline />
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Email</h3>
              <p className="text-gray-300">business.deepvisionary@gmail.com</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Phone</h3>
              <p className="text-gray-300">(+212) 640350562</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Address</h3>
              <p className="text-gray-300">123 Fitness Street<br />Gym City, GC 12345</p>
            </div>
          </div>
        </div>
      </section>
        </>
      ) : (
        <CameraDashboard selectedCameraId={selectedCameraId} onSelectCamera={setSelectedCameraId} />
      )}
    </div>
  );
}
