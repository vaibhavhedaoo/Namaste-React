import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import "@testing-library/jest-dom";


test("should load contact us component",()=>{
    render(<Contactus />);

    const heading = screen.getByRole("heading");

    //Assertion 
    expect(heading).toBeInTheDocument();
})


test("should load button inside contact component",()=>{
    render(<Contactus />);

    const button = screen.getByRole("button");

    //Assertion 
    expect(button).toBeInTheDocument();
})


test("should load 2 input inside contact component",()=>{
  render(<Contactus />);
  // querying
  const textboxes = screen.getAllByRole("textbox");
   // console.log(textboxes);
  //Assertion
  //jest.matchers 
  expect(textboxes.length).not.toBe(8);
})