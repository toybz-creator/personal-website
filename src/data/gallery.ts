export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Lisbon football match",
    caption: "Champions League atmosphere in Lisbon — watching Portugal vs Croatia live and soaking in world-class football energy.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    id: "g2",
    title: "Lagos Tennis",
    caption: "Front-row at the Lagos tennis competition — always learning from elite performance and discipline.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: "g3",
    title: "Primavera Porto",
    caption: "Primavera Festival in Porto — great music, great people, great creative energy.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    id: "g4",
    title: "Lagos Tech Conference",
    caption: "Lagos tech conference — connecting with builders shaping the future of African tech.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: "g5",
    title: "Building apps",
    caption: "Deep in build mode — turning ideas into production systems.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    id: "g6",
    title: "Reading at beach",
    caption: "Reading and reflecting by the ocean — where most architecture ideas begin.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
  },
];
