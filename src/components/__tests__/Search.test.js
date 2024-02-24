import { render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// this is the mock fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("it should render body component with search",async ()=>{
   await act( async() =>{
    render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    );
   });
    
    //const searchBox = screen.get
})