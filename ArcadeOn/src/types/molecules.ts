import { ImageSourcePropType } from "react-native";

export type StreakCalendarProps = {
    streakDone: boolean[];
    todayIndex: number
}

export type PassItem = {
    image: ImageSourcePropType; 
    reward: string;
    isClaimed: boolean;
};

export type RewardLevelSliderProps = {
    pass: PassItem[];
};

type FeaturedGame = {
  id: string;
  title: string;
  cover: string;
  logo: string;
  category?: string;
  cta?: string;
  subtitle?: string;
  description?: string;
};

export type FeaturedGameProps = {
  games: FeaturedGame[];
  onPressGame: (game: FeaturedGame) => void;
};