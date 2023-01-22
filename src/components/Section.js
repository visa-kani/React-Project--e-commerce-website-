import React from "react"
import Section1 from "./Section1"
// import Section1 from "./nva"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from './Section4'
import Section5 from "./Section5"
import Section6 from "./Section6"
import Owldemo1 from './Section7'
import Section8 from './Section8'

function Section(){
    return(
        <div>
            <Section1/>
            {/* <Section1/> */}
            <Section2/>
            <Section3 />
            <Section4/>
            <Section5/>
            <Section6/>
            <Owldemo1/>
            <Section8/>
        </div>
    )
}
export default Section