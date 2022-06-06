import React from 'react';
import { Photo } from '../../Interfaces/Photo';
import { en } from '../../Utils/Dictionary';
import './DropDown.css';
interface Props{
    data:Photo[];
    handleChange:(list:Photo[]) => void;
}
const DropDown:React.FC<Props> = ({data,handleChange})=>{

    const filter = (e:React.ChangeEvent<HTMLSelectElement>):void=>{
        //since we want to display the only the item in a specific album, 
        //the filter method will return a new list with the relevant items,
        //so the state in the parent component could be updated with the correct items
        //if the user selects the placeholder item, the items associated with albumId 1 
        //will be displayed
        const input = Number(e.target.value)
        if(!isNaN(input)) handleChange(data.filter(i=>i.albumId === input))
        else handleChange(data.filter(i=>i.albumId === 1))
    }
    const renderOptions =()=> {
        //since we get all the photos, we extract only the distinct values of the albumIds
        const uniqueAlbumIds:number[] = Array.from(new Set(data.map(i=>i.albumId)));
        return uniqueAlbumIds.map(item=>{
            return( 
            <option 
                key={item}
                value={item}
                >
                {item}
            </option>
            );

         });
    }

    return(
        <select className='select' onChange={filter} defaultValue={0}>
            <option>{en.placeHolders.dropDown}</option>
            {renderOptions()}
        </select>
    )
}


export default React.memo(DropDown);