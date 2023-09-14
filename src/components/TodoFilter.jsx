// import React from 'react'

import Button from "./Button";

export default function TodoFilter() {
    return (
        <div className="flex justify-evenly items-center gap-2">
            <Button bgColor="bg-btn-default" className="rounded mt-2 text-white font-medium w-full h-7" text="All" />
            <Button bgColor="bg-btn-default" className="rounded mt-2 text-white font-medium w-full h-7" text="Done" />
            <Button bgColor="bg-btn-default" className="rounded mt-2 text-white font-medium w-full h-7" text="Todo" />
        </div>
    )
}
