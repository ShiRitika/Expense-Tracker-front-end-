import {  Card, styled, CardContent, Typography, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Box } from "@mui/system";
import TransactionInfo from "./TransactionInfo";
import { makeStyles } from "@material-ui/core/styles";

const TableContainer = styled(Box)`
margin: 6rem;
& > div{
    background-color: #f2f1fb;
    box-shadow: 2px 3px 3px 4px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}`;

const useStyles = makeStyles({
    mainContainer: {
        "& h1": {
            fontSize: "27px"
        }
    },
    searchContainer: {
        margin: "4rem 3rem",
        "& div":{
            "& label": {
                fontWeight: 600,
                fontSize: "1.2rem",
            },
            "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused" : {
                color: "#1a2256",
                borderColor: "#1a2256"
            },
            "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline" :{
                borderColor: "#1a2256",
            },
            "& div": {
                fontWeight: 550,
                color: "rgb(82 58 58 / 87%)",
                "& div": {
                    "& button": {
                        color: "#1a2256",
                    },
                },
            },
        },
    },
    gridContent: {
        "& h1":{
            color: "#191f3a",
            fontWeight: 600,
            fontFamily: "math",
            marginBottom: "1rem"
        },
        "& h6": {
            color: "#e36060",
            backgroundColor: "black"
        }
    }
});

const SearchTransactionHistory = ({ transactions }) => {
    const classes = useStyles();
    const [value, setValue] = useState(dayjs("01/01/2023"));
    
    const handleChange = (newValue) => {
        setValue(newValue);
        searchTransaction(newValue);
    };
    const inputDateInvalid = new Date(value).toLocaleDateString();

    const searchTransaction = async(newValue) => {
        const inputDate = new Date(newValue).toLocaleDateString();
        if(transactions[0] !== undefined && inputDate !== "Invalid Date"){
            console.log(transactions);
            console.log(inputDate);
            const singleData = transactions.filter((object) => object.date === inputDate);
            setFilteredDateData(singleData);
        } else {
            const singleData = transactions.filter((object) => object.date === inputDateInvalid);
            setFilteredDateData(singleData); 
        }
    };
    
    let  findingDateValueFromFunc = [];
    useEffect(() => {
        if(transactions){
            findingDateValueFromFunc = searchTransaction(); 
        }
    },[transactions]);

    const [filteredDate_Data, setFilteredDateData] = useState(findingDateValueFromFunc );
    
    return (
        <div className={classes.mainContainer}>
            <h1>Search Transaction History</h1>
            <div>
                <div className={classes.searchContainer}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker views={["day"]} minDate={dayjs("01/01/2023")} maxDate={dayjs("01/31/2023")} label="Date" inputFormat="MM/DD/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField {...params} />}/>
                    </LocalizationProvider>
                </div>
                <TableContainer>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent className={classes.gridContent}>
                            <Typography variant="h4" component="h1" color="text.secondary">
                                Transaction Info
                            </Typography>
                            { filteredDate_Data.length ?
                                filteredDate_Data.map(transaction => (
                                    <TransactionInfo transaction={transaction} key={transaction._id} />
                                )) :
                                <Typography variant="h6" component="h6" color="text.secondary">
                                    No Data is Available on This Date..
                                </Typography>
                            }
                        </CardContent>
                    </Card>
                </TableContainer>
            </div>
        </div>
    );
};
SearchTransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default SearchTransactionHistory;