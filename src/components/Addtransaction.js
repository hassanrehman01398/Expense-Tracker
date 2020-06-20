import React from 'react'

export const Addtransaction = () => {
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
                    <input type="text" id="description" placeholder="Detail of Transaction"/>
            </div>

            <div className="form-control">
                <label htmlFor='description'>
                    Transaction Amount

                </label>
                <input type="Number" id="transaction_amount" placeholder="Add Transaction Amount"/>
                <button className="btn">

                    Add Transaction
                </button>
            </div>
        </form>
        </div>
    )
}
