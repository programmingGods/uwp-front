import React, { useEffect, useState } from "react";
import axios from "axios";

interface Employee {
    name: string;
    age: string;
}

function ReactComponent() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {

        const newEmployee: Employee = {
            name: "Tom543",
            age: "20",
        };

        const fetchData = async () => {
            await axios
                .post('http://localhost:7138/api/Run', newEmployee)
                .then(function(resp) {
                    console.log(resp.data);
                    setData(resp.data);
                })
                .catch(function(error) {
                    console.error(error);
                });
        };
        fetchData();
    }, []);
    
}

export default ReactComponent;