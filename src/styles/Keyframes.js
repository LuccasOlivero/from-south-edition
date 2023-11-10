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
    -webkit-animation: translateY(+150px);
    transform: translateY(+150px);
}

25%{
    -webkit-animation: translateY(calc(-2400px));
    transform: translateY(calc(-2400px));
}

50%{
    -webkit-animation: translateY(calc(+200px));
    transform: translateY(calc(+200px));
}

75%{
    -webkit-animation: translateY(calc(-2400px));
    transform: translateY(calc(-2400px));
}

100%{
    -webkit-animation: translateY(calc(+150px));
    transform: translateY(calc(+150px));
}
`;

export const scroll2 = keyframes`
0%{
    -webkit-animation: translateY(-1800px);
    transform: translateY(-1800px);
}

25%{
    -webkit-animation: translateY(calc(+150px));
    transform: translateY(calc(+150px));
}

50%{
    -webkit-animation: translateY(calc(-2400px));
    transform: translateY(calc(-2400px));
}

75%{
    -webkit-animation: translateY(calc(+150px));
    transform: translateY(calc(+150px));
}

100%{
    -webkit-animation: translateY(calc(-1800px));
    transform: translateY(calc(-1800px));
}
`;
