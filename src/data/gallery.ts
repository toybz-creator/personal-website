export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "System Architecture Whiteboard",
    caption: "Planning the distributed task engine architecture with the team",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    id: "g2",
    title: "Conference Talk",
    caption: "Speaking about scaling PostgreSQL at TechConf 2024",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: "g3",
    title: "Team Hackathon",
    caption: "48-hour hackathon building an internal developer platform",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: "g4",
    title: "Server Room Visit",
    caption: "Touring the data center hosting our primary infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: "g5",
    title: "Remote Work Setup",
    caption: "My daily workspace — minimal and distraction-free",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    id: "g6",
    title: "Open Source Meetup",
    caption: "Hosting the local open source contributors meetup",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
  },
];
