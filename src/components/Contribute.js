import React, {useState} from "react";
import Project from "./Project";

function Contribute(){
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const handleClick = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle(e.target.query.value);
    }

    return(
        <>
            <p className={'pl-[36px] text-3xl pt-[36px]'}> Contribute to Projects </p>
            <div className={'flex pl-[30px] pt-[18px] text-black'}>
                <form onSubmit={handleSubmit} className={'flex'}>
                    <input className={'border border-black rounded-2xl pl-[10px] w-[300px] p-1'} placeholder={'Enter Research Name'} id={'query'}/>
                    <div className={' border border-black rounded-full p-2 mx-2 bg-green-500 w-[100px] text-center'}>
                        {!show ? <button onClick={handleClick} type={'submit'}>Contribute</button>
                            : <button onClick={handleClick} type={'submit'}>Change</button>}
                    </div>
                </form>
            </div>
            {show && <>
                <p className={'pl-[36px] text-xl py-3'}>Topic: {title}</p>
                <p className={'pl-[36px] text-xl'}>Amount Needed: {amount}</p>
            </>}
        </>
    )
}

export default Contribute;