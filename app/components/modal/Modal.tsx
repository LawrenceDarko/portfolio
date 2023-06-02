'use client'

import { useState } from "react"
import { useGeneralContext } from "@/app/contexts/GeneralContext"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const Modal = () => {

    const {showModal, setShowModal} = useGeneralContext()

    return (
        <div className={`${showModal===false? 'hidden' : ''} fixed z-20 flex items-center justify-center w-full h-full bg-black backdrop-blur-md bg-opacity-40`}>
            <div className="absolute z-50 cursor-pointer top-5 right-5">
                <p onClick={()=>setShowModal(false)}>X</p>
            </div>
            <div className="theMagic">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* <section className="centerDiv">Hey this sislk is somethin i am trying</section> */}
                <section className="absolute w-[448px] h-[341px] transform -translate-x-1/2 -translate-y-1/2 top-[27%] md:top-[40%] left-1/2">
                    <section className="flex items-center justify-center starMain">
                        <section className="flex flex-col items-center justify-center gap-3 p-2 rounded-md cursor-pointer star-wars-skew">
                            <section className="flex items-center justify-center p-1">
                                <h1 className={`${inter.className} mb-10 text-4xl font-bold text-center text-gray-700`}>Look! The infinity Stones...</h1>
                            </section>
                            <section className="flex flex-wrap items-center justify-center gap-4">
                                <section className="flex items-center justify-center w-52 bg-[#64F4AC] bg-opacity-40 rounded-md h-36 backdrop-blur-md">
                                    <Image src='/images/python.png' width={100} height={100} alt="python"/>
                                </section>
                                <section className="flex items-center justify-center w-52 bg-[#64F4AC] bg-opacity-40 rounded-md h-36 backdrop-blur-md">
                                    <Image src='/images/react.png' width={100} height={100} alt="python"/>
                                </section>
                                <section className="flex items-center justify-center w-52 bg-[#64F4AC] bg-opacity-40 rounded-md h-36 backdrop-blur-md">
                                    <Image src='/images/js.png' width={100} height={100} alt="python"/>
                                </section>
                                <section className="flex items-center justify-center w-52 bg-[#64F4AC] bg-opacity-40 rounded-md h-36 backdrop-blur-md">
                                    <Image src='/images/node.png' width={100} height={100} alt="python"/>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Modal