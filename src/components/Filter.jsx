function Filter() {
  return (
    <div className="w-3/4 flex flex-row   justify-between py-2 border-b-2">
      <div className="flex flex-row gap-2 items-center">
        <input
          type="checkbox"
          value=""
          onChange={null}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label className="font-bold">Extra Options</label>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="font-bold">Environment</p>
        <input
          type="radio"
          value=""
          onChange={null}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label className="font-bold">Dummy</label>
        <input
          type="radio"
          value=""
          onChange={null}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label className="font-bold">PDT</label>
      </div>
      <button className="btn-primary">Search</button>
    </div>
  );
}

export default Filter;
