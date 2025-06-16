import React, { useRef, useEffect } from 'react'
function SearchForm({ onSearch, searchTerm, setSearchTerm, handleLucky }) {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const query = event.target.elements[0].value
        onSearch(query)
        // your logic here
    }
    const handleFeelingLucky = (event) => {
        event.stopPropagation() // Prevent handleSubmit from firing
        handleLucky()
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                name="search"
                value={searchTerm}
                ref={inputRef}
                onInput={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher des repas..."
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                type="submit"
                name="search"
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
                Rechercher
            </button>
            <button
                onClick={handleFeelingLucky}
                type="button"
                name="search"
                className="px-4 py-2 bg-emerald-400 text-white rounded hover:bg-emerald-600 cursor-pointer"
            >
                J'ai de la chance
            </button>
        </form>
    )
}

export default SearchForm
