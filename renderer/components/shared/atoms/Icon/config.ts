import * as icons from './assets';

export const configIcons = {
  'app-logo': icons.AppLogo,
  'arrow-chevron-down': icons.ArrowChevronDown,
  'arrow-chevron-left': icons.ArrowChevronLeft,
  'arrow-chevron-right': icons.ArrowChevronRight,
  'arrow-left': icons.ArrowLeft,
  close: icons.Close,
  eye: icons.Eye,
  'eye-closed': icons.EyeClosed,
  'message-circle': icons.MessageCircle,
  minus: icons.Minus,
  plus: icons.Plus,
  settings: icons.Settings,
  'user-profile': icons.UserProfile,
};
export type IconKeys = keyof typeof configIcons;
