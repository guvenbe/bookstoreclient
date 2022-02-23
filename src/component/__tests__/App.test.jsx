import React from "react";
import {render} from "@testing-library/react";
import renderWithRedux from "../../util/testUtil";
import App from "../App";

// describe("App component", () =>{
//     it("Should render app without error", () =>{
//         const { asFragment } = render('<App />')
//         expect(asFragment()).toMatchInlineSnapshot(`
// <DocumentFragment>
//   &lt;App /&gt;
// </DocumentFragment>
// `);
//     })
// });

describe("App component", () => {

    it("should render app with error", () => {
        const { asFragment } = renderWithRedux(<App />,{});
        expect(asFragment()).toMatchSnapshot();
    });
});
