import { Button } from "@components";
import { Link } from "react-router-dom";

export function Checkout() {
  return (
    <div className="p-10">
      <p className="font-bold text-lg my-2 flex p-2">Checkout</p>
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4">
        {/* Shipping info */}
        <div className="flex flex-col gap-2 p-2">
          {/* Address */}
          <div className="flex flex-col my-2">
            <p className="font-bold border-b border-solid">Shipping Address</p>
            <div className="flex justify-between my-2">
              <p className="text-wrap w-1/2">
                10, Gbeleyi Street, off Pipeline bus- stop, Lagos State, Nigeria
              </p>
              <Link className="text-secondary" to="">
                Edit
              </Link>
            </div>
          </div>

          {/* Method */}
          <div className="flex flex-col my-2">
            <p className="font-bold border-b border-solid">Shipping Method</p>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.7961 7.94841C14.9155 8.05335 14.9883 8.20138 14.9987 8.35999C15.009 8.51861 14.956 8.67484 14.8513 8.79441L10.6513 13.5944C10.5973 13.6563 10.5311 13.7065 10.4568 13.7418C10.3826 13.777 10.3019 13.7967 10.2198 13.7995C10.1377 13.8023 10.0558 13.7882 9.97937 13.7581C9.90291 13.728 9.83345 13.6825 9.7753 13.6244L7.3753 11.2244C7.31951 11.1686 7.27526 11.1024 7.24507 11.0295C7.21488 10.9566 7.19934 10.8785 7.19934 10.7996C7.19934 10.7207 7.21488 10.6426 7.24507 10.5697C7.27526 10.4968 7.31951 10.4306 7.3753 10.3748C7.43108 10.319 7.49731 10.2748 7.5702 10.2446C7.64309 10.2144 7.72121 10.1989 7.8001 10.1989C7.87899 10.1989 7.95711 10.2144 8.03 10.2446C8.10289 10.2748 8.16911 10.319 8.2249 10.3748L10.1713 12.3212L13.9489 8.00481C14.0537 7.88525 14.2016 7.81216 14.3602 7.80159C14.5188 7.79101 14.6764 7.84382 14.7961 7.94841ZM3.6001 7.19961C3.6001 6.24483 3.97938 5.32916 4.65451 4.65403C5.32964 3.97889 6.24532 3.59961 7.2001 3.59961H14.4001C15.3549 3.59961 16.2706 3.97889 16.9457 4.65403C17.6208 5.32916 18.0001 6.24483 18.0001 7.19961V14.3996C18.0001 15.3544 17.6208 16.2701 16.9457 16.9452C16.2706 17.6203 15.3549 17.9996 14.4001 17.9996H7.2001C6.24532 17.9996 5.32964 17.6203 4.65451 16.9452C3.97938 16.2701 3.6001 15.3544 3.6001 14.3996V7.19961ZM7.2001 4.79961C6.56358 4.79961 5.95313 5.05247 5.50304 5.50255C5.05295 5.95264 4.8001 6.56309 4.8001 7.19961V14.3996C4.8001 15.0361 5.05295 15.6466 5.50304 16.0967C5.95313 16.5468 6.56358 16.7996 7.2001 16.7996H14.4001C15.0366 16.7996 15.6471 16.5468 16.0972 16.0967C16.5472 15.6466 16.8001 15.0361 16.8001 14.3996V7.19961C16.8001 6.56309 16.5472 5.95264 16.0972 5.50255C15.6471 5.05247 15.0366 4.79961 14.4001 4.79961H7.2001ZM6.9049 19.1996C7.5649 19.9364 8.5213 20.3996 9.5881 20.3996H14.9881C15.6972 20.3996 16.3994 20.2599 17.0546 19.9886C17.7097 19.7172 18.305 19.3194 18.8065 18.818C19.3079 18.3165 19.7057 17.7213 19.977 17.0661C20.2484 16.4109 20.3881 15.7087 20.3881 14.9996V9.59961C20.3881 8.53881 19.9285 7.58361 19.1989 6.92601V13.1996C19.1989 13.3196 19.1949 13.4392 19.1869 13.5584V14.9984C19.1869 16.1123 18.7444 17.1806 17.9567 17.9683C17.1691 18.7559 16.1008 19.1984 14.9869 19.1984H13.2661L13.1989 19.1996H6.9049Z"
                    fill="#C80001"
                  />
                </svg>
                <span>Free Regular Shipping</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.7961 7.94841C14.9155 8.05335 14.9883 8.20138 14.9987 8.35999C15.009 8.51861 14.956 8.67484 14.8513 8.79441L10.6513 13.5944C10.5973 13.6563 10.5311 13.7065 10.4568 13.7418C10.3826 13.777 10.3019 13.7967 10.2198 13.7995C10.1377 13.8023 10.0558 13.7882 9.97937 13.7581C9.90291 13.728 9.83345 13.6825 9.7753 13.6244L7.3753 11.2244C7.31951 11.1686 7.27526 11.1024 7.24507 11.0295C7.21488 10.9566 7.19934 10.8785 7.19934 10.7996C7.19934 10.7207 7.21488 10.6426 7.24507 10.5697C7.27526 10.4968 7.31951 10.4306 7.3753 10.3748C7.43108 10.319 7.49731 10.2748 7.5702 10.2446C7.64309 10.2144 7.72121 10.1989 7.8001 10.1989C7.87899 10.1989 7.95711 10.2144 8.03 10.2446C8.10289 10.2748 8.16911 10.319 8.2249 10.3748L10.1713 12.3212L13.9489 8.00481C14.0537 7.88525 14.2016 7.81216 14.3602 7.80159C14.5188 7.79101 14.6764 7.84382 14.7961 7.94841ZM3.6001 7.19961C3.6001 6.24483 3.97938 5.32916 4.65451 4.65403C5.32964 3.97889 6.24532 3.59961 7.2001 3.59961H14.4001C15.3549 3.59961 16.2706 3.97889 16.9457 4.65403C17.6208 5.32916 18.0001 6.24483 18.0001 7.19961V14.3996C18.0001 15.3544 17.6208 16.2701 16.9457 16.9452C16.2706 17.6203 15.3549 17.9996 14.4001 17.9996H7.2001C6.24532 17.9996 5.32964 17.6203 4.65451 16.9452C3.97938 16.2701 3.6001 15.3544 3.6001 14.3996V7.19961ZM7.2001 4.79961C6.56358 4.79961 5.95313 5.05247 5.50304 5.50255C5.05295 5.95264 4.8001 6.56309 4.8001 7.19961V14.3996C4.8001 15.0361 5.05295 15.6466 5.50304 16.0967C5.95313 16.5468 6.56358 16.7996 7.2001 16.7996H14.4001C15.0366 16.7996 15.6471 16.5468 16.0972 16.0967C16.5472 15.6466 16.8001 15.0361 16.8001 14.3996V7.19961C16.8001 6.56309 16.5472 5.95264 16.0972 5.50255C15.6471 5.05247 15.0366 4.79961 14.4001 4.79961H7.2001ZM6.9049 19.1996C7.5649 19.9364 8.5213 20.3996 9.5881 20.3996H14.9881C15.6972 20.3996 16.3994 20.2599 17.0546 19.9886C17.7097 19.7172 18.305 19.3194 18.8065 18.818C19.3079 18.3165 19.7057 17.7213 19.977 17.0661C20.2484 16.4109 20.3881 15.7087 20.3881 14.9996V9.59961C20.3881 8.53881 19.9285 7.58361 19.1989 6.92601V13.1996C19.1989 13.3196 19.1949 13.4392 19.1869 13.5584V14.9984C19.1869 16.1123 18.7444 17.1806 17.9567 17.9683C17.1691 18.7559 16.1008 19.1984 14.9869 19.1984H13.2661L13.1989 19.1996H6.9049Z"
                    fill="black"
                  />
                </svg>
                <span>Paid Shipping</span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="flex flex-col my-2">
            <p className="font-bold border-b border-solid">Payment Details</p>
            <div className="flex flex-col my-2">
              <label htmlFor="name" className="my-2">
                Name of Card
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pe-10 p-2.5"
                placeholder="Name of Card"
                required
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="number" className="my-2">
                Card Number
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pe-10 p-2.5"
                placeholder="Card Number"
                required
              />
            </div>
            <div className="flex justify-between gap-3">
              <div className="flex flex-col my-2">
                <label htmlFor="expiry-date" className="my-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pe-10 p-2.5"
                  placeholder="Expiry Date"
                  required
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="cvv" className="my-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pe-10 p-2.5"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <Button title={"Continue"} lg />
          </div>
        </div>
        <div className="flex my-2 border border-solid w-1/2 p-2">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 border-b-2 border-solid border-gray-300 my-2 py-2">
              <div className="flex gap-5 justify-between">
                <p>Price</p>
                <p>N 40, 000</p>
              </div>
              <div className="flex gap-5 justify-between">
                <p>Discount</p>
                <p>N 0.00</p>
              </div>
              <div className="flex gap-5 justify-between">
                <p>V.A.T</p>
                <p>N 0.00</p>
              </div>
              <div className="flex gap-5 justify-between">
                <p>Shipping</p>
                <p className="text-secondary">free</p>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <p>Total</p>
              <p>N 40, 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
