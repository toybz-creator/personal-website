import { Server, BookOpen, Cpu, Globe, Coffee, Gamepad2, Music, Plane } from "lucide-react";

export interface Interest {
  id: string;
  label: string;
  icon: typeof Server;
  description: string;
}

export const interests: Interest[] = [
  { id: "i1", label: "Distributed Systems", icon: Server, description: "Building resilient, fault-tolerant architectures" },
  { id: "i2", label: "Technical Writing", icon: BookOpen, description: "Sharing knowledge through blogs and documentation" },
  { id: "i3", label: "Open Source", icon: Cpu, description: "Contributing to tools that make developers' lives easier" },
  { id: "i4", label: "System Design", icon: Globe, description: "Designing scalable solutions for complex problems" },
  { id: "i5", label: "Coffee & Code", icon: Coffee, description: "Fueling late-night debugging sessions" },
  { id: "i6", label: "Gaming", icon: Gamepad2, description: "Strategy and simulation games for mental agility" },
  { id: "i7", label: "Music", icon: Music, description: "Lo-fi beats and jazz for deep focus sessions" },
  { id: "i8", label: "Travel", icon: Plane, description: "Exploring tech communities around the world" },
];
