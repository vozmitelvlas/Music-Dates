import styled from "styled-components";

const CenteredContentContainer = ({className, children, ...props}) => {
    return(
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export const CenteredContent = styled(CenteredContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: aquamarine;
`