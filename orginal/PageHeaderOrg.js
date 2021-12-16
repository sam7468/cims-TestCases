import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cimsActions } from "../../store/cims-slice";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import ClientHelpers from "./ClientHelpers";

export default function PageHeader() {
  const dispatch = useDispatch();

  const {
    sortBy,
    filterBy,
    sortingOrder,
    handelSortBy,
    handelFilterBy,
    handelSortingOrder,
  } = ClientHelpers();

  const sortByFields = [
    { id: "createdAt", label: "By Start date" },
    { id: "brandName", label: "By Company" },
    { id: "contacts.primaryContact.firstName", label: "By Associate name" },
    { id: "registeredAddress.country", label: "By Location" },
  ];

  const filterByFields = [
    { id: 1, label: "Active Client" },
    { id: 0, label: "Inactive Client" },
  ];

  const handleSortBy = (e) => {
    handelSortBy(e.target.value);
  };

  const handleFilterBy = (e) => {
    handelFilterBy(e.target.value);
  };

  const handleSortOrder = (e) => {
    handelSortingOrder(e.target.checked);
  };

  const handleCreate = () => {
    dispatch(cimsActions.resetForm());
  };

  return (
    <>
      <Grid container justifyContent="flex-end" mb={1}>
        <div data-test="Admin/Approver-text">
          <Typography variant="body1">User-Admin/Approver</Typography>
        </div>
      </Grid>
      <Grid>
        <Grid container spacing={2} mb={2}>
          <Grid item>
            <div data-test="CIMS-text">
              <Typography variant="h4">CIMS</Typography>
            </div>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <div data-test="create-btn">
              <Link to="/cims/create" style={{ textDecoration: "none" }}>
                <Button
                  id="button"
                  onClick={handleCreate}
                  variant="contained"
                  style={{ backgroundColor: "chocolate" }}
                >
                  Create a customer
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item>
            <div data-test="filter">
              <FormControl size="small">
                <InputLabel id="filterBy">
                  <div data-test="filterby-label">Filter by</div>
                </InputLabel>
                <Select
                  labelId="filterBy"
                  id="select"
                  value={filterBy}
                  label="filter By"
                  onChange={handleFilterBy}
                >
                  {filterByFields.map((field) => (
                    <MenuItem key={field.id} value={field.id}>
                      <div data-test="filter-by default">{field.label}</div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item>
            <div data-test="sort">
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="sortBy">
                  <div data-test="sortby-label">Sort by</div>
                </InputLabel>
                <Select
                  labelId="sortBy"
                  id="select"
                  value={sortBy}
                  label="sortBy"
                  onChange={handleSortBy}
                >
                  {sortByFields.map((field) => (
                    <MenuItem key={field.id} value={field.id}>
                      {field.label}
                    </MenuItem>
                  ))}

                  <Divider sx={{ borderBottomWidth: 2 }} component="li" />

                  <FormControlLabel
                    sx={{
                      marginLeft: ".5rem",
                    }}
                    control={
                      <Checkbox
                        onChange={(e) => handleSortOrder(e)}
                        size="small"
                        checked={sortingOrder === 1}
                      />
                    }
                    label={<SortByAlphaIcon />}
                  />
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2 }} />
    </>
  );
}
