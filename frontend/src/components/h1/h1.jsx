import styled from "styled-components";

const H1Container = ({children, className}) => (
    <h1 className={className}>{children}</h1>
)

export const H1 = styled(H1Container)`
    color: #fff;
`
