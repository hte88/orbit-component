
export type Types = 'icon'| 'string'| 'image'

interface Border {
    color?: string
    opacity?: string
}

interface GlowColors {
    center?: string
    edge?: string
}

export interface ItemCircle {
    type?: Types
    content?: string
    class?: string
    href?: string
    alt?: string
}

export interface Ui {
    bg?: string
    border?: Border
    glowColors?: GlowColors
}
