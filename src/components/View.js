import React from "react";

function Apply(){
    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[36px]'}> View Your Application </p>
            <div className={'flex pl-[30px] pt-[18px] text-black'}>
                <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Research Name'}/>
                <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[80px] text-center'}><button>View</button></div>
            </div>
        </>
    )
}

export default Apply;
