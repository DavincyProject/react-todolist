import { useState } from "react"

export default function TodoSearch({ setSearchText, onSearch }) {
    // const [shouldSearch, setShouldSearch] = useState(false);
    const handleInputChange = (e) => {
        // Mengatur teks pencarian saat input berubah
        setSearchText(e.target.value);
    };

    return (
        <div>
            <h1 className='font-bold text-2xl'>TodoSearch</h1>
            <div className='container-fluid mx-2 m-2 border rounded-md p-3 flex justify-around'>
                <div className='flex flex-col w-1/2 mr-1'>
                    <div className="flex items-center gap-2">
                        🔎<input placeholder='Search Todo' className='border p-1 w-full' onChange={handleInputChange} ></input>
                    </div>

                    <button className='bg-btn-default rounded mt-2 text-white font-medium h-8' onClick={onSearch}>Search</button>
                </div>
                <div className='flex flex-col-reverse w-1/2'>
                    <button className='bg-btn-default rounded mt-2 text-white font-medium w-full h-8'>Add New Task</button>
                </div>
            </div>
        </div>
    )
}
