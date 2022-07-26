import React from 'react'

function Summary() {  
    return (
        <div>  
            <div className={`block w-full summary`}>
                <h2 className="title">Summary</h2>
                <div className="block">
                    <div className="flex flex-row items-center totalPrice">
                        <p className="pticeTitle">Subtotal</p>
                        <p className="value ml-auto">$299</p>
                    </div>
                    <div className="flex flex-row items-center mb-zero totalPrice">
                        <p className="pticeTitle">Total</p>
                        <p className="value ml-auto">$249</p>
                    </div>
                    <div className="pl-4 pr-4">
                        <button type="button" className="block w-full c-btn transition-all duration-300 addCartBtn">Checkout</button>
                    </div>
                    <p className="formTItle">Coupan</p>
                    <div className="pl-4 pr-4 coupanForm">
                        <form action="#" method="POST">
                            <div className="flex flex-row">
                                <input
                                    type="text"
                                    name="coupan"
                                    id="coupan"
                                    className="flex-grow lg:flex-grow-0 searchInput bg-transparent"
                                    placeholder="Enter Coupan"
                                />
                                <span>
                                    <button type="submit" className="text-center submitBtn transition-all duration-300">
                                        Apply
                                    </button>
                                </span>
                            </div>       
                        </form>
                        <div className="flex justify-between items-center mt-22px coupanText space-x-1">
                            <p>ZIPPROMO2021 applied</p>
                            <button type="button">
                                <img src="/images/delete.svg" alt="" className="flex-shrink-0 w-25px h-25px rounded-full" />
                            </button>
                        </div>
                    </div>
                    <div className="pr-4 pl-4 lg:pr-12 lg:pl-12 mb-11">
                         <button type="button" className="block w-full c-btn transition-all duration-300 enrollBtn">Back to cart</button>  
                     </div>                                 
                </div>
            </div>
        </div>
    )
}

export default Summary
