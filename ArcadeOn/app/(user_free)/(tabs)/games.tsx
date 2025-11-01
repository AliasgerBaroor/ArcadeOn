import { FilterGroup } from "@/src/components/molecules/pages/FiltersGroup";
import { FILTERS_LIST } from "@/src/constants/filters";
import { FiltersType } from "@/src/types/filters";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FeaturedCarousel from "@/src/components/atoms/FeaturedCarousel";
import FeatureGames from "@/src/components/molecules/pages/FeatureGames";
import { SafeAreaView } from "react-native-safe-area-context";

const Games = () => {
  const games = [
    {
      id: "g1",
      title: "Nebula Blitz",
      cover: require("@/assets/images/banners/banner-1.png"),
      logo: require("@/assets/images/games/snake.png"),
      category: "Action",
      cta: "Play Now",
      description:
        "An electrifying space shooter with stunning visuals and fierce multiplayer.",
    },
    {
      id: "g2",
      title: "Galactic Cards",
      cover: require("@/assets/images/banners/banner-1.png"),
      logo: require("@/assets/images/games/guess.png"),
      category: "Strategy",
      cta: "Try Free",
      description:
        "Build your deck and conquer alien worlds in this tactical card battler.",
    },
    {
      id: "g3",
      title: "Cosmic Run",
      cover: require("@/assets/images/banners/banner-1.png"),
      logo: require("@/assets/images/games/run.png"),
      category: "Runner",
      cta: "Get Bonus",
      description: "Dash through galaxies and claim daily promo rewards.",
    },
  ];

  const [filters, setFilters] = useState<FiltersType>(
    FILTERS_LIST.map((f) => ({
      value: f.value,
      options: f.options,
      selected: false,
    }))
  );

  return (
    <>
      <SafeAreaView edges={["left", "right"]}>
        <FilterGroup filters={filters} setFilters={setFilters} />
      </SafeAreaView>
      <SafeAreaView edges={["left", "right"]}>
        <FeatureGames games={games} onPressGame={(game) => alert(game.title)} />
      </SafeAreaView>
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
