import React from "react";
import Apply from "./Apply";
import View from "./View";
import Contribute from "./Contribute";

function Main(){
    return(
        <>
            <img alt={'grants banner'} className={'h-[300px] w-[1000px] mx-auto rounded-lg'} src={'https://gfi.org/wp-content/uploads/2020/09/CGP-banner-2.jpg'}/>
            <p className={'text-4xl text-center pt-[36px] font-semibold'}>AnveFund</p>
            <p className={'text-2xl text-center pt-[18px]'}>AnveFund is the gateway for your research grands with the help of Web3. Register your projects and get it funded by anonymous funders with cryptocoins</p>
            <div className={'flex justify-center pt-[18px]'}>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button> Apply for Grant </button></div>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button> View Your Application </button></div>
                <div className={'border-[2px] p-2 border-black rounded-full mx-2'}><button> Contribute to Projects </button></div>
            </div>
            <div><Apply/></div>
            <div><View/></div>
            <div><Contribute/></div>
        </>
    )
}

export default Main;