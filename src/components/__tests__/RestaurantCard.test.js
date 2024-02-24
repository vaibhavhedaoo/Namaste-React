import { render, screen } from "@testing-library/react";
import RestaurantCard,{withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/rescardMocksData";
import "@testing-library/jest-dom";

test("it should render RestaurantCard component with Props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Tasty Punjab");

    expect(name).toBeInTheDocument();
})

const PromotedRestaurant = withPromotedLabel(RestaurantCard);
test("it should render RestaurantCard component with Promoted label",()=>{
    render(<PromotedRestaurant resData={MOCK_DATA} />);

    const Promoted = screen.getByText("Promoted");

    expect(Promoted).toBeInTheDocument();
})