import React from "react";
import Web from "./Web";

const Contact = () => {
    return (
        <div class="container-fluid" id="contact">
        <h5 class="header-txt-underline">Contact</h5>
        <form class="text-center" name="questions" action="mailto:markandarko@yahoo.com" method="post">
        <textarea class="form-control" type="text" name="question" placeholder="Send me a message"></textarea>
        <button class="w-50 btn btn-lg btn-primary mt-1" type="submit">Send</button>
        </form>
        <Web />
        </div>
    )
}

export default Contact;