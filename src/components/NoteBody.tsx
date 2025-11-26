import NoteBullet from "./NoteBullet";

let notes : string[] = ["example1", "example2", "example3"];

function NoteBody(){
    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-lg my-12 shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">TaskList</h2>
        {notes.map((note) => (
            <NoteBullet key={note} note={note} />
        ))}
    </div>
    ) 
}
export default NoteBody;