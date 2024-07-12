import React from "react";
import videoTrailer from "../assets/images/videoTrailer.jpg";
import cardMovie from "../assets/images/card.png";
import trailer from "../assets/images/trailer.png";
import Main2 from "../components/Main2";

const MovieDetail = () => {
  return (
    <>
      {/* Movie Detail
      <section className="w-full bg-black">
        <div className="mx-auto px-2 lg:container">
          <section className="relative col-auto flex max-w-screen-xl justify-center">
            <div className="relative mx-2 aspect-video w-full flex-shrink flex-grow-[664] basis-[0%] overflow-hidden xl:flex-grow-[864]">
              <img
                className="h-full w-full object-cover"
                src={videoTrailer}
                alt=""
              />
            </div>
            <div className="jus relative ml-1 mr-2 hidden flex-shrink flex-grow-[328] basis-[0%] flex-col lg:flex xl:flex-grow-[402]">
              <h1 className="text-2xl font-medium text-[#F5C518]">Trailer</h1>
              <div className="mt-6 bg-[#0c0c0c] p-4">
                <div className="containerTrailerCard h-[530px] overflow-x-scroll text-[#f6f6f6]">
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    <img className="h-[86px] w-32" src={trailer} alt="" />
                    <div className="w-full pl-3">
                      <p className="-webkit-box line-clamp-2 h-14 overflow-ellipsis text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium, exercitationem!
                      </p>
                      <span className="text-xl font-light opacity-70">
                        2:20
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="playNext hidden px-2">
            <h1 className="py-2 text-xl font-semibold leading-5 text-[#F5C518]">
              Play next
            </h1>
            <div className="containerToMovieDetailCard w-full rounded">
              <div className="movieDetailCard1 relative rounded">
                <img src={videoTrailer} alt="" />
                <div className="absolute bottom-8 left-2 flex gap-2">
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
                  <p className="text-xl font-light text-[#f6f6f6] opacity-70">
                    2:20
                  </p>
                </div>
                <p className="h-8 rounded-b bg-[#2C2C2C] px-2 pt-1 text-center text-base font-light text-[#f6f6f6]">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 relative rounded">
                <img src={videoTrailer} alt="" />
                <div className="absolute bottom-8 left-2 flex gap-2">
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
                  <p className="text-xl font-light text-[#f6f6f6] opacity-70">
                    2:20
                  </p>
                </div>
                <p className="h-8 rounded-b bg-[#2C2C2C] px-2 pt-1 text-center text-base font-light text-[#f6f6f6]">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 relative rounded">
                <img src={videoTrailer} alt="" />
                <div className="absolute bottom-8 left-2 flex gap-2">
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
                  <p className="text-xl font-light text-[#f6f6f6] opacity-70">
                    2:20
                  </p>
                </div>
                <p className="h-8 rounded-b bg-[#2C2C2C] px-2 pt-1 text-center text-base font-light text-[#f6f6f6]">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 relative rounded">
                <img src={videoTrailer} alt="" />
                <div className="absolute bottom-8 left-2 flex gap-2">
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
                  <p className="text-xl font-light text-[#f6f6f6] opacity-70">
                    2:20
                  </p>
                </div>
                <p className="h-8 rounded-b bg-[#2C2C2C] px-2 pt-1 text-center text-base font-light text-[#f6f6f6]">
                  Get Into Character With...
                </p>
              </div>
              <div className="movieDetailCard1 relative rounded">
                <img src={videoTrailer} alt="" />
                <div className="absolute bottom-8 left-2 flex gap-2">
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
                  <p className="text-xl font-light text-[#f6f6f6] opacity-70">
                    2:20
                  </p>
                </div>
                <p className="h-8 rounded-b bg-[#2C2C2C] px-2 pt-1 text-center text-base font-light text-[#f6f6f6]">
                  Get Into Character With...
                </p>
              </div>
            </div>
          </div>

          <div className="details px-2 py-8">
            <div>
              <ul className="my-2 flex gap-2 px-2 text-[#f6f6f6]">
                <li className="rounded-[100px] border border-[#f6f6f6] border-opacity-70 px-[10px] py-1 text-base font-light">
                  Comedy
                </li>
                <li className="rounded-[100px] border border-[#f6f6f6] border-opacity-70 px-[10px] py-1 text-base font-light">
                  Fantasi
                </li>
                <li className="rounded-[100px] border border-[#f6f6f6] border-opacity-70 px-[10px] py-1 text-base font-light">
                  Horror
                </li>
              </ul>
              <div className="">
                <p className="text-base font-light text-[#f6f6f6]">
                  This is a follow-up to the comedy Beetlejuice (1988), about a
                  ghost who's recruited to help haunt a house.
                </p>
              </div>
              <div className="my-2 h-[1px] w-full bg-[#f6f6f6] opacity-70"></div>
              <div className="flex gap-3">
                <h5 className="text-base font-semibold text-[#f6f6f6]">
                  Director
                </h5>
                <p className="text-base font-light text-[#5799EF]">
                  Tim Burton
                </p>
              </div>
              <div className="my-2 h-[1px] w-full bg-[#f6f6f6] opacity-70"></div>
              <div>
                <h5 className="text-base font-semibold text-[#f6f6f6]">
                  Writers
                </h5>
                <ul className="flex list-inside list-disc flex-wrap gap-3 text-base font-light text-[#5799EF]">
                  <li className="">Alfred Ghoug</li>
                  <li className="">Milles Millar</li>
                  <li className="">Seth Grahame</li>
                  <li className="">Martin Lawrence</li>
                </ul>
              </div>
              <div className="my-2 h-[1px] w-full bg-[#f6f6f6] opacity-70"></div>
              <div>
                <h5 className="text-base font-semibold text-[#f6f6f6]">
                  Starts
                </h5>
                <ul className="flex list-inside list-disc flex-wrap gap-3 text-base font-light text-[#5799EF]">
                  <li className="">Jenna Ortega</li>
                  <li className="">Monicca Beellucci</li>
                  <li className="">Winnona Ryder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="moreLikeThis my-5 bg-[#2C2C2C] px-2 py-5 min-[1440px]:bg-black">
          <div className="flex gap-2 px-2 py-2">
            <div className="h-8 w-1 rounded bg-[#F5C518]"></div>
            <h1 className="text-2xl font-medium text-[#f6f6f6]">
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
      </section> */}
      <Main2 />
    </>
  );
};

export default MovieDetail;
