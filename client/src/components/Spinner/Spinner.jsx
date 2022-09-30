import { FallingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import React from 'react';

const Spinner = () => {
    return (
        <>
           <div className="container text-center my-5 py-5">

            <FallingLines
            color="#4fa94d"
            width="70"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
           </div>

        </>
    );
}
export default Spinner;