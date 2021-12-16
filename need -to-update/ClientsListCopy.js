import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
  Pagination,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  Delete as DeleteIcon,
  Restore as RestoreIcon,
  ManageSearchRounded as ManageSearchRoundedIcon,
  ClearRounded as ClearRoundedIcon,
} from "@mui/icons-material";
import PageHeader from "./PageHeader";
import "../../assets/styles/ListStyles.css";

import ClientHelpers from "./ClientHelpers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ClientsList() {
  const {
    clientsList,
    handleClientData,
    handelActiveStatus,

    pages,
    pageNo,
    searchBy,
    handelPageChange,
    handelSearch,
    handelClearSearch,
  } = ClientHelpers();

  const [clientId, setClientId] = useState();
  const [clientStatus, setClientStatus] = useState();
  const [brandName, setBrandName] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelMenu = (id, status, brandName) => {
    setClientId(id);
    setClientStatus(status);
    setBrandName(brandName);
  };

  function menuIcon() {
    return (
      <>
        <IconButton
          aria-label="actions"
          id="actions-button"
          aria-controls="actions"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="actions"
          MenuListProps={{
            "aria-labelledby": "actions-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "16ch",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              handleClientData(clientId, true);
            }}
            disableRipple
          >
            <ListItemIcon>
              <EditIcon color="warning" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleClose();
              handelActiveStatus(clientId, clientStatus, brandName);
            }}
            disableRipple
          >
            <ListItemIcon>
              {clientStatus ? (
                <DeleteIcon color="error" />
              ) : (
                <RestoreIcon color="success" />
              )}
            </ListItemIcon>
            <ListItemText>
              {clientStatus ? "Deactivate" : "Reactivate"}
            </ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  }

  return (
    <div>
      <PageHeader />
<<<<<<< HEAD
      <div data-test="SearchBar">
        <Box m={1} sx={{ display: "flex", alignItems: "flex-end" }}>
          <ManageSearchSharpIcon
            style={{
              margin: "0 .5rem",
              width: "2rem",
              height: "2rem",
            }}
          />

          <TextField
            fullWidth
            id="search"
            label={
              <div data-test="searchLabel">
                Search Company Name / Associate Name / Location
              </div>
            }
            variant="standard"
            onChange={handelSearch}
          />
        </Box>
      </div>
      <div data-test="ListContainer" className="ListContainer">
=======
      <Box m={2} mb={1}>
        <TextField
          fullWidth
          id="search"
          placeholder="Search Company Name / Associate Name / Location"
          value={searchBy}
          variant="standard"
          onChange={handelSearch}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton disableRipple>
                  <ManageSearchRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handelClearSearch}>
                  <ClearRoundedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <div className="ListContainer">
>>>>>>> 9160b9c8f4a00b8de5d490f3665b5a043d9ee52f
        <TableContainer component={Paper} align="right">
          <Table sx={{ maxWidth: "100%" }}>
            <TableHead>
              <TableRow>
<<<<<<< HEAD
                <StyledTableCell align="center">
                  <div data-test="col-1">ID</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-2">Company Name</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-3">Associate Name</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-4">Location</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-5">Status</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-6">Registered On</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div data-test="col-7">Action</div>
                </StyledTableCell>
=======
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Company Name</StyledTableCell>
                <StyledTableCell align="center">Associate Name</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Registered On</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
>>>>>>> 9160b9c8f4a00b8de5d490f3665b5a043d9ee52f
              </TableRow>
            </TableHead>
            <TableBody>
              {clientsList.map((client, idx) => (
                <StyledTableRow className="table-row" key={client._id}>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {client.rowNumber}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {client.brandName}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {`${client.contacts.primaryContact.firstName} ${client.contacts.primaryContact.lastName}`}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {client.registeredAddress.country.split("-")[0]}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {client.status ? "Active" : "Inactive"}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      handleClientData(client._id, false);
                    }}
                    align="center"
                  >
                    {client.createdAt.slice(0, 10)}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() =>
                      handelMenu(client._id, client.status, client.brandName)
                    }
                    align="center"
                  >
                    {menuIcon()}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="pagination" data-test="pages">
        <Stack spacing={2}>
          <Pagination count={pages} page={pageNo} onChange={handelPageChange} />
        </Stack>
      </div>
    </div>
  );
}

export default ClientsList;
