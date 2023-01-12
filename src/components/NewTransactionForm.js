// import { Typography, Box, TextField, Button, styled } from "@mui/material";
// import { useState } from "react";
// import { PropTypes } from "prop-types";

// const Container = styled(Box)`
// display: flex;
// flex-direction: column;
// & > h5 , & > div, & > button{
//     margin-top: 30px
// }
// `;

// const NewTransactionForm = ({ setTransaction }) => {
//     const [text, setText] = useState("");
//     const [amount, setAmount] = useState(0);

//     const addTransaction = () => {
//         const transaction = {
//             id: Math.floor(Math.random()* 1000000),
//             text: text,
//             amount: +amount
//         };
//         console.log(transaction.amount);
//         setTransaction(prevState => [transaction, ...prevState]);
//     };

//     return(
//         <Container>
//             <Typography variant="h5">New Transaction</Typography>
//             <TextField label="Enter Expense" onChange={(e) => setText(e.target.value)}></TextField>
//             <TextField label="Enter Amount" onChange={(e) => setAmount(e.target.value)}></TextField>
//             <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
//         </Container>
//     );
// };
// NewTransactionForm.propTypes = {
//     setTransaction: PropTypes.func.isRequired
// };

// export default NewTransactionForm;