import {
  Box,
  Table as ChakraTable,
  HStack,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useRowSelect, useTable } from "react-table";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

import TableCheckbox from "./Form/TableCheckbox";
import { FiPlus } from "react-icons/fi";
import React from "react";

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Tony Stark",
        col2: "iron.man@gmail.com",
        col3: "120938102",
        col4: "Active",
        avatar: avatar3,
      },
      {
        col1: "Scarlett Johansen",
        col2: "black.widow@gmail.com",
        col3: "452338102",
        col4: "Active",
        avatar: avatar2,
      },
      {
        col1: "Captain Rogers",
        col2: "captain.america@gmail.com",
        col3: "203948123",
        col4: "Active",
        avatar: avatar3,
      },
      {
        col1: "Tony Stark",
        col2: "iron.man@gmail.com",
        col3: "120938102",
        col4: "Active",
        avatar: avatar4,
      },
      {
        col1: "Scarlett Johansen",
        col2: "black.widow@gmail.com",
        col3: "452338102",
        col4: "Active",
        avatar: avatar2,
      },
      {
        col1: "Captain Rogers",
        col2: "captain.america@gmail.com",
        col3: "203948123",
        col4: "Active",
        avatar: avatar4,
      },
    ],
    []
  );
  const columns: any = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Email",
        accessor: "col2",
      },
      {
        Header: "Contact #",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "",
        accessor: "avatar",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <div>
            <TableCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }: any) => (
          <div style={{ width: 20 }}>
            <TableCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
    ]);
  });

  const cellStyle = {
    py: 4,
    color: "neutral.800",
    fontSize: "sm",
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <Box
      bg="white"
      filter="drop-shadow(0px 1px 4px rgba(33, 33, 52, 0.1))"
      borderRadius={4}
    >
      <ChakraTable {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  color="neutral.600"
                  letterSpacing={1}
                  fontSize="11px"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            console.log(row.values);
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                <Td {...cellStyle} {...row.cells[0].getCellProps()} w="50px">
                  {row.cells[0].render("Cell")}
                </Td>
                <Td {...cellStyle}>
                  <Flex direction="row" alignItems="center">
                    <Avatar w="36px" h="36px" src={row.values.avatar} mr={2} />
                    <Text>{row.values.col1}</Text>
                  </Flex>
                </Td>
                <Td {...cellStyle}>{row.values.col2}</Td>
                <Td {...cellStyle}>{row.values.col3}</Td>
                <Td {...cellStyle}>{row.values.col4}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
      <HStack
        w="100%"
        bg="primary.100"
        py={4}
        px={5}
        spacing={3}
        _hover={{ cursor: "pointer" }}
      >
        <Box p={1} bg="primary.200" borderRadius="100%">
          <FiPlus color="var(--chakra-colors-primary-600)" strokeWidth={2.5} />
        </Box>
        <Text color="primary.600" fontWeight={700} fontSize="xs">
          Add New User
        </Text>
      </HStack>
    </Box>
  );
};

export default Table;
