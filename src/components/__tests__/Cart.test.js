import { render } from "@testing-library/react";
import RestaurantMenu  from "../RestaurantMenu"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "./../mocks/mockresmenu.json";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>Promise.resolve(MOCK_DATA),
    });
})

test("should load restaurant menu component",async() =>{
await act(async()=> render(
<RestaurantMenu />
    ));
})