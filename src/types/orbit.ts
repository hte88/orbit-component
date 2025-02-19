export type ContentType = 'icon' | 'string' | 'image';

export interface BorderStyle {
  color?: string;
  opacity?: number;
}

export interface GlowStyle {
  center?: string;
  edge?: string;
}

export interface ElementStyle {
  border?: string;
  content?: string;
}

export interface OrbitalElement {
  type: ContentType;
  content?: string;
  style?: ElementStyle;
  href?: string;
  callback?: Function;
  alt?: string;
}

export interface OrbitalUI {
  background?: string;
  border?: BorderStyle;
  glow?: GlowStyle;
}
