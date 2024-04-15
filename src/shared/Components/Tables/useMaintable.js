import { useEffect, useState } from "react";

const useMaintable = ({
  tableBodyData,
  headersTable,
  resetTableOnChange = true,
}) => {
  const [filter, setFilter] = useState("");
  const [rawBody, setRawBody] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (tableBodyData) {
      setRawBody(
        tableBodyData.map((row, index) => ({
          ...row,
          rowIndex: index,
        }))
      );
    }
    resetTableOnChange && setPage(0);
  }, [tableBodyData, resetTableOnChange]);

  const handleClearFilter = () => {
    setFilter("");
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredBody = rawBody.filter((row) => {
    return headersTable.reduce(
      (acum, header) =>
        acum ||
        `${row[header.key]}`.toLowerCase().includes(filter.toLowerCase()),
      false
    );
  });

  const paginatedBody = filteredBody.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return {
    filter,
    setFilter,
    handleClearFilter,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    filteredBody,
    paginatedBody,
  };
};

export default useMaintable;
