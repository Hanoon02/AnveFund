import React, {useState} from "react";
import {Modal} from "reactstrap";
function Contribute(){
    const {ethereum}  = window;
    const [show, setShow] = useState(false);
    const [donate, setDonate] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    let account;

    const handleMetaMask = () =>{
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
                console.log(result);
                let wei = parseInt(result,16);
                let balance = wei / (10**18);
                console.log(balance + " ETH");
            });
        });
    }

    const handlePayment = () => {
        console.log('clicked')
        let transactionParam = {
            to: '0x45B6b39e1Cf8A6b4Ff2720f6BA0089d4574126E5',
            from: account,
            value: '0x38D7EA4C68000'
        };

        ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]}).then(txhash => {
            console.log(txhash);
            checkTransactionconfirmation(txhash).then(r => alert(r));
        });
    }

    function checkTransactionconfirmation(txhash) {
        let checkTransactionLoop = () => {
            return ethereum.request({method:'eth_getTransactionReceipt',params:[txhash]}).then(r => {
                if(r !=null) return 'confirmed';
                else return checkTransactionLoop();
            });
        };
        return checkTransactionLoop();
    }
    const handleClick = () => {
        setShow(!show);
    }

    const handleDonate = () => {
        setDonate(!donate);
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
                <div className={'ml-[36px] mt-[18px] border border-black rounded-full p-2 mx-2 bg-green-500 w-[100px] text-center'}>
                    <button onClick={handleDonate}>Donate</button>
                </div>
                {donate &&
                <Modal isOpen={donate}>
                    <div className={'flex flex-col w-[100px]'}>
                        <div className={'border'}><button onClick={handleMetaMask}>Connect Metamask</button></div>
                        <div className={'border'}><button onClick={handlePayment}>Tip 0.001 ETH</button></div>
                    </div>
                </Modal>}
            </>}
        </>
    )
}

export default Contribute;