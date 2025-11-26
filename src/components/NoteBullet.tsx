import NoteCheckBox from "./NoteCheckBox";

function NoteBullet({note} : {note: string}){
    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-sm mx-2 my-4 shadow-2xl p-4">
        <NoteCheckBox /><h2 className="text-2xl font-bold mb-4">{note}</h2>
    </div>
    ) 
}
export default NoteBullet;