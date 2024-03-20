import React from 'react'

const Header2 = () => {
    const List = [
        {
          name: "Banglore",
        },
        {
          name: "Culcutta",
        },
        {
          name: "Mumbai",
        },
        {
          name: "Delhi",
        },
        {
          name: "Hyderabad",
        },
      ];
  return (
   <>
    <div className="flex px-10 py-3 bg-gray-300 justify-between">
    {
        List.map((item,key)=>{
            return(
                <>
                    <h1 key={item.name}>{item.name}</h1>
                </>
            )
        })
    }
       
    </div>
   </>
  )
}

export default Header2