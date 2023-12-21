import React from 'react'

function InputBox({
    currency,
    Fromlabel ,
    amount,
    currencies ,
    readOnly=false,
    onAmntChange,
    onCurrChange
}) {

    return (
        <div className={`bg-white text-black p-3 rounded-lg text-sm flex`}>
            <div className='w-1/2'>
                <label htmlFor={Fromlabel} className='text-black/40 mb-2 inline-block border'>{Fromlabel}</label>
                <input type="number" className='w-full outline-none bg-transparent py-1.5 ' placeholder='Amount' disabled={readOnly} value={amount} onChange={(e)=>onAmntChange(Number(e.target.value))}/>
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right '>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select name="" id="" className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={currency}
                onChange={(e)=>onCurrChange(e.target.value)}
                >
                    {currencies.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
