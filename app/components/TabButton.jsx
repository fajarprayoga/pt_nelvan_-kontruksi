import React from 'react'

const TabButton = ({ active, selectTab, children }) => {

    const buttonCLass = active ? 'text-white border-b border-purpler-500' : 'text-[#ADB7BE]'

    return (
        <button
            onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonCLass}`} >
                {children}
            </p>
        </button>
    )
}

export default TabButton