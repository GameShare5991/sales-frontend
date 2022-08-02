import logo from './logo.svg';
import React, { useMemo, useEffect, useState } from "react";
import './App.css';

function App() {

    const [sales, setSales] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const userName = queryParams.get("names");

        const url = "http://localhost:4005/sales/user/" + userName;
        console.log(userName);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                setSales(json);
            } catch (error) {
                console.error("error", error);
            }
        };

    }, [])


    return (
        <>
            {sales &&
                <div key={sales.id}>
                    {sales.map(sale => (<>
                        <img src={sale.img} width="200" height="300"/>
                        <h1>{sale.game}</h1>
                        <h2>{sale.soldFor}</h2>
                        <p>{sale.createDate}</p>
                    </>

                    ))}
                </div>
            }
        </>
    )
}

export default App;
