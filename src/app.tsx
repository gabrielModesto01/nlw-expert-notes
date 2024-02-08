import { ChangeEvent, useState } from 'react'
import  LogoNLW  from './assets/logo-nlw-expert.svg'
import NewNoteCard from './components/new-note-card'
import NoteCard from './components/note-card'

 interface Note {
  id: string,
  date: Date,
  content: string
 }
export function App() {

  const [search, setSearch ] = useState('')

  const [ notes, setNotes ] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes')

    if(noteOnStorage) {
      return JSON.parse(noteOnStorage)
    }
    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    
    const notesArry = [newNote, ...notes]

    setNotes(notesArry)

    localStorage.setItem('notes', JSON.stringify(notesArry))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
    : notes

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={LogoNLW} alt="NLW Expert" />
      
      <form className='w-full '>
        <input 
          type="text" 
          placeholder='Busque as suas notas...'
          className='w-full bg-transparent text-3xl fomn tracking-tight outline-none placeholder: text-slate-500'
          onChange={handleSearch}
        />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard onNoteCreated={onNoteCreated}/>
        
        
        {filteredNotes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
        
      </div>
    </div>
  )
}

