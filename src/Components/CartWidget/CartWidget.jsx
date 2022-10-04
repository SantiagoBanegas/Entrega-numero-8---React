import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";

import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return(
        <div>
        <FontAwesomeIcon icon={faCartArrowDown}/> 
        </div>
    );
}

export default CartWidget
