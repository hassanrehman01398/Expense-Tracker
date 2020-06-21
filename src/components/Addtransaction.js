import React, { useState} from 'react'

export const Addtransaction = () => {
    const [description,setdescription]=useState();
    const [transactionamount,settransaction]=useState();
    return (
        <div>
            <h3>
                Add New Transaction
            </h3>
        <form>
            <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text" id="description" placeholder="Detail of Transaction" value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    />
            </div>

            <div className="form-control">
                <label htmlFor='description'>
                    Transaction Amount

                </label>
                <input type="Number" id="transaction_amount" placeholder="Add Transaction Amount" value={transactionamount}
                  onChange={(e) => settransaction(e.target.value)}
                />
                <button className="btn">

                    Add Transaction
                </button>
            </div>
        </form>
        </div>
    )
}
