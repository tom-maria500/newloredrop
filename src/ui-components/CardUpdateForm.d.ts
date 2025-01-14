/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardUpdateFormInputValues = {
    content?: string;
    category?: string;
    gameID?: string;
    flipped?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CardUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    gameID?: ValidationFunction<string>;
    flipped?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardUpdateFormOverridesProps = {
    CardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    gameID?: PrimitiveOverrideProps<TextFieldProps>;
    flipped?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardUpdateFormProps = React.PropsWithChildren<{
    overrides?: CardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    card?: any;
    onSubmit?: (fields: CardUpdateFormInputValues) => CardUpdateFormInputValues;
    onSuccess?: (fields: CardUpdateFormInputValues) => void;
    onError?: (fields: CardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardUpdateFormInputValues) => CardUpdateFormInputValues;
    onValidate?: CardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CardUpdateForm(props: CardUpdateFormProps): React.ReactElement;
