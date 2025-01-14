/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Rectangle3Props } from "./Rectangle3";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MainMenuOverridesProps = {
    MainMenu?: PrimitiveOverrideProps<ViewProps>;
    "image 7"?: PrimitiveOverrideProps<ImageProps>;
    "new lore drop"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 33850555"?: Rectangle3Props;
    "new game"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 33848519"?: PrimitiveOverrideProps<ViewProps>;
    leadership?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 33848524"?: PrimitiveOverrideProps<ViewProps>;
    instructions?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 33848544"?: PrimitiveOverrideProps<ViewProps>;
    "sign out"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MainMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MainMenuOverridesProps | undefined | null;
}>;
export default function MainMenu(props: MainMenuProps): React.ReactElement;
