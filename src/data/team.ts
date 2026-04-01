export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  qualifications?: string[];
}

export const team: TeamMember[] = [
  {
    id: "jeff-patel",
    name: "Jeff Patel",
    title: "Founder & Lead Optometrist",
    bio: "Jeff founded the practice with a simple vision: to make world-class eye care and designer eyewear accessible to everyone in Mauritius. With decades of experience in optometry, Jeff combines clinical expertise with a passion for design — ensuring every patient not only sees clearly but looks and feels their best.",
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    qualifications: ["B.Optom", "FAAO"],
  },
  {
    id: "team-optometrist-1",
    name: "Dr. Ananya Sharma",
    title: "Senior Optometrist",
    bio: "Specialising in contact lens fitting and paediatric optometry, Dr. Sharma brings a gentle, reassuring approach to every examination. She is particularly passionate about early detection of eye conditions in children and regularly conducts school eye-screening programmes across Mauritius.",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    qualifications: ["B.Optom (Hons)", "Dip.CL"],
  },
  {
    id: "team-optometrist-2",
    name: "Marc Rousseau",
    title: "Optometrist",
    bio: "Marc has a keen interest in the management of chronic eye conditions including dry eye disease and glaucoma. His calm, methodical approach puts even anxious patients at ease. When he is not behind the slit lamp, you will find him cycling around the island.",
    imageUrl:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    qualifications: ["M.Optom"],
  },
  {
    id: "team-dispenser-1",
    name: "Priya Goburdhun",
    title: "Head Dispensing Optician",
    bio: "Priya leads our dispensing team and has an extraordinary eye for matching frames to faces. With an encyclopaedic knowledge of lens technology, she ensures every patient leaves with a pair of glasses that is not just functional but truly flattering.",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    qualifications: ["Dip.DO"],
  },
];
