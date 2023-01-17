import React, { useState } from "react";
import Star from "./Star.js";

export default function StarRating({ style = {}, totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{ padding: "tpx", ...style }}>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i+1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}
