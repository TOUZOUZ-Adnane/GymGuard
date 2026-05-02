"use client";

import { cameras, getEventStyle, getEquipmentStyle } from "../lib/cameraData";

type CameraDashboardProps = {
  selectedCameraId: number | null;
  onSelectCamera: (id: number | null) => void;
};

export default function CameraDashboard({ selectedCameraId, onSelectCamera }: CameraDashboardProps) {
  const selectedCamera = cameras.find((camera) => camera.id === selectedCameraId) ?? null;

  return (
    <section className="bg-neutral-950 w-full py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* <h2 className="text-4xl font-bold text-cyan-400 mb-2">Monitoring Section</h2> */}
            {/* <p className="text-gray-300 max-w-3xl">
              Click a camera card below to display the dashboard on the same page.
            </p> */}
          </div>
          {selectedCamera && (
            <button
              type="button"
              onClick={() => onSelectCamera(null)}
              className="inline-flex items-center justify-center rounded-full border border-cyan-400 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Back to camera list
            </button>
          )}
        </div>

        {selectedCameraId === null ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {cameras.map((camera) => (
              <button
                key={camera.id}
                type="button"
                onClick={() => onSelectCamera(camera.id)}
                className="relative overflow-hidden rounded-xl border-2 border-cyan-400 shadow-lg h-72 sm:h-80 md:h-96 transition hover:border-cyan-300"
              >
                <video
                  src={camera.video}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs text-red-400 font-semibold">REC</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 px-4 py-2 rounded text-cyan-400 font-semibold">
                  {camera.name}
                </div>
              </button>
            ))}
          </div>
        ) : null}

        {selectedCamera ? (
          <div className="mt-10 rounded-3xl border border-cyan-400 bg-neutral-900 p-6 shadow-lg shadow-cyan-400/20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">{selectedCamera.name} Dashboard</h3>
                <p className="mt-2 text-gray-300 max-w-2xl">
                  Latest detections, out-of-place equipment alerts, and exercise feedback for this camera.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400 bg-black/40 px-4 py-2 text-sm text-cyan-200">
                <label htmlFor="camera-select" className="font-semibold text-cyan-200 cursor-pointer">
                  Camera:
                </label>
                <select
                  id="camera-select"
                  value={selectedCameraId ?? ""}
                  onChange={(event) => onSelectCamera(Number(event.target.value))}
                  className="rounded-full border border-cyan-400 bg-neutral-950 px-3 py-2 text-sm text-gray-100 outline-none transition hover:border-cyan-300"
                >
                  {cameras.map((camera) => (
                    <option key={camera.id} value={camera.id} className="bg-neutral-900 text-white">
                      {camera.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-cyan-400 bg-neutral-950 p-5">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">Detected Events</h4>
                <ul className="space-y-3 text-gray-200">
                  {selectedCamera.events.map((event, index) => (
                    <li key={index} className={`rounded-xl border px-3 py-3 ${getEventStyle(event.severity)}`}>
                      {event.message}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan-400 bg-neutral-950 p-5">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">Equipment Alerts</h4>
                <ul className="space-y-3 text-gray-200">
                  {selectedCamera.equipment.map((item, index) => (
                    <li key={index} className={`rounded-xl border px-3 py-3 ${getEquipmentStyle(item.status)}`}>
                      <p className="font-semibold text-gray-100">{item.item}</p>
                      <p className="mt-1 text-sm text-gray-200">Status: {item.status}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan-400 bg-neutral-950 p-5">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">Exercise Feedback</h4>
                <p className="rounded-xl bg-black/40 p-4 text-gray-200">{selectedCamera.exercise.details}</p>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                  selectedCamera.exercise.correct ? "bg-cyan-500/15 text-cyan-100" : "bg-red-500/15 text-red-100"
                }`}>
                  {selectedCamera.exercise.correct ? "Correct exercise" : "Incorrect exercise"}
                </span>
              </div>
            </div>
          </div>
        ) : 
          null}
      </div>
    </section>
  );
}
