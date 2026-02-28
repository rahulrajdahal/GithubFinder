import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
    it("renders correctly with default props", () => {
        render(<SearchInput />);
        expect(screen.getByPlaceholderText(/enter github username/i)).toBeInTheDocument();
    });

    it("passes inputProps to the input element", () => {
        render(<SearchInput inputProps={{ defaultValue: "defval", maxLength: 10 }} />);
        const input = screen.getByPlaceholderText(/enter github username/i);
        expect(input).toHaveValue("defval");
        expect(input).toHaveAttribute("maxLength", "10");
    });

    it("allows typing into the input", async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<SearchInput inputProps={{ onChange: handleChange }} />);
        const input = screen.getByPlaceholderText(/enter github username/i);

        await user.type(input, "testuser");
        expect(input).toHaveValue("testuser");
        expect(handleChange).toHaveBeenCalled();
    });
});
