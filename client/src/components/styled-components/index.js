import styled from "styled-components";

export const RoundButton = styled.input.attrs(props => ({
    type: "button",
    width: props.width || "250px",
    height: props.height || "65px",
    fontSize: props.fontSize || "20px",
  }))`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    border-radius: 60px;
    border: none;
    outline: 0;
    background: #5840BA;
    color: white;
    &:hover{
        background: transparent;
        border: 2px solid #5840BA;
        color: #5840BA;
    }
`;

export const BlcakP = styled.p.attrs(props => ({
    fontSize: props.fontSize || "20px",
    align: props.align,
    weight: props.weight || "normal"
}))`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    font-weight: ${props => props.weight};
`;

export const GrayP = styled.p.attrs(props => ({
    fontSize: props.fontSize || "20px",
    align: props.align,
    weight: props.weight || "normal"
}))`
    color: #717171;
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    font-weight: ${props => props.fontWeight};
`;

export const BlueP = styled.p.attrs(props => ({
    fontSize: props.fontSize || "20px",
    align: props.align,
    weight: props.weight || "normal"
}))`
    color: #299494;
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    font-weight: ${props => props.fontWeight};
`;