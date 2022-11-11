// Esse tipo de arquivo é para sobrescrever
import "styled-components";

// Estamos agora atribuindo nossa própria tipagem no styled-components
declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            bgPrimary: string;
            bgSecondary: string;
            bgTertiary: string;
            bgFourth: string;

            hoverPrimary: string;
            hoverSecondary: string;

            textPrimary: string;
            textSecondary: string;
            textTertiary: string;
            textFourth: string;

            success: string;
            info: string;
            warning: string;
        },
    }
}