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
    star: 1,
  },
  {
    label: "Star2",
    value: "GREEN",
    star: 2,
  },
  {
    label: "Star3",
    value: "BLUE",
    star: 3,
  },
  {
    label: "Star4",
    value: "PURPLE",
    star: 4,
  },
  {
    label: "Star5",
    value: "ORANGE",
    star: 5,
  },
  {
    label: "Star105",
    value: "RED",
    star: 5,
  },
];
export default GenshinConfig;
