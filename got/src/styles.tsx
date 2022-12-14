import styled from 'styled-components'

interface MyFooterProps {
    color: string
}

export const MyFooter = styled.section`
    padding: 10px;
    background-color: ${(props) => props.color};
`