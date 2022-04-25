import React from "react";
import Education from "./Education";

const Bio = () => {
    return (
        <div class="container-fluid">
        <div class="bio-header d-flex justify-content-between">
        <h5 class="header-txt-underline">Bio</h5>
        <img src="images/bio-img.png" alt="bio-img" class="bio-img img-fluid" />
        </div>
        <Education />
        </div>
    )
}

export default Bio;