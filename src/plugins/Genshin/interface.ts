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
 * @property {string} title 提示语-i18n
 * @property {string} type 选择类型-获取值
 * @property {string} list[].label select label
 * @property {string} list[].value select value
 * @return SelectItem
 */
export interface SelectItem {
  title: string;
  type: string;
  list: {
    label: string;
    value: string;
  }[];
}

/**
 * @description 选择类型-负责 select 数据
 * @since v0.1.0-alpha
 * @todo 这个与上面的SelectItem.type是一个用途
 * @interface SelectType
 * @property {string} bgColor 背景色
 * @property {string} fgColor 前景色
 * @return SelectType
 */
export interface SelectType {
  bgColor: string;
  fgColor: string;
}
