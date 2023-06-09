function App() {
  return ( 
    <>
      



     



        <div className="border border-solid border-black h-120 w-1/2 m-auto flex justify-between">
      <div className="border border-solid border-black w-1/2 flex flex-col justify-center p-2">
        <form>
          <label className="block mb-2 font-bold">Username:</label>
          <input className="block border border-gray-400 p-2 mb-4" type="text" placeholder="Enter username" />
          <label className="block mb-2 font-bold">Email:</label>
          <input className="block border border-gray-400 p-2 mb-4" type="email" placeholder="Enter email" />
          <label className="block mb-2 font-bold">Password:</label>
          <input className="block border border-gray-400 p-2 mb-4" type="password" placeholder="Enter password" />
          <input type="file" className="
            w-full text-sm
             text-slate-500
              block 
              file:cursor-pointer
              file:mr-4 
              file:py-2
              file:px-4
              file:border-0
              file:font-semibold
              file:text-violet-500
              file:rounded-full
              file:hover:bg-violet-700 file:hover:text-stone-100
              text-purple-500
            "/>
            <br />
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">Submit</button>
          <a href="#" className="text-blue-500 mt-4 ml-5">Forgot password?</a>
        </form>
      </div>
      <div className="bg-[url('./assets/ccc.jpg')] bg-cover bg-center w-1/2 flex"></div>
    </div>



    </>
   );
}

export default App;