import React from 'react'

export const Transactionhistory = () => {
    return (
        <div>
            <h3>

                Transactionhistory

            </h3>
            <ul className="list">
                <li className="plus">
                    Project1 income
                    <span>
                        $1,000
                    </span>
                    <button className="delete-btn">X</button>
                </li>

                <li className="minus">
                    Project 1 Salaries
                    <span>
                        $500
                    </span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>

        </div>
    )
}
