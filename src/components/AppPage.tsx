import { useState } from "react"

export default function AppPage() {
    const [prompt, setPrompt] = useState("")
    const [image, setImage] = useState("")
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-[35px] font-semibold text-white">Text-To-Image</h1>
            <div>
                <p>Enter Prompt</p>
                <form className="flex flex-col gap-3">
                    <input
                        className="bg-slate-200 text-gray-800 mt-2 rounded-sm p-1 w-full"
                        type="text"
                        placeholder="eg. cyberpunk dog"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    ></input>
                    <button
                        className="bg-blue-400 p-1 text-black rounded-sm w-full"
                        onClick={async () => {
                            const res = await fetch("")
                            const blob = await res.blob();
                            setImage(URL.createObjectURL(blob))
                        }}
                    >Generate</button>
                </form>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
                <p>Genrated Image</p>
                <div className="p-4">
                    <img
                        className="rounded-md shadow-sm"
                        src={image ? image : "./placeholder.jpg"}
                        style={{
                            aspectRatio: 600 / 400,
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}