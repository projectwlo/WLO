import { Desktop, Tablet, Mobile, Default } from "../utils/breakpoints";

export function TestBreakpoints() {
    return (
        <div>
            <Desktop>Desktop or laptop</Desktop>
            <Tablet>Tablet</Tablet>
            <Mobile>Mobile</Mobile>
            <Default>Not mobile (desktop or laptop or tablet)</Default>
        </div>
    )
}