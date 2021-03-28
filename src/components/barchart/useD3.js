import{ useRef,useEffect} from 'react'
import * as d3 from 'd3'
export const UseD3 = (renderChar , dep)=>{
const ref = useRef();
useEffect(()=>{
    renderChar(d3.select(ref.current));
    return ()=> {};
},
dep
)
return ref
}