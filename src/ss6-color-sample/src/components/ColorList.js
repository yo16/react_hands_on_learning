import Color from "./Color.js";
import { useColors } from "../ColorProvider.js";

export default function ColorList() {
    const { colors } = useColors();

    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div>
            {
                colors.map(color => (
                    <Color
                        key={color.id}
                        {...color}
                    />
                ))
            }
        </div>
    )
}
