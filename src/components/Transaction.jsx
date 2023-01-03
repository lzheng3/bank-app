import React, { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment/moment";
export default function Transaction(props) {
  const [pageSize, setPageSize] = React.useState(5);
  const columns = useMemo(
    () => [
      {
        field: "transaction_type",
        headerName: "Transaction Type",
        width: 300,
        renderCell: (params) =>
          params.row.transaction_type == 1 ? "Deposit" : "Withdrawal",
      },
      {
        field: "timestamp",
        headerName: "Date",
        width: 300,
        type: "date",
        renderCell: (params) =>
          moment(params.row.timestamp).format("YYYY-MM-DD HH:MM:SS"),
      },
      { field: "amount", headerName: "Amount", width: 300, type: "number" },
      {
        field: "balance_after_transaction",
        headerName: "Balance After Transaction",
        width: 300,
        type: "number",
      },
    ],
    []
  );

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <Typography variant="h3" sx={{ textAlign: "center", mt: 3, mb: 3 }}>
        Account Statement
      </Typography>
      <DataGrid
        sx={{ m: 8 }}
        columns={columns}
        rows={props.api}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      ></DataGrid>
    </Box>
  );
}
