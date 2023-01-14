import React from "react";

function Apply(){
    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[18px]'}> Apply </p>
            <div className={'flex flex-col pt-[18px] pl-[18px] text-black'}>
                <form>
                    <p className={'pl-[10px]'}> Enter your personal details </p>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'First Name'}/>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'Middle Name'}/>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'Last Name'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Email ID'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Contact Number'}/>
                    </div>
                    <p className={'pl-[10px] pt-[10px]'}> Enter your research details </p>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Research Name'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'Start Date'}/>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1'} placeholder={'End Date'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Domain'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Expected Grant'}/>
                    </div>
                    <div className={'flex pt-[10px]'}>
                        <input className={'border border-black mx-2 rounded-2xl pl-[10px] p-1 w-[400px]'} placeholder={'Deadline for Grant'}/>
                    </div>
                    <div className={'flex pt-[10px] pl-[5px]'}>
                        <div className={'border border-black rounded-full p-2 mx-2 bg-green-500'}><button>Apply</button></div>
                        <div className={'border border-black rounded-full p-2 mx-2 bg-red-500'}><button>Reset</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Apply;