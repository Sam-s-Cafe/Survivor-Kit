
export enum Screen {
  Dashboard,
  Comms,
  Videos,
  Bunker,
  Identifier,
  Remedies,
}

export interface Bunker {
  id: string; // Firestore document ID or local constant ID
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  type: 'official' | 'user-added';
  creatorName?: string;
  creatorId?: string;
}

export interface Message {
  id: string; // Firestore document ID
  senderId: string;
  senderName: string;
  type: 'text' | 'image' | 'voice' | 'location' | 'broadcast';
  content: string;
  timestamp: string; // Converted from Firestore Timestamp
  via?: 'p2p' | 'satellite' | 'internet';
}

export interface SOSLocation {
    lat: number;
    lng: number;
    timestamp: string;
}

export interface FieldGuideEntry {
    id: number;
    name: string;
    description: string;
    imageUrls: string[];
    edibility: string;
    habitat: string;
    warning?: string;
}


export interface RadioStation {
  name: string;
  frequency: string;
  streamUrl: string;
}

export type RemedyCategory = 'Insect Bites' | 'Wound Care' | 'Pain Relief' | 'Skin Issues' | 'Digestive Aid' | 'Respiratory Aid' | 'General Wellness';

export interface Remedy {
  id: number;
  title: string;
  category: RemedyCategory;
  description: string;
  ingredients: string[];
  instructions: string[];
}
