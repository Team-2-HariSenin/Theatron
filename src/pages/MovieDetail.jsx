import React from "react";
import videoTrailer from "../assets/images/videoTrailer.jpg";
import cardMovie from "../assets/images/card.png";
import trailer from "../assets/images/trailer.png";

const MovieDetail = () => {
  return (
    <>
      {/* Movie Detail */}
      <section className="w-[100vw] bg-black">
        <div className="px-2">
          <div className="pt-10 flex justify-center min-[1440px]:gap-5">
            <div className="movie w-full min-[1440px]:w-[1000px]">
              <img
                className="w-full min-[1440px]:w-[1000px] min-[1440px]:h-[610px]"
                src={videoTrailer}
                alt=""
              />
            </div>
            <div className="w-[425px] hidden min-[1440px]:block">
              <h1 className="text-[#F5C518] text-2xl font-medium">Trailer</h1>
              <div className="p-4 mt-6 bg-[#0c0c0c]">
                <div className="containerTrailerCard h-[530px] text-[#f6f6f6] overflow-x-scroll">
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <img className="w-32 h-[86px]" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="h-14 overflow-ellipsis -webkit-box line-clamp-2 font-light text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="font-light text-xl opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="playNext px-2 min-[1440px]:hidden">
            <h1 className="text-[#F5C518] font-semibold text-xl leading-5 py-2">
              Play next
            </h1>
            <div className="containerToMovieDetailCard w-full rounded">
              <div className="movieDetailCard1 rounded relative">
                <img src={videoTrailer} alt="" />
                <div className="flex gap-2 absolute bottom-8 left-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-9e112752-5 fNZhOu slide-caption-play-icon text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                  <p className="text-[#f6f6f6] opacity-70 font-light text-xl">
                    2:20
                  </p>
                </div>
                <p className="text-[#f6f6f6] text-center font-light text-base bg-[#2C2C2C] h-8 px-2 pt-1 rounded-b">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 rounded relative">
                <img src={videoTrailer} alt="" />
                <div className="flex gap-2 absolute bottom-8 left-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-9e112752-5 fNZhOu slide-caption-play-icon text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                  <p className="text-[#f6f6f6] opacity-70 font-light text-xl">
                    2:20
                  </p>
                </div>
                <p className="text-[#f6f6f6] text-center font-light text-base bg-[#2C2C2C] h-8 px-2 pt-1 rounded-b">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 rounded relative">
                <img src={videoTrailer} alt="" />
                <div className="flex gap-2 absolute bottom-8 left-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-9e112752-5 fNZhOu slide-caption-play-icon text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                  <p className="text-[#f6f6f6] opacity-70 font-light text-xl">
                    2:20
                  </p>
                </div>
                <p className="text-[#f6f6f6] text-center font-light text-base bg-[#2C2C2C] h-8 px-2 pt-1 rounded-b">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 rounded relative">
                <img src={videoTrailer} alt="" />
                <div className="flex gap-2 absolute bottom-8 left-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-9e112752-5 fNZhOu slide-caption-play-icon text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                  <p className="text-[#f6f6f6] opacity-70 font-light text-xl">
                    2:20
                  </p>
                </div>
                <p className="text-[#f6f6f6] text-center font-light text-base bg-[#2C2C2C] h-8 px-2 pt-1 rounded-b">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 rounded relative">
                <img src={videoTrailer} alt="" />
                <div className="flex gap-2 absolute bottom-8 left-2">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ipc-icon ipc-icon--play-circle-outline-large-inline sc-9e112752-5 fNZhOu slide-caption-play-icon text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                  <p className="text-[#f6f6f6] opacity-70 font-light text-xl">
                    2:20
                  </p>
                </div>
                <p className="text-[#f6f6f6] text-center font-light text-base bg-[#2C2C2C] h-8 px-2 pt-1 rounded-b">
                  Get Into Character With...
                </p>
              </div>
            </div>
          </div>

          <div className="details px-2 py-8">
            <div>
              <ul className="text-[#f6f6f6] flex gap-2 px-2 my-2">
                <li className="border border-[#f6f6f6] border-opacity-70 rounded-[100px] px-[10px] py-1 font-light text-base">
                  Comedy
                </li>
                <li className="border border-[#f6f6f6] border-opacity-70 rounded-[100px] px-[10px] py-1 font-light text-base">
                  Fantasi
                </li>
                <li className="border border-[#f6f6f6] border-opacity-70 rounded-[100px] px-[10px] py-1 font-light text-base">
                  Horror
                </li>
              </ul>
              <div className="">
                <p className="text-[#f6f6f6] font-light text-base">
                  This is a follow-up to the comedy Beetlejuice (1988), about a
                  ghost who's recruited to help haunt a house.
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#f6f6f6] opacity-70 my-2"></div>
              <div className="flex gap-3">
                <h5 className="text-[#f6f6f6] font-semibold text-base">
                  Director
                </h5>
                <p className="text-[#5799EF] font-light text-base">
                  Tim Burton
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#f6f6f6] opacity-70 my-2"></div>
              <div>
                <h5 className="text-[#f6f6f6] font-semibold text-base">
                  Writers
                </h5>
                <ul className="flex flex-wrap text-[#5799EF] font-light text-base gap-3 list-disc list-inside">
                  <li className="">Alfred Ghoug</li>
                  <li className="">Milles Millar</li>
                  <li className="">Seth Grahame</li>
                  <li className="">Martin Lawrence</li>
                </ul>
              </div>
              <div className="h-[1px] w-full bg-[#f6f6f6] opacity-70 my-2"></div>
              <div>
                <h5 className="text-[#f6f6f6] font-semibold text-base">
                  Starts
                </h5>
                <ul className="flex flex-wrap text-[#5799EF] font-light text-base gap-3 list-disc list-inside">
                  <li className="">Jenna Ortega</li>
                  <li className="">Monicca Beellucci</li>
                  <li className="">Winnona Ryder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="moreLikeThis bg-[#2C2C2C] px-2 py-5 my-5 min-[1440px]:bg-black">
          <div className="flex px-2 py-2 gap-2">
            <div className="w-1 h-8 bg-[#F5C518] rounded"></div>
            <h1 className="text-[#f6f6f6] text-2xl font-medium">
              More like this
            </h1>
          </div>
          <div className="px-2">
            <div className="containerToMovieDetailCard w-full">
              <div className="movieDetailCard2">
                <img src={cardMovie} alt="" />
              </div>
              <div className="movieDetailCard2">
                <img src={cardMovie} alt="" />
              </div>
              <div className="movieDetailCard2">
                <img src={cardMovie} alt="" />
              </div>
              <div className="movieDetailCard2">
                <img src={cardMovie} alt="" />
              </div>
              <div className="movieDetailCard2">
                <img src={cardMovie} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
