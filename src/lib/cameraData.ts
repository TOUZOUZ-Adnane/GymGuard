export type EventSeverity = "danger" | "warning" | "info";

export type CameraEvent = {
  message: string;
  severity: EventSeverity;
};

export type EquipmentAlert = {
  item: string;
  status: "Out of place" | "Needs attention" | "Normal";
};

export type ExerciseFeedback = {
  correct: boolean;
  details: string;
};

export type CameraInfo = {
  id: number;
  name: string;
  video: string;
  events: CameraEvent[];
  equipment: EquipmentAlert[];
  exercise: ExerciseFeedback;
};

export const cameras: CameraInfo[] = [
  {
    id: 1,
    name: "Camera 1",
    video: "videos/blur1.mp4",
    events: [
      { message: "Warning: hammer and tire used", severity: "warning" },
      { message: "One person moving (hammer exercise performed correctly)", severity: "info" },
      { message: "One person not moving", severity: "warning" },
      { message: "Cable out of place", severity: "danger" },
    ],
    equipment: [
      { item: "Cable out of place", status: "Out of place" },
      { item: "Dumbbell rack misaligned", status: "Needs attention" },
    ],
    exercise: {
      correct: true,
      details: "Hammer exercise is performed correctly by the moving person, while one person remains stationary and cable is out of place.",
    },
  },
  {
    id: 2,
    name: "Camera 2",
    video: "videos/equipment.mp4",
    events: [
      { message: "Flat bench and bar out of place", severity: "warning" },
      { message: "Butterfly exercise performed correctly", severity: "info" },
      { message: "Light traffic of persons", severity: "info" },
    ],
    equipment: [
      { item: "Flat bench and bar out of place", status: "Out of place" },
    ],
    exercise: {
      correct: true,
      details: "Butterfly exercise is performed correctly while light traffic moves through the area.",
    },
  },
  {
    id: 3,
    name: "Camera 3",
    video: "videos/hamer1.mp4",
    events: [
      { message: "Heavy training detected", severity: "info" },
      { message: "Repeated drop set detected", severity: "warning" },
    ],
    equipment: [
      { item: "Kettlebell moved outside of rack zone", status: "Needs attention" },
    ],
    exercise: {
      correct: true,
      details: "Deadlift posture is solid with a neutral spine and correct hip hinge.",
    },
  },
  {
    id: 4,
    name: "Camera 4",
    video: "videos/planch1.mp4",
    events: [
      { message: "Plank exercise performed correctly", severity: "info" },
      { message: "Dumbbells used on top of yoga mat", severity: "warning" },
    ],
    equipment: [
      { item: "Dumbbells placed on yoga mat", status: "Out of place" },
    ],
    exercise: {
      correct: true,
      details: "Plank exercise is performed correctly, but dumbbells are placed on top of the yoga mat.",
    },
  },
];

export function getCameraById(id: number) {
  return cameras.find((camera) => camera.id === id) ?? null;
}

export function getEventStyle(severity: EventSeverity) {
  switch (severity) {
    case "danger":
      return "bg-red-500/10 text-red-100 border-red-500";
    case "warning":
      return "bg-amber-500/10 text-amber-100 border-amber-500";
    case "info":
      return "bg-cyan-500/10 text-cyan-100 border-cyan-500";
    default:
      return "bg-white/5 text-white border-white/10";
  }
}

export function getEquipmentStyle(status: EquipmentAlert["status"]) {
  switch (status) {
    case "Out of place":
      return "bg-red-500/10 text-red-100 border-red-500";
    case "Needs attention":
      return "bg-amber-500/10 text-amber-100 border-amber-500";
    case "Normal":
      return "bg-cyan-500/10 text-cyan-100 border-cyan-500";
    default:
      return "bg-white/5 text-white border-white/10";
  }
}
