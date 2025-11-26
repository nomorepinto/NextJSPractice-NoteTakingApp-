import NoteCheckBox from "./NoteCheckBox";

function NoteBullet({note} : {note: string}){
    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-sm my-4 p-4">
        <div className="grid grid-cols-[auto_1fr] items-start gap-4"> 
        <NoteCheckBox />
        <div className="min-w-0">
            <h2 className="text-2xl font-bold break-words">
                {note}
            </h2>
        </div>
        </div>
    </div>
    ) 
}
export default NoteBullet;