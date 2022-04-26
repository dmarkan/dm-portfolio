import React from "react";

const Apps = () => {
    return (
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pesmice App</h4>
          <img class="card-img mt-1" src="images/pesmice-icon.png" />
          </div>
          <div class="card-body pt-0">
        <p>An application for listening to children's songs</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://play.google.com/store/apps/details?id=com.wPesmice_14881126" target="_blank"><i class="fab fa-google-play" aria-hidden="true"></i>Download</a></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Jamb Game</h4>
          <img class="card-img mt-1" src="images/jamb-icon.png" />
          </div>
          <div class="card-body pt-0">
        <p>A mobile version of dice game Yahtzee</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://play.google.com/store/apps/details?id=com.wJamb_15116370" target="_blank"><i class="fab fa-google-play" aria-hidden="true"></i>Download</a></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Z. Geografija App</h4>
          <img class="card-img mt-1" src="images/geografija-icon.png" />
          </div>
          <div class="card-body pt-0">
        <p>Board game Interesting Geography for android</p>
            <button type="button" class="w-100 btn btn-lg btn-primary"><a class="link-light" href="https://play.google.com/store/apps/details?id=com.wZanimljivaGeografija_15158223" target="_blank"><i class="fab fa-google-play" aria-hidden="true"></i>Download</a></button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Apps;