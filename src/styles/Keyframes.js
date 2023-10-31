import { keyframes } from "styled-components";

export const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

export const scroll1 = keyframes`
0%{
    -webkit-animation: translateY(0);
    transform: translateY(0);
}

25%{
    -webkit-animation: translateY(calc(-150px * 4));
    transform: translateY(calc(-150px * 4));
}

50%{
    -webkit-animation: translateY(calc(+150px * 4));
    transform: translateY(calc(+150px * 4));
}

75%{
    -webkit-animation: translateY(calc(-150px * 4));
    transform: translateY(calc(-150px * 4));
}

100%{
    -webkit-animation: translateY(calc(+150px * 4));
    transform: translateY(calc(+150px * 4));
}
`;

export const scroll2 = keyframes`
0%{
    -webkit-animation: translateY(0);
    transform: translateY(0);
}

25%{
    -webkit-animation: translateY(calc(+150px * 4));
    transform: translateY(calc(+150px * 4));
}

50%{
    -webkit-animation: translateY(calc(-150px * 4));
    transform: translateY(calc(-150px * 4));
}

75%{
    -webkit-animation: translateY(calc(+150px * 4));
    transform: translateY(calc(+150px * 4));
}

100%{
    -webkit-animation: translateY(calc(-150px * 4));
    transform: translateY(calc(-150px * 4));
}
`;

export const noiseBg = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
`;
