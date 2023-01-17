import React, { useState } from "react";
import Star from "./Star.js";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    return (
        <div style={{ padding: "tpx"}}>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}
