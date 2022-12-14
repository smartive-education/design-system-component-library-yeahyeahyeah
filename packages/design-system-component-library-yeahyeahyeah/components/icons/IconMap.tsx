import React from 'react';
import {
  Calendar,
  Cancel,
  Checkmark,
  Down,
  Edit,
  Eye,
  Fullscreen,
  HeartFilled,
  HeartOutlined,
  Left,
  Location,
  LogoMumble,
  Logout,
  MumbleGradient,
  MumbleText,
  Logo,
  Profile,
  ReplyFilled,
  ReplyOutlined,
  Repost,
  Right,
  Send,
  Settings,
  Share,
  Time,
  Up,
  Upload,
} from './default_index';

export const IconsMapped = {
  calendar: Calendar,
  cancel: Cancel,
  checkmark: Checkmark,
  down: Down,
  edit: Edit,
  eye: Eye,
  fullscreen: Fullscreen,
  'heart-filled': HeartFilled,
  'heart-outlined': HeartOutlined,
  left: Left,
  location: Location,
  'logo-mumble': LogoMumble,
  logout: Logout,
  'mumble-gradient': MumbleGradient,
  'mumble-text': MumbleText,
  logo: Logo,
  profile: Profile,
  'reply-filled': ReplyFilled,
  'reply-outlined': ReplyOutlined,
  repost: Repost,
  right: Right,
  send: Send,
  settings: Settings,
  share: Share,
  time: Time,
  up: Up,
  upload: Upload,
  none: Logo,
};

export const LikeRepostIcons = {
  HeartFilled: <HeartFilled />,
  ReplyFilled: <ReplyFilled />,
};

export type IconTypes = keyof typeof IconsMapped;
