import React from "react";
import Table from "./Table.style";

const ContactTable = ({ children }) => {
  return (
    <Table>
      {children}
    </Table>
  )
};

ContactTable.THead = ({ classes, children, ...restProps }) => {

  return (
    <thead className={classes} {...restProps}>
      {children}
    </thead>
  )
}

ContactTable.TBody = ({ classes, children, ...restProps }) => {
  return (
    <tbody className={classes} {...restProps}>
      {children}
    </tbody>
  )
}

export default ContactTable;
