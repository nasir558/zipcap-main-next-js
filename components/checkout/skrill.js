import React from "react";

const Skrill = () => {
    return (
        <div>
            <div className="block paymentForm w-full">

                <form className="newCardForm">
                    <button className="bg-white py-4 border-none skrillBtn flex sm:flex-row items-center space-x-4" type="button">
                            <img src="/images/skrill-logo.png" alt="" className="inline-block w-68px h-auto" /> <span>Click to pay with skrill</span>
                    </button>
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center checkoutBtns">
                        <button
                            type="reset"
                            className="uppercase transition-all duration-300 backBtn"
                        >
                            Back to cart
                        </button>
                        <button
                            type="submit"
                            className="uppercase transition-all duration-300 proceedBtn"
                        >
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Skrill;
