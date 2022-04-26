import React from "react";
import Readmore from "./Readmore";
import Education from "./Education";

const Bio = () => {
    return (
        <div class="container-fluid">
        <h5 class="header-txt-underline">About</h5>
        <div class="bio-header d-flex justify-content-between">
        <Readmore />
        <img src="images/bio-img.png" alt="bio-img" class="bio-img img-fluid" />
        </div>
        <div>
        <h5 class="header-txt-underline">Education</h5>
        <Education />
        </div>
        </div>
    )
}

export default Bio;