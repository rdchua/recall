import React, { useRef } from "react";

import { CheckboxProps } from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import styled from "@emotion/styled/macro";

const HiddenCheckbox = styled.input`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  opacity: 0;
`;
HiddenCheckbox.defaultProps = { type: "checkbox" };

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${({ checked }: CheckboxProps) =>
    checked ? "var(--chakra-colors-primary-600)" : "white"};
  border-radius: 100%;
  border: ${({ checked }: CheckboxProps) =>
    checked ? "none" : "1px solid var(--chakra-colors-neutral-500)"};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px var(--chakra-colors-primary-200);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const TableCheckbox = React.forwardRef(
  ({ indeterminate, checked, ...rest }: any, ref) => {
    const checkboxRef = useRef();
    const resolvedRef: any = ref || checkboxRef;
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate, rest]);

    return (
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} ref={resolvedRef} {...rest} />
        <StyledCheckbox checked={checked} style={rest.style}>
          {checked && <FiCheck color="white" strokeWidth={3} />}
        </StyledCheckbox>
      </CheckboxContainer>
    );
  }
);

export default TableCheckbox;
