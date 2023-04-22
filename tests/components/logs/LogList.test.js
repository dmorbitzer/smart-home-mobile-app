import React from "react";
import renderer from "react-test-renderer";

import LogList from '../../../src/components/logs/LogList';
import Services from "../../../src/components/main-menu/Services";
jest.useFakeTimers();

const localData = {
    "data": {
        "logs": {
            "edges": [
                {
                    "node": {
                        "id": "/api/logs/1",
                        "service": {
                            "id": "/api/services/1",
                            "name": "Katzenfütterung",
                            "identifier": "cat_feeding"
                        },
                        "time": "2023-04-21T17:10:15+02:00",
                        "data": {
                            "cat": "Peter",
                            "foodType": "Trockenfutter"
                        }
                    }
                },
                {
                    "node": {
                        "id": "/api/logs/2",
                        "service": {
                            "id": "/api/services/1",
                            "name": "Katzenfütterung",
                            "identifier": "cat_feeding"
                        },
                        "time": "2023-08-21T17:10:20+02:00",
                        "data": {
                            "cat": "Paul",
                            "foodType": "Trockenfutter"
                        }
                    }
                },
            ]
        }
    }
}

test("renders Loading correctly", () => {
    const tree = renderer
        .create(<LogList logs={localData.data.logs.edges} filter={null} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
