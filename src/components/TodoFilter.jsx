// import React from 'react'

import Button from "./Button";

export default function TodoFilter() {
    return (
        <div className="flex justify-center items-center gap-2">
            <Button className="bg-blue-500 rounded mt-2 text-white font-medium w-52 h-7" text="All" />
            <Button className="bg-blue-500 rounded mt-2 text-white font-medium w-52 h-7" text="Done" />
            <Button className="bg-blue-500 rounded mt-2 text-white font-medium w-52 h-7" text="Todo" />
        </div>
    )
}
