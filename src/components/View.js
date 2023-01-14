import React, {useState} from "react";
import Project from "./Project";

function View(){
    const [show, setShow] = useState(false);
    const [transactions, setTransactions] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    const handleTransactions = () => {
        setTransactions(!transactions);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.query.value);
    }


    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[36px]'}> View Your Application </p>
            <div className={'flex pl-[30px] pt-[18px] text-black'}>
                <form onSubmit={handleSubmit} className={'flex'}>
                    {!show ? <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Research Name'} id={'query'}/>:null}
                    <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[80px] text-center'}>
                        {!show ? <button onClick={handleClick} type={'submit'}>View</button>
                        : <button onClick={handleClick} type={'submit'}>Hide</button>}
                    </div>
                </form>
            </div>
            {show && <>
                <Project title={'Advanced Radar for Self-Driving Cars'} amount={'1000'} domain={'Automobile'} start={'12/1/2023'} end={'20/1/2023'}/>
                <div className={'flex justify-center my-3'}><div className={'border border-black rounded-full p-2 mx-2 bg-green-500 w-[120px] text-center'}><button onClick={handleTransactions}>View All Fundings</button></div></div>
                {}
            </>}
        </>
    )
}

export default View;
