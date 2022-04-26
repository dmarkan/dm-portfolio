import React from "react";

const Stacks = () => {
    return (
        <div class="container-fluid mt-1">
        <h5 class="header-txt-underline">Stacks</h5>
        <div class="d-flex justify-content-evenly bd-highlight">
        <div class="p-2 bd-highlight"><i class="fa fa-brands fa-html5 fa-3x"></i></div>
        <div class="p-2 bd-highlight"><i class="fa fa-brands fa-css3 fa-3x"></i></div>
        <div class="p-2 bd-highlight"><i class="fa fa-brands fa-bootstrap fa-3x"></i></div>
      </div>
          <div class="d-flex justify-content-evenly bd-highlight">
          <div class="p-2 bd-highlight"><i class="fa fa-brands fa-js fa-3x"></i></div>
          <div class="p-2 bd-highlight"><i class="fa fa-brands fa-node fa-3x"></i></div>
          <div class="p-2 bd-highlight"><i class="fa fa-brands fa-react fa-3x"></i></div>
        </div>
        </div>
    )
}

export default Stacks;