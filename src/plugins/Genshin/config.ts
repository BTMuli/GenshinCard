/**
 * @file plugins/Genshin/config.ts
 * @description 原神卡片插件配置
 * @since v0.1.0-alpha
 */

import type { SelectItem } from "./interface";

const GenshinConfig: SelectItem[] = [
  {
    title: "gss-bgColor",
    type: "bgColor",
    list: [
      {
        label: "Star1",
        value: "WHITE",
      },
      {
        label: "Star2",
        value: "GREEN",
      },
      {
        label: "Star3",
        value: "BLUE",
      },
      {
        label: "Star4",
        value: "PURPLE",
      },
      {
        label: "Star5",
        value: "ORANGE",
      },
      {
        label: "Star105",
        value: "RED",
      },
    ],
  },
  {
    title: "gss-fgColor",
    type: "fgColor",
    list: [
      {
        label: "Item",
        value: "ITEM",
      },
    ],
  },
];

export default GenshinConfig;
