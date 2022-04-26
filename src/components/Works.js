import React from "react";
import Apps from "./Apps";

const Works = () => {
    return (
        <div class="container-fluid" id="works">
        <h5 class="header-txt-underline">Works</h5>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">ETN Website</h4>
          <img class="card-img mt-1" src="images/etn-website.png" />
          </div>
          <div class="card-body pt-0">
        <p>Website for android game Escape The Night</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://escapethenight.herokuapp.com" target="_blank">Go to ></a></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Tuscan Website</h4>
          <img class="card-img mt-1" src="images/tuscan-website.png" />
          </div>
          <div class="card-body pt-0">
        <p>Website for android game Tuscan</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://tuscan-website.herokuapp.com" target="_blank">Go to ></a></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Netflix UI</h4>
          <img class="card-img mt-1" src="images/netflix-website.png" />
          </div>
          <div class="card-body pt-0">
        <p>Website for Netflix UI clone design</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://netflix-clone-markan.herokuapp.com" target="_blank">Go to ></a></button>
          </div>
        </div>
      </div>
    </div>
    <Apps />
    <a href="https://play.google.com/store/search?q=darko%20markan&c=apps" target="_blank">See all apps ></a>
        </div>
    )
}

export default Works;