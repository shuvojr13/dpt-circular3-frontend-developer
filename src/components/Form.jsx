

function Form() {
  return (
    <div className="flex flex-row gap-2 items-center border-y-2 py-2">
     <input
        type="text"
        value="LHR"
       
        onChange={null}
        className="block w-1/6 px-4 p-2 text-gray-400 font-semibold border-gray-300 border-2 rounded-md"
      />
       <input
        type="text"
        value="CDG"
       
        onChange={null}
        className="block w-1/6 px-4 p-2 bg-blue-50 font-semibold text-black border-gray-300 border-2 rounded-md"
      />
    <input
        type="date"
        id="dateInput"
        value="2022-12-22"
        onChange={22-12-2022}
        className="block w-1/3 px-4 p-2 text-gray-600 bg-blue-50 border-gray-200 border-2 rounded-md"
      />
    <select
      className="block w-1/6 rounded-md border-0 py-1.5 font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Day-</option>
      <option>Value</option>
      <option>Value</option>
    </select>
    <select
      className="block w-1/6 rounded-md border-0 py-1.5 font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Day+</option>
      <option>Value</option>
      <option>Value</option>
    </select>
    <select
      className="block w-1/3 rounded-md border-0 py-1.5 font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>Anytime </option>
      <option>Value</option>
      <option>Value</option>
    </select>
    <p className='text-xl font-bold text-gray-600'>+</p>
    <select
      className="block w-1/5 rounded-md border-0 py-1.5 font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>ADT</option>
      <option>Value</option>
      <option>Value</option>
    </select>
    <select
      className="block w-1/5 rounded-md border-0 py-1.5 font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      <option>1</option>
      <option>Value</option>
      <option>Value</option>
    </select>
    <p className='text-xl font-bold text-gray-600'>+</p>
    
  </div>
  )
}

export default Form