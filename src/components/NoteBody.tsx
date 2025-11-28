"use client";

import NoteBullet, { NoteBulletAddNew } from "./NoteBullet";
import React, { useState } from "react";


function NoteBody(){

    const [notes, setNotes] = useState<string[]>([]);

    return(
    <div className="container mx-auto border-2 border-zinc-400 rounded-lg my-12 shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">TaskList</h2>
        {notes.map((note) => (
            <NoteBullet key={note} note={note} />
        ))}
        <NoteBulletAddNew notes={notes} setNotes={setNotes} />
    </div>
    ) 
}
export default NoteBody;