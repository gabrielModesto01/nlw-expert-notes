import  LogoNLW  from './assets/logo-nlw-expert.svg'
import NewNoteCard from './components/new-note-card'
import NoteCard from './components/note-card'


const note = {
  date: new Date(),
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque distinctio officiis molestias vitae temporibus, corporis facere atque accusamus reprehenderit aliquid, esse veniam dolores repellat. Veritatis consequatur aliquam deleniti maxime?'
}
export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={LogoNLW} alt="NLW Expert" />
      
      <form className='w-full '>
        <input 
          type="text" 
          placeholder='Busque as suas notas...'
          className='w-full bg-transparent text-3xl fomn tracking-tight outline-none placeholder: text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
        
      </div>
    </div>
  )
}

