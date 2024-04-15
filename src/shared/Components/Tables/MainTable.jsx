import {
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TablePagination,
  Button,
  Tooltip,
  Paper,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import useMaintable from "./useMaintable";

/* The code is defining a React functional component called `mainTable`. Este componente
se utiliza cuando se necesita una tabla con filtros. */
function Maintable({
  headersTable,
  actionButtons,
  tableBodyData,
  resetTableOnChange = true,
  pagination = true,
  inputFilter = true,
}) {
  const {
    filter,
    setFilter,
    handleClearFilter,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    filteredBody,
    paginatedBody,
  } = useMaintable({ tableBodyData, headersTable, resetTableOnChange });
  return (
    <Paper sx={{ margin: 0, padding: 0 }}>
      {inputFilter && (
        <div className="divBuscar">
          <TextField
            label="Buscar"
            variant="outlined"
            size="small"
            color="success"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton size="small" onClick={handleClearFilter}>
                  {filter ? <ClearIcon /> : <SearchIcon />}
                </IconButton>
              ),
            }}
          />
        </div>
      )}
      <Table>
        <TableHead>
          <TableRow>
            {headersTable.map((header) => (
              <TableCell
                sx={{
                  backgroundColor: pink[700],
                  color: "white",
                  fontWeight: "bold",
                }}
                align={"center"}
                key={header.key}>
                {header.name}
              </TableCell>
            ))}
            {!!actionButtons?.length && <TableCell>Acción</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedBody.map((row) => (
            <TableRow key={row[headersTable[0].key]}>
              {headersTable.map((header) => (
                <TableCell
                  key={header.key}
                  sx={{ padding: "0 1rem" }}
                  align={header.align || "left"}>
                  {header.show ? header.show(row[header.key]) : row[header.key]}
                </TableCell>
              ))}
              {!!actionButtons?.length && (
                <TableCell sx={{ padding: 1 }}>
                  <>
                    {actionButtons.map(
                      ({
                        name,
                        handleClick,
                        iconButton: Icon,
                        disabled = false,
                      }) => (
                        <>
                          {Icon ? (
                            <Button
                              variant="text"
                              disableFocusRipple
                              disableRipple
                              disableTouchRipple
                              sx={{ padding: 0 }}
                              onClick={() => handleClick(row["rowIndex"])}>
                              <Tooltip
                                sx={{ zIndex: -1 }}
                                key={name}
                                title={name}
                                arrow
                                slotProps={{
                                  popper: {
                                    modifiers: [
                                      {
                                        name: "offset",
                                        options: {
                                          offset: [0, -14],
                                        },
                                      },
                                    ],
                                  },
                                }}>
                                <span>
                                  <IconButton
                                    sx={{ p: 1 }}
                                    variant="contained"
                                    color="success"
                                    type="button"
                                    disabled={disabled}>
                                    {Icon}
                                  </IconButton>
                                </span>
                              </Tooltip>
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="success"
                              key={name}
                              type="button"
                              onClick={() => handleClick(row["rowIndex"])}
                              disabled={disabled}>
                              {name}
                            </Button>
                          )}
                        </>
                      )
                    )}
                  </>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {pagination && (
        <>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredBody.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}

export default Maintable;
