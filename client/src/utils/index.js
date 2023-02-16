import FileSaver from 'file-saver'
import { surpriseMePrompts } from "../constants";

export function getRamdomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)
    const randomPrompt=surpriseMePrompts[randomIndex];
    
    // for not getting same image

    if(randomPrompt===prompt)
    {
        return getRamdomPrompt(prompt);
    }
    
    return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}






