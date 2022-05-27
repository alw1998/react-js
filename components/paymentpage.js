import React from 'react';
class Payment extends React.Component {
    render() {
        return(
            <div className="body1">
            <div>
            <form action="" method="post">
            <div class="h1"><h1>Payment Details</h1></div>
             <h3>Total Amount to be paid : </h3>
            
             
            
        <table className="tb1">
         
            <tr>
                <th>CREDIT / DEBIT CARD NUMBER</th>
            </tr>
            <tr>
                <td><input type="text" placeholder="Valid Card Number"  /></td>
            </tr>
            
             <tr className="tb1">
                <th>EXPIRATION DATE</th>
            </tr>
            <tr>
                <th><input type="text" placeholder="MM/YY"  /></th>
            
            </tr>
            
            <tr>
                <th>CVV CODE</th>
            </tr>
            
            <tr>
                <td><input type="text" placeholder="CVV" name="cvv" /></td>
            </tr>
            
            <tr>
                <div className="button"><td><input type="button" className="button but"  value="Pay & Confirm"/></td></div>
            </tr>
        </table>
        
            <table className="tb2">
                <tr>
                    <th>ENTER UPI ID : </th>
                </tr>
                <tr> 
                    <th><input type="text" name="upi-id" placeholder="UPI Id" /></th>
                </tr>
                 <tr>
                    <th>ENTER UPI PIN : </th>
                </tr>
                <tr>
                    <th><input type="text" name="upi-pin" placeholder="UPI pin" /></th>
                </tr>
                 <tr>
                <div className="button"><td><input type="button" className="button but" value="Pay & Confirm"/></td></div>
            </tr>
            </table>
            </form>
            </div>
            </div>

            );
    }
    }
    export default Payment;