import React, { useState } from "react";
import NavbarItems from "../../items/NavbarItems";
import Logo from "../../ui/Logo";
import LanguageChanger from "../../ui/LanguageChanger";
import { ReactComponent as LangIcon } from "../../../assets/icons/iconlang.svg";
import { ReactComponent as Phone } from "../../../assets/icons/iconphone.svg";
import { ReactComponent as Mail } from "../../../assets/icons/iconmail.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/Linkedin.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";


function NavbarMobile(props) {
  const [isItemVisible, setIsItemVisible] = useState(false);

  const openNavbarHandler = () => {
    setIsItemVisible(!isItemVisible);
  };
  return (
    <>
      <nav className="bg-nav-bg py-4 px-2 z-50  items-center flex justify-between">
         <Logo/>
 
        <div className="h-[40px] flex items-center flex-row-reverse">
          {isItemVisible && (
            <svg
              onClick={() => {
                setIsItemVisible(false);
              }}
              className="mr-4 ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z"
                fill="#0A0A0A"
              />
            </svg>
          )}
          {!isItemVisible && (
            <svg
              onClick={openNavbarHandler}
              className="w-[80px]"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="35"
                height="35"
                rx="5.5"
                fill="#E9F2FB"
                stroke="#C3E0FD"
              />
              <g clip-path="url(#clip0_262_1032)">
                <path
                  d="M26.05 17H9.95C9.42533 17 9 17.4253 9 17.95V18.05C9 18.5747 9.42533 19 9.95 19H26.05C26.5747 19 27 18.5747 27 18.05V17.95C27 17.4253 26.5747 17 26.05 17Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M26.05 22H9.95C9.42533 22 9 22.4253 9 22.95V23.05C9 23.5747 9.42533 24 9.95 24H26.05C26.5747 24 27 23.5747 27 23.05V22.95C27 22.4253 26.5747 22 26.05 22Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M26.05 12H9.95C9.42533 12 9 12.4253 9 12.95V13.05C9 13.5747 9.42533 14 9.95 14H26.05C26.5747 14 27 13.5747 27 13.05V12.95C27 12.4253 26.5747 12 26.05 12Z"
                  fill="#0A0A0A"
                />
              </g>
              <defs>
                <clipPath id="clip0_262_1032">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(6 6)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
          {props.ContactmeButton}
        </div>
      </nav>
      {isItemVisible && (
        <div>
          <ul className="py-2">
            <NavbarItems />
          </ul>
          <div>
            <div>
              <hr className=" ml-auto w-[93%]" />
              <div className="flex mt-6 w-[95%] justify-between mr-auto ml-auto">
                <div className="flex items-center">
                  <LangIcon />
                  <span className="ml-2">Language</span>
                </div>
                <LanguageChanger />
              </div>
            </div>
          </div>

          <div className="w-[95%] mt-6 mr-auto ml-auto">
            <hr className=" ml-auto w-[95%]" />
            <div className="flex mt-4 items-center">
              <Phone />
              <span className="ml-2">+994155555</span>
            </div>
          </div>
          <div className="w-[95%] mt-6 mr-auto ml-auto">
            <hr className=" ml-auto w-[95%]" />
            <div className="flex mt-4 items-center">
              <Mail />
              <span className="ml-2">javidkhalilov@gmail.com</span>
            </div>
          </div>


          <div className="w-[95%] mt-6 mr-auto ml-auto">
            <hr className=" ml-auto w-[95%]" />
            <div className="flex w-[160px] mt-4 items-center justify-between">
              <Facebook />
              <Linkedin/>
              <Instagram/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarMobile;
