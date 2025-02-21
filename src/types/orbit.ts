export type ContentType = 'icon' | 'string' | 'image';

export interface BorderStyle {
  base?: string;
}

export interface GlowStyle {
  primary?: string;
  secondary?: string;
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
  wrapper: string;
  background: string;
  border: BorderStyle;
  glow: GlowStyle;
  element?: ElementStyle;
}

export interface OrbitalSystem {
  rings: OrbitalElement[][],
  systemDiameter: number,
  ringSpacing: number,
  rotationSpeed: number,
  speedMultiplier: number,
  glowRotationRatio: number,
  elementDiameter: number,
  enableGlow: boolean,
  ui: OrbitalUI,

}
