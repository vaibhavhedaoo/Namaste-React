import React from "react";
import {useRouteError} from 'react-router-dom';

const ErrorPage =() =>
{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            Error : Something went wrong!!!
        </div>
    );
}


export default ErrorPage;