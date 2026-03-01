import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
    it("renders children correctly", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
    });

    it("handles click events", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(<Button onClick={handleClick}>Submit</Button>);

        await user.click(screen.getByRole("button", { name: /submit/i }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("passes additional props like disabled", () => {
        render(<Button disabled>Disabled Button</Button>);
        expect(screen.getByRole("button", { name: /disabled button/i })).toBeDisabled();
    });
});
