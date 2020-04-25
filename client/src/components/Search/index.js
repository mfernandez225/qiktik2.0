import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import stocks from "../stockData";

function stockToFlag(tickerSymbol) {
  return typeof String.fromSymbolPoint !== "undefined"
    ? tickerSymbol
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromSymbolPoint(char.charSymbolAt(0) + 127397)
        )
    : tickerSymbol;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

// This is the where how we collect and display the selected stock.
export default function StockSelect({ onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const stockIndex = e.target.getAttribute("data-option-index");
    if (stockIndex) {
      onChange(stocks[stockIndex]);
    } else {
      onChange(undefined);
    }
  };

  return (
    <Autocomplete
      style={{ width: 500, position: "relative", marginTop: "10px" }}
      options={stocks}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span>{stockToFlag(option.symbol)}</span>
          {option.name} ({option.symbol})
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Stock Name"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
      onChange={handleChange}
    />
  );
}
