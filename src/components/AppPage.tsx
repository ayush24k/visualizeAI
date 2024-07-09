'use client'

import {useState } from "react"

export default function AppPage() {
    const [prompt, setPrompt] = useState("")
    const [image, setImage] = useState("")

    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-[90px]">
            <h1 className="text-[35px] font-semibold text-white">Visualize AI</h1>
            <p className="mt-[-18px] text-gray-500">convert text to image in a single click</p>

            <div className="p-5 max-w-[650px]">
                    <input
                        className="bg-slate-200 text-gray-800 mt-2 rounded-sm p-1 w-full"
                        type="text"
                        placeholder="eg. cyberpunk dog"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    ></input>

                <button
                    className="bg-blue-400 p-1 text-black rounded-sm w-full mt-4"
                    onClick={async () => {
                        const res = await fetch(`https://backend-worker.cloud24k.workers.dev/?prompt=${prompt}`)
                        const blob = await res.blob();
                        setImage(URL.createObjectURL(blob));
                    }}
                >Generate</button>
                <p className="mt-2 text-[14px] text-gray-500">click on generate and wait for like 3 secs... <br/>built in 49 minutes, might not work..</p>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
                <p>Genrated Image</p>
                <div className="p-4">
                    <img
                        alt="generated img"
                        className="rounded-md shadow-xl border-2 border-purple-900 p-2"
                        height={400}
                        src={image ? image : "./placeholder.png"}
                        style={{
                            aspectRatio: 600 / 400,
                            objectFit: "cover"
                        }}
                        width={600}
                    />
                </div>
            </div>
        </div>
    )
}