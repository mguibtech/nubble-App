import React from "react";

import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

import { TextInput, TextInputPros } from "@components";

import { formatCPF, formatPlacaFlex, formatPhone, formatCEP, formatDate, formatRG, formatState, formatName, formatCity, formatTime } from "../../utils/functions";


export function FormTextInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    mask,
    onFocus,
    ...textInputProps
}: TextInputPros & UseControllerProps<FormType> & {
    mask?: 'cpf' | 'placa' | 'phone' | 'cep' | 'date' | 'rg' | 'state' | 'name' | 'city' | 'time';
    onFocus?: () => void;
}) {

    const handleChangeText = (text: string, onChange: (value: string) => void) => {
        if (mask === 'cpf') {
            // Remove caracteres não numéricos antes de formatar
            const numericOnly = text.replace(/\D/g, '');
            const formattedValue = formatCPF(numericOnly);
            onChange(formattedValue);
        } else if (mask === 'placa') {
            // Aplica formatação da placa
            const formattedValue = formatPlacaFlex(text);
            onChange(formattedValue);
        } else if (mask === 'phone') {
            // Aplica formatação do telefone
            const formattedValue = formatPhone(text);
            onChange(formattedValue);
        } else if (mask === 'cep') {
            // Aplica formatação do CEP
            const formattedValue = formatCEP(text);
            onChange(formattedValue);
        } else if (mask === 'date') {
            // Aplica formatação da data
            const formattedValue = formatDate(text);
            onChange(formattedValue);
        } else if (mask === 'rg') {
            // Aplica formatação do RG
            const formattedValue = formatRG(text);
            onChange(formattedValue);
        } else if (mask === 'state') {
            // Aplica formatação do estado
            const formattedValue = formatState(text);
            onChange(formattedValue);
        } else if (mask === 'name') {
            // Aplica formatação do nome
            const formattedValue = formatName(text);
            onChange(formattedValue);
        } else if (mask === 'city') {
            // Aplica formatação da cidade
            const formattedValue = formatCity(text);
            onChange(formattedValue);
        } else if (mask === 'time') {
            // Aplica formatação da hora
            const formattedValue = formatTime(text);
            onChange(formattedValue);
        } else {
            onChange(text);
        }
    };

    const handleFocus = () => {
        if (onFocus) {
            onFocus();
        }
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextInput
                    value={field.value}
                    onChangeText={(text) => handleChangeText(text, field.onChange)}
                    onFocus={handleFocus}
                    errorMessage={fieldState.error?.message}
                    {...textInputProps}
                />
            )}
        />
    )
}