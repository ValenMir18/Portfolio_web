export default function Search() {
  return (
    <div>
      <form className="flex items-center max-w-sm mx-3">
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 pl-0 mb-2 border-b  text-sm focus:outline-none block w-full ps-10 p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white "
            placeholder="Search by name..."
          />
        </div>
        
      </form>
    </div>
  );
}
