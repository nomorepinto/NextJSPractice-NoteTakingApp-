"use client";

import React, {useState} from "react";

function NoteBullet({note} : {note: string}) {

    const baseClass : string = "w-6 h-6 mt-2 mb-2 ml-2 mr-4 border-2 border-zinc-600 rounded-sm hover:bg-amber-300 transition-colors duration-200 ease-in-out";
    const checkedClass : string = "w-6 h-6 mt-2 mb-2 ml-2 mr-4 border-2 border-zinc-600 rounded-sm bg-amber-300";

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    }

    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-sm my-4 p-4">
        <div className="grid grid-cols-[auto_1fr] items-start gap-4"> 
            <button onClick={toggleChecked} className={checked ? checkedClass : baseClass}>
                {checked ? "✓" : ""}
            </button>
            <div className="min-w-0">
                <h2 className={`text-2xl font-bold wrap-break-words ${checked ? "line-through text-gray-500" : ""}`}>
                    {note}
                </h2>
            </div>
        </div>
    </div>
    ) 
}

function NoteBulletAddNew({notes, setNotes} : {notes?: string[], setNotes?: React.Dispatch<React.SetStateAction<string[]>>}) {

    const [newNote, setNewNote] = useState("");

    const handleAddNote = () => {
        if (newNote.trim() !== "" && setNotes) {
            setNotes([...notes!, newNote]);
            setNewNote("");
        }
    }

    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-sm my-4 p-4">
        <div className="grid grid-cols-[auto_1fr] items-start gap-4">
            <div className="min-w-0">
                <input type="text" placeholder="Add new note..." className="w-full text-xl font-bold wrap-break-words outline-none" id = "newNote" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
            </div>
            <div className="min-w-0 flex justify-end">
                <button className="bg-amber-300 rounded-sm px-4 py-2 border-2 border-zinc-600 hover:bg-amber-400 transition-colors duration-200 ease-in-out end-auto" onClick={handleAddNote}>Add Note </button>
            </div>
        </div>
    </div>
    )
}

export default NoteBullet;
export {NoteBulletAddNew};