"use client";

import React from "react";
import Image from "next/image";
import { saveAs } from "file-saver";
import "../app/globals.css"
import Navbar from "./navbar";


export default function Download() {
    const downloadFile = () => {
        saveAs(
            "https://github.com/technical-director-acmvit/unipool-launch-website/releases/download/v1.0.0/uni-pool.apk",
            "UniPool.apk"
        )
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <Image
                    src="/car-top-view.svg"
                    alt="Download"
                    width={500}
                    height={500}
                    quality={100}
                />
                <h1 className="text-3xl text-white font-bold">
                    Download the APK now!
                </h1>
                <div className="download-button pt-5">
                    <button onClick={downloadFile} className="bg-text-purple text-white rounded-full px-4 py-2 w-[60vw] md:w-[15vw]">
                        Download
                    </button>

                    <h3 className="text-white text-sm pt-5 text-center">
                        Version 1.0.0
                    </h3>
                    <h3 className="text-white text-sm text-center">
                        Coming to iOS soon!
                    </h3>
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 right-0 md:w-full w-[350%] h-full bg-bottom bg-no-repeat bg-contain -z-10"
                style={{ backgroundImage: "url('/purple-ellipse.svg')" }}
            ></div>
        </div>
    );
}
