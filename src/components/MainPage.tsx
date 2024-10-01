import React from 'react'

export default function MainPage() {

  function increment()
  {
    let a= document.getElementById('rs1');
    
  
    
  }

  function decrement()
  {

  }

  return (
    <div>
      <div className='w-full h-screen'>
        <div id='nbar' className='flex flex-col justify-around bg-gray-100 w-full h-40 py-4 left-8 fixed'>
            <div className='flex flex-row justify-around'>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Folk</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>DJ's</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Singers</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Set</button>
            </div>

            <div className='flex flex-row justify-around'>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Band</button>

              <div className='flex flex-row items-center w-full max-w-[510px] border-2 border-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input className='border-l-2 border-blue-500 w-full h-full outline-none px-4' type="search" placeholder="Search by author"/>
              </div>

              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Profile</button>
            </div>
        </div>

        <div id='main' className='flex flex-row w-full h-full'>
            <div id='fnav' className='w-full h-full max-w-32 bg-green-100 fixed'></div>

            <div id='content' className='flex flex-col gap-4 ml-40 w-full mt-44'>


              <div id='singers' className='flex flex-col w-full gap-4'>

                <h1 className='font-bold text-2xl'>Singers</h1>

                <div id='cursforsinger' className='flex flex-row items-center justify-between mr-8 flex-wrap gap-8' >

                  <div id='prod1' className='flex flex-row border-2 border-black'>
                    <div>
                      <img className='w-64 h-64' src="https://t4.ftcdn.net/jpg/02/54/28/89/240_F_254288948_hy4c6gqgNKFDSwEJaztPGT72UvAMEejm.jpg" alt="" />
                    </div>
                    <div className='w-80 flex flex-col items-center justify-around'>
                      <div className='flex flex-col items-center justify-center'>
                        <pre>
                          <p className=''> <span className='font-semibold'>Name</span>        : <span>product1pwnfjbdsvbdfv</span> </p>
                          <p className=''> <span className='font-semibold'>Proffesion</span>  : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Gender</span>      : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Status</span>      : <span>None</span> </p>
                          <p className=''> <span className='font-semibold'>Ratting</span>     : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Price</span>       : <span>Rs <span id='rs1'>1000</span></span></p>
                          <p className=''> <span className='font-semibold'>No of Days</span>  : <span><button onClick={increment}>+</button> <span>1</span> <button onClick={decrement}>-</button></span> </p>
                        </pre>
                      </div>
                      
                      <button className='hover:bg-red-500 border-2 border-red-500 hover:border-white hover:text-white px-12 rounded-md py-2'>Book</button>

                    </div>
                  </div>

                  <div id='prod2' className='flex flex-row border-2 border-black'>
                    <div>
                      <img className='w-64 h-64' src="https://t4.ftcdn.net/jpg/02/54/28/89/240_F_254288948_hy4c6gqgNKFDSwEJaztPGT72UvAMEejm.jpg" alt="" />
                    </div>
                    <div className='w-80 flex flex-col items-center justify-around'>
                      <div className=''>
                        <pre>
                          <p className=''> <span className='font-semibold'>Name</span>        : <span>product1pwnfjbdsvbdfv</span> </p>
                          <p className=''> <span className='font-semibold'>Proffesion</span>  : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Gender</span>      : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Status</span>      : <span>None</span> </p>
                          <p className=''> <span className='font-semibold'>Ratting</span>     : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Price</span>       : <span>Rs <span>1000</span></span></p>
                          <p className=''> <span className='font-semibold'>No of Days</span>  : <span><button>+</button> 1 <button>-</button></span> </p>
                        </pre>
                      </div>
                      
                      <button className='hover:bg-red-500 border-2 border-red-500 hover:border-white hover:text-white px-12 rounded-md py-2'>Book</button>

                    </div>
                  </div>

                  <div id='prod3' className='flex flex-row border-2 border-black'>
                    <div>
                      <img className='w-64 h-64' src="https://t4.ftcdn.net/jpg/02/54/28/89/240_F_254288948_hy4c6gqgNKFDSwEJaztPGT72UvAMEejm.jpg" alt="" />
                    </div>
                    <div className='w-80 flex flex-col items-center justify-around'>
                      <div className=''>
                        <pre>
                          <p className=''> <span className='font-semibold'>Name</span>        : <span>product1pwnfjbdsvbdfv</span> </p>
                          <p className=''> <span className='font-semibold'>Proffesion</span>  : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Gender</span>      : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Status</span>      : <span>None</span> </p>
                          <p className=''> <span className='font-semibold'>Ratting</span>     : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Price</span>       : <span>Rs <span>1000</span></span></p>
                          <p className=''> <span className='font-semibold'>No of Days</span>  : <span><button>+</button> 1 <button>-</button></span> </p>
                        </pre>
                      </div>
                      
                      <button className='hover:bg-red-500 border-2 border-red-500 hover:border-white hover:text-white px-12 rounded-md py-2'>Book</button>

                    </div>
                  </div>

                  <div id='prod3' className='flex flex-row border-2 border-black'>
                    <div>
                      <img className='w-64 h-64' src="https://t4.ftcdn.net/jpg/02/54/28/89/240_F_254288948_hy4c6gqgNKFDSwEJaztPGT72UvAMEejm.jpg" alt="" />
                    </div>
                    <div className='w-80 flex flex-col items-center justify-around'>
                      <div className=''>
                        <pre>
                          <p className=''> <span className='font-semibold'>Name</span>        : <span>product1pwnfjbdsvbdfv</span> </p>
                          <p className=''> <span className='font-semibold'>Proffesion</span>  : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Gender</span>      : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Status</span>      : <span>None</span> </p>
                          <p className=''> <span className='font-semibold'>Ratting</span>     : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Price</span>       : <span>Rs <span>1000</span></span></p>
                          <p className=''> <span className='font-semibold'>No of Days</span>  : <span><button>+</button> 1 <button>-</button></span> </p>
                        </pre>
                      </div>
                      
                      <button className='hover:bg-red-500 border-2 border-red-500 hover:border-white hover:text-white px-12 rounded-md py-2'>Book</button>

                    </div>
                  </div>

                  <div id='prod3' className='flex flex-row border-2 border-black'>
                    <div>
                      <img className='w-64 h-64' src="https://t4.ftcdn.net/jpg/02/54/28/89/240_F_254288948_hy4c6gqgNKFDSwEJaztPGT72UvAMEejm.jpg" alt="" />
                    </div>
                    <div className='w-80 flex flex-col items-center justify-around'>
                      <div className=''>
                        <pre>
                          <p className=''> <span className='font-semibold'>Name</span>        : <span>product1pwnfjbdsvbdfv</span> </p>
                          <p className=''> <span className='font-semibold'>Proffesion</span>  : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Gender</span>      : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Status</span>      : <span>None</span> </p>
                          <p className=''> <span className='font-semibold'>Ratting</span>     : <span>product1</span> </p>
                          <p className=''> <span className='font-semibold'>Price</span>       : <span>Rs <span>1000</span></span></p>
                          <p className=''> <span className='font-semibold'>No of Days</span>  : <span><button>+</button> 1 <button>-</button></span> </p>
                        </pre>
                      </div>
                      
                      <button className='hover:bg-red-500 border-2 border-red-500 hover:border-white hover:text-white px-12 rounded-md py-2'>Book</button>

                    </div>
                  </div>


                </div>

              </div>
              
            </div>

        </div>
      </div>
    </div>
  )
}
