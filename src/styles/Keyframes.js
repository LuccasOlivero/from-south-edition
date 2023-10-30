import { keyframes } from "styled-components";

export const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

export const scroll = keyframes`
0%{
    -webkit-animation: translateY(0);
    transform: translateY(0);
}

25%{
    -webkit-animation: translateY(calc(-200px * 4));
    transform: translateY(calc(-200px * 4));
}

50%{
    -webkit-animation: translateY(calc(+200px * 4));
    transform: translateY(calc(+200px * 4));
}

75%{
    -webkit-animation: translateY(calc(-200px * 4));
    transform: translateY(calc(-200px * 4));
}

100%{
    -webkit-animation: translateY(calc(+200px * 4));
    transform: translateY(calc(+200px * 4));
}
`;
