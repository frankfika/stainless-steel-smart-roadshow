
export interface SlideProps {
  isActive: boolean;
  onStart?: () => void;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  bg: string;
}

export enum SlideId {
  Cover = 0,
  PainPoints = 1,
  Solution = 2,
  DigitalEye = 3,
  EnergyHeart = 4,
  PrecisionHand = 5,
  DigitalBrain = 6,
  BusinessModel = 7,
  Team = 8,
  Vision = 9
}
