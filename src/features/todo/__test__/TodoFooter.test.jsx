import { render, screen } from "@testing-library/react";

import TodoFooter from "../footer";

describe("TodoFooter", () => {
    it("should render the correct amount of incomplete tasks", () => {
        render(<TodoFooter numberOfIncompleteTasks={10} />)
        const textEl = screen.getByText(/10 tasks/i);
        expect(textEl).toBeInTheDocument();
    })

    it("should render 'task' when the number of tasks is one", () => {
        render(<TodoFooter numberOfIncompleteTasks={1} />);

        const textEl = screen.getByText(/1 task/i);
        expect(textEl).toBeInTheDocument();

    })
})