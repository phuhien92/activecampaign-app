import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border: 1px solid var(--border-color);  
  font-size: 15px;
  padding: 0;
  border-spacing: 2px;
  display: table;
  border-collapse: collapse;
  width: 100%;
  .ml-1 {
    margin-left: 5px;
  }

  thead {
    vertical-align: bottom;
    tr {
      box-shadow: 3px 0 0 var(--table-row-color);
    }
    th {
      color: inherit;
      vertical-align: middle;
      padding: 4px 13px;
      font-weight: 600;
      border-bottom: 2px solid var(--border-color);
      text-align: left;
    }
  }
  tbody {
    tr {
      height: 46px;
      &:nth-of-type(even) {
        background-color: var(--table-row-color);
      }
    }
    td {
      padding: 9px 13px;
      border-bottom: 1px solid var(--border-color);
      &.text-blue {
        color: var(--color-primary);
      }
      &.font-weight-semibold {
        font-weight: 600;
      }
    }
  }
  .center-align {
    display: flex;
    align-items: center;
  }
`;

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
