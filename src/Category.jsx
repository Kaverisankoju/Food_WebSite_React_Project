import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuLeafyGreen, LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";
import { LuDessert } from "react-icons/lu";
import { GiIceCreamCone } from "react-icons/gi";
 const Categories = [
    {
      id:1,
      name:"All",
      image:<TiThSmall className="w-[60px] h-[60px] text-green-600" />
    },
    {
      id:2,
      name:"breakfast",
      image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:3,
      name:"soups",
      image:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:4,
      name:"pasta",
      image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:5,
      name:"main_course",
      image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:6,
      name:"pizza",
      image:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
      id:7,
      name:"fast_food",
      image:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },

    { 
      id: 8,
      name: "snacks",
      image: <CiFries className="w-[60px] h-[60px] text-green-600"/> 
     },

  { 
    id: 9,
    name: "salads", 
    image: <LuSalad className="w-[60px] h-[60px] text-green-600"/> 
  },
  { 
    id: 10, 
    name: "dessert", 
    image: <GiIceCreamCone className="w-[60px] h-[60px] text-green-600"/> 
  }
]
export default Categories