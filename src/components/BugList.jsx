import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadBugs,resolveBug,getUnresolvedBugs } from '../store/bugs';

const  BugList=(props)=> {

  const dispatch=  useDispatch();
 const bugs= useSelector(getUnresolvedBugs);
  useEffect(()=>{
      dispatch(loadBugs())
  },[])
  const handleClick=(e,id)=>{
      e.preventDefault();
      dispatch(resolveBug(id))
  }
     return (
        <ul>
            {bugs.map(bug=><div key={bug.id} style={{flexDirection:'row',flex:1}}><li >{bug.description} <button type="button" onClick={(e)=>handleClick(e,bug.id)}>Resolve</button>
</li>
            
            </div>)}
        </ul>
    );
}

export default BugList;