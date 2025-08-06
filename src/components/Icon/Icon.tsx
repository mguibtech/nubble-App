import React from "react";
import { EyeOffIcon } from "../../assets/icons/EyeOffIcon";


export interface IcomBase {
    size?: number;
    color?: string;
}

interface Props {
    name: IconNames;
}

export function Icon({ name }: Props) {

    const SVGIcon = iconRegistry[name]

    return <SVGIcon />

}


const iconRegistry = {
    eyeOn: EyeOffIcon,
    eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry;
type IconNames = keyof IconType