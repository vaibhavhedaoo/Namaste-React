import React from "react";
const Offline =()=>{
    return (
        <div class="text-center">
        <h1 class="mb-4 text-6xl font-semibold text-red-500">Oops! </h1>        
        <p class="mb-4 text-lg text-gray-600">Looks like you're Offline...Internet Connection Disrupted .</p>
        <div class="animate-bounce">
          <svg class="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <p class="mt-4 text-green-700">Don't worry we will check and connect back you again</p>
      </div>
    
    );
}


export default Offline;