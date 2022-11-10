// Esse tipo de arquivo é para sobrescrever

import "styled-components";

// Estamos agora atribuindo nossa própria tipagem no styled-components
declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            white: string;
            black: string;
            gray: string;

            success: string;
            info: string;
            warning: string;
        },
    }
}