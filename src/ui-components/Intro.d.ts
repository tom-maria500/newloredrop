/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type IntroOverridesProps = {
    Intro?: PrimitiveOverrideProps<ViewProps>;
    Intro38473303?: PrimitiveOverrideProps<ViewProps>;
    "image 7"?: PrimitiveOverrideProps<ImageProps>;
    "new lore drop"?: PrimitiveOverrideProps<TextProps>;
    "create new stories with a fun twist"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IntroProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IntroOverridesProps | undefined | null;
}>;
export default function Intro(props: IntroProps): React.ReactElement;
