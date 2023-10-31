/**
 * @file plugins/Genshin/config.ts
 * @description 原神卡片插件配置
 * @since v0.1.0-alpha
 */

import type { SelectItem } from "./interface";

const GenshinConfig: SelectItem[] = [
  {
    label: "Star1",
    value: "WHITE",
    color: "#6A727D",
    star: 1,
  },
  {
    label: "Star2",
    value: "GREEN",
    color: "#5B906C",
    star: 2,
  },
  {
    label: "Star3",
    value: "BLUE",
    color: "#4A97AE",
    star: 3,
  },
  {
    label: "Star4",
    value: "PURPLE",
    color: "#B183C5",
    star: 4,
  },
  {
    label: "Star5",
    value: "ORANGE",
    color: "#DCA450",
    star: 5,
  },
  {
    label: "Star105",
    value: "RED",
    color: "#DA614F",
    star: 5,
  },
];
export default GenshinConfig;
