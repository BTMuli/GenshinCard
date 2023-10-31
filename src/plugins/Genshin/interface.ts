/**
 * @file plugins/Genshin/interface.ts
 * @description 原神卡片插件接口
 * @since v0.1.0-alpha
 */

/**
 * @description 选择项
 * @since v0.1.0-alpha
 * @todo 后续可能归到 core
 * @interface SelectItem
 * @property {string} label 显示的名称
 * @property {string} value 选择的值
 * @property {number} star 星级
 * @return SelectItem
 */
export interface SelectItem {
  label: string;
  value: string;
  star: number;
}
