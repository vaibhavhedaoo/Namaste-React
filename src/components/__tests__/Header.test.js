import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "./../../utils/store";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";


test("Should load the Header Component with Login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
        const button = screen.getByRole("button")
        //Assertion
        expect(button).toBeInTheDocument();
    
})

it("Should render Header Component with cart item",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    // Here we are searching Cart with the help of regex, so that it can search only the Word Cart inside the element  
    const cartItem = screen.getByText(/Cart/)
        console.log();
        //Assertion
        expect(cartItem).toBeInTheDocument();
    
})
it("Should render Header Component with cart item 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
        const cartItem = screen.getByText("Cart : (0 items)")
        console.log();
        //Assertion
        expect(cartItem).toBeInTheDocument();
    
})

it("Should change Login button to Logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
        const loginbutton = screen.getByRole("button",{name : "Login"});
        // this will fire the click event on the target button
        fireEvent.click(loginbutton);
        const logoutbutton = screen.getByRole("button",{name : "Logout"});
        console.log();
        //Assertion
        expect(logoutbutton).toBeInTheDocument();
    
})