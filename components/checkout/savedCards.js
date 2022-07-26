import React from "react";

const SavedCards = () => {
  return (
    <div>
      <div className="block paymentForm w-full">
        <form>
          <h3>Saved cards</h3>
          <div className="cardField block">
            <label
              className="paymentOption flex flex-row items-center space-x-2 sm:space-x-5"
              htmlFor="master"
            >
              <input
                type="radio"
                className="css-radio"
                id="master"
                name="payment_card"
              />
              <i></i>
              <span className="cardPic">
                <img src="/images/mastercard.png" alt="" />
              </span>
              <span className="cardNumber inline-block">
                XXXX-XXXX-XXXX-1234
              </span>
            </label>
          </div>
          <div className="cardField block">
            <label
              className="paymentOption flex flex-row items-center space-x-2 sm:space-x-5"
              htmlFor="visa"
            >
              <input
                type="radio"
                className="css-radio"
                id="visa"
                name="payment_card"
              />
              <i></i>
              <span className="cardPic">
                <img src="/images/visa.png" alt="" />
              </span>
              <span className="cardNumber inline-block">
                XXXX-XXXX-XXXX-1234
              </span>
            </label>
          </div>
        </form>
        <div className="seperator">
          <div className="text-center">or</div>
        </div>
        <form className="newCardForm">
          <h3>Add new card</h3>
          <div className="FormElements">
            <h3>Card Number</h3>
            <div className="form-group flex flex-row items-center space-x-4 xl:max-w-508px">
              <input
                type="text"
                name=""
                className="sm:flex-grow"
                placeholder="1234 5678 0325 4321"
              />
              <span className="cardType">
                <img src="/images/visa.png" alt="" />
              </span>
              <span className="successIcon">
                <img src="/images/check.png" alt="" />
              </span>
            </div>
            <h3>Name on Card</h3>
            <div className="form-group flex flex-row items-center space-x-4 xl:max-w-256px">
              <input
                type="text"
                name=""
                className="sm:flex-grow"
                placeholder="Abdul Nasir"
              />
              <span className="successIcon">
                <img src="/images/check.png" alt="" />
              </span>
            </div>
            <div className="flex flex-col xl:flex-row sapce-x-0 xl:space-x-6 xl:max-w-471px">
              <div>
                <h3>Date of expiry (MM/YY)</h3>
                <div className="form-group flex flex-row items-center space-x-4">
                  <input
                    type="text"
                    name=""
                    className="sm:flex-grow"
                    placeholder="12/24"
                  />
                  <span className="successIcon">
                    <img src="/images/check.png" alt="" />
                  </span>
                </div>
              </div>
              <div>
                <h3>CVV Code</h3>
                <div className="form-group flex flex-row items-center space-x-4">
                  <input
                    type="text"
                    name=""
                    className="sm:flex-grow"
                    placeholder="123"
                  />
                  <span className="successIcon">
                    <img src="/images/check.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <label
              className="saveforLater flex flex-row items-center"
              htmlFor="save"
            >
              <input type="checkbox" className="css-radio" id="save" name="" />
              <i></i>
              <span className="cardNumber text-sm inline-block">
                Save this card for later use
              </span>
            </label>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-end formBtns">
              <button
                type="reset"
                className="transition-all duration-300 cancelBtn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="transition-all duration-300 addBtn"
              >
                Add Card
              </button>
            </div>
          </div>
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

export default SavedCards;
